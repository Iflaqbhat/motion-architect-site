import sunrise from "@/assets/project-sunrise.jpg";
import utsav from "@/assets/project-utsav.jpg";
import meadows from "@/assets/project-meadows.jpg";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const STATS = [
  { value: "20+", label: "Years of legacy" },
  { value: "25+", label: "Projects delivered" },
  { value: "10K+", label: "Happy families" },
  { value: "2.5 Mn", label: "Sq.ft. delivered" },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  price: string;
  status: "Ongoing" | "New Launch" | "Completed";
  image: string;
  blurb: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "yuva-sunrise",
    name: "Yuva Sunrise",
    location: "Attibele, Bangalore",
    type: "1, 2, 2.5 & 3 BHK Residences",
    price: "₹54 L* onwards",
    status: "New Launch",
    image: sunrise,
    blurb:
      "A RERA-approved landmark of 320 homes wrapped around a two-acre central green, minutes from Electronic City.",
  },
  {
    slug: "yuva-utsav",
    name: "Yuva Utsav",
    location: "Electronic City Phase 2",
    type: "Grade-A Commercial Spaces",
    price: "₹45 L* onwards",
    status: "Ongoing",
    image: utsav,
    blurb:
      "Column-free floor plates, double-height lobbies and a facade engineered for daylight without the heat gain.",
  },
  {
    slug: "yuva-blue-meadows",
    name: "Yuva Blue Meadows",
    location: "Hosur Road, Bangalore",
    type: "2, 2.5 & 3 BHK Apartments",
    price: "₹62 L* onwards",
    status: "Ongoing",
    image: meadows,
    blurb:
      "Low-density towers set in mature landscaping, with rainwater harvesting and solar-assisted common services.",
  },
];

export const CAPABILITIES = [
  {
    title: "Residential",
    copy: "Apartments and gated communities designed around daylight, cross-ventilation and long-term liveability.",
  },
  {
    title: "Commercial",
    copy: "Offices and retail built to Grade-A specification, delivered on schedule with transparent cost reporting.",
  },
  {
    title: "Design & Build",
    copy: "In-house architecture, structural and MEP coordination so the drawing and the building actually agree.",
  },
  {
    title: "Project Management",
    copy: "Owner-side control of programme, procurement and quality from groundbreaking to handover.",
  },
];

export const AMENITIES = [
  "Clubhouse",
  "Swimming Pool",
  "Gymnasium",
  "Kids Play Area",
  "Landscaped Gardens",
  "24/7 Security",
  "Multipurpose Hall",
  "Power Backup",
];
