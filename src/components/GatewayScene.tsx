import { useEffect, useRef, useState } from 'react';
import { ConstellationField } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

// Static accessibility companion uses the canonical source's 80 cubic paths.
// It is not a replacement implementation of the authored runtime.
function StillField() {
  return <svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
    <g fill="none" stroke="white" strokeWidth="1.2" strokeDasharray="1 4" opacity=".35">
      {Array.from({ length: 80 }, (_, i) => {
        const left = i % 2 === 0;
        const y = i / 80 * 700 * 1.4 - 700 * .2;
        return <path key={i} d={`M${left ? 0 : 1000} ${y} C${left ? 250 : 750} ${y} ${left ? 400 : 600} 350 500 350`} />;
      })}
    </g>
  </svg>;
}

export function Scene() {
  return <div className="shader-frame">
    <ConstellationField variant="gateway-flow" mode="dark"
      speed={1.00} size={1.00} length={1.00} density={1.00}
      opacity={1.00} hue={0} saturation={1.00} brightness={1.00} />
  </div>;
}

export default function GatewayScene() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const phone = window.matchMedia('(max-width: 768px)');
    const updatePreference = () => setReduced(preference.matches);
    updatePreference(); setReady(true);
    preference.addEventListener('change', updatePreference);
    const chrome = document.querySelector('.site-chrome');
    const story = host.current?.closest<HTMLElement>('.river-story');
    let scrollFrame = 0;
    const updateFlow = () => {
      scrollFrame = 0;
      if (!story) return;
      const hero = story.querySelector<HTMLElement>('.home-hero');
      if (!hero) return;
      const headerHeight = chrome?.getBoundingClientRect().height ?? 120;
      const heroBounds = hero.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (headerHeight - heroBounds.top) / heroBounds.height));
      // Hold the vertical river through the opening, then unfold into scene two.
      const phase = Math.max(0, Math.min(1, (scrollProgress - .4) / .6));
      const eased = phase * phase * (3 - 2 * phase);
      const fan = preference.matches ? 1 : eased;
      story.style.setProperty('--river-angle', `${(-90 * (1 - fan)).toFixed(3)}deg`);
      story.style.setProperty('--river-fan', `${(.44 + .56 * fan).toFixed(4)}`);
      story.style.setProperty('--river-shift', `${phone.matches ? 35 * (1 - fan) : 0}%`);
      story.style.setProperty('--flow-progress', scrollProgress.toFixed(4));
      story.style.setProperty('--flow-label-opacity', Math.max(0, Math.min(1, (scrollProgress - .72) / .28)).toFixed(4));
    };
    const scheduleFlow = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateFlow);
    };
    const resize = () => {
      const height = `${chrome?.getBoundingClientRect().height ?? 120}px`;
      story?.style.setProperty('--chrome-height', height);
      document.documentElement.style.setProperty('--chrome-height', height);
      updateFlow();
    };
    resize();
    window.addEventListener('scroll', scheduleFlow, { passive: true });
    window.addEventListener('resize', scheduleFlow, { passive: true });
    preference.addEventListener('change', scheduleFlow);
    const sizing = new ResizeObserver(resize);
    if (chrome) sizing.observe(chrome);
    const visibility = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (story) visibility.observe(story);
    const pageVisibility = () => setVisible(!document.hidden && !!story && story.getBoundingClientRect().bottom > 0 && story.getBoundingClientRect().top < window.innerHeight);
    document.addEventListener('visibilitychange', pageVisibility);
    return () => { cancelAnimationFrame(scrollFrame); window.removeEventListener('scroll', scheduleFlow); window.removeEventListener('resize', scheduleFlow); preference.removeEventListener('change', scheduleFlow); preference.removeEventListener('change', updatePreference); sizing.disconnect(); visibility.disconnect(); document.removeEventListener('visibilitychange', pageVisibility); };
  }, []);
  const moving = ready && !reduced && !paused && visible;
  return <div ref={host} className="gateway-host" data-moving={moving}>
    <div className="gateway-current">
      <div className="gateway-still"><StillField /></div>
      {moving && <Scene />}
    </div>
    <button className="motion-toggle" type="button" disabled={!ready || reduced}
      aria-pressed={paused || reduced} onClick={() => setPaused(value => !value)}>
      <span aria-hidden="true">{moving ? 'Ⅱ' : '▷'}</span>
      {reduced ? 'Motion reduced' : paused ? 'Resume flow' : 'Pause flow'}
    </button>
    <span className="gateway-caption">MANY CONTRIBUTIONS. ONE CURRENT.</span>
  </div>;
}
