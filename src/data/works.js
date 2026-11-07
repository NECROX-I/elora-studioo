// Single source of truth for the portfolio.
// The homepage cards AND the /work/<slug> pages are both generated from this array.
// While the array is empty, the Work section and its menu link are hidden automatically.
// To add a project: copy the template below INTO the array, remove the "//" marks, and fill in REAL details.
// Never add a project, client, result or testimonial that isn't real.
// Images go in public/projects/<slug>/ and are written WITHOUT "public" in the path.
// To preview the layout before you have real images, use "/projects/placeholder.svg"
// for image and screenshots, then replace it.

export const WORKS = [
  // {
  //   id: 1, // unique number
  //   slug: "my-project", // URL becomes /work/my-project (lowercase, hyphens, no spaces)
  //   kind: "personal", // "personal" = Personal Projects, "client" = Client Projects
  //   title: "My Project",
  //   category: "Website Development", // one of your services
  //   type: "Personal Project", // use "Client Project" when kind is "client"
  //   shortDescription: "One or two sentences.", // shown on the homepage card
  //   overview: "A short paragraph about the project and what you built.", // shown on the project page
  //   technologies: ["React", "Vite"],
  //   features: ["A real feature", "Another real feature"],
  //   image: "/projects/my-project/cover.webp", // homepage card image (16:10, about 1600x1000)
  //   screenshots: [
  //     "/projects/my-project/01.webp",
  //     "/projects/my-project/02.webp",
  //   ],
  // },
];

export const getWork = (slug) => WORKS.find((w) => w.slug === slug);
