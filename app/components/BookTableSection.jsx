'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, Phone, CheckCircle } from 'lucide-react'

const TIME_SLOTS = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM',
  '6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM',
  '8:30 PM','9:00 PM','9:30 PM','10:00 PM','11:00 PM',
]

const today  = () => new Date().toISOString().split('T')[0]
const maxDay = () => { const d = new Date(); d.setDate(d.getDate()+30); return d.toISOString().split('T')[0] }

export default function BookTableSection() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', date:'', time:'', guests:'2', note:'' })
  const [busy, setBusy]     = useState(false)
  const [done, setDone]     = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const pickTime     = t  => setForm(p => ({ ...p, time: t }))

  const handleSubmit = e => {
    e.preventDefault()
    setBusy(true)
    setTimeout(() => {
      setBusy(false); setDone(true)
      setTimeout(() => {
        setDone(false)
        setForm({ name:'', phone:'', email:'', date:'', time:'', guests:'2', note:'' })
      }, 3500)
    }, 1500)
  }

  return (
    <section id="booking" style={{ background: 'var(--fg)', padding: '120px 0' }}>
      <div className="bk-container">

        {/* Left */}
        <div className="bk-left">
          <div className="bk-label">Reservations</div>
          <h2 className="bk-title">Reserve<br /><em>Your Table</em></h2>
          <p className="bk-sub">
            Join us for an unforgettable dining experience at Cafe Janoshi. 
            Private dining room available for special occasions.
          </p>

          <div className="bk-info-list">
            {[
              { icon: <Phone size={15} strokeWidth={1.5} />, label: 'Call directly', value: '0321 000 1112', href: 'tel:03210001112' },
              { icon: <Clock size={15} strokeWidth={1.5} />, label: 'Hours',          value: 'Mon – Sun · 10 am – 12:59 am' },
              { icon: <Users size={15} strokeWidth={1.5} />, label: 'Group dining',   value: 'Private room for special events' },
            ].map(i => (
              <div key={i.label} className="bk-info-item">
                <div className="bk-info-icon">{i.icon}</div>
                <div>
                  <div className="bk-info-label">{i.label}</div>
                  {i.href
                    ? <a href={i.href} className="bk-info-value bk-link">{i.value}</a>
                    : <div className="bk-info-value">{i.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bk-right">
          {done ? (
            <div className="bk-success">
              <CheckCircle size={40} strokeWidth={1} />
              <h3>Reservation Confirmed</h3>
              <p>We'll contact you shortly to confirm your booking.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bk-form">
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label-field">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    required placeholder="Your name" className="bk-input" />
                </div>
                <div className="bk-field">
                  <label className="bk-label-field">Phone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    required placeholder="0300 0000000" className="bk-input" />
                </div>
              </div>

              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label-field">Date *</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    required min={today()} max={maxDay()} className="bk-input" />
                </div>
                <div className="bk-field">
                  <label className="bk-label-field">Guests *</label>
                  <select name="guests" value={form.guests} onChange={handleChange} className="bk-input">
                    {[1,2,3,4,5,6,7,8,'9+'].map(n=>(
                      <option key={n} value={n}>{n} {n===1?'Guest':'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bk-field">
                <label className="bk-label-field">Preferred Time *</label>
                <div className="bk-time-grid">
                  {TIME_SLOTS.map(t => (
                    <button type="button" key={t}
                      onClick={() => pickTime(t)}
                      className={`bk-time-btn${form.time === t ? ' bk-time-btn--active' : ''}`}
                    >{t}</button>
                  ))}
                </div>
              </div>

              <div className="bk-field">
                <label className="bk-label-field">Special Requests</label>
                <textarea name="note" value={form.note} onChange={handleChange}
                  placeholder="Dietary requirements, special occasion, etc."
                  rows={3} className="bk-input bk-textarea" />
              </div>

              <button type="submit" className="bk-submit" disabled={busy || !form.time}>
                {busy ? 'Confirming…' : 'Confirm Reservation'}
              </button>
            </form>
          )}
        </div>

      </div>

      <style jsx global>{`
        .bk-container {
          max-width: 1320px; margin: 0 auto; padding: 0 40px;
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start;
        }
        @media (max-width: 900px) { .bk-container { grid-template-columns: 1fr; gap: 60px; } }
        @media (max-width: 600px) { .bk-container { padding: 0 20px; } }

        /* Left */
        .bk-left { color: rgba(243,237,226,0.85); }
        .bk-label {
          font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: rgba(243,237,226,0.4); font-weight: 300; margin-bottom: 24px;
        }
        .bk-title {
          font-family: var(--font-display); font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 300; color: #f3ede2; line-height: 1.1; margin-bottom: 24px;
        }
        .bk-title em { font-style: italic; }
        .bk-sub {
          font-family: var(--font-body); font-size: 0.95rem; font-weight: 100;
          color: rgba(243,237,226,0.55); line-height: 1.8; margin-bottom: 48px;
        }
        .bk-info-list { display: flex; flex-direction: column; gap: 24px; }
        .bk-info-item { display: flex; gap: 14px; align-items: flex-start; }
        .bk-info-icon { color: var(--accent-light); margin-top: 2px; flex-shrink: 0; }
        .bk-info-label {
          font-family: var(--font-body); font-size: 0.62rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(243,237,226,0.35); margin-bottom: 3px;
        }
        .bk-info-value {
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 300;
          color: rgba(243,237,226,0.75);
        }
        .bk-link { text-decoration: none; transition: color 0.3s; }
        .bk-link:hover { color: var(--accent-light); }

        /* Form */
        .bk-right {
          background: var(--bg); padding: 48px;
        }
        @media (max-width: 480px) { .bk-right { padding: 28px 20px; } }
        .bk-form { display: flex; flex-direction: column; gap: 24px; }
        .bk-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 480px) { .bk-form-row { grid-template-columns: 1fr; } }
        .bk-field { display: flex; flex-direction: column; gap: 8px; }
        .bk-label-field {
          font-family: var(--font-body); font-size: 0.62rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--fg-muted); font-weight: 300;
        }
        .bk-input {
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 100;
          color: var(--fg); background: transparent; border: none;
          border-bottom: 1px solid var(--border); padding: 10px 0;
          outline: none; transition: border-color 0.3s; width: 100%;
          letter-spacing: 0.03em;
        }
        .bk-input:focus { border-color: var(--fg); }
        .bk-input::placeholder { color: var(--fg-muted); }
        .bk-textarea { resize: none; }

        .bk-time-grid { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
        .bk-time-btn {
          font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.1em;
          padding: 7px 12px; border: 1px solid var(--border); background: transparent;
          color: var(--fg-muted); cursor: pointer; transition: all 0.25s; text-transform: uppercase;
        }
        .bk-time-btn:hover { border-color: var(--fg-muted); color: var(--fg); }
        .bk-time-btn--active { border-color: var(--fg); background: var(--fg); color: var(--bg); }

        .bk-submit {
          font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.18em;
          text-transform: uppercase; font-weight: 400;
          width: 100%; padding: 16px; background: var(--fg); color: var(--bg);
          border: none; cursor: pointer; transition: background 0.35s; margin-top: 8px;
        }
        .bk-submit:hover:not(:disabled) { background: var(--accent-dark); }
        .bk-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Success */
        .bk-success {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 16px; text-align: center; padding: 60px 20px;
          color: var(--fg);
        }
        .bk-success svg { color: var(--accent-dark); }
        .bk-success h3 {
          font-family: var(--font-display); font-size: 1.8rem; font-weight: 300;
        }
        .bk-success p {
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 100;
          color: var(--fg-muted);
        }
      `}</style>
    </section>
  )
}