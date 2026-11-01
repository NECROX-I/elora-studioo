# ELORA Studio — website
React + Vite + Lucide. `npm install` → `npm run dev` → `npm run build` (output in `dist/`, deploy to Netlify/Vercel).

## Managing content (no component edits needed)
| Change | File |
|---|---|
| Email, location, form endpoint, nav links | `src/config/site.js` |
| Services | `src/data/services.js` |
| Portfolio / experience works | `src/data/works.js` (`placeholder:false` + `href` for real projects) |
| Client feedback | `src/data/feedback.js` (remove `sample:true` for real quotes) |
| Why us, comparison, process | `src/data/why.js`, `comparison.js`, `process.js` |
| Colours / fonts | CSS variables at top of `src/styles/index.css` |
| Images | `public/` |

Contact form uses FormSubmit: the first submission sends a one-time activation email to the studio address.
# elora-studioo
