'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [ready,   setReady]   = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', fn); };
  }, []);

  const tr = (d, prop = 'opacity 1.2s ease, transform 1.2s ease') => ({
    opacity: ready ? 1 : 0,
    transform: ready ? 'none' : 'translateY(28px)',
    transition: prop,
    transitionDelay: d,
  });

  return (
    <section style={{ position:'relative', height:'100svh', minHeight:620, overflow:'hidden' }}>

      {/* BG image — parallax */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:`url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90)`,
        backgroundSize:'cover', backgroundPosition:'center',
        transform:`translateY(${scrollY * 0.35}px) scale(1.1)`,
        transformOrigin:'center top',
        willChange:'transform',
      }}/>

      {/* Overlays */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(30,26,23,.55) 0%, rgba(30,26,23,.18) 45%, rgba(30,26,23,.68) 100%)' }}/>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(30,26,23,.25), transparent, rgba(30,26,23,.25))' }}/>

      {/* Content */}
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 24px' }}>

        <span style={{ ...tr('0.1s'), fontFamily:'var(--sans)', fontSize:'.62rem', fontWeight:600, letterSpacing:'.32em', textTransform:'uppercase', color:'rgba(243,237,226,.5)', marginBottom:28 }}>
          Okara · Punjab · Pakistan
        </span>

        <h1 style={{ ...tr('0.25s'), fontFamily:'var(--serif)', fontSize:'clamp(4rem,10vw,9.5rem)', fontWeight:400, lineHeight:.95, color:'#f3ede2', marginBottom:28 }}>
          <em style={{ fontStyle:'italic' }}>Cafe</em><br/>Janoshi
        </h1>

        <p style={{ ...tr('0.4s'), fontFamily:'var(--sans)', fontWeight:400, fontSize:'clamp(.9rem,1.8vw,1.1rem)', letterSpacing:'.06em', color:'rgba(243,237,226,.7)', lineHeight:1.75, maxWidth:480, marginBottom:48 }}>
          A refined dining experience in the heart of Okara —<br/>where every meal becomes a memory.
        </p>

        <div style={{ ...tr('0.55s'), display:'flex', gap:14, flexWrap:'wrap', justifyContent:'center' }}>
          <Link
            href="/menu"
            style={{ display:'inline-flex', alignItems:'center', gap:9, fontFamily:'var(--sans)', fontSize:'.65rem', fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', padding:'14px 32px', background:'rgba(243,237,226,.95)', color:'var(--ink)', border:'1px solid rgba(243,237,226,.95)', transition:'all .45s var(--ease)', position:'relative', overflow:'hidden' }}
            className="hero-btn-fill"
          >
            Explore Menu <ArrowRight size={13} strokeWidth={2}/>
          </Link>
          <button
            onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior:'smooth' })}
            style={{ display:'inline-flex', alignItems:'center', gap:9, fontFamily:'var(--sans)', fontSize:'.65rem', fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', padding:'14px 32px', background:'transparent', color:'rgba(243,237,226,.9)', border:'1px solid rgba(243,237,226,.38)', transition:'all .45s var(--ease)' }}
            className="hero-btn-outline"
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:10, opacity: ready ? 1 : 0, transition:'opacity 1s ease 1.2s' }}>
        <span style={{ fontFamily:'var(--sans)', fontSize:'.58rem', fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'rgba(243,237,226,.38)' }}>Scroll</span>
        <div style={{ width:1, height:52, background:'linear-gradient(to bottom, rgba(243,237,226,.45), transparent)', animation:'hscroll 2.2s ease-in-out infinite' }}/>
      </div>

      <style jsx global>{`
        @keyframes hscroll { 0%,100%{opacity:.35} 50%{opacity:1} }
        .hero-btn-fill:hover  { background:var(--dark) !important; color:var(--cream) !important; }
        .hero-btn-outline:hover { background:rgba(243,237,226,.1) !important; border-color:rgba(243,237,226,.75) !important; }
      `}</style>
    </section>
  );
}