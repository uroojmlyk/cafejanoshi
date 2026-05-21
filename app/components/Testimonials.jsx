'use client';
import { useEffect, useRef } from 'react';

const REVIEWS = [
  { name:'Ayesha R.',    loc:'Okara',     stars:5, text:'The ambiance alone is worth coming for. Felt like a completely different world — warm, beautiful, calm. The Dome Cake finished us off perfectly.' },
  { name:'Bilal K.',     loc:'Lahore',    stars:5, text:'Drove from Lahore just to try the Stuffed Chicken I saw online. Absolutely worth every kilometre. The attention to detail in every dish is remarkable.' },
  { name:'Sara M.',      loc:'Okara',     stars:5, text:'Our team\'s go-to for celebrations. The private dining room is a hidden gem — comfortable, elegant, and the food is always exceptional.' },
  { name:'Hassan A.',    loc:'Okara',     stars:5, text:'I\'ve tried the Rib Eye at many places in Punjab. Janoshi\'s version stands above everything — perfectly cooked, incredible sauces, stunning presentation.' },
  { name:'Maira F.',     loc:'Pakpattan', stars:5, text:'The Lotus Latte is like nothing I\'ve had anywhere. And the service — genuinely warm without being intrusive. Will keep coming back.' },
  { name:'Usman T.',     loc:'Okara',     stars:5, text:'Booked the private room for my daughter\'s birthday. Staff went above and beyond. The food, the decor, the cake — everything was flawless.' },
];

function Card({ r, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, delay); obs.disconnect(); }
    }, { threshold:.08 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="rv-card" style={{ opacity:0, transform:'translateY(32px)', transition:'opacity .9s var(--ease-out), transform .9s var(--ease-out)' }}>
      <div className="rv-stars">{Array(r.stars).fill(0).map((_,i)=><span key={i} style={{color:'var(--gold)',fontSize:'.75rem'}}>★</span>)}</div>
      <p className="rv-text">"{r.text}"</p>
      <div className="rv-author">
        <span className="rv-name">{r.name}</span>
        <span className="rv-loc">{r.loc}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background:'var(--cream)', padding:'130px 0 110px' }}>
      <div className="wrap">
        <div ref={ref} className="reveal" style={{ textAlign:'center', marginBottom:64 }}>
          <span className="eyebrow">What Our Guests Say</span>
          <h2>Voices that<br/><em style={{fontStyle:'italic'}}>speak for us</em></h2>
        </div>
        <div className="rv-grid">
          {REVIEWS.map((r,i) => <Card key={i} r={r} delay={i*75}/>)}
        </div>
        <div className="rv-strip">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14 }}>
            <div style={{ display:'flex', gap:3 }}>{Array(5).fill(0).map((_,i)=><span key={i} style={{color:'var(--gold)',fontSize:'.78rem'}}>★</span>)}</div>
            <span style={{ fontFamily:'var(--sans)', fontSize:'.68rem', fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink-2)' }}>
              4.8 rating · 70+ verified reviews on Google
            </span>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .rv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); margin-bottom:40px; }
        @media(max-width:900px){.rv-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.rv-grid{grid-template-columns:1fr}}
        .rv-card { background:var(--cream); padding:38px 32px; display:flex; flex-direction:column; gap:16px; transition:background .4s var(--ease); }
        .rv-card:hover { background:var(--cream-2); }
        .rv-stars { display:flex; gap:3px; }
        .rv-text { font-family:var(--serif); font-size:1.05rem; font-weight:400; font-style:italic; color:var(--ink); line-height:1.65; flex:1; }
        .rv-author { display:flex; flex-direction:column; gap:2px; }
        .rv-name { font-family:var(--sans); font-size:.72rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--ink); }
        .rv-loc  { font-family:var(--sans); font-size:.65rem; font-weight:400; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-3); }
        .rv-strip { border:1px solid var(--border); padding:18px 28px; }
      `}</style>
    </section>
  );
}