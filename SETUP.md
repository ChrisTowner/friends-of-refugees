# Setup guide — from zero to a live website

This guide is written assuming **zero coding experience**. If any step feels confusing, stop and ask.

Total time: about **60–90 minutes** the first time.

---

## Overview

We're going to:

1. Put this project on GitHub (so Netlify can read it)
2. Deploy to Netlify (free hosting, auto HTTPS)
3. Connect the domain **teritowner.ca**
4. Turn on Netlify Identity so Teri can log in at `/admin` with just an email + password
5. Create the Google Forms (volunteer / lawn sign / contact / newsletter)
6. Paste form URLs + Google Analytics ID into the site settings
7. Replace placeholder text and images

When you finish:
- **teritowner.ca** loads the site
- **teritowner.ca/admin** is where Teri logs in to edit
- Form responses land in **Google Sheets** you own

---

## Step 1 — Get the code onto GitHub (15 min)

1. Sign in to [github.com](https://github.com) (you already have an account).
2. Click **New repository**. Name it `teri-towner-campaign`. Set visibility to **Private** (OK for Netlify). Click **Create**.
3. In this folder (`Mom Website/`) open a terminal. Run:
   ```bash
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/teri-towner-campaign.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username.)

## Step 2 — Deploy to Netlify (10 min)

1. Sign up at [netlify.com](https://netlify.com) with your Google account.
2. Click **Add new site → Import an existing project → Deploy with GitHub**.
3. Authorize Netlify, then pick the `teri-towner-campaign` repository.
4. Netlify auto-detects Astro. Leave defaults. Click **Deploy site**.
5. Wait ~2 minutes. You'll get a random URL like `https://luminous-parfait-123.netlify.app`. Visit it — the site should load.

## Step 3 — Connect teritowner.ca (15 min)

1. In Netlify, go to **Site settings → Domain management → Add custom domain**. Enter `teritowner.ca`.
2. Netlify will show DNS records to add. Go to **wherever you bought the domain** (e.g. Namecheap, GoDaddy, Rebel), log in, and:
   - **Option A (easiest):** Change nameservers to Netlify's (4 nameservers shown on screen). Takes up to 24 hours.
   - **Option B:** Keep existing nameservers and add the A record + CNAME Netlify shows. Faster (~1 hour).
3. Also add `www.teritowner.ca` as an alias in Netlify.
4. Once DNS propagates, Netlify will automatically issue a free HTTPS certificate.

## Step 4 — Enable Netlify Identity + Git Gateway (10 min)

This is how Teri will log in to `/admin`.

1. In Netlify, go to **Site → Integrations → (or) Identity**. Click **Enable Identity**.
2. Under **Registration preferences**, set it to **Invite only** (so random people can't sign up).
3. Under **External providers**, leave it empty (email/password only — simpler for Teri).
4. Scroll down to **Services → Git Gateway → Enable Git Gateway**. (This lets Decap save changes to GitHub automatically.)
5. Back in Identity, click **Invite users** and invite:
   - Your email
   - Teri's email (once she has one set up)
6. Check your inbox for the invite email → click the link → set a password. You're now an editor.

## Step 5 — Create Google Forms (15 min)

We'll make 4 forms. For each one, responses automatically land in a Google Sheet.

1. Go to [forms.google.com](https://forms.google.com), sign in with the Google account you want to own these responses.
2. Create these four forms. Use these exact titles so it's easy to find later:

   **Form 1: Volunteer Signup**
   Fields: Name (short answer), Email (short answer), Phone (short answer, optional), Postal code (short answer), How you'd like to help (checkboxes: door-knocking, events, lit drop, phone bank, admin, other), Notes (paragraph).

   **Form 2: Lawn Sign Request**
   Fields: Name, Street address (long answer), City, Email, Phone (optional), Delivery notes (paragraph, optional).

   **Form 3: Contact**
   Fields: Name, Email, Subject, Message (paragraph).

   **Form 4: Newsletter Signup**
   Fields: Name, Email, Postal code (optional).

3. For each form, click the **Responses** tab → green Sheets icon → **Create new spreadsheet**. Responses now auto-save to a sheet.
4. For each form, click **Send → `< >` (embed HTML)** → copy the `src` URL (looks like `https://docs.google.com/forms/d/e/.../viewform?embedded=true`). Save these 4 URLs.

## Step 6 — Set up Google Analytics (5 min)

1. Go to [analytics.google.com](https://analytics.google.com), sign in.
2. **Create a property** → name it "Teri Towner Campaign" → fill in time zone (Vancouver) and currency (CAD).
3. Create a **Web** data stream for `https://teritowner.ca`.
4. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`). Save it.

## Step 7 — Drop everything into site settings (10 min)

1. Go to **teritowner.ca/admin** and log in.
2. Click **Site Settings → site**. Fill in:
   - **Google Form embed URLs** → paste the 4 URLs from step 5
   - **Google Analytics Measurement ID** → paste `G-XXXXXXXXXX` from step 6
   - **Donation link** → paste the donation URL when you have it
   - **Financial agent** → real name, email, phone
   - **Authorization notice** → update with the real financial agent name, e.g. `Authorized by Jane Smith, Financial Agent for Teri Towner, 604-555-1234.`
   - **Public email**, **phone**, **mailing address** — whatever you want shown
   - **Colors** — if you have exact Coquitlam brand hex codes, paste them here
3. Click **Publish**. The site redeploys in ~1 minute.

## Step 8 — Replace placeholder content

Still in `/admin`:

1. **Platform Pillars** — edit the 3 pillars with real content.
2. **News Posts** — write a "Launching my 2026 campaign" post.
3. **Endorsements** — replace the two placeholders once you collect real quotes.
4. **Events** — add real campaign events as they're scheduled.

## Step 9 — Replace placeholder images

1. Take or select a warm headshot and a few community photos.
2. In `/admin`, open any post/page with an image field → upload. Decap saves them into `/public/images/uploads/`.
3. For the homepage hero and about-page portrait (which aren't editable via `/admin` — they're hard-coded in the template), upload to `/public/images/` via GitHub web UI:
   - Go to your repo on GitHub → navigate to `public/images/` → **Add file → Upload files** → drag in `teri-headshot.jpg` and `teri-about.jpg`.
   - Then edit `src/components/Hero.astro` and `src/pages/about.astro` — change the `src="/images/placeholders/headshot.svg"` line to `src="/images/teri-headshot.jpg"`.
   - Netlify auto-redeploys.
   - (If that sounds scary, just tell Chris and he'll do it.)

See `public/images/README.md` for recommended sizes.

## Step 10 — Go live

1. Visit **teritowner.ca** on your phone and a laptop. Click every link.
2. Submit every form (volunteer, lawn sign, contact, newsletter) with fake data to confirm responses land in the right Google Sheets.
3. Share the URL with a trusted friend. Ask them to find anything confusing.

🎉 **You're live.**

---

## Running the site locally (optional, for developers)

If you want to preview changes before pushing:

```bash
npm install    # once
npm run dev    # starts a local server at http://localhost:4321
```

## Ongoing maintenance

- **Every edit via `/admin` auto-deploys** in about 1 minute.
- **Backups:** the entire site content is in GitHub automatically — every edit is a commit. To download a full backup: GitHub repo → **Code → Download ZIP**.
- **Export form responses:** open each Google Sheet → **File → Download → Excel/CSV**.
- **Export site data:** GitHub repo has everything as plain text files (Markdown + JSON). It's all human-readable and portable.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `/admin` won't load | Make sure Git Gateway is enabled in Netlify (step 4.4). |
| Can't log in | Check you accepted the invite email. Use **Forgot password** on the login screen. |
| Form shows a placeholder box | You haven't pasted the Google Form URL into site settings yet. See step 7. |
| Edit didn't appear on the site | Wait 1–2 minutes for Netlify to rebuild. Check Netlify dashboard → **Deploys** for build status. |
| Site looks broken after an edit | In Netlify → **Deploys**, click the previous successful deploy → **Publish deploy**. That instantly rolls back. |

## Getting help

- Netlify docs: [docs.netlify.com](https://docs.netlify.com)
- Decap CMS docs: [decapcms.org/docs](https://decapcms.org/docs/intro/)
- Google Forms help: [support.google.com/docs](https://support.google.com/docs/topic/9055404)
