# Shreshtha Dentistry — Website

A Next.js 14 site for **Shreshtha Dentistry** (T. Nagar, Chennai) with an in-browser content editor for non-technical users (Decap CMS at `/admin`).

The visual design comes from the Claude Design prototype (soft pastel + editorial minimal). All copy, prices, doctors, services, testimonials, FAQ, gallery, and journal posts are stored as content files — edit them and rebuild.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

Node 18+ recommended (Node 22 verified).

---

## Editing content (the easy way)

The site has a **visual content editor** at `/admin` that edits files in the `content/` directory.

### Local editing (no auth, edits the local repo)

In one terminal:

```bash
npm run dev
```

In a second terminal:

```bash
npx decap-server
```

Then open **http://localhost:3000/admin/** — log in with anything (no password), edit any content, and click **Publish**. Changes are written straight to the matching files in `content/`. Re-run the build to deploy.

### Production editing (Netlify Identity)

1. Deploy the site to Netlify (or any static host).
2. On Netlify, enable **Identity** + **Git Gateway**.
3. In `public/admin/config.yml`, comment out `local_backend: true`. The `backend: git-gateway` block is already configured.
4. Invite the dentist (or whoever edits) as a Netlify Identity user. They visit `https://yoursite.com/admin/`, log in, and edit. Decap CMS commits changes to `main` and Netlify rebuilds.

Other backends (GitHub, GitLab, Bitbucket) are documented at https://decapcms.org/docs/backends-overview/.

---

## Editing content (the manual way)

Every editable thing is a file in `content/` — edit with any text editor and rebuild.

| File / folder | What it controls |
| --- | --- |
| `content/site.json` | Brand name, contact info, hours, social links, SEO, theme palette/density/hero variant |
| `content/about.md` | About page hero, mission, vision, "why choose us" cards |
| `content/doctors.json` | Doctor cards (name, credentials, bio, highlights, portrait) |
| `content/services.json` | Services list (id, name, category, price, duration, summary, benefits, process, icon) |
| `content/services/*.md` | Long-form service write-ups (rendered on each `/services/<id>` page) |
| `content/testimonials.json` | Patient testimonials |
| `content/faqs.json` | FAQ Q&A |
| `content/gallery.json` | Gallery items |
| `content/blog/*.md` | Journal posts (one file per post) |
| `public/images/uploads/` | Uploaded images (auto-managed by Decap) |

### Theme switching

`content/site.json → theme` controls global look without touching CSS:

- `palette`: `default` (sage + peach), `navy-gold`, `warm-clay`, `lilac-mint`
- `density`: `airy` or `compact`
- `heroVariant`: `editorial`, `split`, or `centered` (home page hero layout)

### Adding a new service

1. Add an entry to `content/services.json` (give it a unique `id`).
2. Optionally add `content/services/<filename>.md` for long-form content and reference it via `contentFile`.
3. The page `/services/<id>` is generated automatically on the next build.

### Adding a new blog post

1. Create `content/blog/my-post.md` with frontmatter (see existing posts for the shape).
2. Rebuild — the page `/blog/my-post` will exist and the post appears on `/blog`.

---

## Project layout

```
app/                  Next.js App Router pages
  page.tsx            Home
  about/              About + doctors
  services/           Services overview + [slug] detail pages
  kids/               Kids dentistry
  gallery/            Filterable gallery
  blog/               Journal index + [slug] detail
  contact/            Contact + FAQ
  reviews/            Testimonials grid
  layout.tsx          Root layout, fonts, theme
  styles.css          All styling (design tokens + components)
components/           Shared UI (Nav, Footer, BookingModal, etc.)
lib/
  data.ts             Client-safe content (JSON imports + helpers)
  content.ts          Server-only loaders (markdown, file IO)
content/              All editable copy + structured data
public/admin/         Decap CMS shell + config
```

---

## What's intentionally a placeholder

These need real assets before launch — labels in the UI tell you what to swap in:

- Doctor portraits (`content/doctors.json → image`)
- Clinic + before/after photography (`content/gallery.json → image`)
- Hero images (`content/services.json → image`, blog post images)
- Real Google Maps embed URL (`content/site.json → contact.mapEmbed`)
- Phone numbers and email (`content/site.json → contact`) — currently `+91 99999 99999`
- Final logo (currently a gradient circle in the brand mark)
- Real blog editorial (current posts have placeholder bodies)

Drop images into the admin's image picker (or into `public/images/uploads/`) and reference them. Until you do, labelled placeholder boxes render in their place.

---

## Stack

- **Next.js 14** (App Router, static-friendly)
- **TypeScript**
- **Decap CMS** for content authoring (free, open source, git-based)
- **gray-matter** + **remark** for markdown rendering
- **Fraunces** (display) + **Inter** (sans) via Google Fonts

No CSS framework — the design system is in `app/styles.css` using CSS custom properties.

---

## Notes

- The booking form is wired up as a multi-step modal accessible from anywhere. It currently shows a confirmation but doesn't yet POST anywhere — wire it to your booking provider, email, or WhatsApp Business API when ready.
- The "Call" button uses `tel:` and the WhatsApp FAB uses `wa.me/<number>`. Both come from `content/site.json`.
- Site has 16 service detail pages auto-generated from `services.json` + the matching markdown in `content/services/`.
