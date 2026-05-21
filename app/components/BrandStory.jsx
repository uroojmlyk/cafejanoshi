'use client';
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function BrandStory() {
  const lRef = useRef(null);
  const rRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { lRef.current?.classList.add('on'); rRef.current?.classList.add('on'); obs.disconnect(); }
    }, { threshold:.1 });
    if (lRef.current) obs.observe(lRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="story" style={{ background:'var(--dark)', padding:'130px 0 110px' }}>
      <div className="wrap">
        <div className="bs-grid">

          {/* Image col */}
          <div ref={lRef} className="reveal-l bs-img-col">
            <div className="bs-img-main">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85" alt="Cafe Janoshi interior" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </div>
            <div className="bs-badge">
              <span className="bs-badge-n">12+</span>
              <span className="bs-badge-t">Years in Okara</span>
            </div>
            <div className="bs-img-sm">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80" alt="Coffee craft" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </div>
          </div>

          {/* Content col */}
          <div ref={rRef} className="reveal-r bs-content">
            <span className="eyebrow eyebrow-lt">Our Philosophy</span>
            <h2 style={{ color:'#f3ede2', marginBottom:24, lineHeight:1.05 }}>
              Born from a<br/><em style={{fontStyle:'italic'}}>love of gathering</em>
            </h2>
            <p style={{ color:'rgba(243,237,226,.55)', marginBottom:18, fontSize:'.95rem', lineHeight:1.85 }}>
              Cafe Janoshi was founded with a simple conviction — that every person deserves a place 
              where they feel genuinely welcomed, beautifully fed, and reluctant to leave. What began 
              as a small café on Tehsil Road has grown into Okara's most beloved dining destination.
            </p>
            <p style={{ color:'rgba(243,237,226,.42)', marginBottom:44, fontSize:'.9rem', lineHeight:1.85 }}>
              Our kitchen draws from Thai, Italian, Continental and local traditions — weaving them 
              into a menu that surprises, satisfies, and keeps people coming back. Rs 1,000–6,000 
              per person · Private dining room · Good for kids' birthdays.
            </p>

            {/* Info rows */}
            <div className="bs-info">
              {[
                { icon:<MapPin size={14} strokeWidth={1.5}/>, text:'RC7X+CW4, Tehsil Rd, Waris Colony, Okara', href:'https://maps.google.com/?q=Cafe+Janoshi+Okara' },
                { icon:<Phone size={14} strokeWidth={1.5}/>,  text:'0321 000 1112', href:'tel:03210001112' },
                { icon:<Clock size={14} strokeWidth={1.5}/>,  text:'Monday – Sunday · 10:00 am – 12:59 am', href:null },
              ].map((r,i) => (
                <div key={i} className="bs-row">
                  <span className="bs-icon">{r.icon}</span>
                  {r.href
                    ? <a href={r.href} target={r.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="bs-text bs-link">{r.text}</a>
                    : <span className="bs-text">{r.text}</span>
                  }
                </div>
              ))}
            </div>

            <div className="bs-tags">
              {['Private Dining Room','Kids\' Birthday','Dine-in','Premium Dining','WhatsApp Orders'].map(t=>(
                <span key={t} className="bs-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bs-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
        @media(max-width:900px){.bs-grid{grid-template-columns:1fr;gap:60px}}

        .bs-img-col { position:relative; }
        .bs-img-main { width:100%; aspect-ratio:4/5; overflow:hidden; background:var(--dark-2); }
        .bs-img-main img { transition:transform .9s var(--ease); }
        .bs-img-main:hover img { transform:scale(1.04); }
        .bs-badge { position:absolute; top:36px; left:-20px; background:var(--gold); padding:18px 22px; display:flex; flex-direction:column; gap:2px; z-index:2; }
        @media(max-width:640px){.bs-badge{left:0}}
        .bs-badge-n { font-family:var(--serif); font-size:2.2rem; font-weight:400; line-height:1; color:var(--dark); }
        .bs-badge-t { font-family:var(--sans); font-size:.58rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:rgba(30,26,23,.7); }
        .bs-img-sm { position:absolute; bottom:-26px; right:-26px; width:46%; aspect-ratio:1; overflow:hidden; border:7px solid var(--dark); background:var(--dark-2); }
        @media(max-width:640px){.bs-img-sm{display:none}}

        .bs-content { padding-top:14px; }
        .bs-info { display:flex; flex-direction:column; gap:0; margin-bottom:32px; }
        .bs-row { display:flex; align-items:flex-start; gap:14px; padding:16px 0; border-bottom:1px solid rgba(243,237,226,.06); }
        .bs-row:first-child { border-top:1px solid rgba(243,237,226,.06); }
        .bs-icon { color:var(--gold); flex-shrink:0; margin-top:2px; }
        .bs-text { font-family:var(--sans); font-size:.85rem; font-weight:400; color:rgba(243,237,226,.48); letter-spacing:.03em; line-height:1.55; }
        .bs-link { text-decoration:none; transition:color .3s; }
        .bs-link:hover { color:rgba(243,237,226,.85); }
        .bs-tags { display:flex; flex-wrap:wrap; gap:8px; }
        .bs-tag { font-family:var(--sans); font-size:.58rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:rgba(243,237,226,.32); border:1px solid rgba(243,237,226,.12); padding:6px 14px; transition:all .3s; }
        .bs-tag:hover { border-color:rgba(243,237,226,.35); color:rgba(243,237,226,.65); }
      `}</style>
    </section>
  );
}