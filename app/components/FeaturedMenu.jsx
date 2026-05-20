'use client';

import { useEffect, useRef, useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { useCart, registerMenuItem } from '../context/CartContext';

const SIGNATURE = [
  { id: 'sig-dome-cake',     name: 'Chocolate Dome Cake',    price: 1499, tag: 'Dessert',    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',  desc: 'Dramatic chocolate sphere, warm sauce reveal.' },
  { id: 'sig-lava-cake',     name: 'White Lava Cake',         price: 999,  tag: 'Dessert',    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',  desc: 'Molten white chocolate, crisp golden crust.' },
  { id: 'sig-stuffed',       name: 'Stuffed Chicken',         price: 1999, tag: 'Signature',  img: 'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80', desc: 'Cheese-filled breast, house herb butter sauce.' },
  { id: 'sig-rib-eye',       name: 'Rib Eye Steak',           price: 4499, tag: 'Premium',    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',  desc: 'Prime cut, choice of six signature sauces.' },
  { id: 'sig-lotus-latte',   name: 'Lotus Latte',             price: 699,  tag: 'Coffee',     img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80', desc: 'Biscoff lotus cream, velvety espresso base.' },
  { id: 'sig-royal-rose',    name: 'Royal Rose Mojito',       price: 599,  tag: 'Mocktail',   img: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80',  desc: 'Rose petals, fresh mint, sparkling lime.' },
  { id: 'sig-jn-burger',     name: 'JN Special Burger',       price: 999,  tag: 'Burger',     img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', desc: 'Double smash, secret sauce, brioche bun.' },
  { id: 'sig-seafood',       name: 'Seafood Platter',         price: 3999, tag: 'For Two',    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80',  desc: 'Prawns, fish fillet, calamari — serves 2–3.' },
];

SIGNATURE.forEach(i => registerMenuItem(i.id, i.name, i.price));

function useReveal(th = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); obs.disconnect(); }
    }, { threshold: th });
    obs.observe(el);
    return () => obs.disconnect();
  }, [th]);
  return ref;
}

const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function FeaturedMenu() {
  const headRef = useReveal();

  return (
    <section id="menu" style={{ background: 'var(--charcoal)', padding: '140px 0 120px' }}>
      <div className="wrap">

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: 70, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="label label-light">Signature Selections</span>
            <h2 style={{ color: '#f3ede2' }}>
              A taste of<br /><em style={{ fontStyle: 'italic' }}>what awaits you</em>
            </h2>
          </div>
          <p style={{ color: 'rgba(243,237,226,.5)', maxWidth: 320, fontSize: '.9rem', fontWeight: 100, letterSpacing: '.04em', lineHeight: 1.75, paddingBottom: 8 }}>
            Eight of our most celebrated creations. 
            Each one a reason to visit.
          </p>
        </div>

        {/* Grid */}
        <div className="fm-grid">
          {SIGNATURE.map((item, i) => <MenuCard key={item.id} item={item} delay={i * 70} />)}
        </div>

        {/* Footer CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
          <button
            className="btn btn-outline-light"
            onClick={() => go('#fullmenu')}
            style={{ gap: 10 }}
          >
            <span>View Full Menu — 155+ Items</span>
            <ArrowRight size={13} strokeWidth={1.5} />
          </button>
        </div>

      </div>

      <style jsx global>{`
        .fm-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(243,237,226,.07);
          border: 1px solid rgba(243,237,226,.07);
        }
        @media (max-width: 1100px) { .fm-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px)  { .fm-grid { grid-template-columns: 1fr; } }

        .fm-card {
          background: var(--charcoal);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          cursor: default;
          transition: background .4s var(--ease);
        }
        .fm-card:hover { background: var(--charcoal-mid); }

        .fm-img-wrap {
          position: relative;
          aspect-ratio: 3/2;
          overflow: hidden;
        }
        .fm-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .9s var(--ease);
          filter: brightness(.88);
        }
        .fm-card:hover .fm-img { transform: scale(1.06); filter: brightness(.95); }

        .fm-tag {
          position: absolute;
          top: 14px; left: 14px;
          font-family: var(--sans);
          font-size: .55rem;
          font-weight: 300;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(243,237,226,.7);
          border: 1px solid rgba(243,237,226,.25);
          padding: 4px 10px;
          background: rgba(30,26,23,.4);
          backdrop-filter: blur(6px);
        }
        .fm-price-badge {
          position: absolute;
          bottom: 0; right: 0;
          font-family: var(--serif);
          font-size: 1.25rem;
          font-weight: 300;
          color: #f3ede2;
          background: rgba(30,26,23,.65);
          backdrop-filter: blur(8px);
          padding: 8px 14px;
          letter-spacing: .02em;
        }

        .fm-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 0; }
        .fm-name {
          font-family: var(--serif);
          font-size: 1.2rem;
          font-weight: 300;
          color: #f3ede2;
          line-height: 1.15;
          margin-bottom: 8px;
          letter-spacing: .02em;
        }
        .fm-desc {
          font-family: var(--sans);
          font-size: .78rem;
          font-weight: 100;
          color: rgba(243,237,226,.45);
          line-height: 1.65;
          letter-spacing: .03em;
          flex: 1;
        }
        .fm-add-btn {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--sans);
          font-size: .6rem;
          font-weight: 300;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(243,237,226,.55);
          border: 1px solid rgba(243,237,226,.18);
          padding: 9px 16px;
          background: none;
          transition: all .35s var(--ease);
          align-self: flex-start;
        }
        .fm-add-btn:hover {
          color: #f3ede2;
          border-color: rgba(243,237,226,.55);
          background: rgba(243,237,226,.06);
        }
        .fm-add-btn.added {
          color: var(--gold-lt);
          border-color: var(--gold);
        }
      `}</style>
    </section>
  );
}

function MenuCard({ item, delay }) {
  const ref = useRef(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { el.style.opacity = 1; el.style.transform = 'none'; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const handleAdd = () => {
    addToCart(item.id, item.name, item.price, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div ref={ref} className="fm-card" style={{ opacity: 0, transform: 'translateY(36px)', transition: 'opacity .9s var(--ease-out), transform .9s var(--ease-out)' }}>
      <div className="fm-img-wrap">
        <img src={item.img} alt={item.name} className="fm-img" />
        <span className="fm-tag">{item.tag}</span>
        <span className="fm-price-badge">Rs {item.price.toLocaleString()}</span>
      </div>
      <div className="fm-body">
        <div className="fm-name">{item.name}</div>
        <p className="fm-desc">{item.desc}</p>
        <button className={`fm-add-btn${added ? ' added' : ''}`} onClick={handleAdd}>
          <Plus size={11} strokeWidth={1.5} />
          <span>{added ? 'Added' : 'Add to order'}</span>
        </button>
      </div>
    </div>
  );
}