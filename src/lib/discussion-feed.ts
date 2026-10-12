/** Fills the proposal's discussion list from /api/discussions. Anything unexpected leaves the static link in place. */
type Discussion = { title: string; url: string; category: string; replies: number; author: string; updatedAt: string };

export async function mountDiscussions(root: ParentNode = document) {
  const section = root.querySelector<HTMLElement>('[data-discussions]');
  if (!section) return;
  const list = section.querySelector<HTMLOListElement>('[data-discussion-list]')!;
  const note = section.querySelector<HTMLElement>('[data-discussion-note]')!;
  const none = section.querySelector<HTMLElement>('[data-discussion-none]')!;
  try {
    const response = await fetch('/api/discussions', { signal: AbortSignal.timeout(8_000) });
    if (!response.ok) return;
    const data = await response.json() as { ok?: boolean; connected?: boolean; discussions?: Discussion[] };
    if (!data.ok || !data.connected || !Array.isArray(data.discussions)) return;
    if (!data.discussions.length) { note.hidden = true; none.hidden = false; return; }
    // Titles and names come from the public, so they are only ever set as text.
    list.replaceChildren(...data.discussions.filter(item => item.url?.startsWith('https://github.com/')).map(item => {
      const li = document.createElement('li');
      const link = Object.assign(document.createElement('a'), { href: item.url, className: 'discussion-title', textContent: item.title });
      const updated = item.updatedAt ? `Updated ${new Date(item.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : '';
      const replies = `${item.replies} ${item.replies === 1 ? 'reply' : 'replies'}`;
      const meta = Object.assign(document.createElement('span'), { className: 'discussion-meta', textContent: [item.category, replies, `@${item.author}`, updated].filter(Boolean).join(' · ') });
      li.append(link, meta);
      return li;
    }));
    list.hidden = false; note.hidden = true;
  } catch { /* Keep the static link to GitHub Discussions. */ }
}
