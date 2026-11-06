export const WORKS = [
  // {
  //   id: 1,
  //   slug: "project-one", // becomes the URL: /work/project-one
  //   kind: "personal",
  //   placeholder: true, // REPLACE: delete this line (or set false) once the project is real
  //   title: "Project One", // REPLACE
  //   category: "Website Development", // REPLACE with the matching service
  //   type: "Personal Project",
  //   shortDescription:
  //     "REPLACE: one or two sentences about what this project is.", // shown on the homepage
  //   overview:
  //     "REPLACE: a short paragraph about the project, its purpose and what you built.", // shown on the project page
  //   technologies: [
  //     "REPLACE: Technology 1",
  //     "REPLACE: Technology 2",
  //     "REPLACE: Technology 3",
  //   ],
  //   features: [
  //     "REPLACE: Feature 1",
  //     "REPLACE: Feature 2",
  //     "REPLACE: Feature 3",
  //   ],
  //   image: PLACEHOLDER, // REPLACE: cover image, e.g. "/projects/project-one/cover.webp" (16:10, ~1600x1000)
  //   screenshots: [PLACEHOLDER, PLACEHOLDER], // REPLACE: e.g. ["/projects/project-one/01.webp", "/projects/project-one/02.webp"]
  // },
  // {
  //   id: 2,
  //   slug: "project-two",
  //   kind: "personal",
  //   placeholder: true,
  //   title: "Project Two", // REPLACE
  //   category: "Creative Design", // REPLACE
  //   type: "Personal Project",
  //   shortDescription:
  //     "REPLACE: one or two sentences about what this project is.",
  //   overview:
  //     "REPLACE: a short paragraph about the project, its purpose and what you built.",
  //   technologies: ["REPLACE: Tool 1", "REPLACE: Tool 2", "REPLACE: Tool 3"],
  //   features: [
  //     "REPLACE: Feature 1",
  //     "REPLACE: Feature 2",
  //     "REPLACE: Feature 3",
  //   ],
  //   image: PLACEHOLDER, // REPLACE: "/projects/project-two/cover.webp"
  //   screenshots: [PLACEHOLDER, PLACEHOLDER], // REPLACE
  // },
  // {
  //   id: 3,
  //   slug: "project-three",
  //   kind: "personal",
  //   placeholder: true,
  //   title: "Project Three", // REPLACE
  //   category: "Excel Solutions", // REPLACE
  //   type: "Personal Project",
  //   shortDescription:
  //     "REPLACE: one or two sentences about what this project is.",
  //   overview:
  //     "REPLACE: a short paragraph about the project, its purpose and what you built.",
  //   technologies: ["REPLACE: Tool 1", "REPLACE: Tool 2", "REPLACE: Tool 3"],
  //   features: [
  //     "REPLACE: Feature 1",
  //     "REPLACE: Feature 2",
  //     "REPLACE: Feature 3",
  //   ],
  //   image: PLACEHOLDER, // REPLACE: "/projects/project-three/cover.webp"
  //   screenshots: [PLACEHOLDER, PLACEHOLDER], // REPLACE
  // },
];

export const getWork = (slug) => WORKS.find((w) => w.slug === slug);
