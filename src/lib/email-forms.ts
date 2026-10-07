/** Send through the same-origin server endpoint; retain input and the idempotency key on failure. */
export function mountEmailForms(root: ParentNode = document) {
 for (const form of root.querySelectorAll<HTMLFormElement>('[data-email-form]')) {
  if (form.dataset.emailReady === 'true') continue;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const label = button.querySelector<HTMLElement>('[data-submit-label]')!;
  const result = form.querySelector<HTMLElement>('.form-result')!;
  const resting = label.textContent;
  let sending = false, complete = false, fingerprint = '', id = '';
  const selectedRole = new URLSearchParams(location.search).get('role');
  if (form.dataset.emailForm === 'join' && selectedRole && ['maintainer', 'builder', 'both'].includes(selectedRole)) {
   const input = form.querySelector<HTMLInputElement>(`input[value="${selectedRole}"]`); if (input) input.checked = true;
  }
  form.dataset.emailReady = 'true'; button.disabled = false;
  form.addEventListener('submit', async event => {
   event.preventDefault();
   if (sending || complete || !form.reportValidity()) return;
   const fields = Object.fromEntries(new FormData(form));
   const next = JSON.stringify(fields);
   if (next !== fingerprint || !id) { id = crypto.randomUUID(); fingerprint = next; }
   sending = true; button.disabled = true; label.textContent = 'Sending…'; form.setAttribute('aria-busy', 'true'); result.hidden = true;
   try {
    const response = await fetch('/api/contact', {
     method: 'POST', headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ ...fields, kind: form.dataset.emailForm, source: location.pathname, submissionId: id }), signal: AbortSignal.timeout(12_000),
    });
    const payload: unknown = await response.json();
    if (!response.ok || !payload || typeof payload !== 'object' || !('ok' in payload) || payload.ok !== true) {
     throw new Error(payload && typeof payload === 'object' && 'message' in payload && typeof payload.message === 'string' ? payload.message : 'We couldn’t confirm sending. Please try again or email support@b150.ai.');
    }
    complete = true; result.dataset.state = 'success'; label.textContent = 'Sent';
    result.textContent = 'Thank you. Your message has been sent to the Tributary team.';
    if (form.dataset.emailForm === 'join') { location.assign('/join/thanks'); return; }
   } catch (caught) {
    result.dataset.state = 'error';
    result.textContent = caught instanceof Error && caught.name !== 'TimeoutError' && caught.name !== 'TypeError' ? caught.message : 'We couldn’t confirm sending. Please try again or email support@b150.ai.';
    label.textContent = resting;
   } finally { sending = false; form.removeAttribute('aria-busy'); button.disabled = complete; }
   result.hidden = false; result.focus();
  });
 }
}
