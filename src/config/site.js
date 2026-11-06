export const SITE = {
  name: "ELORA Studio",
  tagline: "Design. Create. Build.",
  email: "contact.elorastudio@gmail.com",
  location: "Kolkata, West Bengal, India",
  availability: "Remote projects, by email",
  mapQuery: "Kolkata, India",
};
export const FORM_ENDPOINT = `https://formspree.io/f/mpppbkvn`;
// Set to true only after src/data/feedback.js contains real client testimonials.
export const SHOW_FEEDBACK = false;
export const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  ...(SHOW_FEEDBACK ? [{ id: "feedback", label: "Feedback" }] : []),
];
export const SECTION_IDS = ["home", ...NAV.map((n) => n.id), "contact"];
