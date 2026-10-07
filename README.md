# Tributary

A whitepaper proposal site for Tributary and the Open Royalty License.

Mobile-accessible design preview: https://open-tributary.vercel.app

## Run

```sh
npm install
npm run dev
```

Open http://localhost:4321. Use `npm run check` and `npm run build` to verify.

## Preview scope

Home, draft license, full manifesto, signup, and signup confirmation. The entire site uses black, white, and neutral gray. The hero and first diagram are two full-frame scenes sharing one continuous, exact-source Gateway Flow canvas. The diagram has keyboard-accessible code/royalty modes. Pause, a static reduced-motion companion, desktop Lenis scrolling, native phone scrolling, and native same-origin View Transitions between pages are included. See THREEUI-SOURCE.md for provenance, pinned-source integration, and the preserved external dependencies.

Forms validate locally and demonstrate their next states. They do not store or transmit input. Supabase, Resend, unsubscribe handling, and production analytics remain to be connected before launch. Indexing is disabled while this is a proposal preview. Page metadata, publisher and article schema, sitemap, and a PNG social image are included.

## Domain and indexing

`SITE_URL` sets the canonical origin at build time; it defaults to the deployed Vercel address. `opentributary.com` is the intended future domain and is not connected or used in metadata. After acquiring and connecting it, set `SITE_URL=https://opentributary.com` and rebuild. Set `PUBLIC_SITE_INDEXABLE=true` only when ready for search indexing. Signup and confirmation pages always remain noindex. Sitemap includes only the home page, manifesto, and license principles.

## Deploy

Run `vercel deploy --prod --scope adamperlis-projects`. Vercel configuration builds Astro and publishes `dist`. The site source and design review records are tracked in this repository.

See BUILD-BRIEF.md for the proposed direction and REVIEW.md for verification evidence.
