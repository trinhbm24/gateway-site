# Gateway Impact Lab — Site

Production-ready Next.js site for Gateway Impact Lab.

## Pages

- `/` — Landing page (`app/page.js`)
- `/co-design` — Co-design tool walkthrough (`app/co-design/page.js`)

## Before going live, swap these placeholders

Open `app/page.js` and `app/co-design/page.js` and find/replace:

- `[YOUR-FORM-URL]` → your Google Form URL
- `[YOUR-EMAIL]` → your email
- `[YOUR-LINKEDIN]` → your LinkedIn URL

For the founder portrait: drop `long.jpg` into `/public`, then in `app/page.js` find the block containing `[ Founder Portrait ]` and replace it with:

```jsx
<img src="/long.jpg" alt="Long Trinh" className="w-full aspect-[4/5] object-cover" />
```

## Deploy

This project is configured to deploy on Vercel with zero setup. Just import the repo in Vercel — Next.js is auto-detected, no environment variables needed.
