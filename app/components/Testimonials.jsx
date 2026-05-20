'use client';

import { useEffect, useRef } from 'react';

const REVIEWS = [
  { name: 'Ayesha R.',      rating: 5, location: 'Okara',    text: 'The ambiance alone is worth coming for. Felt like a completely different world — warm, beautiful, and calm. The Dome Cake finished us off perfectly.' },
  { name: 'Bilal K.',       rating: 5, location: 'Lahore',   text: 'Drove from Lahore just to try the Stuffed Chicken I saw online. Absolutely worth it. The attention to detail in every dish is remarkable.' },
  { name: 'Sara M.',        rating: 5, location: 'Okara',    text: 'Our team\'s go-to spot for celebrations. The private dining room is a hidden gem — comfortable, elegant, and the food is always exceptional.' },
  { name: 'Hassan A.',      rating: 5, location: 'Okara',    text: 'I\'ve tried the Rib Eye at many places in Punjab. Janoshi\'s version stands above everything else — perfectly cooked, incredible sauces.' },
  { name: 'Maira F.',       rating: 5, location: 'Pakpattan', text: 'The Lotus Latte is like nothing I\'ve had anywhere. And the service — genuinely warm without being intrusive. Will keep coming back.' },
  { name: 'Usman T.',       rating: 5, location: 'Okara',    text: 'Booked the private room for my daughter\'s birthday. The staff went above and beyond. The food, the decor, the cake — everything was flawless.' },
];

function Star() {
  return <span style={{ color: '#c9a96e', fontSize: '.75rem' }}>★</span>;
}

function Card({ review, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { el.style.opacity = 1; el.style.transform = 'none'; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="rev-card" style={{ opacity: 0, transform: 'translateY(36px)', transition: 'opacity .9s var(--ease-out), transform .9s var(--ease-out)' }}>
      <div className="rev-stars">{Array(review.rating).fill(0).map((_, i) => <Star key={i} />)}</div>
      <p className="rev-text">"{review.text}"</p>
      <div className="rev-author">
        <span className="rev-name">{review.name}</span>
        <span className="rev-loc">{review.location}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headRef = useRef(null);
  useEffect(() => {
    const el = headRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--cream)', padding: '140px 0 120px' }}>
      <div className="wrap">

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="label">What Our Guests Say</span>
          <h2>Voices that<br /><em style={{ fontStyle: 'italic' }}>speak for us</em></h2>
        </div>

        {/* Grid */}
        <div className="rev-grid">
          {REVIEWS.map((r, i) => <Card key={i} review={r} delay={i * 80} />)}
        </div>

        {/* Google rating strip */}
        <div className="rev-strip">
          <div className="rev-strip-inner">
            <div className="rev-strip-stars">{Array(5).fill(0).map((_, i) => <Star key={i} />)}</div>
            <span className="rev-strip-text">4.8 rating · 70+ verified reviews on Google</span>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .rev-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--rule);
          border: 1px solid var(--rule);
          margin-bottom: 48px;
        }
        @media (max-width: 900px)  { .rev-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px)  { .rev-grid { grid-template-columns: 1fr; } }

        .rev-card {
          background: var(--cream);
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: background .4s var(--ease);
        }
        .rev-card:hover { background: var(--cream-dark); }

        .rev-stars { display: flex; gap: 3px; }
        .rev-text {
          font-family: var(--serif);
          font-size: 1.05rem;
          font-weight: 300;
          font-style: italic;
          color: var(--ink);
          line-height: 1.65;
          letter-spacing: .01em;
          flex: 1;
        }
        .rev-author { display: flex; flex-direction: column; gap: 3px; margin-top: 4px; }
        .rev-name {
          font-family: var(--sans);
          font-size: .72rem;
          font-weight: 400;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--ink);
        }
        .rev-loc {
          font-family: var(--sans);
          font-size: .65rem;
          font-weight: 100;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--ink-3);
        }

        .rev-strip {
          border: 1px solid var(--rule);
          padding: 20px 32px;
        }
        .rev-strip-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .rev-strip-stars { display: flex; gap: 3px; }
        .rev-strip-text {
          font-family: var(--sans);
          font-size: .68rem;
          font-weight: 300;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--ink-2);
        }
      `}</style>
    </section>
  );
}