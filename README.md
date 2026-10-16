# Aether Homes — Home Automation Lead-Generation Website

Professional, conversion-focused website for a home automation business targeting **Madurai, Coimbatore and Chennai** (Tamil Nadu).

## What’s Included

- Mobile-first, modern dark navy + gold design
- Full homepage with hero, benefits, 10 service cards, process, FAQs, enquiry form
- Customer-segment sections (New home, Existing home, Villas, Designers, Architects, Builders)
- Click-to-chat WhatsApp links with pre-filled messages (visitor must send)
- Floating WhatsApp button on every view
- Lead enquiry form with validation and success state
- SEO meta tags, Open Graph, LocalBusiness structured data, robots.txt, sitemap
- Fully configurable via `config.js` (no code changes needed for brand/contact)

## Quick Start

1. Open `index.html` in a browser (or serve the folder with any static host).
2. Edit **`config.js`** and replace every placeholder:

```js
whatsappNumber: "919876543210",   // full number, no + or spaces
email: "hello@yourrealdomain.com",
companyName: "Your Brand Name",
logoText: "YOURBRAND",
siteUrl: "https://www.yourdomain.com",
formEndpoint: "",                 // optional: Formspree / Netlify / custom API
googleAnalyticsId: "",            // optional
```

3. Update `sitemap.xml` and `robots.txt` with your real domain.
4. Deploy the entire `smart-home-tn` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.).

## WhatsApp Messages

All CTAs open WhatsApp with a pre-filled message. The visitor still has to press Send. Messages cover:

- General enquiry
- New home / Existing home
- Designer / Architect / Builder partnership
- Demo booking
- Per-service quotes

## Form Backend (Optional)

By default the form shows a success message and encourages WhatsApp follow-up.  
To actually store leads:

- Set `formEndpoint` in `config.js` to a Formspree endpoint, Netlify Forms action, or your own API.
- The payload is JSON with all form fields + timestamp + source.

**Never expose database credentials or private API keys in frontend code.**

## Lead Dashboard

A full authenticated lead dashboard (with status tracking, RLS, etc.) requires a backend (Supabase, Firebase, or custom).  
This static site intentionally does **not** pretend to save leads when no endpoint is configured. Add a secure backend later when ready.

## SEO Keywords Covered

- Home Automation in Madurai
- Smart Home Solutions in Madurai / Coimbatore / Chennai
- Smart Lighting and Curtain Automation
- Home Automation for Villas
- Home Automation for Interior Designers

## Files

```
smart-home-tn/
├── index.html          # Complete single-page site
├── config.js           # All business settings (edit this)
├── css/styles.css      # Custom styles
├── js/main.js          # WhatsApp, form, mobile menu, analytics hooks
├── robots.txt
├── sitemap.xml
└── README.md
```

## Before Going Live Checklist

- [ ] Update `config.js` (name, WhatsApp, email, domain)
- [ ] Replace Unsplash images with your own project photos if available
- [ ] Set real `formEndpoint` or keep WhatsApp as primary channel
- [ ] Add Google Analytics ID if desired
- [ ] Update canonical URL, sitemap, robots.txt
- [ ] Test every WhatsApp button on mobile
- [ ] Test form validation and success state
- [ ] Add real testimonials / project gallery only when you have them
- [ ] Confirm warranty / support policy text with legal if needed

Built for lead generation — not a generic brochure site.
