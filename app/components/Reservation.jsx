'use client';
import { useState, useRef, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SLOTS = ['12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM'];
const today = () => new Date().toISOString().split('T')[0];
const maxd  = () => { const d=new Date(); d.setDate(d.getDate()+60); return d.toISOString().split('T')[0]; };

export default function Reservation() {
  const [f, setF] = useState({ name:'', phone:'', date:'', guests:'2', time:'', note:'' });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const submit = (e) => {
    e.preventDefault(); setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 1400);
  };

  return (
    <section id="reserve" style={{ position:'relative', overflow:'hidden', background:'var(--dark)', padding:'130px 0 110px' }}>
      {/* Subtle bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=50)', backgroundSize:'cover', backgroundPosition:'center', filter:'brightness(.12)', pointerEvents:'none' }}/>

      <div className="wrap" style={{ position:'relative', zIndex:1 }}>
        <div ref={ref} className="reveal" style={{ marginBottom:64, maxWidth:640 }}>
          <span className="eyebrow eyebrow-lt">Reservations</span>
          <h2 style={{ color:'#f3ede2', marginBottom:16 }}>
            Reserve your table<br/><em style={{fontStyle:'italic'}}>for an unforgettable evening</em>
          </h2>
          <p style={{ color:'rgba(243,237,226,.45)', fontSize:'.9rem', fontWeight:400, lineHeight:1.85 }}>
            Rs 1,000–6,000 per person · Private dining room available · Good for birthdays &amp; celebrations
          </p>
        </div>

        <div className="res-grid">
          {/* Form */}
          <div>
            {sent ? (
              <div style={{ display:'flex', flexDirection:'column', gap:16, padding:'40px 0' }}>
                <CheckCircle size={36} strokeWidth={1} style={{ color:'var(--gold)' }}/>
                <h3 style={{ fontFamily:'var(--serif)', fontWeight:400, color:'#f3ede2', fontSize:'1.9rem' }}>Reservation Confirmed</h3>
                <p style={{ color:'rgba(243,237,226,.5)', fontSize:'.88rem' }}>We'll call you at {f.phone} to confirm. Looking forward to welcoming you.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="res-form">
                <div className="res-row">
                  <div className="res-f"><label className="res-lbl">Full Name *</label><input className="res-in" required placeholder="Your name" value={f.name} onChange={e=>setF(p=>({...p,name:e.target.value}))}/></div>
                  <div className="res-f"><label className="res-lbl">Phone *</label><input className="res-in" required placeholder="0300 0000000" value={f.phone} onChange={e=>setF(p=>({...p,phone:e.target.value}))}/></div>
                </div>
                <div className="res-row">
                  <div className="res-f"><label className="res-lbl">Date *</label><input type="date" className="res-in" required min={today()} max={maxd()} value={f.date} onChange={e=>setF(p=>({...p,date:e.target.value}))}/></div>
                  <div className="res-f"><label className="res-lbl">Guests *</label><select className="res-in" value={f.guests} onChange={e=>setF(p=>({...p,guests:e.target.value}))}>{[1,2,3,4,5,6,7,8,'8+'].map(n=><option key={n} value={n}>{n} {n===1?'Guest':'Guests'}</option>)}</select></div>
                </div>
                <div className="res-f">
                  <label className="res-lbl">Preferred Time *</label>
                  <div className="res-times">
                    {SLOTS.map(t=>(
                      <button type="button" key={t} onClick={()=>setF(p=>({...p,time:t}))} className={`res-time${f.time===t?' res-time-on':''}`}>{t}</button>
                    ))}
                  </div>
                </div>
                <div className="res-f"><label className="res-lbl">Special Requests</label><textarea className="res-in res-ta" rows={3} placeholder="Birthday, anniversary, dietary needs…" value={f.note} onChange={e=>setF(p=>({...p,note:e.target.value}))}/></div>
                <button type="submit" className="res-submit" disabled={busy||!f.time}>
                  {busy?'Confirming…':<><span>Confirm Reservation</span><ArrowRight size={14} strokeWidth={2}/></>}
                </button>
              </form>
            )}
          </div>

          {/* Right info */}
          <div className="res-right">
            <div className="res-right-box">
              <div className="res-right-h">Prefer to call or message?</div>
              <a href="tel:03210001112" className="res-phone">0321 000 1112</a>
              <div className="res-or">or</div>
              <a href="https://wa.me/923210001112?text=Hello%20Cafe%20Janoshi!%20I'd%20like%20to%20book%20a%20table." target="_blank" rel="noopener noreferrer" className="res-wa">
                <span>WhatsApp Us</span><ArrowRight size={13} strokeWidth={2}/>
              </a>
              <div className="res-info-row"><span className="res-info-lbl">Hours</span><span className="res-info-val">Mon – Sun · 10:00 am – 12:59 am</span></div>
              <div className="res-info-row">
                <span className="res-info-lbl">Location</span>
                <a href="https://maps.google.com/?q=Cafe+Janoshi+Okara" target="_blank" rel="noopener noreferrer" className="res-info-val" style={{ textDecoration:'none', transition:'color .3s' }}>RC7X+CW4, Tehsil Rd, Waris Colony, Okara</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .res-grid { display:grid; grid-template-columns:1.5fr 1fr; gap:80px; align-items:start; }
        @media(max-width:900px){.res-grid{grid-template-columns:1fr;gap:60px}}

        .res-form { display:flex; flex-direction:column; gap:26px; }
        .res-row { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
        @media(max-width:500px){.res-row{grid-template-columns:1fr}}
        .res-f { display:flex; flex-direction:column; gap:8px; }
        .res-lbl { font-family:var(--sans); font-size:.58rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(243,237,226,.32); }
        .res-in { font-family:var(--sans); font-size:.92rem; font-weight:400; color:rgba(243,237,226,.85); background:transparent; border:none; border-bottom:1px solid rgba(243,237,226,.15); padding:10px 0; outline:none; transition:border-color .35s; width:100%; }
        .res-in:focus { border-color:rgba(243,237,226,.5); }
        .res-in::placeholder { color:rgba(243,237,226,.2); }
        .res-in option { background:var(--dark); }
        .res-ta { resize:none; }
        .res-times { display:flex; flex-wrap:wrap; gap:7px; margin-top:4px; }
        .res-time { font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:rgba(243,237,226,.42); border:1px solid rgba(243,237,226,.12); padding:7px 12px; background:none; transition:all .25s; }
        .res-time:hover { border-color:rgba(243,237,226,.4); color:rgba(243,237,226,.8); }
        .res-time-on { border-color:var(--gold); color:var(--gold-lt); background:rgba(201,169,110,.08); }
        .res-submit { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-family:var(--sans); font-size:.65rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:var(--dark); background:rgba(243,237,226,.95); border:1px solid rgba(243,237,226,.95); padding:16px; width:100%; transition:background .4s var(--ease); margin-top:8px; }
        .res-submit:hover:not(:disabled) { background:var(--gold); border-color:var(--gold); }
        .res-submit:disabled { opacity:.45; cursor:not-allowed; }

        .res-right-box { border:1px solid rgba(243,237,226,.08); padding:40px; display:flex; flex-direction:column; gap:20px; }
        @media(max-width:640px){.res-right-box{padding:24px 20px}}
        .res-right-h { font-family:var(--sans); font-size:.62rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(243,237,226,.28); }
        .res-phone { font-family:var(--serif); font-size:2.2rem; font-weight:400; color:#f3ede2; line-height:1; transition:opacity .3s; }
        .res-phone:hover { opacity:.65; }
        .res-or { font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(243,237,226,.2); }
        .res-wa { display:inline-flex; align-items:center; gap:8px; font-family:var(--sans); font-size:.62rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(243,237,226,.7); border:1px solid rgba(243,237,226,.2); padding:12px 20px; align-self:flex-start; transition:all .35s; }
        .res-wa:hover { border-color:rgba(243,237,226,.55); color:#f3ede2; }
        .res-info-row { display:flex; flex-direction:column; gap:4px; padding-top:10px; border-top:1px solid rgba(243,237,226,.06); }
        .res-info-lbl { font-family:var(--sans); font-size:.56rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:rgba(243,237,226,.22); }
        .res-info-val { font-family:var(--sans); font-size:.84rem; font-weight:400; color:rgba(243,237,226,.52); line-height:1.55; }
      `}</style>
    </section>
  );
}