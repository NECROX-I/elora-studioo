# Managing the ELORA Studio site

Everything you normally change lives in four files. You never need to touch the components.

| What | File |
|---|---|
| Projects (portfolio) | `src/data/works.js` |
| Client feedback | `src/data/feedback.js` + `src/config/site.js` (`SHOW_FEEDBACK`) |
| Contact details, footer links | `src/config/site.js` |
| Project images | `public/projects/` |

---

## 1. How the project pages work

Every project uses the same pages. Only the data in `src/data/works.js` differs:

| Click | URL | Shows |
|---|---|---|
| Homepage card → **View Project** | `/work/urban-pulse` | overview, what's included, gallery |
| Any gallery image | `/work/morrow-coffee/3` | that image large, Previous / Next, thumbnails |
| **Next project / Previous project** | `/work/<other-project>` | the next project's page |

In the image viewer: `←` / `→` keys or swipe to browse, `Esc` goes back to the project. Every page has its own URL, so links, refresh and the Back button all work.

## 2. Add or replace a project's images

1. Make a folder named after the project: `public/projects/my-project/`
2. Put the images in it:
   - a card image for the homepage (any shape; posters, logos and packaging are never cropped)
   - the gallery images, `01.webp`, `02.webp`, … in the order you want them shown
   - `.webp` is best, under 300 KB each. `.png` and `.jpg` also work.
3. In `src/data/works.js`, point to them. Paths never include `public`:

```js
{
  id: 6,                              // unique number
  slug: "my-project",                 // URL: /work/my-project
  kind: "personal",                   // "personal" or "client"
  status: "Completed",                // optional label
  title: "My Project",
  category: "Graphic Design & Advertising",
  type: "Personal Project",           // "Client Project" for client work
  shortDescription: "One or two sentences.",
  overview: "A short paragraph or creative brief.",
  features: ["1 poster"],             // optional, shown as "What's included"
  technologies: ["Photoshop"],        // optional, the box is hidden if you leave it out
  image: "/projects/my-project/cover.webp",   // optional
  screenshots: [                              // optional, each gets its own /work/my-project/<n> page
    "/projects/my-project/01.webp",
    "/projects/my-project/02.webp",
  ],
},
```

Required: `id`, `slug`, `kind`, `title`, `category`, `type`, `overview`. Everything else is optional.

- **No `image`:** the homepage card shows the status (for example "Upcoming") instead of a picture.
- **No `screenshots`:** the project page says designs will be added soon, and there are no image pages.

**Upcoming project becomes real:** add its images to `public/projects/<slug>/`, add `image` and `screenshots` to its entry, and change `status`. Nothing else changes.

**The images that ship with the site are placeholders** (`urban-pulse/poster.webp` and `morrow-coffee/cover.webp`, `01.webp`–`05.webp`). Replace each file with your real design **using the same file name**, and nothing in the code needs editing. If your real files have other names or formats (`.png`, `.jpg`), update the paths in `works.js`.

## 3. Edit, hide or remove a project

- **Edit:** change its text or image paths in `works.js`.
- **Hide temporarily:** put `//` in front of every line of that project's block (select it and press `Ctrl + /` in VS Code).
- **Remove:** delete the block. Its images can stay or go.
- **Rename a URL:** change `slug`. The old URL then shows "Project not found".

## 4. Client projects vs personal projects

`kind` decides the group on the homepage:

- `kind: "personal"` → **Personal Projects**, `type: "Personal Project"`
- `kind: "client"` → **Client Projects**, `type: "Client Project"`

A group with no projects is not shown. Only add a client project for real client work, and only name or show a client if they agreed to it.

## 5. Add client feedback

1. In `src/data/feedback.js` add real testimonials, in the client's own words and with their permission. Do not include `sample: true`:

```js
export const FEEDBACK = [
  { quote: "Their real words.", name: "Client Name", role: "Company · Website Development" },
];
```

2. In `src/config/site.js` change `SHOW_FEEDBACK = false` to `SHOW_FEEDBACK = true`.

The Feedback section and its menu link then appear. Keep it `false` until you have real entries.

## 6. Change contact details, social links, reply time

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

## 7. Run and check the site

```bash
npm run dev       # live preview while you edit, usually http://localhost:5173
npm run build     # checks the site compiles. Run before every deploy.
npm run preview   # opens the built site, closest to what visitors see
```

Quick check after any change: open a project page, refresh it, press Back, and look at the homepage at phone width (browser DevTools → device toolbar).

## 8. Deploy and update

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

## 9. Fixing common problems

| Problem | Fix |
|---|---|
| Image shows broken | The path must start with `/projects/`, not `public/projects/`. Capital letters and the file extension must match exactly. |
| Project doesn't appear | Check it is inside the `WORKS` array, has no `//` in front, and has a `kind` of `"personal"` or `"client"`. |
| "Work" is missing from the menu | `WORKS` is empty. It appears once there is a project. |
| Project page says "Project not found" | The URL doesn't match a `slug` in `works.js`. |
| "Image not found" | The number in `/work/<slug>/<n>` is bigger than the number of `screenshots`, or the project has none. |
| The overview still says REPLACE | Write your own creative brief in that project's `overview`. |
| Old image still shows after replacing it | Hard refresh (`Ctrl + Shift + R`). The browser cached it. |
| Wrong or missing preview when sharing the link | Previews use `og:image` in `index.html`, which points to `https://elora-studioo.vercel.app/banner.webp`. If you move to a custom domain, change that address to the new one. Some apps (WhatsApp, LinkedIn) keep an old preview for a while. |
| Blank white page after an edit | Open the browser console (`F12`). It names the file and line. A missing comma or bracket in `works.js` is the usual cause. |

## Rules to keep the site credible

- Only real projects, real clients and real testimonials. Never placeholder text on the live site.
- Describe what you built, not results you can't prove.
- Compress screenshots before adding them, so pages stay fast on mobile.
