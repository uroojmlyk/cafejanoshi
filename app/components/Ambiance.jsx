'use client';

import { useEffect, useRef, useState } from 'react';

const SHOTS = [
  { id:1, src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85', label:'The Dining Hall',   size:'large' },
  { id:2, src:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',   label:'Intimate Seating',  size:'small' },
  { id:3, src:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',   label:'Coffee Bar',        size:'small' },
  { id:4, src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', label:'Evening Vibe',       size:'medium' },
  { id:5, src:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',   label:'The Corner Table',  size:'small' },
  { id:6, src:'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80',   label:'Ambient Lighting',  size:'small' },
];

export default function Ambiance() {
  const headRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = headRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <section id="ambiance" style={{ background: 'var(--cream)', padding: '140px 0 120px' }}>
      <div className="wrap">

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: 72, display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <span className="label">Our Space</span>
            <h2>
              Where every corner<br /><em style={{ fontStyle: 'italic' }}>breathes atmosphere</em>
            </h2>
          </div>
          <p style={{ flex: 1, minWidth: 260, maxWidth: 380, paddingBottom: 8, fontSize: '.95rem' }}>
            Thoughtfully designed for warmth and intimacy — 
            from sunlit afternoons to candlelit evenings, 
            every visit feels like a world of its own.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="amb-grid">
          {SHOTS.map((shot, i) => <Shot key={shot.id} shot={shot} delay={i * 90} onOpen={() => setActive(shot)} />)}
        </div>

      </div>

      {/* Lightbox */}
      {active && (
        <div className="amb-lb" onClick={() => setActive(null)}>
          <div className="amb-lb-card" onClick={e => e.stopPropagation()}>
            <img src={active.src} alt={active.label} className="amb-lb-img" />
            <div className="amb-lb-bar">
              <span className="amb-lb-label">{active.label}</span>
              <button onClick={() => setActive(null)} className="amb-lb-close">✕</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .amb-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 220px;
          gap: 6px;
        }
        @media (max-width: 900px)  { .amb-grid { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 180px; } }
        @media (max-width: 540px)  { .amb-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; } }

        .amb-shot { position: relative; overflow: hidden; cursor: pointer; background: var(--cream-dark); }
        .amb-shot-large  { grid-column: span 6; grid-row: span 2; }
        .amb-shot-medium { grid-column: span 4; grid-row: span 2; }
        .amb-shot-small  { grid-column: span 3; }
        @media (max-width: 900px) {
          .amb-shot-large  { grid-column: span 4; }
          .amb-shot-medium { grid-column: span 3; }
          .amb-shot-small  { grid-column: span 3; }
        }
        @media (max-width: 540px) {
          .amb-shot-large, .amb-shot-medium, .amb-shot-small { grid-column: span 2; grid-row: span 1; }
        }

        .amb-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .95s var(--ease), filter .5s;
          filter: brightness(.82);
        }
        .amb-shot:hover .amb-img { transform: scale(1.07); filter: brightness(.92); }

        .amb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(30,26,23,.7) 0%, transparent 55%);
          opacity: 0;
          transition: opacity .4s var(--ease);
          display: flex;
          align-items: flex-end;
          padding: 18px;
        }
        .amb-shot:hover .amb-overlay { opacity: 1; }
        .amb-overlay-label {
          font-family: var(--serif);
          font-size: 1.1rem;
          font-weight: 300;
          color: #f3ede2;
          letter-spacing: .04em;
          font-style: italic;
        }

        /* Lightbox */
        .amb-lb {
          position: fixed; inset: 0; z-index: 900;
          background: rgba(30,26,23,.92);
          backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          animation: lbFade .35s var(--ease);
          cursor: pointer;
        }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }
        .amb-lb-card {
          max-width: 88vw;
          max-height: 88vh;
          display: flex;
          flex-direction: column;
          cursor: default;
          animation: lbScale .4s var(--ease-out);
        }
        @keyframes lbScale { from { opacity:0; transform: scale(.94); } to { opacity:1; transform: scale(1); } }
        .amb-lb-img { max-height: 76vh; object-fit: contain; display: block; }
        .amb-lb-bar {
          display: flex; justify-content: space-between; align-items: center;
          padding: 14px 0;
        }
        .amb-lb-label {
          font-family: var(--serif);
          font-size: 1.1rem;
          font-weight: 300;
          color: rgba(243,237,226,.8);
          font-style: italic;
        }
        .amb-lb-close {
          font-size: .9rem;
          color: rgba(243,237,226,.55);
          width: 30px; height: 30px;
          border: 1px solid rgba(243,237,226,.2);
          display: flex; align-items: center; justify-content: center;
          transition: all .3s;
        }
        .amb-lb-close:hover { color: #f3ede2; border-color: rgba(243,237,226,.5); }
      `}</style>
    </section>
  );
}

function Shot({ shot, delay, onOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { el.style.opacity = 1; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`amb-shot amb-shot-${shot.size}`}
      style={{ opacity: 0, transition: `opacity 1s var(--ease-out) ${delay}ms` }}
      onClick={onOpen}
    >
      <img src={shot.src} alt={shot.label} className="amb-img" loading="lazy" />
      <div className="amb-overlay">
        <span className="amb-overlay-label">{shot.label}</span>
      </div>
    </div>
  );
}