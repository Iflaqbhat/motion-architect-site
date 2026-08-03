import sunrise from "@/assets/project-sunrise.jpg";
import utsav from "@/assets/project-utsav.jpg";
import sunshine from "@/assets/project-sunshine.jpg";
import clubhouse from "@/assets/clubhouse.jpg";
import interior from "@/assets/interior.jpg";
import pool from "@/assets/amenity-pool.jpg";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/amenities", label: "Amenities" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  phones: ["+91 82 82 82 3395", "+91 82 82 82 3396"],
  emails: ["enquiry@yuvastructures.com", "mahendra@yuvastructures.com"],
  address:
    "115, 2nd Floor, Sankirana, Hosur Road, near Murali TVS Showroom, Chandapura, Bengaluru, Karnataka 560099",
  hours: ["Mon – Sat, 9:30am – 6:30pm", "Sunday site visits by appointment"],
  mapQuery: "Sankirana+Hosur+Road+Chandapura+Bengaluru+560099",
};

export const STATS = [
  { value: "15+", label: "Years of experience" },
  { value: "10+", label: "Completed projects" },
  { value: "03", label: "Ongoing projects" },
  { value: "100%", label: "Success rate" },
];

export type Spec = { label: string; value: string };
export type FloorPlanRow = { flat: string; area: string; facing: string; bhk: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  type: string;
  units: string;
  price: string;
  status: "Ongoing" | "New Launch" | "Completed";
  image: string;
  gallery: string[];
  blurb: string;
  about: string[];
  highlights: string[];
  specs: Spec[];
  floorPlan: FloorPlanRow[];
  connectivity: string[];
  landmarks: string[];
};

const COMMON_SPECS: Spec[] = [
  { label: "Structure", value: "RCC frame structure designed to Zone II regulations." },
  { label: "Walls", value: "Solid block walls for both internal and external faces." },
  {
    label: "Water supply",
    value: "Borewell, underground sump and overhead Sintex tanks.",
  },
  { label: "Kitchen", value: "30mm thick granite countertop with stainless steel sink." },
  {
    label: "Plumbing",
    value: "Concealed ASTRAL PVC pipes with CP end fittings.",
  },
  {
    label: "Plastering",
    value: "Smooth lime-rendered finish inside; sponge finish with cement paint outside.",
  },
  {
    label: "Sanitary fittings",
    value: "White Johnson sanitaryware with Johnson Continental CP fittings and taps.",
  },
  {
    label: "Main entrance",
    value: "Grand entrance lobby decorated to the architect's design.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "yuva-sunrise",
    name: "Yuva Sunrise",
    tagline: "Luxury living, seamless connectivity",
    location: "Manchenahalli Village, Attibele Industrial Area, Hosur Main Road",
    type: "1, 2 & 3 BHK Residences",
    units: "68 flats",
    price: "On request",
    status: "Ongoing",
    image: sunrise,
    gallery: [sunrise, clubhouse, pool],
    blurb:
      "An affordable luxury address of 68 homes in open green space, minutes from Electronic City and Hosur National Highway.",
    about: [
      "Yuva Sunrise is an amazing and affordable project that stands with trend and style. The well-designed development offers spacious 1, 2 and 3 BHK units surrounded by nature.",
      "Located near Electronic City, close to Chandapura and the Hosur National Highway, the project comprises 68 affordable flats set within open green space.",
      "Residents enjoy proximity to established civic and social infrastructure — top educational institutions, healthcare, major MNC and IT campuses, and upcoming metro stations near Chandapura.",
    ],
    highlights: [
      "68 homes in open green space",
      "1, 2 & 3 BHK configurations",
      "500m from Hosur Main Road",
      "Grand clubhouse and swimming pool",
    ],
    specs: COMMON_SPECS,
    floorPlan: [
      { flat: "1", area: "1672 sft", facing: "East", bhk: "3 BHK" },
      { flat: "2", area: "1280 sft", facing: "East", bhk: "2 BHK" },
      { flat: "3", area: "778 sft", facing: "West", bhk: "1 BHK" },
      { flat: "4", area: "1658 sft", facing: "East", bhk: "3 BHK" },
      { flat: "5", area: "1243 sft", facing: "East", bhk: "2 BHK" },
      { flat: "6", area: "1170 sft", facing: "North", bhk: "2 BHK" },
      { flat: "7", area: "1196 sft", facing: "North", bhk: "2 BHK" },
      { flat: "8", area: "1246 sft", facing: "North", bhk: "2 BHK" },
      { flat: "9", area: "1133 sft", facing: "West", bhk: "2 BHK" },
      { flat: "10", area: "1091 sft", facing: "East", bhk: "2 BHK" },
      { flat: "11", area: "1095 sft", facing: "North", bhk: "2 BHK" },
      { flat: "12", area: "1255 sft", facing: "East", bhk: "2 BHK" },
      { flat: "17", area: "1414 sft", facing: "East", bhk: "3 BHK" },
    ],
    connectivity: [
      "Hosur Main Road — 500 m",
      "Electronic City — 10 km",
      "Hosur Airport (upcoming) — 18 km",
      "Whitefield — 25 km",
    ],
    landmarks: [
      "Narayana Hrudayalaya",
      "Vimalaya Hospital",
      "Oxford Medical College & Hospital",
      "Alliance University",
    ],
  },
  {
    slug: "yuva-utsav",
    name: "Yuva Utsav",
    tagline: "Premium residences designed for modern living",
    location: "Kammasandra, Electronic City Phase 2, Bengaluru",
    type: "1, 2 & 3 BHK Residences",
    units: "Premium apartments",
    price: "On request",
    status: "Ongoing",
    image: utsav,
    gallery: [utsav, interior, clubhouse],
    blurb:
      "Premium luxury apartments in Electronic City Phase 2, redefining stylish living with contemporary design detail.",
    about: [
      "Yuva Utsav offers premium luxury apartments designed for modern living, with a reliable water supply through borewell, underground sump and overhead Sintex tanks.",
      "Interiors feature smooth lime-rendered plastering, while exterior walls carry a sponge finish in cement paint. Kitchens are styled with 30mm granite countertops and stainless steel sinks.",
      "All plumbing uses trusted ASTRAL pipes and premium CERA sanitary fittings, and the grand entrance lobby with elegant architectural detailing creates a welcoming, upscale ambiance.",
    ],
    highlights: [
      "Heart of Electronic City Phase 2",
      "Clubhouse with table tennis, chess and carrom",
      "100% power backup",
      "Grand entrance lobby",
    ],
    specs: COMMON_SPECS,
    floorPlan: [
      { flat: "1", area: "1438 sft", facing: "East", bhk: "3 BHK" },
      { flat: "2", area: "1449 sft", facing: "North", bhk: "3 BHK" },
      { flat: "3", area: "1088 sft", facing: "North", bhk: "2 BHK" },
      { flat: "4", area: "1147 sft", facing: "North", bhk: "2 BHK" },
      { flat: "5", area: "1417 sft", facing: "North", bhk: "3 BHK" },
      { flat: "6", area: "1271 sft", facing: "East", bhk: "3 BHK" },
      { flat: "7", area: "622 sft", facing: "East", bhk: "1 BHK" },
    ],
    connectivity: [
      "Electronic City Phase 2 — within",
      "Infosys / Wipro campuses — 3 km",
      "NICE Road junction — 6 km",
      "Silk Board — 16 km",
    ],
    landmarks: [
      "Narayana Hrudayalaya",
      "Sri Chaitanya Techno School",
      "D-Mart Electronic City",
      "Neotown Market",
    ],
  },
  {
    slug: "yuva-sunshine",
    name: "Yuva Sunshine",
    tagline: "Where luxury meets affordability",
    location: "Near RTO Office, Chandapura to Anekal Main Road, Bengaluru",
    type: "1.5, 2 & 3 BHK Residences",
    units: "65 flats",
    price: "On request",
    status: "New Launch",
    image: sunshine,
    gallery: [sunshine, pool, interior],
    blurb:
      "65 premium yet affordable homes across open green landscapes on the Chandapura–Anekal main road.",
    about: [
      "Yuva Sunshine is a stylish yet affordable residential project thoughtfully designed to blend comfort with modern living, featuring spacious 1.5, 2 and 3 BHK units nestled amidst lush greenery.",
      "Strategically located near the Chandapura to Anekal main road, the development enjoys excellent connectivity to key parts of Bengaluru.",
      "With just 65 flats spread across open green landscapes, Yuva Sunshine ensures a peaceful environment with all the conveniences of city life, equipped with state-of-the-art amenities.",
    ],
    highlights: [
      "Only 65 low-density homes",
      "1.5, 2 & 3 BHK configurations",
      "Open green landscaped setting",
      "Rainwater harvesting throughout",
    ],
    specs: COMMON_SPECS,
    floorPlan: [
      { flat: "1", area: "1438 sft", facing: "East", bhk: "3 BHK" },
      { flat: "2", area: "1449 sft", facing: "North", bhk: "3 BHK" },
      { flat: "3", area: "1088 sft", facing: "North", bhk: "2 BHK" },
      { flat: "4", area: "1147 sft", facing: "North", bhk: "2 BHK" },
      { flat: "5", area: "1417 sft", facing: "North", bhk: "3 BHK" },
      { flat: "6", area: "1271 sft", facing: "East", bhk: "3 BHK" },
    ],
    connectivity: [
      "Chandapura RTO — 1 km",
      "Chandapura Circle — 2 km",
      "Electronic City — 8 km",
      "Anekal town — 7 km",
    ],
    landmarks: [
      "Anekal Government Hospital",
      "Sarvodaya School",
      "Chandapura Lake",
      "Hosur Road retail belt",
    ],
  },
];

export const CAPABILITIES = [
  {
    title: "Residential",
    copy: "Apartments and gated communities designed around daylight, cross-ventilation and long-term liveability.",
  },
  {
    title: "Commercial",
    copy: "Offices and mixed-use developments built to Grade-A specification and delivered on schedule.",
  },
  {
    title: "Land Development",
    copy: "Identifying and developing high-potential land parcels in key growth corridors around Bengaluru.",
  },
  {
    title: "Villa Projects",
    copy: "Thoughtfully planned low-density villa communities combining location advantage with lasting value.",
  },
];

export type Amenity = { name: string; copy: string };

export const AMENITIES: Amenity[] = [
  { name: "Grand Clubhouse", copy: "Indoor games and lounge areas for fun, fitness and community bonding." },
  { name: "Swimming Pool", copy: "A modern pool designed for relaxation, fitness and family time." },
  { name: "Modern Gymnasium", copy: "Stay fit with state-of-the-art indoor and outdoor fitness equipment." },
  { name: "Multipurpose Hall", copy: "Perfect for celebrations, gatherings and community events." },
  { name: "Kids' Play Area", copy: "Spacious, safe play zones with modern equipment for joyful outdoor play." },
  { name: "Indoor & Outdoor Sports", copy: "Tennis and basketball courts, plus chess, carrom and table tennis." },
  { name: "Rainwater Harvesting", copy: "Recharge systems that reduce dependence on external water supply." },
  { name: "24×7 Security", copy: "Manned security and intercom facility for peace of mind." },
  { name: "100% Power Backup", copy: "Uninterrupted power for a hassle-free lifestyle." },
  { name: "Green Landscape", copy: "Refreshing greenery and shaded pockets surrounding every block." },
  { name: "1 km Walking Track", copy: "A dedicated loop for walking and jogging within the community." },
  { name: "School Bus Lounge", copy: "A sheltered waiting lounge for children at the community gate." },
];

export const WHY_CHOOSE = [
  {
    title: "Quality construction",
    copy: "RCC frame structures, branded fittings and material specifications published before we start.",
  },
  {
    title: "Transparent practice",
    copy: "Clear pricing, documented cost movements and no surprises at registration.",
  },
  {
    title: "On-time delivery",
    copy: "Published programmes and weekly reporting keep handovers on the date we promised.",
  },
  {
    title: "Prime locations",
    copy: "Addresses along Hosur Road, Electronic City and Anekal — Bengaluru's strongest growth corridor.",
  },
  {
    title: "Long-term value",
    copy: "Low-density planning, mature landscaping and buildings designed to age well.",
  },
  {
    title: "Customer first",
    copy: "A team that answers the phone — from first site visit through to possession and beyond.",
  },
];

export const LEADERSHIP = {
  name: "Mr. Mahendra Reddy",
  role: "Managing Director & CEO",
  copy: [
    "Mr. Mahendra Reddy is Managing Director and Chief Executive Officer of Yuva Group, with 15 years of experience in real estate.",
    "Over two decades as an entrepreneur he has firmly established himself as one of the most successful developers in Bangalore, completing around ten projects across the city with more underway.",
    "He has maintained a superior quality standard and a customer-friendly atmosphere in every project, and continues to concentrate on construction quality and customer satisfaction.",
  ],
};

export const TEAM = [
  { name: "Mrs. Anitha Reddy", role: "Managing Director" },
  { name: "J Vijay Kumar", role: "Manager" },
  { name: "Prema Bai R", role: "Telesales Executive" },
  { name: "Sakshi Singh A", role: "Human Resources" },
  { name: "Yashas A", role: "Account Executive" },
  { name: "V Penchalaiah", role: "Project Operations Supervisor" },
  { name: "Naveen", role: "Sales Executive" },
];

export const TESTIMONIALS = [
  {
    quote:
      "The builder was very professional and communicative throughout the entire process. The quality of work was exceptional and exceeded my expectations, and the project was completed within the agreed timeline and budget.",
    name: "Shaik Mehbubbasha",
    company: "Power Smart Pvt Ltd",
  },
  {
    quote:
      "I wanted to thank you and the project team for the build-out of Yuva Lakeview, AECS Layout 'B' Block, Singasandra. The team was reliable, talented, and communicated with the whole project team throughout the course of construction.",
    name: "Adari Arun Kumar",
    company: "Real Estate Developer",
  },
  {
    quote:
      "I am satisfied with the construction work by Yuva builders — very cooperative and dedicated. Everything we asked for was delivered on time. Thanks to Mahendra, you're doing great work.",
    name: "Pradeep Jana",
    company: "Small Finance Bank",
  },
];
