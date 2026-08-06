import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Rotating wireframe "skyline" — a light, brand-tinted 3D backdrop.
 * Client-only: mounted behind <ClientOnly> and lazily imported.
 */
export default function Scene3D({ className = "" }: { className?: string }) {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(6.5, 5.2, 8.5);
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ink = new THREE.Color("#1b2740");
    const gold = new THREE.Color("#c78a34");

    // Towers
    const towers: THREE.Mesh[] = [];
    const cols = 5;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < cols; z++) {
        const h = 0.6 + ((x * 7 + z * 13) % 9) * 0.42;
        const geo = new THREE.BoxGeometry(0.72, h, 0.72);
        const isGold = (x + z) % 4 === 0;
        const mat = new THREE.MeshBasicMaterial({
          color: isGold ? gold : ink,
          transparent: true,
          opacity: isGold ? 0.22 : 0.1,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((x - (cols - 1) / 2) * 1.2, h / 2, (z - (cols - 1) / 2) * 1.2);
        group.add(mesh);

        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({
            color: isGold ? gold : ink,
            transparent: true,
            opacity: isGold ? 0.95 : 0.42,
          }),
        );
        edges.position.copy(mesh.position);
        group.add(edges);
        towers.push(mesh);
      }
    }

    const grid = new THREE.GridHelper(12, 12, gold, ink);
    (grid.material as THREE.Material).opacity = 0.18;
    (grid.material as THREE.Material).transparent = true;
    group.add(grid);

    let pointerX = 0;
    let pointerY = 0;
    const onPointer = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let raf = 0;
    let t = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += reduce ? 0 : 0.0038;
      group.rotation.y = t;
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -pointerY * 0.08 + 0.02, 0.05);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 6.5 + pointerX * 1.2, 0.05);
      camera.lookAt(0, 1.2, 0);
      towers.forEach((m, i) => {
        m.scale.y = 1 + Math.sin(t * 2.2 + i) * 0.06;
      });
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      renderer.dispose();
      scene.traverse((o) => {
        const any = o as THREE.Mesh;
        any.geometry?.dispose?.();
        const mat = any.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose?.();
      });
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className={className} aria-hidden />;
}
