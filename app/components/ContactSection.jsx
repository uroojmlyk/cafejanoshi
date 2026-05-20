'use client'

import { useState } from 'react'
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Send, CheckCircle } from 'lucide-react'
import GoogleMap from './GoogleMap'

export default function ContactSection() {
  const [form, setForm]   = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [busy, setBusy]   = useState(false)
  const [done, setDone]   = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault(); setBusy(true)
    setTimeout(() => {
      setBusy(false); setDone(true)
      setTimeout(() => {
        setDone(false)
        setForm({ name:'', email:'', phone:'', subject:'', message:'' })
      }, 3000)
    }, 1400)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/923210001112?text=Hello%20Cafe%20Janoshi!%20I%20have%20a%20query.', '_blank')
  }

  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="ct-container">

        {/* Header */}
        <div className="ct-header">
          <div className="ct-label">Get in Touch</div>
          <h2 className="ct-title"><em>Contact</em> Us</h2>
          <p className="ct-sub">Questions, special requests, or feedback — we'd love to hear from you.</p>
        </div>

        <div className="ct-grid">

          {/* Left — info */}
          <div className="ct-info">
            {[
              {
                icon: <Phone size={16} strokeWidth={1.5} />,
                label: 'Phone',
                main: '0321 000 1112',
                sub: 'Call for reservations & orders',
                href: 'tel:03210001112',
              },
              {
                icon: <MapPin size={16} strokeWidth={1.5} />,
                label: 'Location',
                main: 'RC7X+CW4, Tehsil Rd',
                sub: 'Waris Colony Aamir Colony, Okara, Punjab',
                href: 'https://maps.google.com/?q=Cafe+Janoshi+Okara',
              },
              {
                icon: <Clock size={16} strokeWidth={1.5} />,
                label: 'Hours',
                main: 'Monday – Sunday',
                sub: '10:00 am – 12:59 am · Last order 12:30 am',
              },
            ].map(c => (
              <div key={c.label} className="ct-card">
                <div className="ct-card-icon">{c.icon}</div>
                <div className="ct-card-body">
                  <div className="ct-card-label">{c.label}</div>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                         rel="noopener noreferrer" className="ct-card-main ct-card-link">{c.main}</a>
                    : <div className="ct-card-main">{c.main}</div>
                  }
                  <div className="ct-card-sub">{c.sub}</div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="ct-social">
              <a href="https://wa.me/923210001112" target="_blank" rel="noopener noreferrer" className="ct-social-btn">
                <MessageCircle size={16} strokeWidth={1.5} />
                <span>WhatsApp</span>
              </a>
              <a href="https://instagram.com/cafejanoshi" target="_blank" rel="noopener noreferrer" className="ct-social-btn">
                <Instagram size={16} strokeWidth={1.5} />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com/Janoshi" target="_blank" rel="noopener noreferrer" className="ct-social-btn">
                <Facebook size={16} strokeWidth={1.5} />
                <span>Facebook</span>
              </a>
            </div>

            {/* Map */}
            <div className="ct-map">
              <GoogleMap />
            </div>
          </div>

          {/* Right — form */}
          <div className="ct-form-col">
            {done ? (
              <div className="ct-success">
                <CheckCircle size={36} strokeWidth={1} />
                <h3>Message Sent</h3>
                <p>Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                <div className="ct-form-row">
                  <div className="ct-field">
                    <label className="ct-field-label">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      required placeholder="Your full name" className="ct-input" />
                  </div>
                  <div className="ct-field">
                    <label className="ct-field-label">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="0300 0000000" className="ct-input" />
                  </div>
                </div>
                <div className="ct-field">
                  <label className="ct-field-label">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    required placeholder="your@email.com" className="ct-input" />
                </div>
                <div className="ct-field">
                  <label className="ct-field-label">Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    placeholder="How can we help?" className="ct-input" />
                </div>
                <div className="ct-field">
                  <label className="ct-field-label">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    required placeholder="Your message…" rows={5} className="ct-input ct-textarea" />
                </div>

                <div className="ct-btn-row">
                  <button type="submit" className="ct-submit" disabled={busy}>
                    {busy ? 'Sending…' : <><Send size={14} /> Send Message</>}
                  </button>
                  <button type="button" onClick={handleWhatsApp} className="ct-whatsapp">
                    <MessageCircle size={14} /> WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      <style jsx global>{`
        .ct-container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 600px) { .ct-container { padding: 0 20px; } }

        .ct-header { text-align: center; margin-bottom: 72px; }
        .ct-label {
          font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--fg-muted); font-weight: 300; margin-bottom: 20px;
        }
        .ct-title {
          font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 300; color: var(--fg); line-height: 1.1; margin-bottom: 16px;
        }
        .ct-title em { font-style: italic; }
        .ct-sub {
          font-family: var(--font-body); font-size: 1rem; font-weight: 100;
          color: var(--fg-muted); letter-spacing: 0.04em; max-width: 420px; margin: 0 auto;
        }

        .ct-grid {
          display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: start;
        }
        @media (max-width: 900px) { .ct-grid { grid-template-columns: 1fr; gap: 60px; } }

        /* Info cards */
        .ct-info { display: flex; flex-direction: column; gap: 0; }
        .ct-card {
          display: flex; gap: 16px; padding: 20px 0;
          border-bottom: 1px solid var(--border-light); align-items: flex-start;
        }
        .ct-card-icon { color: var(--fg-muted); flex-shrink: 0; margin-top: 3px; }
        .ct-card-body { display: flex; flex-direction: column; gap: 3px; }
        .ct-card-label {
          font-family: var(--font-body); font-size: 0.6rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--fg-muted); font-weight: 300;
        }
        .ct-card-main {
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 300; color: var(--fg);
        }
        .ct-card-link { text-decoration: none; transition: opacity 0.3s; }
        .ct-card-link:hover { opacity: 0.65; }
        .ct-card-sub {
          font-family: var(--font-body); font-size: 0.75rem; font-weight: 100;
          color: var(--fg-muted); letter-spacing: 0.02em;
        }

        .ct-social {
          display: flex; gap: 10px; padding: 24px 0;
          border-bottom: 1px solid var(--border-light);
        }
        .ct-social-btn {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 300; color: var(--fg-light);
          border: 1px solid var(--border); padding: 8px 14px; text-decoration: none;
          transition: all 0.3s;
        }
        .ct-social-btn:hover { border-color: var(--fg); color: var(--fg); }

        .ct-map {
          margin-top: 24px; height: 220px; overflow: hidden; background: var(--border-light);
        }
        .ct-map > * { width: 100%; height: 100%; }

        /* Form */
        .ct-form-col { }
        .ct-form { display: flex; flex-direction: column; gap: 24px; }
        .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 480px) { .ct-form-row { grid-template-columns: 1fr; } }
        .ct-field { display: flex; flex-direction: column; gap: 8px; }
        .ct-field-label {
          font-family: var(--font-body); font-size: 0.6rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--fg-muted); font-weight: 300;
        }
        .ct-input {
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 100;
          color: var(--fg); background: transparent; border: none;
          border-bottom: 1px solid var(--border); padding: 10px 0;
          outline: none; transition: border-color 0.3s; width: 100%;
        }
        .ct-input:focus { border-color: var(--fg); }
        .ct-input::placeholder { color: var(--fg-muted); }
        .ct-textarea { resize: none; }

        .ct-btn-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ct-submit {
          flex: 1; min-width: 160px;
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.18em;
          text-transform: uppercase; font-weight: 400;
          padding: 14px 28px; background: var(--fg); color: var(--bg);
          border: none; cursor: pointer; transition: background 0.35s;
        }
        .ct-submit:hover:not(:disabled) { background: var(--accent-dark); }
        .ct-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .ct-whatsapp {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.14em;
          text-transform: uppercase; font-weight: 300;
          padding: 14px 22px; background: transparent;
          border: 1px solid var(--border); color: var(--fg-light);
          cursor: pointer; transition: all 0.3s;
        }
        .ct-whatsapp:hover { border-color: var(--fg); color: var(--fg); }

        .ct-success {
          display: flex; flex-direction: column; align-items: flex-start; gap: 12px;
          padding: 40px 0;
        }
        .ct-success svg { color: var(--accent-dark); }
        .ct-success h3 {
          font-family: var(--font-display); font-size: 1.8rem; font-weight: 300; color: var(--fg);
        }
        .ct-success p {
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 100; color: var(--fg-muted);
        }
      `}</style>
    </section>
  )
}