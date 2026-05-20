'use client'

import { useState, useEffect, useRef } from 'react'

const IMAGES = [
  { id:1, src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', title:'Dining Area', span: 'col-span-2 row-span-2' },
  { id:2, src:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',  title:'Cozy Corner' },
  { id:3, src:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', title:'Outdoor Seating' },
  { id:4, src:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',  title:'VIP Lounge' },
  { id:5, src:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', title:'Pizza Special' },
  { id:6, src:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',  title:'Steak Perfection' },
  { id:7, src:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',  title:'Pasta Delight' },
]

export default function GallerySection() {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const close = (e) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <section id="gallery" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="gl-container">

        <div className="gl-header">
          <div className="gl-label">Gallery</div>
          <h2 className="gl-title">Our <em>Spaces</em><br />& Creations</h2>
        </div>

        <div
          ref={ref}
          className="gl-grid"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'opacity 1s ease, transform 1s ease' }}
        >
          {IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={`gl-cell${i === 0 ? ' gl-cell--large' : ''}`}
              onClick={() => setActive(img)}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="gl-cell-img" style={{ backgroundImage: `url(${img.src})` }} />
              <div className="gl-cell-overlay">
                <span className="gl-cell-title">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {active && (
          <div className="gl-lightbox" onClick={() => setActive(null)}>
            <div className="gl-lb-inner" onClick={e => e.stopPropagation()}>
              <img src={active.src} alt={active.title} className="gl-lb-img" />
              <div className="gl-lb-info">
                <span className="gl-lb-title">{active.title}</span>
                <button onClick={() => setActive(null)} className="gl-lb-close">✕</button>
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        .gl-container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 600px) { .gl-container { padding: 0 20px; } }

        .gl-header { margin-bottom: 60px; }
        .gl-label {
          font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--fg-muted); font-weight: 300; margin-bottom: 20px;
        }
        .gl-title {
          font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 300; color: var(--fg); line-height: 1.1;
        }
        .gl-title em { font-style: italic; }

        .gl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 280px;
          gap: 4px;
        }
        @media (max-width: 768px) {
          .gl-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 220px; }
        }
        @media (max-width: 480px) {
          .gl-grid { grid-template-columns: 1fr; grid-auto-rows: 260px; }
          .gl-cell--large { grid-column: auto; grid-row: auto; }
        }

        .gl-cell {
          position: relative; overflow: hidden; cursor: pointer; background: var(--border-light);
        }
        .gl-cell--large { grid-column: span 2; grid-row: span 2; }

        .gl-cell-img {
          position: absolute; inset: 0; background-size: cover; background-position: center;
          transition: transform 0.8s var(--ease-smooth);
        }
        .gl-cell:hover .gl-cell-img { transform: scale(1.06); }

        .gl-cell-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(58,54,58,0.65) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.4s;
          display: flex; align-items: flex-end; padding: 20px;
        }
        .gl-cell:hover .gl-cell-overlay { opacity: 1; }
        .gl-cell-title {
          font-family: var(--font-display); font-size: 1.2rem; font-weight: 300;
          color: #f3ede2; letter-spacing: 0.04em; font-style: italic;
        }

        /* Lightbox */
        .gl-lightbox {
          position: fixed; inset: 0; z-index: 999;
          background: rgba(58,54,58,0.9); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .gl-lb-inner {
          max-width: 90vw; max-height: 90vh;
          display: flex; flex-direction: column; gap: 0;
        }
        .gl-lb-img {
          max-width: 100%; max-height: 80vh; object-fit: contain; display: block;
        }
        .gl-lb-info {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 0;
        }
        .gl-lb-title {
          font-family: var(--font-display); font-size: 1.1rem; font-weight: 300;
          color: var(--bg); letter-spacing: 0.06em;
        }
        .gl-lb-close {
          background: none; border: 1px solid rgba(243,237,226,0.35);
          color: var(--bg); font-size: 0.9rem; width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s;
        }
        .gl-lb-close:hover { background: rgba(243,237,226,0.15); }
      `}</style>
    </section>
  )
}