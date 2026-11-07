import { WORKS } from "../data/works";

export const SITE = {
  name: "ELORA Studio",
  tagline: "Design. Create. Build.",
  email: "contact.elorastudio@gmail.com",
  location: "Kolkata, West Bengal, India",
  availability: "Remote projects, by email",
  mapQuery: "Kolkata, India",
  // Shown in the Contact section only when not empty. Write a promise you can keep, e.g. "Within 1 business day".
  replyTime: "",
  // Shown in the footer only when not empty. Real profiles only, e.g.
  // { label: "LinkedIn", url: "https://www.linkedin.com/company/your-page" }
  social: [],
};
export const FORM_ENDPOINT = `https://formspree.io/f/mpppbkvn`;
// Set to true only after src/data/feedback.js contains real client testimonials.
export const SHOW_FEEDBACK = false;
// The Work link only appears once src/data/works.js has at least one project.
export const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  WORKS.length > 0 && { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  SHOW_FEEDBACK && { id: "feedback", label: "Feedback" },
].filter(Boolean);
export const SECTION_IDS = ["home", ...NAV.map((n) => n.id), "contact"];
