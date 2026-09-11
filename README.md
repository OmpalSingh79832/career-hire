# Career Hire — Next.js Website

Rebuild of careerhire.ca — Next.js 16 (App Router, JavaScript/JSX), Tailwind CSS v4,
file-based content (no database, no CMS), SEO built in on every route.

## Stack

- **Framework:** Next.js (App Router, JS/JSX only — no TypeScript)
- **Styling:** Tailwind CSS v4
- **Content:** Static files — `content/jobs.json` (jobs) and `content/blog/*.mdx` (blog posts)
- **Forms:** Nodemailer (SMTP email) + Google Sheets API, both fire in parallel on submit
- **SEO:** Per-page metadata, JSON-LD structured data (Organization, JobPosting, BlogPosting,
  BreadcrumbList, FAQPage), dynamic `sitemap.xml`, `robots.txt`

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in real values, see below
npm run dev
```

Visit `http://localhost:3000`.

## Editing content (no code changes needed)

- **Jobs:** edit `content/jobs.json`. Each object is one job posting. Add a new object to add
  a new job — it will automatically appear on `/jobs`, get its own `/jobs/[slug]` page, and be
  added to the sitemap on next build.
- **Blog posts:** add a new `.mdx` file to `content/blog/`. Frontmatter fields required:
  `title`, `description`, `date`, `slug`, `author`. Write the post body in Markdown/MDX below
  the frontmatter.

Both are read at **build time**, so after editing content you need to redeploy
(`npm run build` + restart) for changes to go live. This is intentional — it keeps the site
fully static and fast with zero database/CMS cost.

## Environment variables

See `.env.local.example` for the full list and setup instructions for:

- SMTP (Nodemailer) — email notifications for every Contact form submission
- Google Sheets service account — logs every submission as a row in a Sheet
- `NOTIFY_EMAILS` — comma-separated list of every address that should get notified

**Do not commit `.env.local`** — it's already in `.gitignore`.

## Deploying to your VPS (cPanel + Node.js, via PM2 + Nginx)

You confirmed SSH/root access — here's the recommended setup:

### 1. Get the code on the server

```bash
git clone <your-repo-url> career-hire
cd career-hire
npm install
```

Create `.env.local` on the server directly (via SSH, not committed to git) with real
production values.

### 2. Build

```bash
npm run build
```

### 3. Install PM2 (process manager — keeps the app alive, restarts on crash/reboot)

```bash
npm install -g pm2
```

### 4. Start the app under PM2

```bash
pm2 start npm --name "career-hire" -- start -- -p 3000
pm2 save
pm2 startup   # follow the printed instructions to enable PM2 on server reboot
```

### 5. Point Nginx at it (reverse proxy)

If cPanel's **Node.js Selector** (CloudLinux) is available, you can use that instead of manual
PM2 — it manages the process for you and gives you an "Application URL" + `.htaccess`/passenger
config automatically. Either approach works; PM2 gives you more visibility (`pm2 logs`,
`pm2 monit`).

If going the manual Nginx route, add a server block (or edit the existing one for
careerhire.ca) so it proxies to the Next.js process:

```nginx
server {
    listen 80;
    server_name careerhire.ca www.careerhire.ca;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then add SSL via cPanel's AutoSSL / Let's Encrypt as usual.

### 6. Redeploying after changes

```bash
git pull
npm install        # only if package.json changed
npm run build
pm2 restart career-hire
```

## Project structure

```
app/                    Routes (App Router)
  layout.js              Root layout, sitewide metadata + Organization schema
  page.js                Home
  about/                 About Us
  industries/             Industries index + healthcare/retail/hospitality
  services/               Services
  jobs/                    Job listing index + [slug] detail (JobPosting schema)
  blog/                    Blog index + [slug] detail (MDX, BlogPosting schema)
  contact/                 Contact / Request a Service form
  api/contact/route.js     Form submission handler (email + Sheets)
  sitemap.js               Dynamic sitemap.xml
  robots.js                robots.txt
components/               Shared UI (Header, Footer, cards, form, etc.)
lib/                      Data access + SEO helpers (site.js, jobs.js, blog.js,
                           structuredData.js, mail.js, sheets.js)
content/
  jobs.json                All job postings
  blog/*.mdx                All blog posts
```

## Notes / things to swap in before going live

- **Images:** currently no real images are wired in (per your instruction — stock photography
  to be added). Hero sections, industry pages, and blog cards are ready for `next/image` once
  you supply image URLs/files.
- **Logo/colors:** the header/footer currently use a placeholder wordmark ("CareerHire" text)
  and a blue/slate palette. Swap in your actual logo file and exact brand hex codes in
  `app/globals.css` / `tailwind` usage once you share them.
- **`og-default.jpg`:** referenced in `app/layout.js` metadata but not yet created — add a
  1200×630 image at `public/og-default.jpg` for social share previews.
- **`logo.png`:** referenced in JSON-LD (`lib/structuredData.js`) — add the real logo at
  `public/logo.png`.
