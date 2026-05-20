'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react'

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

export default function AboutSection() {
  const [secRef, secVisible] = useReveal()
  const [imgRef, imgVisible] = useReveal()

  return (
    <section id="about" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="ab-container">

        {/* ── Section label ── */}
        <div className="ab-label">Our Story</div>

        {/* ── Headline ── */}
        <div
          ref={secRef}
          className="ab-headline-row"
          style={{
            opacity: secVisible ? 1 : 0,
            transform: secVisible ? 'none' : 'translateY(36px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <h2 className="ab-headline">
            A decade of <em>culinary</em><br />excellence in Okara
          </h2>
          <div className="ab-headline-line" />
        </div>

        {/* ── Two-col layout ── */}
        <div className="ab-grid">

          {/* Left — image stack */}
          <div
            ref={imgRef}
            className="ab-img-col"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'none' : 'translateX(-30px)',
              transition: 'opacity 1.1s ease, transform 1.1s ease',
            }}
          >
            <div className="ab-img-main">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
                alt="Cafe Janoshi interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="ab-img-accent">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80"
                alt="Cafe detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* floating tag */}
            <div className="ab-float-tag">
              <span className="ab-float-num">12+</span>
              <span className="ab-float-txt">Years serving Okara</span>
            </div>
          </div>

          {/* Right — content */}
          <div className="ab-content-col">
            <p className="ab-body">
              Founded over twelve years ago, <strong>Cafe Janoshi</strong> has been at the heart of 
              Okara's dining scene — a beloved gathering spot for food enthusiasts, families, and friends 
              alike. What started as a small cafe with a passion for authentic flavours has grown into 
              Okara's premier dining destination.
            </p>
            <p className="ab-body">
              Our philosophy is simple: use the freshest local ingredients, prepare each dish with care and 
              attention, and create memorable dining experiences that keep our community coming back. 
              We offer private dining, family-friendly spaces, and a warm atmosphere you'll want to return to.
            </p>

            {/* Info cards */}
            <div className="ab-cards">
              {[
                {
                  icon: <MapPin size={16} strokeWidth={1.5} />,
                  label: 'Location',
                  value: 'RC7X+CW4, Tehsil Rd, Waris Colony, Okara',
                  link: 'https://maps.google.com/?q=Cafe+Janoshi+Okara',
                  linkText: 'View on map',
                },
                {
                  icon: <Phone size={16} strokeWidth={1.5} />,
                  label: 'Reservations',
                  value: '0321 000 1112',
                  link: 'tel:03210001112',
                  linkText: 'Call us',
                },
                {
                  icon: <Clock size={16} strokeWidth={1.5} />,
                  label: 'Hours',
                  value: 'Mon – Sun · 10:00 am – 12:59 am',
                  link: null,
                },
              ].map((c) => (
                <div key={c.label} className="ab-card">
                  <div className="ab-card-icon">{c.icon}</div>
                  <div className="ab-card-body">
                    <span className="ab-card-label">{c.label}</span>
                    <span className="ab-card-value">{c.value}</span>
                    {c.link && (
                      <a href={c.link} className="ab-card-link" target={c.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {c.linkText} <ArrowRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social + price */}
            <div className="ab-bottom">
              <div className="ab-social">
                <a href="https://instagram.com/cafejanoshi" target="_blank" rel="noopener noreferrer" className="ab-social-link">
                  <Instagram size={16} strokeWidth={1.5} />
                  <span>@cafejanoshi</span>
                </a>
                <a href="https://facebook.com/Janoshi" target="_blank" rel="noopener noreferrer" className="ab-social-link">
                  <Facebook size={16} strokeWidth={1.5} />
                  <span>Cafe Janoshi</span>
                </a>
              </div>
              <div className="ab-price">Rs 1,000 – 6,000 per person</div>
            </div>
          </div>
        </div>

        {/* ── Services strip ── */}
        <div className="ab-services">
          {[
            'Private Dining Room',
            'Good for Kids\' Birthday',
            'Dine-in Available',
            'Family Friendly',
            'Outdoor Seating',
            'WhatsApp Orders',
          ].map((s) => (
            <div key={s} className="ab-service-tag">{s}</div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        .ab-container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 600px) { .ab-container { padding: 0 20px; } }

        .ab-label {
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--fg-muted);
          font-weight: 300;
          margin-bottom: 28px;
        }

        .ab-headline-row {
          display: flex;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }
        .ab-headline {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--fg);
          line-height: 1.1;
          letter-spacing: 0.01em;
          flex: 1;
          min-width: 280px;
        }
        .ab-headline em { font-style: italic; }
        .ab-headline-line {
          flex: 1;
          height: 1px;
          background: var(--border);
          min-width: 60px;
          margin-bottom: 12px;
        }

        /* grid */
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 80px;
        }
        @media (max-width: 900px) {
          .ab-grid { grid-template-columns: 1fr; gap: 50px; }
        }

        /* image col */
        .ab-img-col { position: relative; }
        .ab-img-main {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--border-light);
        }
        .ab-img-main img { transition: transform 0.8s var(--ease-smooth); }
        .ab-img-main:hover img { transform: scale(1.04); }
        .ab-img-accent {
          position: absolute;
          bottom: -30px; right: -30px;
          width: 48%;
          aspect-ratio: 1;
          overflow: hidden;
          border: 8px solid var(--bg);
          background: var(--border-light);
        }
        @media (max-width: 600px) {
          .ab-img-accent { display: none; }
        }
        .ab-float-tag {
          position: absolute;
          top: 32px; left: -20px;
          background: var(--fg);
          color: var(--bg);
          padding: 18px 22px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          z-index: 2;
        }
        .ab-float-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 300;
          line-height: 1;
          color: var(--accent-light);
        }
        .ab-float-txt {
          font-family: var(--font-body);
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(243,237,226,0.65);
        }

        /* content col */
        .ab-content-col { display: flex; flex-direction: column; gap: 0; padding-top: 12px; }
        .ab-body {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 100;
          line-height: 1.85;
          color: var(--fg-light);
          letter-spacing: 0.03em;
          margin-bottom: 20px;
        }
        .ab-body strong { font-weight: 400; color: var(--fg); }

        /* info cards */
        .ab-cards { display: flex; flex-direction: column; gap: 0; margin: 28px 0 32px; border-top: 1px solid var(--border-light); }
        .ab-card {
          display: flex;
          gap: 18px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-light);
          align-items: flex-start;
        }
        .ab-card-icon {
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          color: var(--fg-muted);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ab-card-body { display: flex; flex-direction: column; gap: 3px; }
        .ab-card-label {
          font-family: var(--font-body);
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--fg-muted);
          font-weight: 300;
        }
        .ab-card-value {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--fg);
          letter-spacing: 0.03em;
        }
        .ab-card-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-body);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-dark);
          text-decoration: none;
          margin-top: 4px;
          transition: opacity 0.3s;
        }
        .ab-card-link:hover { opacity: 0.7; }

        /* social */
        .ab-bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .ab-social { display: flex; gap: 20px; }
        .ab-social-link {
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--fg-light);
          text-decoration: none;
          font-weight: 300;
          transition: color 0.3s;
        }
        .ab-social-link:hover { color: var(--fg); }
        .ab-price {
          font-family: var(--font-body);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--fg-muted);
          font-weight: 300;
        }

        /* services strip */
        .ab-services {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }
        .ab-service-tag {
          font-family: var(--font-body);
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 300;
          color: var(--fg-muted);
          padding: 7px 14px;
          border: 1px solid var(--border);
          transition: all 0.3s;
        }
        .ab-service-tag:hover {
          border-color: var(--fg-muted);
          color: var(--fg);
        }
      `}</style>
    </section>
  )
}