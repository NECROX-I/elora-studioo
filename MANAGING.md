# Managing the ELORA Studio site

Everything you normally change lives in four files. You never need to touch the components.

| What | File |
|---|---|
| Projects (portfolio) | `src/data/works.js` |
| Client feedback | `src/data/feedback.js` + `src/config/site.js` (`SHOW_FEEDBACK`) |
| Contact details, footer links | `src/config/site.js` |
| Project images | `public/projects/` |

---

## 1. Add a project

1. Make a folder named after the project: `public/projects/my-project/`
2. Put the images in it:
   - `cover.webp` — homepage card image, about 1600×1000
   - `01.webp`, `02.webp`, … — gallery images, any size (they are never cropped)
   - `.webp` is best, under 300 KB each. `.png` and `.jpg` also work.
3. Open `src/data/works.js`, copy the template from the top comment into the `WORKS` array, remove the `//` marks and fill it with **real** details. Paths never include `public`:

```js
export const WORKS = [
  {
    id: 1,
    slug: "my-project",              // page URL: /work/my-project
    kind: "personal",                // "personal" or "client"
    title: "My Project",
    category: "Website Development",
    type: "Personal Project",        // "Client Project" for client work
    shortDescription: "One or two sentences.",
    overview: "A short paragraph about what you built.",
    technologies: ["React", "Vite"],
    features: ["A real feature", "Another real feature"],
    image: "/projects/my-project/cover.webp",
    screenshots: ["/projects/my-project/01.webp", "/projects/my-project/02.webp"],
  },
];
```

Add more projects as more objects in the same array, each with a new `id` and a new `slug`.

While `WORKS` is empty (`[]`), the Work section and the "Work" menu link are hidden automatically. They appear as soon as you add the first project.

**Preview before you have images:** use `"/projects/placeholder.svg"` for `image` and `screenshots`, check the layout, then swap in the real files.

## 2. Edit, hide or remove a project

- **Edit:** change its text or image paths in `works.js`.
- **Hide temporarily:** put `//` in front of every line of that project's block. Select the block and press `Ctrl + /` in VS Code.
- **Remove:** delete the block. Its images can stay or go.
- **Rename a URL:** change `slug`. The old URL will then show "Project not found".

## 3. Client projects vs personal projects

`kind` decides the group on the homepage:

- `kind: "personal"` → **Personal Projects**, `type: "Personal Project"`
- `kind: "client"` → **Client Projects**, `type: "Client Project"`

A group with no projects is not shown. Only add a client project for real client work, and only name or show a client if they agreed to it.

## 4. Add client feedback

1. In `src/data/feedback.js` add real testimonials, in the client's own words and with their permission. Do not include `sample: true`:

```js
export const FEEDBACK = [
  { quote: "Their real words.", name: "Client Name", role: "Company · Website Development" },
];
```

2. In `src/config/site.js` change `SHOW_FEEDBACK = false` to `SHOW_FEEDBACK = true`.

The Feedback section and its menu link then appear. Keep it `false` until you have real entries.

## 5. Change contact details, social links, reply time

All in `src/config/site.js`:

- `email`, `location`, `availability`: shown in Contact and in the footer.
- `replyTime`: empty by default, so nothing is shown. Add something like `"Within 1 business day"` only if you can keep that promise. It then appears in the Contact section.
- `social`: empty by default, so nothing is shown. Add real profiles only:

```js
social: [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/your-page" },
  { label: "Instagram", url: "https://www.instagram.com/your-handle" },
],
```

They then appear in the footer.

The form's destination is `FORM_ENDPOINT` in the same file. The privacy line under the form ("We only use your details to reply to your enquiry") is in `src/components/Contact.jsx`. Keep it true for how you actually handle enquiries.

## 6. Run and check the site

```bash
npm run dev       # live preview while you edit, usually http://localhost:5173
npm run build     # checks the site compiles. Run before every deploy.
npm run preview   # opens the built site, closest to what visitors see
```

Quick check after any change: open a project page, refresh it, press Back, and look at the homepage at phone width (browser DevTools → device toolbar).

## 7. Deploy and update

You deploy one site only. Projects are pages inside it (`/work/<slug>`), so there is nothing else to host.

1. `npm run build` must finish without errors.
2. Commit and push to the branch your host deploys (usually `main`):
   ```bash
   git add .
   git commit -m "Add project"
   git push
   ```
3. Wait for the host to finish, then open the live site and test a project URL directly.

**Refreshing a project page gives a 404?** The host needs the "send everything to index.html" rule:

- Vercel: `vercel.json` (already in the project root).
- Netlify: `public/_redirects` (already included).

Both files are included, so you don't need to do anything unless you move to another host. A different host needs the same rule configured in its own way.

## 8. Fixing common problems

| Problem | Fix |
|---|---|
| Image shows broken | The path must start with `/projects/`, not `public/projects/`. Capital letters and the file extension must match exactly. |
| Project doesn't appear | Check it is inside the `WORKS` array, has no `//` in front, and has a `kind` of `"personal"` or `"client"`. |
| "Work" is missing from the menu | `WORKS` is empty. It appears once there is a project. |
| Project page says "Project not found" | The URL doesn't match a `slug` in `works.js`. |
| Old image still shows after replacing it | Hard refresh (`Ctrl + Shift + R`). The browser cached it. |
| Wrong or missing preview when sharing the link | Previews use `og:image` in `index.html`, which points to `https://elora-studioo.vercel.app/banner.webp`. If you move to a custom domain, change that address to the new one. Some apps (WhatsApp, LinkedIn) keep an old preview for a while. |
| Blank white page after an edit | Open the browser console (`F12`). It names the file and line. A missing comma or bracket in `works.js` is the usual cause. |

## Rules to keep the site credible

- Only real projects, real clients and real testimonials. Never placeholder text on the live site.
- Describe what you built, not results you can't prove.
- Compress screenshots before adding them, so pages stay fast on mobile.
