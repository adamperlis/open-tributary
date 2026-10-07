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

Home, draft license, full manifesto, signup, and signup confirmation. The interface uses black and white with blue-white streaming flow artwork. The full-height centered hero, vertical diagram and black continuation chapter share one persistent WebGL canvas using the rotated canonical Gateway Flow control points. After the diagram, the camera turns and follows tangent extensions of the same current toward creators and maintainers, without regrouping particles. Fine lines, moving dashes, rounded particles, and white glints carry the video-inspired material. The canvas renders native display pixels up to 2× DPR for crisp large-screen artwork; two drawing passes, cached camera/vertex inputs and offscreen suspension keep rendering efficient without reducing visual detail. The river retains its full height through the hero-to-diagram transition. Products A–G are native annotations on the actual incoming lanes, sharing the particles’ integrated phase. Staggered arrivals enter wide, shrink and fade before Your project; the keyboard-accessible code/royalty toggle reverses the nodes, particles and travelling dashes without resetting positions. There is no pause button or relationship-arrow overlay. Reduced motion and unavailable WebGL use readable static scenes. Desktop Lenis, native phone scrolling, and native same-origin View Transitions remain. Later artwork uses the same thin curves and round points. Proposal facts, participation, questions, invitation and footer have coordinated one-time native entrances, shorter on mobile and static under reduced motion; content remains visible without JavaScript and focus/presses settle movement immediately. The brand uses the wordmark alone; miniature dividers remain removed. Button arrows move on hover and keyboard focus, and secondary buttons use black text and arrows on their white hover/focus backgrounds. See THREEUI-SOURCE.md for the preserved exact-source bundle and the active material adaptation.

Forms validate locally and demonstrate their next states. They do not store or transmit input. Supabase, Resend, unsubscribe handling, and production analytics remain to be connected before launch. Indexing is disabled while this is a proposal preview. Page metadata, publisher and article schema, sitemap, and a PNG social image are included.

## Domain and indexing

`SITE_URL` sets the canonical origin at build time; it defaults to the deployed Vercel address. `opentributary.com` is the intended future domain and is not connected or used in metadata. After acquiring and connecting it, set `SITE_URL=https://opentributary.com` and rebuild. Set `PUBLIC_SITE_INDEXABLE=true` only when ready for search indexing. Signup and confirmation pages always remain noindex. Sitemap includes only the home page, manifesto, and license principles.

## Deploy

Run `vercel deploy --prod --scope adamperlis-projects`. Vercel configuration builds Astro and publishes `dist`. The site source and design review records are tracked in this repository.

See BUILD-BRIEF.md for the proposed direction and REVIEW.md for verification evidence.
