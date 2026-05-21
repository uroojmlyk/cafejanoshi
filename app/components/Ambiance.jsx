'use client';
import { useEffect, useRef, useState } from 'react';

const SHOTS = [
  { id:1, src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85', label:'The Dining Hall',  size:'large' },
  { id:2, src:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',  label:'Intimate Corner', size:'small' },
  { id:3, src:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',  label:'Coffee Bar',      size:'small' },
  { id:4, src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',label:'Evening Vibe',    size:'medium' },
  { id:5, src:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',  label:'The Corner Table',size:'small' },
  { id:6, src:'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80',  label:'Warm Lighting',   size:'small' },
];

function Shot({ s, delay, onOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity=1; }, delay); obs.disconnect(); }
    }, { threshold:.04 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`amb-shot amb-${s.size}`} style={{ opacity:0, transition:`opacity 1s var(--ease-out) ${delay}ms` }} onClick={() => onOpen(s)}>
      <img src={s.src} alt={s.label} className="amb-img" loading="lazy"/>
      <div className="amb-ov"><span className="amb-ov-label">{s.label}</span></div>
    </div>
  );
}

export default function Ambiance() {
  const ref = useRef(null);
  const [lb, setLb] = useState(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  useEffect(() => { const fn = (e) => { if (e.key==='Escape') setLb(null); }; window.addEventListener('keydown', fn); return () => window.removeEventListener('keydown', fn); }, []);

  return (
    <section id="amb" style={{ background:'var(--cream)', padding:'130px 0 110px' }}>
      <div className="wrap">
        <div ref={ref} className="reveal" style={{ marginBottom:64, display:'flex', alignItems:'flex-end', gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:260 }}>
            <span className="eyebrow">Our Space</span>
            <h2>Where every corner<br/><em style={{fontStyle:'italic'}}>breathes atmosphere</em></h2>
          </div>
          <p style={{ flex:1, minWidth:260, maxWidth:380, paddingBottom:8 }}>
            Thoughtfully designed for warmth and intimacy — from sunlit afternoons to candlelit evenings, 
            every visit feels like a world of its own.
          </p>
        </div>
        <div className="amb-grid">
          {SHOTS.map((s, i) => <Shot key={s.id} s={s} delay={i*80} onOpen={setLb}/>)}
        </div>
      </div>

      {lb && (
        <div className="amb-lb" onClick={() => setLb(null)}>
          <div className="amb-lb-card" onClick={e => e.stopPropagation()}>
            <img src={lb.src} alt={lb.label} style={{ maxWidth:'90vw', maxHeight:'78vh', objectFit:'contain', display:'block' }}/>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 0' }}>
              <span style={{ fontFamily:'var(--serif)', fontSize:'1.1rem', fontWeight:400, color:'rgba(243,237,226,.8)', fontStyle:'italic' }}>{lb.label}</span>
              <button onClick={() => setLb(null)} style={{ fontSize:'.9rem', color:'rgba(243,237,226,.5)', width:30, height:30, border:'1px solid rgba(243,237,226,.2)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .3s' }}>✕</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .amb-grid { display:grid; grid-template-columns:repeat(12,1fr); grid-auto-rows:220px; gap:5px; }
        @media(max-width:900px){.amb-grid{grid-template-columns:repeat(6,1fr);grid-auto-rows:180px}}
        @media(max-width:540px){.amb-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:180px}}

        .amb-shot { position:relative; overflow:hidden; cursor:pointer; background:var(--cream-2); }
        .amb-large  { grid-column:span 6; grid-row:span 2; }
        .amb-medium { grid-column:span 4; grid-row:span 2; }
        .amb-small  { grid-column:span 3; }
        @media(max-width:900px){.amb-large,.amb-medium{grid-column:span 4}.amb-small{grid-column:span 3}}
        @media(max-width:540px){.amb-large,.amb-medium,.amb-small{grid-column:span 2;grid-row:span 1}}

        .amb-img { width:100%; height:100%; object-fit:cover; filter:brightness(.82); transition:transform .95s var(--ease), filter .5s; }
        .amb-shot:hover .amb-img { transform:scale(1.07); filter:brightness(.92); }
        .amb-ov { position:absolute; inset:0; background:linear-gradient(to top, rgba(30,26,23,.7) 0%, transparent 55%); opacity:0; transition:opacity .4s var(--ease); display:flex; align-items:flex-end; padding:18px; }
        .amb-shot:hover .amb-ov { opacity:1; }
        .amb-ov-label { font-family:var(--serif); font-size:1.1rem; font-weight:400; color:#f3ede2; font-style:italic; }

        .amb-lb { position:fixed; inset:0; z-index:900; background:rgba(30,26,23,.92); backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:center; animation:lbFade .35s var(--ease); cursor:pointer; }
        @keyframes lbFade { from{opacity:0} to{opacity:1} }
        .amb-lb-card { cursor:default; animation:lbScale .4s var(--ease-out); }
        @keyframes lbScale { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </section>
  );
}