export const SITE = {
  name: "ELORA Studio",
  tagline: "Design. Create. Build.",
  email: "contact.elorastudio@gmail.com",
  location: "Kolkata, West Bengal, India",
  availability: "Remote projects, by email",
  mapQuery: "Kolkata,West Bengal,India",
};
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`;
export const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "feedback", label: "Feedback" },
];
export const SECTION_IDS = ["home", ...NAV.map((n) => n.id), "contact"];
