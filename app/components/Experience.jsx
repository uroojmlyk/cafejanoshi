'use client';

import { useEffect, useRef } from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'Artisan Coffee',
    body: 'Every cup crafted with precision — from velvety lattes and robust espressos to our signature Spanish and Lotus creations that have become Okara favourites.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
  },
  {
    number: '02',
    title: 'Handcrafted Desserts',
    body: 'From our legendary Chocolate Dome Cake to warm Arabic Kunafa — our pastry kitchen produces confections that define indulgence in Okara.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  },
  {
    number: '03',
    title: 'Aesthetic Ambiance',
    body: 'A thoughtfully designed space — warm lighting, curated interiors, and an atmosphere that transforms every visit into a moment worth remembering.',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&q=80',
  },
  {
    number: '04',
    title: 'Premium Dining',
    body: 'From aged rib-eye steaks to freshly prepared Thai cuisine — our kitchen delivers dishes that speak the language of quality, every single time.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
  },
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function Experience() {
  const headRef = useReveal();

  return (
    <section id="experience" style={{ background: 'var(--cream)', padding: '140px 0 120px' }}>
      <div className="wrap">

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: 80 }}>
          <span className="label">The Janoshi Experience</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <h2 style={{ flex: 1, minWidth: 260 }}>
              Why every table<br /><em style={{ fontStyle: 'italic' }}>tells a story</em>
            </h2>
            <p style={{ flex: 1, minWidth: 260, maxWidth: 420, paddingBottom: 8 }}>
              Since our founding, Cafe Janoshi has stood for one thing — an experience that goes beyond food. 
              It is a feeling, a memory, a reason to return.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="exp-grid">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.number} pillar={p} delay={i * 100} />
          ))}
        </div>

      </div>

      <style jsx global>{`
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--rule);
          border: 1px solid var(--rule);
        }
        @media (max-width: 1024px) { .exp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px)  { .exp-grid { grid-template-columns: 1fr; } }

        .exp-card {
          background: var(--cream);
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: background .4s var(--ease);
          overflow: hidden;
        }
        .exp-card:hover { background: var(--cream-dark); }

        .exp-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          margin-bottom: 32px;
        }
        .exp-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .9s var(--ease);
        }
        .exp-card:hover .exp-img { transform: scale(1.05); }

        .exp-num {
          font-family: var(--serif);
          font-size: 2.4rem;
          font-weight: 300;
          color: var(--rule);
          line-height: 1;
          margin-bottom: 18px;
          letter-spacing: .02em;
        }
        .exp-title {
          font-family: var(--serif);
          font-size: 1.55rem;
          font-weight: 300;
          color: var(--ink);
          line-height: 1.1;
          margin-bottom: 14px;
          letter-spacing: .02em;
        }
        .exp-body {
          font-family: var(--sans);
          font-size: .88rem;
          font-weight: 100;
          line-height: 1.8;
          color: var(--ink-2);
          letter-spacing: .03em;
        }
      `}</style>
    </section>
  );
}

function PillarCard({ pillar, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { el.style.opacity = 1; el.style.transform = 'none'; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="exp-card"
      style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 1s var(--ease-out), transform 1s var(--ease-out)' }}
    >
      <div className="exp-img-wrap">
        <img src={pillar.image} alt={pillar.title} className="exp-img" />
      </div>
      <div className="exp-num">{pillar.number}</div>
      <div className="exp-title">{pillar.title}</div>
      <p className="exp-body">{pillar.body}</p>
    </div>
  );
}