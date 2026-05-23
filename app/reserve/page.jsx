// 'use client';

// import Reservation from '../components/Reservation';

// export default function ReservePage() {
//   return (
//     <>
//       <Reservation />
//     </>
//   );
// }






'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const SLOTS = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM',
  '9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM',
];
const todayStr = () => new Date().toISOString().split('T')[0];
const maxStr   = () => { const d=new Date(); d.setDate(d.getDate()+60); return d.toISOString().split('T')[0]; };

export default function ReservePage() {
  const [f, setF]   = useState({ name:'', phone:'', date:'', guests:'2', time:'', note:'' });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const formRef = useRef(null);

  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const el = formRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const submit = (e) => {
    e.preventDefault(); setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 1400);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position:'relative', height:'60vh', minHeight:460, overflow:'hidden', background:'var(--dark)' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85)`, backgroundSize:'cover', backgroundPosition:'center', filter:'brightness(.45)' }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(30,26,23,.2) 0%, rgba(30,26,23,.65) 100%)' }}/>
        <div className="wrap" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', gap:0 }}>
          <div style={{ opacity:ready?1:0, transform:ready?'none':'translateY(24px)', transition:'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)' }}>
            <span className="eyebrow eyebrow-lt">Reservations</span>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(2.8rem,7vw,6rem)', fontWeight:400, lineHeight:.95, color:'#f3ede2', marginBottom:20 }}>
              Reserve your table<br/><em style={{fontStyle:'italic'}}>for an unforgettable evening</em>
            </h1>
            <p style={{ fontFamily:'var(--sans)', fontWeight:400, fontSize:'clamp(.9rem,1.8vw,1rem)', color:'rgba(243,237,226,.58)', maxWidth:520, lineHeight:1.8 }}>
              Rs 1,000–6,000 per person · Private dining room available · Good for birthdays & special occasions
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section style={{ background:'var(--cream)', padding:'100px 0 120px' }}>
        <div className="wrap">
          <div className="rv-layout">

            {/* Form */}
            <div ref={formRef} className="reveal rv-form-col">
              {sent ? (
                <div style={{ display:'flex', flexDirection:'column', gap:20, padding:'20px 0' }}>
                  <CheckCircle size={40} strokeWidth={1} style={{ color:'var(--gold)' }}/>
                  <h2 style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'2.4rem' }}>Reservation Confirmed</h2>
                  <p style={{ color:'var(--ink-2)', fontSize:'.95rem', lineHeight:1.8 }}>
                    We'll call you at <strong>{f.phone}</strong> to confirm your booking. 
                    Looking forward to welcoming you to Cafe Janoshi.
                  </p>
                  <button onClick={() => setSent(false)} className="btn btn-od" style={{ alignSelf:'flex-start', marginTop:8 }}>
                    <span>Make Another Booking</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="rv-form">
                  <div style={{ marginBottom:36 }}>
                    <span className="eyebrow">Book Your Table</span>
                    <h2 style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'clamp(2rem,3.5vw,3rem)', lineHeight:1.05 }}>
                      Your perfect<br/><em style={{fontStyle:'italic'}}>evening awaits</em>
                    </h2>
                  </div>
                  <div className="rv-row">
                    <div className="rv-f"><label className="rv-lbl">Full Name *</label><input className="rv-in" required placeholder="Your name" value={f.name} onChange={e=>setF(p=>({...p,name:e.target.value}))}/></div>
                    <div className="rv-f"><label className="rv-lbl">Phone *</label><input className="rv-in" required placeholder="0300 0000000" value={f.phone} onChange={e=>setF(p=>({...p,phone:e.target.value}))}/></div>
                  </div>
                  <div className="rv-row">
                    <div className="rv-f"><label className="rv-lbl">Date *</label><input type="date" className="rv-in" required min={todayStr()} max={maxStr()} value={f.date} onChange={e=>setF(p=>({...p,date:e.target.value}))}/></div>
                    <div className="rv-f"><label className="rv-lbl">Guests *</label><select className="rv-in" value={f.guests} onChange={e=>setF(p=>({...p,guests:e.target.value}))}>{[1,2,3,4,5,6,7,8,'8+'].map(n=><option key={n} value={n}>{n} {n===1?'Guest':'Guests'}</option>)}</select></div>
                  </div>
                  <div className="rv-f">
                    <label className="rv-lbl">Preferred Time *</label>
                    <div className="rv-times">
                      {SLOTS.map(t => (
                        <button type="button" key={t} onClick={()=>setF(p=>({...p,time:t}))} className={`rv-slot${f.time===t?' rv-slot-on':''}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div className="rv-f">
                    <label className="rv-lbl">Special Requests</label>
                    <textarea className="rv-in rv-ta" rows={3} placeholder="Birthday, anniversary, dietary requirements…" value={f.note} onChange={e=>setF(p=>({...p,note:e.target.value}))}/>
                  </div>
                  <button type="submit" className="rv-submit" disabled={busy||!f.time}>
                    {busy?'Confirming…':<><span>Confirm Reservation</span><ArrowRight size={14} strokeWidth={2}/></>}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="rv-sidebar">
              <div className="rv-info-box">
                <div className="rv-info-h">Prefer to call or message?</div>
                <a href="tel:03210001112" className="rv-phone">0321 000 1112</a>
                <div className="rv-divider-or">or</div>
                <a href="https://wa.me/923210001112?text=Hello%20Cafe%20Janoshi!%20I'd%20like%20to%20book%20a%20table." target="_blank" rel="noopener noreferrer" className="rv-wa">
                  <MessageCircle size={14} strokeWidth={2}/><span>WhatsApp Us</span><ArrowRight size={12} strokeWidth={2}/>
                </a>

                <div className="rv-meta-list">
                  {[
                    { icon:<Clock size={14} strokeWidth={1.5}/>,  label:'Hours',    val:'Mon – Sun · 10:00 am – 12:59 am' },
                    { icon:<MapPin size={14} strokeWidth={1.5}/>, label:'Location', val:'RC7X+CW4, Tehsil Rd, Waris Colony, Okara' },
                    { icon:<Phone size={14} strokeWidth={1.5}/>,  label:'Contact',  val:'0321 000 1112', href:'tel:03210001112' },
                  ].map((m,i) => (
                    <div key={i} className="rv-meta-row">
                      <div className="rv-meta-icon">{m.icon}</div>
                      <div>
                        <div className="rv-meta-lbl">{m.label}</div>
                        {m.href
                          ? <a href={m.href} className="rv-meta-val" style={{ textDecoration:'none', transition:'color .3s' }}>{m.val}</a>
                          : <div className="rv-meta-val">{m.val}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price note */}
                <div className="rv-price-note">Rs 1,000 – 6,000 per person</div>

                {/* What to expect */}
                <div className="rv-expect">
                  <div className="rv-expect-h">What to expect</div>
                  {['Private dining room available','Good for kids\' birthdays','Premium ambiance','155+ menu items'].map(e => (
                    <div key={e} className="rv-expect-item">
                      <div className="rv-expect-dot"/>
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map section ── */}
      <section style={{ background:'var(--cream-2)', padding:'80px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign:'center', marginBottom:48 }}>
            <span className="eyebrow">Find Us</span>
            <h2 style={{ maxWidth:500, margin:'0 auto' }}>
              Come visit us<br/><em style={{fontStyle:'italic'}}>in Okara</em>
            </h2>
          </div>
          <div style={{ width:'100%', height:400, background:'var(--cream)', overflow:'hidden', position:'relative' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.5!2d73.4504!3d30.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbfdc56d0f2c6de81!2sCafe%20Janoshi!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border:0, display:'block', filter:'grayscale(.8) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Janoshi Location"
            />
          </div>
          <div style={{ textAlign:'center', marginTop:28 }}>
            <a href="https://maps.google.com/?q=Cafe+Janoshi+Okara" target="_blank" rel="noopener noreferrer" className="btn btn-od" style={{ display:'inline-flex', gap:10 }}>
              <MapPin size={13} strokeWidth={2}/><span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .rv-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media(max-width:960px){.rv-layout{grid-template-columns:1fr;gap:60px}}

        .rv-form { display:flex; flex-direction:column; gap:28px; }
        .rv-row  { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        @media(max-width:500px){.rv-row{grid-template-columns:1fr}}
        .rv-f { display:flex; flex-direction:column; gap:8px; }
        .rv-lbl { font-family:var(--sans); font-size:.58rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--ink-3); }
        .rv-in  { font-family:var(--sans); font-size:.92rem; font-weight:400; color:var(--ink); background:transparent; border:none; border-bottom:1px solid var(--border); padding:10px 0; outline:none; transition:border-color .35s; width:100%; }
        .rv-in:focus { border-color:var(--ink); }
        .rv-in::placeholder { color:var(--ink-3); }
        .rv-ta  { resize:none; }

        .rv-times { display:flex; flex-wrap:wrap; gap:7px; margin-top:4px; }
        .rv-slot { font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-2); border:1px solid var(--border); padding:7px 12px; background:none; transition:all .25s; }
        .rv-slot:hover { border-color:var(--ink); color:var(--ink); }
        .rv-slot-on { border-color:var(--ink); background:var(--ink); color:var(--cream); }

        .rv-submit { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-family:var(--sans); font-size:.65rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:var(--cream); background:var(--ink); border:1px solid var(--ink); padding:16px; width:100%; transition:background .4s var(--ease); margin-top:8px; }
        .rv-submit:hover:not(:disabled) { background:var(--gold-dk); border-color:var(--gold-dk); }
        .rv-submit:disabled { opacity:.45; cursor:not-allowed; }

        /* Sidebar */
        .rv-info-box { border:1px solid var(--border); padding:40px; display:flex; flex-direction:column; gap:22px; }
        @media(max-width:640px){.rv-info-box{padding:24px 20px}}
        .rv-info-h { font-family:var(--sans); font-size:.62rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--ink-3); }
        .rv-phone { font-family:var(--serif); font-size:2.2rem; font-weight:400; color:var(--ink); line-height:1; transition:opacity .3s; text-decoration:none; }
        .rv-phone:hover { opacity:.65; }
        .rv-divider-or { font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--ink-3); }
        .rv-wa { display:inline-flex; align-items:center; gap:8px; font-family:var(--sans); font-size:.62rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--ink-2); border:1px solid var(--border); padding:11px 18px; align-self:flex-start; transition:all .35s; text-decoration:none; }
        .rv-wa:hover { border-color:var(--ink); color:var(--ink); }

        .rv-meta-list { display:flex; flex-direction:column; gap:0; border-top:1px solid var(--border-lt); }
        .rv-meta-row { display:flex; gap:12px; align-items:flex-start; padding:14px 0; border-bottom:1px solid var(--border-lt); }
        .rv-meta-icon { color:var(--gold); margin-top:2px; flex-shrink:0; }
        .rv-meta-lbl { font-family:var(--sans); font-size:.56rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--ink-3); margin-bottom:3px; }
        .rv-meta-val { font-family:var(--sans); font-size:.84rem; font-weight:400; color:var(--ink-2); line-height:1.55; }

        .rv-price-note { font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:var(--ink-3); }

        .rv-expect { display:flex; flex-direction:column; gap:8px; }
        .rv-expect-h { font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--ink-3); margin-bottom:2px; }
        .rv-expect-item { display:flex; align-items:center; gap:10px; font-family:var(--sans); font-size:.84rem; font-weight:400; color:var(--ink-2); }
        .rv-expect-dot { width:5px; height:5px; border-radius:50%; background:var(--gold); flex-shrink:0; }
      `}</style>
    </>
  );
}