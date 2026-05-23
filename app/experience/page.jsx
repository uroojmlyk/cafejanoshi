

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';
// import { ArrowRight, Coffee, Cake, Users, Star } from 'lucide-react';

// const PILLARS = [
//   { 
//     n:'01', 
//     title:'Artisan Coffee', 
//     body:'From velvety lattes to our signature Lotus and Spanish creations — every cup is crafted with intention and served with precision.', 
//     img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
//   },
//   { 
//     n:'02', 
//     title:'Handcrafted Desserts', 
//     body:'Our legendary Chocolate Dome Cake, warm Arabic Kunafa, and White Lava Cake define indulgence in Okara. Every dessert is theatre.', 
//     img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
//   },
//   { 
//     n:'03', 
//     title:'Aesthetic Ambiance', 
//     body:'Warm lighting, curated interiors, private dining rooms — Cafe Janoshi transforms every visit into a moment worth remembering.', 
//     img:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=85',
//   },
//   { 
//     n:'04', 
//     title:'Premium Dining', 
//     body:'From aged Rib Eye steaks to freshly prepared Thai & Chinese — our kitchen speaks the language of quality, every single time.', 
//     img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
//   },
// ];

// function Card({ p, delay }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) { 
//         setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, delay); 
//         obs.disconnect(); 
//       }
//     }, { threshold: .12 });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [delay]);
  
//   return (
//     <div ref={ref} className="exp-card" style={{ opacity:0, transform:'translateY(36px)', transition:'opacity 1s var(--ease-out), transform 1s var(--ease-out)' }}>
//       <div className="exp-img">
//         <img src={p.img} alt={p.title} loading="lazy"/>
//       </div>
//       <div className="exp-num">{p.n}</div>
//       <div className="exp-title">{p.title}</div>
//       <p className="exp-body">{p.body}</p>
//     </div>
//   );
// }

// export default function ExperiencePage() {
//   const heroRef = useRef(null);
//   const pillarsRef = useRef(null);
//   const statsRef = useRef(null);
//   const philosophyRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) entry.target.classList.add('on');
//       });
//     }, { threshold: 0.1 });
    
//     if (heroRef.current) obs.observe(heroRef.current);
//     if (pillarsRef.current) obs.observe(pillarsRef.current);
//     if (statsRef.current) obs.observe(statsRef.current);
//     if (philosophyRef.current) obs.observe(philosophyRef.current);
//     if (ctaRef.current) obs.observe(ctaRef.current);
    
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Hero Section - Fixed height and background */}
//       <div className="exp-hero">
//         <div className="exp-hero-bg"></div>
//         <div className="exp-hero-overlay"></div>
//         <div className="wrap" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', alignItems:'center' }}>
//           <div ref={heroRef} className="reveal exp-hero-content">
//             <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.45)' }}>Since 2020</span>
//             <h1 className="exp-hero-title">The Janoshi<br/><em>Experience</em></h1>
//             <p className="exp-hero-text">More than a cafe — a sanctuary of taste, ambiance, and stories shared over exceptional food.</p>
//             <div className="exp-hero-buttons">
//               <Link href="/menu" className="btn btn-ol">Explore Menu <ArrowRight size={14} /></Link>
//               <button onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior:'smooth' })} className="btn btn-ol" style={{ borderColor: 'rgba(243,237,226,0.2)' }}>Reserve a Table</button>
//             </div>
//           </div>
//         </div>
//         <div className="exp-hero-scroll"><span>Scroll</span><div className="exp-hero-scroll-line"></div></div>
//       </div>

//       {/* Philosophy Section - Fixed background and spacing */}
//       <section style={{ background: 'var(--cream)', padding: '100px 0', position: 'relative' }}>
//         <div className="wrap">
//           <div ref={philosophyRef} className="reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
//             <span className="eyebrow">Our Philosophy</span>
//             <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: 24 }}>Where every detail<br/>tells a <em style={{ fontStyle: 'italic' }}>story</em></h2>
//             <p style={{ fontSize: '1.05rem', color: 'var(--ink-2)', lineHeight: 1.8 }}>Cafe Janoshi was born from a simple belief — that exceptional food deserves an exceptional setting. We don't just serve meals; we craft moments that linger in memory long after the last bite.</p>
//           </div>
//         </div>
//       </section>

//       {/* Four Pillars Section - Fixed background contrast */}
//       <section style={{ background: 'var(--cream-2)', padding: '100px 0', position: 'relative' }}>
//         <div className="wrap">
//           <div ref={pillarsRef} className="reveal" style={{ marginBottom: 72, textAlign: 'center' }}>
//             <span className="eyebrow">Four Pillars</span>
//             <h2 style={{ maxWidth: 700, margin: '0 auto' }}>What makes<br/><em style={{ fontStyle: 'italic' }}>us different</em></h2>
//             <p style={{ maxWidth: 500, margin: '20px auto 0', color: 'var(--ink-2)' }}>Every element of Cafe Janoshi is designed with intention — from the first sip to the last lingering moment.</p>
//           </div>
//           <div className="exp-grid">
//             {PILLARS.map((p, i) => <Card key={p.n} p={p} delay={i*120}/>)}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Fixed dark background */}
//       <section style={{ background: 'var(--dark)', padding: '90px 0', position: 'relative' }}>
//         <div className="wrap">
//           <div ref={statsRef} className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
//             <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.4)' }}>Janoshi in Numbers</span>
//             <h2 style={{ color: 'var(--cream)', maxWidth: 600, margin: '0 auto' }}>Crafting moments<br/><em style={{ fontStyle: 'italic' }}>since 2020</em></h2>
//           </div>
//           <div className="exp-stats-grid">
//             <div className="exp-stat"><div className="exp-stat-icon"><Users size={32} strokeWidth={1} /></div><div className="exp-stat-value">3500+</div><div className="exp-stat-label">Happy Guests</div></div>
//             <div className="exp-stat"><div className="exp-stat-icon"><Coffee size={32} strokeWidth={1} /></div><div className="exp-stat-value">180+</div><div className="exp-stat-label">Coffee Varieties</div></div>
//             <div className="exp-stat"><div className="exp-stat-icon"><Cake size={32} strokeWidth={1} /></div><div className="exp-stat-value">45+</div><div className="exp-stat-label">Signature Dishes</div></div>
//             <div className="exp-stat"><div className="exp-stat-icon"><Star size={32} strokeWidth={1} /></div><div className="exp-stat-value">4.9</div><div className="exp-stat-label">Guest Rating</div></div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Fixed background */}
//       <section style={{ background: 'var(--cream)', padding: '80px 0', textAlign: 'center', position: 'relative' }}>
//         <div className="wrap">
//           <div ref={ctaRef} className="reveal">
//             <span className="eyebrow">Visit Us</span>
//             <h2 style={{ marginBottom: 20 }}>Ready for a<br/><em style={{ fontStyle: 'italic' }}>memorable experience?</em></h2>
//             <button onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior:'smooth' })} className="btn btn-od">Reserve Your Table</button>
//           </div>
//         </div>
//       </section>

//       <style jsx global>{`
//         .exp-hero {
//           position: relative;
//           height: 85vh;
//           min-height: 600px;
//           overflow: hidden;
//           background: var(--dark);
//         }
//         .exp-hero-bg {
//           position: absolute;
//           inset: 0;
//           background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90');
//           background-size: cover;
//           background-position: center 30%;
//           transform: scale(1.05);
//           animation: heroZoom 20s ease-out forwards;
//         }
//         @keyframes heroZoom {
//           from { transform: scale(1.05); }
//           to { transform: scale(1.1); }
//         }
//         .exp-hero-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, rgba(30,26,23,0.3) 0%, rgba(30,26,23,0.7) 100%);
//         }
//         .exp-hero-content { max-width: 700px; }
//         .exp-hero-title {
//           font-family: var(--serif);
//           font-size: clamp(3rem, 7vw, 6.5rem);
//           font-weight: 400;
//           line-height: 0.95;
//           color: var(--cream);
//           margin-bottom: 24px;
//         }
//         .exp-hero-title em { font-style: italic; font-weight: 300; }
//         .exp-hero-text {
//           font-size: 1rem;
//           color: rgba(243,237,226,0.7);
//           max-width: 500px;
//           margin-bottom: 40px;
//           line-height: 1.75;
//         }
//         .exp-hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
//         .exp-hero-scroll {
//           position: absolute;
//           bottom: 32px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           opacity: 0;
//           animation: fadeUpScroll 1s ease-out 1.2s forwards;
//         }
//         @keyframes fadeUpScroll {
//           from { opacity: 0; transform: translateX(-50%) translateY(10px); }
//           to { opacity: 0.5; transform: translateX(-50%) translateY(0); }
//         }
//         .exp-hero-scroll span {
//           font-family: var(--sans);
//           font-size: 0.55rem;
//           font-weight: 600;
//           letter-spacing: 0.26em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,0.5);
//         }
//         .exp-hero-scroll-line {
//           width: 1px;
//           height: 50px;
//           background: linear-gradient(to bottom, rgba(243,237,226,0.5), transparent);
//           animation: scrollLine 2.2s ease-in-out infinite;
//         }
//         @keyframes scrollLine {
//           0%, 100% { opacity: 0.3; transform: scaleY(1); }
//           50% { opacity: 1; transform: scaleY(1.2); }
//         }
//         .exp-grid { 
//           display: grid; 
//           grid-template-columns: repeat(4, 1fr); 
//           gap: 2px; 
//           background: var(--border); 
//           border: 1px solid var(--border); 
//         }
//         @media (max-width: 1024px) { .exp-grid { grid-template-columns: repeat(2, 1fr); } }
//         @media (max-width: 640px) { .exp-grid { grid-template-columns: 1fr; } }
//         .exp-card { 
//           background: var(--cream-2); 
//           padding: 40px 32px; 
//           display: flex; 
//           flex-direction: column; 
//           transition: background 0.4s var(--ease); 
//         }
//         .exp-card:hover { background: var(--cream); }
//         .exp-img { 
//           width: 100%; 
//           aspect-ratio: 4/3; 
//           overflow: hidden; 
//           margin-bottom: 28px; 
//           background: var(--cream); 
//         }
//         .exp-img img { 
//           width: 100%; 
//           height: 100%; 
//           object-fit: cover; 
//           transition: transform 0.9s var(--ease); 
//         }
//         .exp-card:hover .exp-img img { transform: scale(1.05); }
//         .exp-num { 
//           font-family: var(--serif); 
//           font-size: 2.5rem; 
//           font-weight: 300; 
//           color: var(--border); 
//           line-height: 1; 
//           margin-bottom: 16px; 
//         }
//         .exp-title { 
//           font-family: var(--serif); 
//           font-size: 1.5rem; 
//           font-weight: 400; 
//           color: var(--ink); 
//           line-height: 1.2; 
//           margin-bottom: 12px; 
//         }
//         .exp-body { 
//           font-family: var(--sans); 
//           font-size: 0.85rem; 
//           font-weight: 400; 
//           color: var(--ink-2); 
//           line-height: 1.75; 
//         }
//         .exp-stats-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 48px;
//           text-align: center;
//         }
//         @media (max-width: 768px) { .exp-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; } }
//         @media (max-width: 480px) { .exp-stats-grid { grid-template-columns: 1fr; gap: 40px; } }
//         .exp-stat {
//           opacity: 0;
//           animation: fadeUpStat 0.7s var(--ease-out) forwards;
//         }
//         .exp-stat:nth-child(1) { animation-delay: 0.1s; }
//         .exp-stat:nth-child(2) { animation-delay: 0.2s; }
//         .exp-stat:nth-child(3) { animation-delay: 0.3s; }
//         .exp-stat:nth-child(4) { animation-delay: 0.4s; }
//         @keyframes fadeUpStat {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: none; }
//         }
//         .exp-stat-icon { color: var(--gold); margin-bottom: 16px; }
//         .exp-stat-value { font-family: var(--serif); font-size: 3rem; font-weight: 400; color: var(--cream); margin-bottom: 8px; }
//         .exp-stat-label { font-family: var(--sans); font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(243,237,226,0.5); }
//         .reveal { opacity: 0; transform: translateY(40px); transition: opacity 1s var(--ease-out), transform 1s var(--ease-out); }
//         .reveal.on { opacity: 1; transform: none; }
//         @media (max-width: 768px) {
//           .exp-hero { min-height: 550px; }
//           .exp-hero-buttons { flex-direction: column; align-items: flex-start; }
//         }
//       `}</style>
//     </>
//   );
// }










'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Coffee, Cake, Users, Star, Clock, MapPin, Heart } from 'lucide-react';

const PILLARS = [
  { n:'01', title:'Artisan Coffee',       body:'From velvety lattes to our signature Lotus and Spanish creations — every cup is crafted with intention and served with precision.', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85' },
  { n:'02', title:'Handcrafted Desserts', body:'Our legendary Chocolate Dome Cake, warm Arabic Kunafa, and White Lava Cake define indulgence in Okara. Every dessert is theatre.', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85' },
  { n:'03', title:'Aesthetic Ambiance',   body:'Warm lighting, curated interiors, private dining rooms — Cafe Janoshi transforms every visit into a moment worth remembering.', img:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=85' },
  { n:'04', title:'Premium Dining',       body:'From aged Rib Eye steaks to freshly prepared Thai & Chinese — our kitchen speaks the language of quality, every single time.', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85' },
];

const STATS = [
  { val:'12+',   label:'Years in Okara',    icon:<Users  size={32} strokeWidth={1}/> },
  { val:'155+',  label:'Menu Creations',    icon:<Coffee size={32} strokeWidth={1}/> },
  { val:'4.8★',  label:'Guest Rating',      icon:<Star   size={32} strokeWidth={1}/> },
  { val:'1,700+',label:'Happy Followers',   icon:<Cake   size={32} strokeWidth={1}/> },
];

function useReveal(th=.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:th });
    obs.observe(el); return () => obs.disconnect();
  }, [th]);
  return ref;
}

function PillarCard({ p, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, delay); obs.disconnect(); }
    }, { threshold:.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="xp-card" style={{ opacity:0, transform:'translateY(32px)', transition:'opacity .9s var(--ease-out), transform .9s var(--ease-out)' }}>
      <div className="xp-card-img"><img src={p.img} alt={p.title} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .9s var(--ease)' }}/></div>
      <div className="xp-card-num">{p.n}</div>
      <div className="xp-card-title">{p.title}</div>
      <p className="xp-card-body">{p.body}</p>
    </div>
  );
}

export default function ExperiencePage() {
  const [ready, setReady] = useState(false);
  const h2Ref  = useReveal();
  const pilRef = useReveal();
  const imgRef = useReveal();
  const stRef  = useReveal();
  const ctaRef = useReveal();
  const lRef   = useRef(null);
  const rRef   = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { lRef.current?.classList.add('on'); rRef.current?.classList.add('on'); obs.disconnect(); }
    }, { threshold:.1 });
    if (lRef.current) obs.observe(lRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position:'relative', height:'85vh', minHeight:580, overflow:'hidden', background:'var(--dark)' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90)`, backgroundSize:'cover', backgroundPosition:'center 30%', transform:'scale(1.05)', animation:'xpHZoom 20s ease-out forwards' }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(30,26,23,.32) 0%, rgba(30,26,23,.72) 100%)' }}/>
        <div className="wrap" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', alignItems:'center' }}>
          <div style={{ opacity:ready?1:0, transform:ready?'none':'translateY(28px)', transition:'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)', maxWidth:680 }}>
            <span className="eyebrow eyebrow-lt">Since 2012</span>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(3.2rem,8vw,7rem)', fontWeight:400, lineHeight:.95, color:'#f3ede2', marginBottom:22 }}>
              The Janoshi<br/><em style={{fontStyle:'italic'}}>Experience</em>
            </h1>
            <p style={{ fontFamily:'var(--sans)', fontWeight:400, fontSize:'clamp(.9rem,1.8vw,1.05rem)', color:'rgba(243,237,226,.65)', lineHeight:1.8, maxWidth:500, marginBottom:44 }}>
              More than a café — a sanctuary of taste, ambiance, and stories shared over exceptional food in the heart of Okara.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <Link href="/menu" className="btn btn-sl"><span>Explore Menu</span><ArrowRight size={13} strokeWidth={2}/></Link>
              <Link href="/reserve" className="btn btn-ol"><span>Reserve a Table</span></Link>
            </div>
          </div>
        </div>
        <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:10, opacity:ready?1:0, transition:'opacity 1s ease 1.2s' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:'.55rem', fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'rgba(243,237,226,.38)' }}>Scroll</span>
          <div style={{ width:1, height:48, background:'linear-gradient(to bottom, rgba(243,237,226,.45), transparent)', animation:'hscroll 2.2s ease-in-out infinite' }}/>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section style={{ background:'var(--cream)', padding:'120px 0' }}>
        <div className="wrap">
          <div ref={h2Ref} className="reveal" style={{ textAlign:'center', maxWidth:820, margin:'0 auto' }}>
            <span className="eyebrow">Our Philosophy</span>
            <h2 style={{ marginBottom:24 }}>Where every detail<br/>tells a <em style={{fontStyle:'italic'}}>story</em></h2>
            <p style={{ fontSize:'1.05rem', color:'var(--ink-2)', lineHeight:1.85, maxWidth:680, margin:'0 auto' }}>
              Cafe Janoshi was born from a simple belief — that exceptional food deserves an exceptional setting. 
              We don't just serve meals; we craft moments that linger in memory long after the last bite. 
              From our first day on Tehsil Road to becoming Okara's most beloved dining destination, 
              that belief has never wavered.
            </p>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section style={{ background:'var(--cream-2)', padding:'100px 0' }}>
        <div className="wrap">
          <div ref={pilRef} className="reveal" style={{ textAlign:'center', marginBottom:72 }}>
            <span className="eyebrow">Four Pillars</span>
            <h2 style={{ maxWidth:600, margin:'0 auto', marginBottom:20 }}>What makes<br/><em style={{fontStyle:'italic'}}>us different</em></h2>
            <p style={{ color:'var(--ink-2)', maxWidth:460, margin:'0 auto', fontSize:'.95rem' }}>
              Every element of Cafe Janoshi is designed with intention — from the first sip to the last lingering moment.
            </p>
          </div>
          <div className="xp-grid">
            {PILLARS.map((p, i) => <PillarCard key={p.n} p={p} delay={i*100}/>)}
          </div>
        </div>
      </section>

      {/* ── Full-width cinematic break ── */}
      <div style={{ position:'relative', height:'50vh', minHeight:360, overflow:'hidden', background:'var(--dark)' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85)`, backgroundSize:'cover', backgroundPosition:'center', filter:'brightness(.55)' }}/>
        <div style={{ position:'absolute', inset:0, background:'rgba(30,26,23,.35)' }}/>
        <div className="wrap" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', gap:12 }}>
          <span className="eyebrow eyebrow-lt">The Setting</span>
          <h3 style={{ color:'#f3ede2', fontFamily:'var(--serif)', fontWeight:400, fontSize:'clamp(1.6rem,3.5vw,2.8rem)' }}>
            An atmosphere worth <em style={{fontStyle:'italic'}}>travelling for</em>
          </h3>
        </div>
      </div>

      {/* ── The Vibe — two col ── */}
      <section style={{ background:'var(--cream)', padding:'120px 0' }}>
        <div className="wrap">
          <div className="xp-vibe">
            <div ref={lRef} className="reveal-l xp-vibe-text">
              <span className="eyebrow">The Vibe</span>
              <h2 style={{ marginBottom:24 }}>Where elegance<br/>meets <em style={{fontStyle:'italic'}}>warmth</em></h2>
              <p style={{ marginBottom:20, color:'var(--ink-2)' }}>
                Step into Cafe Janoshi and feel the difference. Soft lighting, curated interiors, 
                intimate corners for quiet conversations, and lively spaces for celebrations.
              </p>
              <p style={{ marginBottom:40, color:'var(--ink-2)' }}>
                Whether you're here for a morning coffee, a business lunch, or a romantic dinner — 
                every corner tells a story of thoughtful design.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:40 }}>
                {[
                  { icon:<Clock size={16} strokeWidth={1.5}/>,  text:'Open daily · 10:00 am – 12:59 am' },
                  { icon:<MapPin size={16} strokeWidth={1.5}/>, text:'Tehsil Rd, Waris Colony, Okara' },
                  { icon:<Heart size={16} strokeWidth={1.5}/>,  text:'Private dining room available' },
                ].map((f,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <span style={{ color:'var(--gold)', flexShrink:0 }}>{f.icon}</span>
                    <span style={{ fontFamily:'var(--sans)', fontSize:'.88rem', fontWeight:400, color:'var(--ink-2)' }}>{f.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/reserve" className="btn btn-od"><span>Reserve Your Table</span><ArrowRight size={13} strokeWidth={2}/></Link>
            </div>
            <div ref={rRef} className="reveal-r xp-vibe-imgs">
              <div style={{ width:'100%', aspectRatio:'4/5', overflow:'hidden', marginBottom:16, background:'var(--cream-2)' }}>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85" alt="Cafe interior" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .9s var(--ease)' }} className="xp-hov-img"/>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                {['https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=85','https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=85'].map((src,i) => (
                  <div key={i} style={{ aspectRatio:'1', overflow:'hidden', background:'var(--cream-2)' }}>
                    <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .9s var(--ease)' }} className="xp-hov-img"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background:'var(--dark)', padding:'90px 0' }}>
        <div className="wrap">
          <div ref={stRef} className="reveal" style={{ textAlign:'center', marginBottom:64 }}>
            <span className="eyebrow eyebrow-lt">Janoshi in Numbers</span>
            <h2 style={{ color:'#f3ede2', maxWidth:500, margin:'0 auto' }}>
              Crafting moments<br/><em style={{fontStyle:'italic'}}>since 2012</em>
            </h2>
          </div>
          <div className="xp-stats">
            {STATS.map((s,i) => (
              <div key={i} className="xp-stat" style={{ animationDelay:`${i*.12+.2}s` }}>
                <div style={{ color:'var(--gold)', marginBottom:16 }}>{s.icon}</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(2.2rem,4vw,3.2rem)', fontWeight:400, color:'#f3ede2', marginBottom:8, lineHeight:1 }}>{s.val}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:'.65rem', fontWeight:600, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(243,237,226,.45)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background:'var(--cream)', padding:'100px 0', textAlign:'center' }}>
        <div className="wrap">
          <div ref={ctaRef} className="reveal" style={{ maxWidth:640, margin:'0 auto' }}>
            <span className="eyebrow">Visit Us</span>
            <h2 style={{ marginBottom:20 }}>Ready for a<br/><em style={{fontStyle:'italic'}}>memorable experience?</em></h2>
            <p style={{ color:'var(--ink-2)', marginBottom:40, fontSize:'.95rem' }}>
              Whether it's a casual coffee, family gathering, or special celebration — we look forward to welcoming you.
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <Link href="/reserve" className="btn btn-od"><span>Reserve a Table</span><ArrowRight size={13} strokeWidth={2}/></Link>
              <Link href="/menu" className="btn btn-sd"><span>Browse Menu</span></Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes xpHZoom { from{transform:scale(1.05)} to{transform:scale(1.1)} }
        @keyframes hscroll  { 0%,100%{opacity:.35} 50%{opacity:1} }

        .xp-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        @media(max-width:1024px){.xp-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px) {.xp-grid{grid-template-columns:1fr}}

        .xp-card { background:var(--cream-2); padding:40px 32px; display:flex; flex-direction:column; transition:background .4s var(--ease); overflow:hidden; }
        .xp-card:hover { background:var(--cream); }
        .xp-card-img { width:100%; aspect-ratio:4/3; overflow:hidden; margin-bottom:28px; background:var(--cream); }
        .xp-card:hover .xp-card-img img { transform:scale(1.06); }
        .xp-card-num   { font-family:var(--serif); font-size:2.4rem; font-weight:300; color:var(--border); line-height:1; margin-bottom:16px; }
        .xp-card-title { font-family:var(--serif); font-size:1.5rem; font-weight:400; color:var(--ink); line-height:1.15; margin-bottom:12px; }
        .xp-card-body  { font-family:var(--sans); font-size:.88rem; font-weight:400; color:var(--ink-2); line-height:1.8; }

        .xp-vibe { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
        @media(max-width:900px){.xp-vibe{grid-template-columns:1fr;gap:60px}}
        .xp-vibe-text {}
        .xp-vibe-imgs {}
        .xp-hov-img:hover { transform:scale(1.04); }

        .xp-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(243,237,226,.07); border:1px solid rgba(243,237,226,.07); }
        @media(max-width:768px){.xp-stats{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:480px){.xp-stats{grid-template-columns:1fr}}
        .xp-stat { background:var(--dark); padding:48px 32px; text-align:center; opacity:0; animation:fadeUpStat .7s var(--ease-out) forwards; transition:background .4s; }
        .xp-stat:hover { background:var(--dark-2); }
        @keyframes fadeUpStat { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
      `}</style>
    </>
  );
}