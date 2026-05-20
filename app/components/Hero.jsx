// 'use client'

// import { useEffect, useState, useRef } from 'react'
// import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react'

// export default function Hero() {
//   const [loaded, setLoaded] = useState(false)
//   const [scrollY, setScrollY] = useState(0)
//   const heroRef = useRef(null)

//   useEffect(() => {
//     setLoaded(true)
//     const onScroll = () => setScrollY(window.scrollY)
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const parallax = scrollY * 0.4

//   return (
//     <section id="home" ref={heroRef} style={{ paddingTop: '105px' }}>

//       {/* ── Full-bleed image with parallax ── */}
//       <div className="h-hero relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center will-change-transform"
//           style={{
//             backgroundImage:
//               'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=90)',
//             transform: `translateY(${parallax}px) scale(1.08)`,
//             transformOrigin: 'center top',
//           }}
//         />
//         {/* Warm vignette — matches Mila's aesthetic */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,54,58,0.35)] via-[rgba(58,54,58,0.15)] to-[rgba(243,237,226,0.85)]" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[rgba(58,54,58,0.25)] via-transparent to-[rgba(58,54,58,0.25)]" />

//         {/* ── Centred hero text ── */}
//         <div className="h-container relative z-10 h-full flex flex-col items-center justify-center text-center gap-8">
//           <div
//             className="h-eyebrow"
//             style={{
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'none' : 'translateY(20px)',
//               transition: 'opacity 1s ease, transform 1s ease',
//               transitionDelay: '0.1s',
//             }}
//           >
//             Okara · Punjab · Pakistan
//           </div>

//           <h1
//             className="h-title"
//             style={{
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'none' : 'translateY(30px)',
//               transition: 'opacity 1.1s ease, transform 1.1s ease',
//               transitionDelay: '0.25s',
//             }}
//           >
//             <em>Cafe</em>
//             <br />
//             Janoshi
//           </h1>

//           <p
//             className="h-sub"
//             style={{
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'none' : 'translateY(20px)',
//               transition: 'opacity 1s ease, transform 1s ease',
//               transitionDelay: '0.45s',
//             }}
//           >
//             Okara's most distinguished dining destination —<br className="hidden sm:block" />
//             where every meal is a celebration of flavour.
//           </p>

//           <div
//             className="h-cta-row"
//             style={{
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? 'none' : 'translateY(20px)',
//               transition: 'opacity 1s ease, transform 1s ease',
//               transitionDelay: '0.6s',
//             }}
//           >
//             <a
//               href="#menu"
//               className="h-btn h-btn--dark"
//               onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}
//             >
//               <span>View Menu</span>
//               <ArrowRight size={14} />
//             </a>
//             <a
//               href="#booking"
//               className="h-btn h-btn--outline"
//               onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }) }}
//             >
//               <span>Reserve a Table</span>
//             </a>
//           </div>
//         </div>

//         {/* Scroll hint */}
//         <div className="h-scroll-hint">
//           <span className="h-scroll-text">Scroll</span>
//           <div className="h-scroll-line" />
//         </div>
//       </div>

//       {/* ── Info strip ── */}
//       <div className="h-infostrip">
//         <div className="h-container">
//           <div className="h-infostrip-inner">
//             <div className="h-info-item">
//               <MapPin size={14} strokeWidth={1.5} />
//               <span>RC7X+CW4, Tehsil Rd, Waris Colony, Okara</span>
//             </div>
//             <div className="h-info-divider" />
//             <div className="h-info-item">
//               <Phone size={14} strokeWidth={1.5} />
//               <a href="tel:03210001112">0321 000 1112</a>
//             </div>
//             <div className="h-info-divider" />
//             <div className="h-info-item">
//               <Clock size={14} strokeWidth={1.5} />
//               <span>Open · Closes 12:59 am</span>
//             </div>
//             <div className="h-info-divider hidden lg:block" />
//             <div className="h-info-price hidden lg:flex">
//               Rs 1,000 – 6,000 per person
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Stats row ── */}
//       <div className="h-stats">
//         <div className="h-container">
//           <div className="h-stats-grid">
//             {[
//               { value: '12+',  label: 'Years of Excellence' },
//               { value: '155+', label: 'Menu Creations' },
//               { value: '4.8★', label: 'Guest Rating' },
//               { value: '1.7K', label: 'Happy Followers' },
//             ].map((s) => (
//               <div key={s.label} className="h-stat">
//                 <div className="h-stat-value">{s.value}</div>
//                 <div className="h-stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         /* ── Hero dimensions ── */
//         .h-hero { height: 92vh; min-height: 580px; max-height: 1000px; }

//         /* ── Layout helpers ── */
//         .h-container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }
//         @media (max-width: 600px) { .h-container { padding: 0 20px; } }

//         /* ── Typography ── */
//         .h-eyebrow {
//           font-family: var(--font-body);
//           font-size: 0.7rem;
//           font-weight: 300;
//           letter-spacing: 0.28em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,0.75);
//         }
//         .h-title {
//           font-family: var(--font-display);
//           font-size: clamp(4rem, 10vw, 9rem);
//           font-weight: 300;
//           line-height: 0.92;
//           letter-spacing: -0.01em;
//           color: #f3ede2;
//           text-shadow: 0 2px 40px rgba(58,54,58,0.25);
//         }
//         .h-title em { font-style: italic; }
//         .h-sub {
//           font-family: var(--font-body);
//           font-size: clamp(0.9rem, 1.6vw, 1.1rem);
//           font-weight: 100;
//           line-height: 1.8;
//           letter-spacing: 0.06em;
//           color: rgba(243,237,226,0.85);
//           max-width: 520px;
//         }

//         /* ── CTA buttons ── */
//         .h-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center; }
//         .h-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-family: var(--font-body);
//           font-size: 0.68rem;
//           font-weight: 300;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           padding: 13px 30px;
//           cursor: pointer;
//           text-decoration: none;
//           transition: all 0.35s var(--ease-smooth);
//           border: 1px solid transparent;
//         }
//         .h-btn--dark {
//           background: rgba(243,237,226,0.92);
//           color: var(--fg);
//           border-color: rgba(243,237,226,0.92);
//         }
//         .h-btn--dark:hover { background: var(--fg); color: var(--bg); border-color: var(--fg); }
//         .h-btn--outline {
//           background: transparent;
//           color: rgba(243,237,226,0.9);
//           border-color: rgba(243,237,226,0.45);
//         }
//         .h-btn--outline:hover {
//           background: rgba(243,237,226,0.12);
//           border-color: rgba(243,237,226,0.8);
//         }

//         /* ── Scroll hint ── */
//         .h-scroll-hint {
//           position: absolute;
//           bottom: 32px; left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 8px;
//           z-index: 10;
//         }
//         .h-scroll-text {
//           font-family: var(--font-body);
//           font-size: 0.6rem;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,0.55);
//         }
//         .h-scroll-line {
//           width: 1px;
//           height: 50px;
//           background: linear-gradient(to bottom, rgba(243,237,226,0.5), transparent);
//           animation: scrollPulse 2s ease-in-out infinite;
//         }
//         @keyframes scrollPulse {
//           0%, 100% { opacity: 0.4; transform: scaleY(1); }
//           50% { opacity: 1; transform: scaleY(1.1); }
//         }

//         /* ── Info strip ── */
//         .h-infostrip {
//           background: var(--fg);
//           padding: 16px 0;
//         }
//         .h-infostrip-inner {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 24px;
//           flex-wrap: wrap;
//         }
//         .h-info-item {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-family: var(--font-body);
//           font-size: 0.7rem;
//           font-weight: 300;
//           letter-spacing: 0.1em;
//           color: rgba(243,237,226,0.65);
//         }
//         .h-info-item a { color: inherit; text-decoration: none; transition: color 0.3s; }
//         .h-info-item a:hover { color: var(--accent-light); }
//         .h-info-divider { width: 1px; height: 14px; background: rgba(243,237,226,0.2); }
//         .h-info-price {
//           font-family: var(--font-body);
//           font-size: 0.7rem;
//           letter-spacing: 0.1em;
//           color: var(--accent-light);
//           font-weight: 300;
//         }

//         /* ── Stats ── */
//         .h-stats { padding: 60px 0; background: var(--bg); }
//         .h-stats-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 1px;
//           background: var(--border);
//           border: 1px solid var(--border);
//         }
//         @media (max-width: 640px) { .h-stats-grid { grid-template-columns: repeat(2, 1fr); } }
//         .h-stat {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 40px 20px;
//           background: var(--bg);
//           gap: 8px;
//           text-align: center;
//           transition: background 0.3s;
//         }
//         .h-stat:hover { background: rgba(201,169,110,0.06); }
//         .h-stat-value {
//           font-family: var(--font-display);
//           font-size: clamp(2rem, 4vw, 3rem);
//           font-weight: 300;
//           color: var(--fg);
//           letter-spacing: 0.02em;
//           line-height: 1;
//         }
//         .h-stat-label {
//           font-family: var(--font-body);
//           font-size: 0.65rem;
//           font-weight: 300;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: var(--fg-muted);
//         }
//       `}</style>
//     </section>
//   )
// }








'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const [ready, setReady]     = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', fn); };
  }, []);

  return (
    <section id="home" ref={ref} style={{ position: 'relative', height: '100svh', minHeight: 620, overflow: 'hidden' }}>

      {/* ── Parallax image ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.38}px) scale(1.1)`,
          transformOrigin: 'center top',
          willChange: 'transform',
        }}
      />

      {/* ── Gradient overlays ── */}
      <div aria-hidden style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(30,26,23,.52) 0%, rgba(30,26,23,.18) 50%, rgba(30,26,23,.72) 100%)' }} />
      <div aria-hidden style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(30,26,23,.22), transparent, rgba(30,26,23,.22))' }} />

      {/* ── Content ── */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        gap: 0,
      }}>

        {/* Eyebrow */}
        <span style={{
          fontFamily: 'var(--sans)',
          fontSize: '.6rem',
          fontWeight: 300,
          letterSpacing: '.35em',
          textTransform: 'uppercase',
          color: 'rgba(243,237,226,.55)',
          marginBottom: 28,
          opacity: ready ? 1 : 0,
          transform: ready ? 'none' : 'translateY(16px)',
          transition: 'opacity 1.1s var(--ease-out) .1s, transform 1.1s var(--ease-out) .1s',
        }}>
          Okara · Punjab · Pakistan
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(4rem, 10vw, 9.5rem)',
          fontWeight: 300,
          lineHeight: .95,
          letterSpacing: '-.01em',
          color: '#f3ede2',
          marginBottom: 32,
          opacity: ready ? 1 : 0,
          transform: ready ? 'none' : 'translateY(30px)',
          transition: 'opacity 1.2s var(--ease-out) .22s, transform 1.2s var(--ease-out) .22s',
        }}>
          <em style={{ fontStyle: 'italic' }}>Cafe</em>
          <br />Janoshi
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--sans)',
          fontWeight: 100,
          fontSize: 'clamp(.9rem, 1.8vw, 1.15rem)',
          letterSpacing: '.08em',
          color: 'rgba(243,237,226,.72)',
          lineHeight: 1.75,
          maxWidth: 480,
          marginBottom: 48,
          opacity: ready ? 1 : 0,
          transform: ready ? 'none' : 'translateY(20px)',
          transition: 'opacity 1.1s var(--ease-out) .38s, transform 1.1s var(--ease-out) .38s',
        }}>
          A refined dining experience<br className="hero-br" /> in the heart of Okara.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center',
          opacity: ready ? 1 : 0,
          transform: ready ? 'none' : 'translateY(20px)',
          transition: 'opacity 1.1s var(--ease-out) .5s, transform 1.1s var(--ease-out) .5s',
        }}>
          <button
            className="hero-cta hero-cta-fill"
            onClick={() => go('#menu')}
          >
            <span>Explore Menu</span>
            <ArrowRight size={13} strokeWidth={1.5} />
          </button>
          <button
            className="hero-cta hero-cta-outline"
            onClick={() => go('#reservation')}
          >
            <span>Reserve a Table</span>
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 10,
        opacity: ready ? 1 : 0,
        transition: 'opacity 1s var(--ease-out) 1.2s',
      }}>
        <span style={{
          fontFamily: 'var(--sans)', fontSize: '.58rem',
          letterSpacing: '.28em', textTransform: 'uppercase',
          color: 'rgba(243,237,226,.4)',
        }}>Scroll</span>
        <div style={{
          width: 1, height: 52,
          background: 'linear-gradient(to bottom, rgba(243,237,226,.45), transparent)',
          animation: 'heroScroll 2.2s ease-in-out infinite',
        }} />
      </div>

      <style jsx global>{`
        @keyframes heroScroll {
          0%,100% { opacity:.35; transform: scaleY(1); }
          50%      { opacity: 1; transform: scaleY(1.15); }
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--sans);
          font-size: .63rem;
          font-weight: 300;
          letter-spacing: .24em;
          text-transform: uppercase;
          padding: 14px 34px;
          border: 1px solid transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color .45s var(--ease);
        }
        .hero-cta::before {
          content: '';
          position: absolute; inset: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .45s var(--ease);
          z-index: 0;
        }
        .hero-cta:hover::before { transform: scaleX(1); }
        .hero-cta > * { position: relative; z-index: 1; }

        .hero-cta-fill {
          background: rgba(243,237,226,.95);
          color: var(--ink);
          border-color: rgba(243,237,226,.95);
        }
        .hero-cta-fill::before { background: var(--charcoal-mid); }
        .hero-cta-fill:hover { color: var(--cream); }

        .hero-cta-outline {
          color: rgba(243,237,226,.88);
          border-color: rgba(243,237,226,.38);
        }
        .hero-cta-outline::before { background: rgba(243,237,226,.1); }
        .hero-cta-outline:hover { color: rgba(243,237,226,.88); }

        @media (max-width: 480px) { .hero-br { display: none; } }
      `}</style>
    </section>
  );
}