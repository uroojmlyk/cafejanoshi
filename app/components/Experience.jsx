'use client';
import { useEffect, useRef } from 'react';

const PILLARS = [
  { n:'01', title:'Artisan Coffee', body:'From velvety lattes to our signature Lotus and Spanish creations — every cup is crafted with intention and served with precision.', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80' },
  { n:'02', title:'Handcrafted Desserts', body:'Our legendary Chocolate Dome Cake, warm Arabic Kunafa, and White Lava Cake define indulgence in Okara. Every dessert is theatre.', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80' },
  { n:'03', title:'Aesthetic Ambiance', body:'Warm lighting, curated interiors, private dining rooms — Cafe Janoshi transforms every visit into a moment worth remembering.', img:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&q=80' },
  { n:'04', title:'Premium Dining', body:'From aged Rib Eye steaks to freshly prepared Thai & Chinese — our kitchen speaks the language of quality, every single time.', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80' },
];

function Card({ p, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, delay); obs.disconnect(); }
    }, { threshold: .08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="exp-card" style={{ opacity:0, transform:'translateY(36px)', transition:'opacity .9s var(--ease-out), transform .9s var(--ease-out)' }}>
      <div className="exp-img"><img src={p.img} alt={p.title} loading="lazy"/></div>
      <div className="exp-num">{p.n}</div>
      <div className="exp-title">{p.title}</div>
      <p className="exp-body">{p.body}</p>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section id="exp" style={{ background:'var(--cream)', padding:'130px 0 110px' }}>
      <div className="wrap">
        <div ref={ref} className="reveal" style={{ marginBottom:72 }}>
          <span className="eyebrow">The Janoshi Experience</span>
          <div style={{ display:'flex', alignItems:'flex-end', gap:40, flexWrap:'wrap' }}>
            <h2 style={{ flex:1, minWidth:260 }}>Why every table<br/><em style={{fontStyle:'italic'}}>tells a story</em></h2>
            <p style={{ flex:1, minWidth:260, maxWidth:400, paddingBottom:8, fontSize:'.95rem' }}>
              Cafe Janoshi was built on a single belief — that exceptional food deserves an exceptional setting. 
              Four pillars define everything we do.
            </p>
          </div>
        </div>
        <div className="exp-grid">
          {PILLARS.map((p, i) => <Card key={p.n} p={p} delay={i*90}/>)}
        </div>
      </div>
      <style jsx global>{`
        .exp-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--border); border:1px solid var(--border); }
        @media(max-width:1024px){.exp-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.exp-grid{grid-template-columns:1fr}}
        .exp-card { background:var(--cream); padding:40px 32px; display:flex; flex-direction:column; transition:background .4s var(--ease); overflow:hidden; }
        .exp-card:hover { background:var(--cream-2); }
        .exp-img { width:100%; aspect-ratio:4/3; overflow:hidden; margin-bottom:28px; background:var(--cream-2); }
        .exp-img img { width:100%; height:100%; object-fit:cover; transition:transform .9s var(--ease); }
        .exp-card:hover .exp-img img { transform:scale(1.05); }
        .exp-num { font-family:var(--serif); font-size:2.4rem; font-weight:300; color:var(--border); line-height:1; margin-bottom:16px; }
        .exp-title { font-family:var(--serif); font-size:1.55rem; font-weight:400; color:var(--ink); line-height:1.1; margin-bottom:12px; }
        .exp-body { font-family:var(--sans); font-size:.88rem; font-weight:400; color:var(--ink-2); line-height:1.8; }
      `}</style>
    </section>
  );
}