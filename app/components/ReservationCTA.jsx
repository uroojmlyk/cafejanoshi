'use client';

import { useState, useRef, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SLOTS = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM',
  '9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM',
];
const todayStr = () => new Date().toISOString().split('T')[0];
const maxStr   = () => { const d = new Date(); d.setDate(d.getDate()+60); return d.toISOString().split('T')[0]; };

export default function ReservationCTA() {
  const [form, setForm]   = useState({ name:'', phone:'', date:'', guests:'2', time:'', note:'' });
  const [sent, setSent]   = useState(false);
  const [busy, setBusy]   = useState(false);
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 1500);
  };

  return (
    <section id="reservation" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--charcoal)',
      padding: '140px 0 120px',
    }}>
      {/* Subtle background image */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=60)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(.15)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: 72, maxWidth: 640 }}>
          <span className="label label-light">Reservations</span>
          <h2 style={{ color: '#f3ede2', marginBottom: 20 }}>
            Reserve your table<br /><em style={{ fontStyle: 'italic' }}>for an unforgettable evening</em>
          </h2>
          <p style={{ color: 'rgba(243,237,226,.45)', fontSize: '.9rem', fontWeight: 100, lineHeight: 1.85 }}>
            Rs 1,000–6,000 per person · Private dining room available · Good for birthdays &amp; celebrations
          </p>
        </div>

        {/* Two columns */}
        <div className="res-grid">

          {/* Form */}
          <div className="res-form-col">
            {sent ? (
              <div className="res-success">
                <CheckCircle size={38} strokeWidth={1} style={{ color: 'var(--gold)' }} />
                <h3 style={{ color: '#f3ede2', fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '1.9rem' }}>
                  Reservation Confirmed
                </h3>
                <p style={{ color: 'rgba(243,237,226,.5)', fontSize: '.88rem' }}>
                  We'll call you at {form.phone} to confirm your booking. Looking forward to welcoming you.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="res-form">
                <div className="res-row">
                  <div className="res-field">
                    <label className="res-label">Full Name *</label>
                    <input className="res-input" required placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} />
                  </div>
                  <div className="res-field">
                    <label className="res-label">Phone *</label>
                    <input className="res-input" required placeholder="0300 0000000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                  </div>
                </div>
                <div className="res-row">
                  <div className="res-field">
                    <label className="res-label">Date *</label>
                    <input type="date" className="res-input" required min={todayStr()} max={maxStr()} value={form.date} onChange={e => set('date', e.target.value)} />
                  </div>
                  <div className="res-field">
                    <label className="res-label">Guests *</label>
                    <select className="res-input" value={form.guests} onChange={e => set('guests', e.target.value)}>
                      {[1,2,3,4,5,6,7,8,'8+'].map(n => <option key={n} value={n}>{n} {n===1?'Guest':'Guests'}</option>)}
                    </select>
                  </div>
                </div>
                <div className="res-field">
                  <label className="res-label">Preferred Time *</label>
                  <div className="res-times">
                    {SLOTS.map(t => (
                      <button type="button" key={t}
                        className={`res-time${form.time === t ? ' res-time--active' : ''}`}
                        onClick={() => set('time', t)}
                      >{t}</button>
                    ))}
                  </div>
                </div>
                <div className="res-field">
                  <label className="res-label">Special Requests</label>
                  <textarea className="res-input res-textarea" rows={3} placeholder="Birthday, anniversary, dietary needs…" value={form.note} onChange={e => set('note', e.target.value)} />
                </div>
                <button type="submit" className="res-submit" disabled={busy || !form.time}>
                  <span>{busy ? 'Confirming…' : 'Confirm Reservation'}</span>
                  {!busy && <ArrowRight size={14} strokeWidth={1.5} />}
                </button>
              </form>
            )}
          </div>

          {/* Right — WhatsApp + contact block */}
          <div className="res-right">
            <div className="res-right-inner">
              <div className="res-right-heading">Prefer to call or message?</div>
              <a href="tel:03210001112" className="res-big-link">0321 000 1112</a>
              <div className="res-right-or">or</div>
              <a href="https://wa.me/923210001112?text=Hello%20Cafe%20Janoshi!%20I%27d%20like%20to%20book%20a%20table." target="_blank" rel="noopener noreferrer" className="res-wa-btn">
                <span>WhatsApp Us</span>
                <ArrowRight size={13} strokeWidth={1.5} />
              </a>
              <div className="res-hours">
                <span className="res-hours-label">Opening Hours</span>
                <span className="res-hours-val">Mon – Sun · 10:00 am – 12:59 am</span>
              </div>
              <div className="res-hours">
                <span className="res-hours-label">Location</span>
                <a href="https://maps.google.com/?q=Cafe+Janoshi+Okara" target="_blank" rel="noopener noreferrer" className="res-hours-val res-hours-link">
                  RC7X+CW4, Tehsil Rd,<br />Waris Colony, Okara
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .res-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) { .res-grid { grid-template-columns: 1fr; gap: 60px; } }

        .res-form { display: flex; flex-direction: column; gap: 28px; }
        .res-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 500px) { .res-row { grid-template-columns: 1fr; } }
        .res-field { display: flex; flex-direction: column; gap: 9px; }
        .res-label {
          font-family: var(--sans);
          font-size: .58rem;
          font-weight: 300;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(243,237,226,.35);
        }
        .res-input {
          font-family: var(--sans);
          font-size: .92rem;
          font-weight: 100;
          color: rgba(243,237,226,.85);
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(243,237,226,.15);
          padding: 10px 0;
          outline: none;
          transition: border-color .35s;
          letter-spacing: .03em;
          width: 100%;
        }
        .res-input:focus { border-color: rgba(243,237,226,.5); }
        .res-input::placeholder { color: rgba(243,237,226,.2); }
        .res-input option { background: var(--charcoal); }
        .res-textarea { resize: none; }
        .res-times { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
        .res-time {
          font-family: var(--sans);
          font-size: .6rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(243,237,226,.45);
          border: 1px solid rgba(243,237,226,.12);
          padding: 7px 12px;
          background: none;
          transition: all .25s;
        }
        .res-time:hover { border-color: rgba(243,237,226,.4); color: rgba(243,237,226,.8); }
        .res-time--active {
          border-color: var(--gold);
          color: var(--gold-lt);
          background: rgba(201,169,110,.08);
        }
        .res-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: var(--sans);
          font-size: .65rem;
          letter-spacing: .24em;
          text-transform: uppercase;
          font-weight: 300;
          color: var(--charcoal);
          background: rgba(243,237,226,.95);
          border: 1px solid rgba(243,237,226,.95);
          padding: 16px;
          width: 100%;
          transition: background .4s var(--ease), color .4s;
          margin-top: 8px;
        }
        .res-submit:hover:not(:disabled) { background: var(--gold); border-color: var(--gold); }
        .res-submit:disabled { opacity: .45; cursor: not-allowed; }
        .res-success {
          display: flex; flex-direction: column; gap: 18px; padding: 40px 0;
        }

        /* Right block */
        .res-right-inner {
          display: flex;
          flex-direction: column;
          gap: 22px;
          border: 1px solid rgba(243,237,226,.08);
          padding: 40px;
        }
        @media (max-width: 640px) { .res-right-inner { padding: 28px 22px; } }
        .res-right-heading {
          font-family: var(--sans);
          font-size: .62rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(243,237,226,.3);
          font-weight: 300;
        }
        .res-big-link {
          font-family: var(--serif);
          font-size: 2.2rem;
          font-weight: 300;
          color: #f3ede2;
          letter-spacing: .03em;
          text-decoration: none;
          transition: opacity .3s;
          line-height: 1;
        }
        .res-big-link:hover { opacity: .65; }
        .res-right-or {
          font-family: var(--sans);
          font-size: .6rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(243,237,226,.2);
          font-weight: 300;
        }
        .res-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--sans);
          font-size: .62rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(243,237,226,.7);
          border: 1px solid rgba(243,237,226,.2);
          padding: 12px 20px;
          transition: all .35s;
          text-decoration: none;
          align-self: flex-start;
        }
        .res-wa-btn:hover { border-color: rgba(243,237,226,.55); color: #f3ede2; }
        .res-hours { display: flex; flex-direction: column; gap: 4px; padding-top: 12px; border-top: 1px solid rgba(243,237,226,.06); }
        .res-hours-label {
          font-family: var(--sans); font-size: .56rem; letter-spacing: .22em;
          text-transform: uppercase; color: rgba(243,237,226,.25); font-weight: 300;
        }
        .res-hours-val {
          font-family: var(--sans); font-size: .84rem; font-weight: 100;
          color: rgba(243,237,226,.55); letter-spacing: .03em; line-height: 1.55;
        }
        .res-hours-link { text-decoration: none; transition: color .3s; }
        .res-hours-link:hover { color: rgba(243,237,226,.85); }
      `}</style>
    </section>
  );
}