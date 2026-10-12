/**
 * Publication dates for the indexable pages, shared by structured data, the sitemap and visible dates.
 * Bump `modified` only when a page's content substantively changes; search and answer engines treat
 * it as a freshness signal, and cosmetic bumps undermine it.
 */
export const pageDates: Record<string, { published: string; modified: string }> = {
  '/': { published: '2026-10-07', modified: '2026-10-12' },
  '/license': { published: '2026-10-07', modified: '2026-10-12' },
  '/manifesto': { published: '2026-10-06', modified: '2026-10-12' },
};

/** The proposal's draft version, shown on the page and declared in structured data. */
export const proposalVersion = '0.1';

/** "2026-10-12" → "October 12, 2026", without letting the build machine's timezone shift the day. */
export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
