


'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Coffee, Cake, Users, Star, Clock, MapPin, Heart } from 'lucide-react';

const PILLARS = [
  { 
    n:'01', 
    title:'Artisan Coffee', 
    body:'From velvety lattes to our signature Lotus and Spanish creations — every cup is crafted with intention and served with precision.', 
    img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
    detail:'Single-origin beans · Slow roasted'
  },
  { 
    n:'02', 
    title:'Handcrafted Desserts', 
    body:'Our legendary Chocolate Dome Cake, warm Arabic Kunafa, and White Lava Cake define indulgence in Okara. Every dessert is theatre.', 
    img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    detail:'Made fresh daily · Artisanal recipes'
  },
  { 
    n:'03', 
    title:'Aesthetic Ambiance', 
    body:'Warm lighting, curated interiors, private dining rooms — Cafe Janoshi transforms every visit into a moment worth remembering.', 
    img:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=85',
    detail:'Intimate spaces · Thoughtful design'
  },
  { 
    n:'04', 
    title:'Premium Dining', 
    body:'From aged Rib Eye steaks to freshly prepared Thai & Chinese — our kitchen speaks the language of quality, every single time.', 
    img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
    detail:'Globally inspired · Locally loved'
  },
];

function Card({ p, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { 
        setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, delay); 
        obs.disconnect(); 
      }
    }, { threshold: .12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  
  return (
    <div ref={ref} className="exp-card" style={{ opacity:0, transform:'translateY(36px)', transition:'opacity 1s var(--ease-out), transform 1s var(--ease-out)' }}>
      <div className="exp-img">
        <img src={p.img} alt={p.title} loading="lazy"/>
        <div className="exp-img-overlay"></div>
      </div>
      <div className="exp-num">{p.n}</div>
      <div className="exp-title">{p.title}</div>
      <p className="exp-body">{p.body}</p>
      <span className="exp-detail">{p.detail}</span>
    </div>
  );
}

function ExpHero() {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="exp-hero">
      <div className="exp-hero-bg"></div>
      <div className="exp-hero-overlay"></div>
      
      <div className="wrap" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', alignItems:'center' }}>
        <div className="exp-hero-content" style={{ 
          opacity: ready ? 1 : 0, 
          transform: ready ? 'none' : 'translateY(32px)',
          transition: 'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)'
        }}>
          <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.45)', marginBottom: 24 }}>Since 2020</span>
          <h1 className="exp-hero-title">
            The Janoshi<br/>
            <em>Experience</em>
          </h1>
          <p className="exp-hero-text">
            More than a cafe — a sanctuary of taste, ambiance, and stories shared over exceptional food.
          </p>
          <div className="exp-hero-buttons">
            <Link href="/menu" className="btn btn-ol">
              Explore Menu <ArrowRight size={14} />
            </Link>
            <button 
              onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior:'smooth' })}
              className="btn btn-ol"
              style={{ borderColor: 'rgba(243,237,226,0.2)' }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
      
      <div className="exp-hero-scroll">
        <span>Scroll</span>
        <div className="exp-hero-scroll-line"></div>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  const headlineRef = useRef(null);
  const vibeRef = useRef(null);
  const statsRef = useRef(null);
  const philosophyRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('on');
      });
    }, { threshold: 0.15 });
    
    if (headlineRef.current) obs.observe(headlineRef.current);
    if (vibeRef.current) obs.observe(vibeRef.current);
    if (statsRef.current) obs.observe(statsRef.current);
    if (philosophyRef.current) obs.observe(philosophyRef.current);
    
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <ExpHero />

      {/* Philosophy Section - New cinematic addition */}
      <section style={{ background:'var(--cream)', padding:'140px 0' }}>
        <div className="wrap">
          <div ref={philosophyRef} className="exp-philosophy reveal">
            <div className="exp-philosophy-quote">
              <span className="eyebrow">Our Philosophy</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: 900, margin: '0 auto 32px' }}>
                Where every detail<br/>tells a <em style={{ fontStyle: 'italic' }}>story</em>
              </h2>
              <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.1rem', color: 'var(--ink-2)' }}>
                Cafe Janoshi was born from a simple belief — that exceptional food deserves an exceptional setting. 
                We don't just serve meals; we craft moments that linger in memory long after the last bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars Section - Enhanced spacing */}
      <section style={{ background:'var(--cream-2)', padding:'120px 0' }}>
        <div className="wrap">
          <div ref={headlineRef} className="reveal" style={{ marginBottom: 88, textAlign: 'center' }}>
            <span className="eyebrow">Four Pillars</span>
            <h2 style={{ maxWidth: 700, margin: '0 auto' }}>
              What makes<br/><em style={{ fontStyle: 'italic' }}>us different</em>
            </h2>
            <p style={{ maxWidth: 500, margin: '24px auto 0', fontSize: '0.95rem' }}>
              Every element of Cafe Janoshi is designed with intention — from the first sip to the last lingering moment.
            </p>
          </div>
          <div className="exp-grid">
            {PILLARS.map((p, i) => <Card key={p.n} p={p} delay={i*120}/>)}
          </div>
        </div>
      </section>

      {/* Immersive Image Break - Cinematic full-width */}
      <div className="exp-full-image">
        <div className="exp-full-image-inner">
          <div className="exp-full-image-caption">
            <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.5)' }}>The Setting</span>
            <h3 style={{ color: 'var(--cream)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>An atmosphere worth traveling for</h3>
          </div>
        </div>
      </div>

      {/* Ambiance Vibe Section - Refined layout */}
      <section style={{ background:'var(--cream)', padding:'120px 0' }}>
        <div className="wrap">
          <div ref={vibeRef} className="exp-ambiance">
            <div className="exp-ambiance-text reveal-l">
              <span className="eyebrow">The Vibe</span>
              <h2 style={{ marginBottom: 28 }}>
                Where elegance<br/>meets <em style={{ fontStyle: 'italic' }}>warmth</em>
              </h2>
              <p style={{ marginBottom: 24 }}>
                Step into Cafe Janoshi and feel the difference. Soft lighting, curated artwork, 
                intimate corners for quiet conversations, and lively spaces for celebrations.
              </p>
              <p style={{ marginBottom: 36 }}>
                Whether you're here for a morning coffee, a business lunch, or a romantic dinner — 
                every corner tells a story of thoughtful design.
              </p>
              <div className="exp-ambiance-features">
                <div className="exp-feature">
                  <Clock size={18} strokeWidth={1.2} />
                  <span>Open daily · 10am – 1am</span>
                </div>
                <div className="exp-feature">
                  <MapPin size={18} strokeWidth={1.2} />
                  <span>Tehsil Rd, Waris Colony, Okara</span>
                </div>
                <div className="exp-feature">
                  <Heart size={18} strokeWidth={1.2} />
                  <span>Private dining available</span>
                </div>
              </div>
              <button 
                onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior:'smooth' })}
                className="btn btn-od"
                style={{ marginTop: 32 }}
              >
                Reserve Your Table
              </button>
            </div>
            <div className="exp-ambiance-gallery reveal-r">
              <div className="exp-gallery-main">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85" alt="Cafe interior" />
              </div>
              <div className="exp-gallery-grid">
                <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=85" alt="Coffee art" />
                <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=85" alt="Dessert" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Elevated with better hierarchy */}
      <section style={{ background:'var(--dark)', padding:'100px 0', position:'relative' }}>
        <div className="exp-stats-pattern"></div>
        <div className="wrap" style={{ position:'relative', zIndex:2 }}>
          <div ref={statsRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.4)' }}>Janoshi in Numbers</span>
            <h2 style={{ color: 'var(--cream)', maxWidth: 600, margin: '0 auto' }}>
              Crafting moments<br/><em style={{ fontStyle: 'italic' }}>since 2020</em>
            </h2>
          </div>
          <div className="exp-stats-grid">
            {[
              { val: '3500+', label: 'Happy Guests', icon: <Users size={36} strokeWidth={1} /> },
              { val: '180+', label: 'Coffee Varieties', icon: <Coffee size={36} strokeWidth={1} /> },
              { val: '45+', label: 'Signature Dishes', icon: <Cake size={36} strokeWidth={1} /> },
              { val: '4.9', label: 'Guest Rating', icon: <Star size={36} strokeWidth={1} /> }
            ].map((stat, i) => (
              <div key={i} className="exp-stat" style={{ animationDelay: `${i * 0.15 + 0.3}s` }}>
                <div className="exp-stat-icon">{stat.icon}</div>
                <div className="exp-stat-value">{stat.val}</div>
                <div className="exp-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Elegant outro */}
      <section style={{ background:'var(--cream)', padding:'100px 0', textAlign:'center' }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 700, margin: '0 auto' }}>
            <span className="eyebrow">Visit Us</span>
            <h2 style={{ marginBottom: 24 }}>
              Ready for a<br/><em style={{ fontStyle: 'italic' }}>memorable experience?</em>
            </h2>
            <p style={{ marginBottom: 40, color: 'var(--ink-2)' }}>
              Whether it's a casual coffee, family gathering, or special celebration —<br/>
              we look forward to welcoming you.
            </p>
            <button 
              onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior:'smooth' })}
              className="btn btn-od"
            >
              Reserve Your Table
            </button>
          </div>
        </div>
      </section>

      {/* Global Styles - Elevated but consistent */}
      <style jsx global>{`
        /* Hero Section */
        .exp-hero {
          position: relative;
          height: 90vh;
          min-height: 700px;
          overflow: hidden;
          background: var(--dark);
        }
        
        .exp-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90');
          background-size: cover;
          background-position: center 30%;
          transform: scale(1.05);
          animation: heroZoom 20s ease-out forwards;
        }
        
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.1); }
        }
        
        .exp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(30,26,23,0.3) 0%, rgba(30,26,23,0.7) 100%);
        }
        
        .exp-hero-content {
          max-width: 800px;
        }
        
        .exp-hero-title {
          font-family: var(--serif);
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 400;
          line-height: 0.95;
          color: var(--cream);
          margin-bottom: 28px;
        }
        
        .exp-hero-title em {
          font-style: italic;
          font-weight: 300;
        }
        
        .exp-hero-text {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(243,237,226,0.7);
          max-width: 550px;
          margin-bottom: 48px;
          line-height: 1.8;
        }
        
        .exp-hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .exp-hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0.6;
          transition: opacity 0.6s;
          animation: fadeUpScroll 1s ease-out 1.2s forwards;
          opacity: 0;
        }
        
        @keyframes fadeUpScroll {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 0.6; transform: translateX(-50%) translateY(0); }
        }
        
        .exp-hero-scroll span {
          font-family: var(--sans);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(243,237,226,0.5);
        }
        
        .exp-hero-scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(243,237,226,0.5), transparent);
          animation: scrollLine 2.2s ease-in-out infinite;
        }
        
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        
        /* Philosophy Section */
        .exp-philosophy {
          text-align: center;
        }
        
        .exp-philosophy-quote {
          max-width: 900px;
          margin: 0 auto;
        }
        
        /* Grid - Enhanced */
        .exp-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 2px; 
          background: var(--border); 
          border: 1px solid var(--border); 
        }
        
        @media (max-width: 1024px) { 
          .exp-grid { grid-template-columns: repeat(2, 1fr); } 
        }
        
        @media (max-width: 640px) { 
          .exp-grid { grid-template-columns: 1fr; } 
        }
        
        .exp-card { 
          background: var(--cream-2); 
          padding: 48px 36px; 
          display: flex; 
          flex-direction: column; 
          transition: background 0.5s var(--ease); 
          overflow: hidden; 
          position: relative;
        }
        
        .exp-card:hover { background: var(--cream); }
        
        .exp-img { 
          width: 100%; 
          aspect-ratio: 4/3; 
          overflow: hidden; 
          margin-bottom: 32px; 
          background: var(--cream); 
          position: relative;
        }
        
        .exp-img img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 1.2s var(--ease); 
        }
        
        .exp-card:hover .exp-img img { transform: scale(1.06); }
        
        .exp-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 70%, rgba(30,26,23,0.1));
          pointer-events: none;
        }
        
        .exp-num { 
          font-family: var(--serif); 
          font-size: 2.8rem; 
          font-weight: 300; 
          color: var(--border); 
          line-height: 1; 
          margin-bottom: 20px; 
          letter-spacing: -0.02em;
        }
        
        .exp-title { 
          font-family: var(--serif); 
          font-size: 1.65rem; 
          font-weight: 400; 
          color: var(--ink); 
          line-height: 1.15; 
          margin-bottom: 14px; 
        }
        
        .exp-body { 
          font-family: var(--sans); 
          font-size: 0.88rem; 
          font-weight: 400; 
          color: var(--ink-2); 
          line-height: 1.75; 
          margin-bottom: 16px;
        }
        
        .exp-detail {
          font-family: var(--sans);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: 8px;
        }
        
        /* Full-width Image Break */
        .exp-full-image {
          position: relative;
          height: 60vh;
          min-height: 450px;
          overflow: hidden;
          background: var(--dark);
        }
        
        .exp-full-image-inner {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=85');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        
        .exp-full-image-caption {
          position: absolute;
          bottom: 64px;
          left: 0;
          right: 0;
          text-align: center;
          padding: 0 24px;
        }
        
        /* Ambiance Section - Refined */
        .exp-ambiance {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        @media (max-width: 900px) {
          .exp-ambiance {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        
        .exp-ambiance-text {
          opacity: 0;
          transition: opacity 1s var(--ease-out), transform 1s var(--ease-out);
          transform: translateX(-36px);
        }
        
        .exp-ambiance-text.on {
          opacity: 1;
          transform: none;
        }
        
        .exp-ambiance-gallery {
          opacity: 0;
          transition: opacity 1s var(--ease-out), transform 1s var(--ease-out);
          transform: translateX(36px);
        }
        
        .exp-ambiance-gallery.on {
          opacity: 1;
          transform: none;
        }
        
        .exp-ambiance-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }
        
        .exp-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--sans);
          font-size: 0.85rem;
          color: var(--ink-2);
        }
        
        .exp-feature svg {
          color: var(--gold);
          flex-shrink: 0;
        }
        
        .exp-gallery-main {
          margin-bottom: 20px;
        }
        
        .exp-gallery-main img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
        }
        
        .exp-gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .exp-gallery-grid img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }
        
        /* Stats Section */
        .exp-stats-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"0.3\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"12\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/></svg>');
          background-repeat: repeat;
          background-size: 48px;
          pointer-events: none;
        }
        
        .exp-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .exp-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
        }
        
        @media (max-width: 480px) {
          .exp-stats-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        
        .exp-stat {
          opacity: 0;
          animation: fadeUpStat 0.8s var(--ease-out) forwards;
        }
        
        @keyframes fadeUpStat {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        
        .exp-stat-icon {
          color: var(--gold);
          margin-bottom: 20px;
        }
        
        .exp-stat-value {
          font-family: var(--serif);
          font-size: 3.2rem;
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        
        .exp-stat-label {
          font-family: var(--sans);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(243,237,226,0.5);
        }
        
        /* Reveal Animations */
        .reveal, .reveal-l, .reveal-r {
          opacity: 0;
          transition: opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out);
        }
        
        .reveal { transform: translateY(48px); }
        .reveal-l { transform: translateX(-42px); }
        .reveal-r { transform: translateX(42px); }
        
        .reveal.on, .reveal-l.on, .reveal-r.on {
          opacity: 1;
          transform: none;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .exp-hero {
            min-height: 600px;
          }
          
          .exp-hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .exp-full-image-inner {
            background-attachment: scroll;
          }
        }
      `}</style>
    </>
  );
}