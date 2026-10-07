# Tributary

A whitepaper proposal site for Tributary and the Open Royalty License.

Mobile-accessible design preview: https://open-tributary.vercel.app

## Run

```sh
npm install
npm run build
npm run preview
```

Open http://localhost:4325. This preview serves both the static build and the email endpoint. `npm run dev` provides frontend hot reload on 4321; use the full preview or Vercel for form submissions. Use `npm run check`, `npm run build`, and `npm run verify:forms` to verify.

## Preview scope

Home, draft license, full manifesto, signup, and signup confirmation. The interface uses black and white with blue-white streaming flow artwork. The full-height centered hero, vertical diagram and black continuation chapter share one persistent WebGL canvas using the rotated canonical Gateway Flow control points. After the diagram, the camera turns and follows tangent extensions of the same current toward creators and maintainers, without regrouping particles. Fine lines, moving dashes, rounded particles, and white glints carry the video-inspired material. The canvas renders native display pixels up to 2× DPR for crisp large-screen artwork; two drawing passes, cached camera/vertex inputs and offscreen suspension keep rendering efficient without reducing visual detail. The river retains its full height through the hero-to-diagram transition. Products A–G are native annotations on the actual incoming lanes, sharing the particles’ integrated phase. Staggered arrivals enter wide, shrink and fade before Your project; the keyboard-accessible code/royalty toggle reverses the nodes, particles and travelling dashes without resetting positions. There is no pause button or relationship-arrow overlay. Reduced motion and unavailable WebGL use readable static scenes. Desktop Lenis, native phone scrolling, and native same-origin View Transitions remain. Later artwork uses the same thin curves and round points. Proposal facts, participation, questions, invitation and footer have coordinated one-time native entrances, shorter on mobile and static under reduced motion; content remains visible without JavaScript and focus/presses settle movement immediately. The invitation’s curves extend past the SVG edge and fade at the section boundary. The shared footer returns to the full-sized horizontal blue-white constellation behind its closing statement; its field loads on visibility and pauses offscreen, with static reduced-motion/WebGL fallbacks. The brand uses the wordmark alone; miniature dividers remain removed. Button arrows move on hover and keyboard focus, and secondary buttons use black text and arrows on their white hover/focus backgrounds. See THREEUI-SOURCE.md for the preserved exact-source bundle and the active material adaptation.

Signup and proposal feedback post to `/api/contact`, a standalone Vercel function that emails support@b150.ai through Resend. The submitter’s email becomes Reply-To when provided. There is no database or automated marketing subscription. The public pages stay static. Email is not active until server credentials and a verified sender are configured; failed submissions retain the input and expose a direct email link. Production analytics remain to be connected. Indexing is disabled while this is a proposal preview. Page metadata, publisher and article schema, sitemap, and a PNG social image are included.

## Email setup

Copy `.env.example` to an ignored local `.env` for local sending. In Vercel’s open-tributary project, configure `RESEND_API_KEY` and `FORM_EMAIL_FROM` for the environments that should send email. The default sender is `Tributary <forms@b150.ai>`; b150.ai must be verified in Resend. The recipient is fixed in server code, and no secret uses a `PUBLIC_` variable. Add the key directly in Vercel rather than committing it or posting it in chat. Redeploy after setting the variables; restart the local preview after changing `.env`.

The handler validates fields and source pages, limits request size, checks same-origin requests, drops honeypot submissions, and uses Resend idempotency keys for unchanged retries. It applies a best-effort five-attempt/ten-minute limit per address per warm function instance, not a distributed rate limit. Add an edge/distributed limit if traffic requires stronger spam controls. Only provider status/kind metadata is logged; form bodies and credentials are not logged.

`npm run verify:forms` uses a stub provider and sends no real emails. Missing credentials return 503, provider failure/ambiguous acceptance returns 502, and success is shown only after Resend acknowledges an email ID. The signup confirmation is reached only after an accepted send. API acceptance does not prove inbox delivery; verify a real submission in Resend and the support inbox after credentials are configured.

References: [Resend send API](https://resend.com/docs/api-reference/emails/send-email), [verified domains](https://resend.com/docs/dashboard/domains/introduction), and [Vercel standalone Node functions](https://vercel.com/docs/functions/runtimes/node-js).

## Domain and indexing

`SITE_URL` sets the canonical origin at build time; it defaults to the deployed Vercel address. `opentributary.com` is the intended future domain and is not connected or used in metadata. After acquiring and connecting it, set `SITE_URL=https://opentributary.com` and rebuild. Set `PUBLIC_SITE_INDEXABLE=true` only when ready for search indexing. Signup and confirmation pages always remain noindex. Sitemap includes only the home page, manifesto, and license principles.

## Deploy

Run `vercel deploy --prod --scope adamperlis-projects`. Vercel configuration builds Astro and publishes `dist`. The site source and design review records are tracked in this repository.

See BUILD-BRIEF.md for the proposed direction and REVIEW.md for verification evidence.
