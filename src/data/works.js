// Single source of truth for the portfolio.
// Every project uses the SAME pages. Only the data below changes:
//   homepage card  ->  /work/<slug>  (project page)  ->  /work/<slug>/<n>  (each image, large)
// While the array is empty, the Work section and its menu link are hidden automatically.
//
// Fields (only the first 7 are required):
//   id, slug, kind, title, category, type, overview   (required)
//   shortDescription  one or two sentences for the homepage card
//   status            optional label, e.g. "Completed" or "Upcoming"
//   features          optional list shown as "What's included"
//   technologies      optional list; the box is hidden if you leave it out
//   image             optional homepage card image (any shape: posters and logos are never cropped).
//                     Leave it out and the card shows the status instead of an image.
//   screenshots       optional list of gallery images. Each one gets its own page /work/<slug>/<n>.
//
// kind: "personal" -> Personal Projects, "client" -> Client Projects (use type "Client Project").
// Images live in public/projects/<slug>/ and are written WITHOUT "public" in the path.
// The images below are PLACEHOLDERS. Replace each file with your real design, keeping the same file name.

export const WORKS = [
  {
    id: 1,
    slug: "urban-pulse",
    kind: "client",
    status: "Completed",
    title: "Urban Pulse",
    category: "Graphic Design & Advertising",
    type: "Personal Project",
    shortDescription: "A fitness advertising poster.",
    overview:
      "A high-energy fitness poster featuring bold typography, dynamic visuals, and an intense, attention-grabbing aesthetic.",
    features: ["1 fitness advertising poster"],
    image: "/projects/urban-pulse/poster.png",
    screenshots: ["/projects/urban-pulse/poster.png"],
  },
  {
    id: 2,
    slug: "morrow-coffee",
    kind: "personal",
    status: "Designs generated",
    title: "Morrow Coffee",
    category: "Digital Marketing & Social Media Marketing",
    type: "Personal Project",
    shortDescription:
      "Five creative Instagram advertisements showcasing a cohesive coffee brand campaign.",
    overview:
      "A collection of five Instagram advertising designs created to build brand awareness, promote products, showcase the menu, connect with coffee lovers, and encourage audience engagement.",
    features: ["5 Instagram advertising designs"],
    image: "/projects/morrow-coffee/cover.webp",
    screenshots: [
      "/projects/morrow-coffee/01.png",
      "/projects/morrow-coffee/02.png",
      "/projects/morrow-coffee/03.png",
      "/projects/morrow-coffee/04.png",
      "/projects/morrow-coffee/05.png",
    ],
  },
  // {
  //   id: 3,
  //   slug: "aurelle-botanics",
  //   kind: "personal",
  //   status: "Upcoming",
  //   title: "AURELLE BOTANICS",
  //   category: "Brand Identity & Packaging Design",
  //   type: "Personal Project",
  //   shortDescription: "A brand identity and packaging design project.",
  //   overview: "A brand identity and packaging design project, planned and in progress.",
  //   features: [
  //     "1 primary logo",
  //     "1 secondary logo or brand symbol",
  //     "1 colour palette and typography system",
  //     "3 product packaging designs",
  //     "1 brand identity presentation",
  //   ],
  // },
  // {
  //   id: 4,
  //   slug: "northstar-logistics",
  //   kind: "personal",
  //   status: "Upcoming",
  //   title: "Northstar Logistics",
  //   category: "Business Process & Operations Design",
  //   type: "Personal Project",
  //   shortDescription: "A business process and operations design project.",
  //   overview: "A business process and operations design project, planned and in progress.",
  //   features: [
  //     "Business workflow diagram",
  //     "Order and delivery process",
  //     "Operations dashboard design",
  //     "Customer service workflow",
  //     "Business process documentation",
  //   ],
  // },
  // {
  //   id: 5,
  //   slug: "solstice-architecture",
  //   kind: "personal",
  //   status: "Upcoming",
  //   title: "SOLSTICE Architecture",
  //   category: "Corporate Design & Company Profile Design",
  //   type: "Personal Project",
  //   shortDescription: "A corporate design and company profile project.",
  //   overview: "A corporate design and company profile project, planned and in progress.",
  //   features: [
  //     "Corporate logo",
  //     "Company profile cover",
  //     "6–8 page company profile",
  //     "Business presentation design",
  //     "Corporate stationery (business card and letterhead)",
  //   ],
  // },
];

export const getWork = (slug) => WORKS.find((w) => w.slug === slug);
