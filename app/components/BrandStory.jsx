'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

function useReveal(cls = 'reveal', th = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); obs.disconnect(); }
    }, { threshold: th });
    obs.observe(el);
    return () => obs.disconnect();
  }, [th]);
  return ref;
}

export default function BrandStory() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        leftRef.current?.classList.add('show');
        rightRef.current?.classList.add('show');
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (leftRef.current) obs.observe(leftRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="story" style={{ background: 'var(--charcoal)', padding: '140px 0 120px' }}>
      <div className="wrap">

        <div className="story-grid">

          {/* Left — image block */}
          <div ref={leftRef} className="reveal-left story-img-col">
            <div className="story-img-main">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85"
                alt="Cafe Janoshi interior"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
              />
            </div>
            {/* Floating badge */}
            <div className="story-badge">
              <span className="story-badge-num">12+</span>
              <span className="story-badge-txt">Years in Okara</span>
            </div>
            {/* Accent image */}
            <div className="story-img-accent">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
                alt="Coffee craftsmanship"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div ref={rightRef} className="reveal-right story-content">
            <span className="label label-light">Our Philosophy</span>
            <h2 style={{ color: '#f3ede2', marginBottom: 28, lineHeight: 1.05 }}>
              Born from a<br /><em style={{ fontStyle: 'italic' }}>love of gathering</em>
            </h2>

            <p style={{ color:'rgba(243,237,226,.55)', marginBottom: 20, fontSize: '.95rem', lineHeight: 1.85 }}>
              Cafe Janoshi was founded with a simple conviction — that every person deserves a place where 
              they feel genuinely welcomed, beautifully fed, and reluctant to leave. What began as a small 
              café on Tehsil Road has grown into Okara's most beloved dining destination.
            </p>
            <p style={{ color:'rgba(243,237,226,.45)', marginBottom: 44, fontSize: '.9rem', lineHeight: 1.85 }}>
              Our kitchen draws from Thai, Italian, Continental and local traditions, weaving them into a 
              menu that surprises, satisfies, and keeps people coming back. We believe that great food is 
              not a luxury — it is a daily right.
            </p>

            {/* Info rows */}
            <div className="story-info">
              {[
                { icon: <MapPin size={14} strokeWidth={1.5} />, text: 'RC7X+CW4, Tehsil Rd, Waris Colony, Okara', href: 'https://maps.google.com/?q=Cafe+Janoshi+Okara' },
                { icon: <Phone size={14} strokeWidth={1.5} />,  text: '0321 000 1112', href: 'tel:03210001112' },
                { icon: <Clock size={14} strokeWidth={1.5} />,  text: 'Monday – Sunday · 10:00 am – 12:59 am', href: null },
              ].map((row, i) => (
                <div key={i} className="story-info-row">
                  <span className="story-info-icon">{row.icon}</span>
                  {row.href
                    ? <a href={row.href} target={row.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="story-info-text story-info-link">{row.text}</a>
                    : <span className="story-info-text">{row.text}</span>
                  }
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="story-tags">
              {['Private Dining Room', "Kids' Birthday", 'Premium Dining', 'Dine-in Available', 'WhatsApp Orders'].map(t => (
                <span key={t} className="story-tag">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px)  { .story-grid { grid-template-columns: 1fr; gap: 60px; } }

        .story-img-col { position: relative; }
        .story-img-main {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--charcoal-mid);
        }
        .story-img-main img { transition: transform .9s var(--ease); }
        .story-img-main:hover img { transform: scale(1.04); }

        .story-badge {
          position: absolute;
          top: 36px; left: -22px;
          background: var(--gold);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          z-index: 2;
        }
        @media (max-width: 640px) { .story-badge { left: 0; } }
        .story-badge-num {
          font-family: var(--serif);
          font-size: 2.2rem;
          font-weight: 300;
          line-height: 1;
          color: var(--charcoal);
        }
        .story-badge-txt {
          font-family: var(--sans);
          font-size: .58rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(30,26,23,.7);
        }

        .story-img-accent {
          position: absolute;
          bottom: -28px; right: -28px;
          width: 46%;
          aspect-ratio: 1;
          overflow: hidden;
          border: 8px solid var(--charcoal);
          background: var(--charcoal-mid);
        }
        @media (max-width: 640px) { .story-img-accent { display: none; } }

        .story-content { padding-top: 16px; }

        .story-info { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }
        .story-info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(243,237,226,.06);
        }
        .story-info-row:first-child { border-top: 1px solid rgba(243,237,226,.06); }
        .story-info-icon { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
        .story-info-text {
          font-family: var(--sans);
          font-size: .85rem;
          font-weight: 100;
          color: rgba(243,237,226,.5);
          letter-spacing: .03em;
          line-height: 1.55;
        }
        .story-info-link { transition: color .3s; }
        .story-info-link:hover { color: rgba(243,237,226,.85); }

        .story-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .story-tag {
          font-family: var(--sans);
          font-size: .58rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(243,237,226,.35);
          border: 1px solid rgba(243,237,226,.12);
          padding: 6px 14px;
          transition: all .3s;
        }
        .story-tag:hover { border-color: rgba(243,237,226,.35); color: rgba(243,237,226,.65); }
      `}</style>
    </section>
  );
}