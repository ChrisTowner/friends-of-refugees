# Teri Towner — Coquitlam City Council 2026

Campaign website for **Councillor Teri Towner**, seeking re-election in 2026.

Built with **Astro** (fast static site), hosted on **Netlify** (free), edited through a friendly dashboard at **`/admin`** via **Decap CMS**. Forms are handled by **Google Forms** (free, responses land in a Google Sheet).

> **New to all this?** Start with [`SETUP.md`](./SETUP.md) — step-by-step, written for beginners.

## What's in this project

```
Mom Website/
├── README.md                ← you are here
├── SETUP.md                 ← beginner's setup guide (read this first!)
├── EDITING.md               ← how to edit content after launch
├── package.json             ← project dependencies
├── astro.config.mjs         ← build/SEO config
├── netlify.toml             ← Netlify hosting config
├── public/
│   ├── admin/               ← Decap CMS (visit /admin to edit the site)
│   ├── images/              ← drop images here (see images/README.md)
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── data/site.json       ← colors, nav, contact info, form URLs (edit me!)
    ├── content/             ← blog posts, events, endorsements, press, pillars
    ├── layouts/             ← shared page shell
    ├── components/          ← reusable UI pieces
    ├── pages/               ← every URL on the site
    └── styles/global.css    ← site-wide CSS (uses vars from site.json)
```

## The 3 files you'll edit most often

| File | What it controls |
| --- | --- |
| `src/data/site.json` | Candidate name, colors, nav, social links, form embed URLs, financial agent info, Google Analytics ID |
| `src/content/pillars/` | The 3 platform pillars shown on the homepage |
| `src/content/posts/` | News/blog posts |

**In practice, once deployed, you won't edit files directly** — you'll log into `/admin` and use the dashboard. Files only matter for the initial setup or if something unusual needs changing.

## Key features

- ✅ **Edit from a dashboard** (`/admin`) — no coding needed
- ✅ **Mobile-friendly, fast, accessible**
- ✅ **Google Forms** for volunteer, lawn sign, contact, newsletter (responses → Google Sheet)
- ✅ **Google Analytics** ready (drop in your ID)
- ✅ **Google Translate widget** — 10 languages, one click
- ✅ **SEO optimized** — sitemap, Open Graph, local geo tags, JSON-LD
- ✅ **BC municipal donation rules** clearly displayed
- ✅ **Legal authorization notice** in the footer on every page
- ✅ **Reusable** — fork for future campaigns, change content + colors, done

## For future campaigns

To reuse this for a different candidate:
1. Fork/copy this repo
2. Open `src/data/site.json` and change every field
3. Replace images in `/public/images/`
4. Rewrite content files in `/src/content/`
5. Deploy to a new Netlify site

Nothing else needs to change — colors, branding, legal notice, navigation, and election date are all in `site.json`.

---

**Authorization notice:** This website is authorized by the campaign's financial agent (see site footer).
