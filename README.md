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

Home, draft license, full manifesto, signup, and signup confirmation. The interface uses black and white with blue-white streaming flow artwork. The full-height centered hero, vertical diagram and black continuation chapter share one persistent WebGL canvas using the rotated canonical Gateway Flow control points. After the diagram, the camera turns and follows tangent extensions of the same current toward creators and maintainers, without regrouping particles. Fine lines, moving dashes, rounded particles, and white glints carry the video-inspired material. The canvas renders native display pixels up to 2× DPR for crisp large-screen artwork; performance adaptation reduces particle density rather than resolution. The chart is pared back to a headline, four labels, and a keyboard-accessible code/royalty toggle; switching modes reverses both particles and travelling dashes without resetting their positions. There is no pause button or relationship-arrow overlay. Reduced motion and unavailable WebGL use readable static scenes. Desktop Lenis, native phone scrolling, and native same-origin View Transitions remain. Later artwork uses the same thin curves and round points. The brand uses the wordmark alone; miniature dividers remain removed. Button arrows move on hover and keyboard focus, and secondary buttons use black text and arrows on their white hover/focus backgrounds. See THREEUI-SOURCE.md for the preserved exact-source bundle and the active material adaptation.

Forms validate locally and demonstrate their next states. They do not store or transmit input. Supabase, Resend, unsubscribe handling, and production analytics remain to be connected before launch. Indexing is disabled while this is a proposal preview. Page metadata, publisher and article schema, sitemap, and a PNG social image are included.

## Domain and indexing

`SITE_URL` sets the canonical origin at build time; it defaults to the deployed Vercel address. `opentributary.com` is the intended future domain and is not connected or used in metadata. After acquiring and connecting it, set `SITE_URL=https://opentributary.com` and rebuild. Set `PUBLIC_SITE_INDEXABLE=true` only when ready for search indexing. Signup and confirmation pages always remain noindex. Sitemap includes only the home page, manifesto, and license principles.

## Deploy

Run `vercel deploy --prod --scope adamperlis-projects`. Vercel configuration builds Astro and publishes `dist`. The site source and design review records are tracked in this repository.

See BUILD-BRIEF.md for the proposed direction and REVIEW.md for verification evidence.
