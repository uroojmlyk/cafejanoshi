


'use client';

import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, X, ChevronRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const LINKS = [
  { label: 'Menu',         href: '#menu' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Gallery',      href: '#ambiance' },
  { label: 'Our Story',    href: '#story' },
  { label: 'Contact',      href: '#reservation' },
];

const go = (href) => {
  if (!href || href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [cartOpen,   setCartOpen]   = useState(false);
  const cartRef = useRef(null);

  const { cartCount, getCartTotal, getCartItems, clearCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close cart on outside click
  useEffect(() => {
    const fn = (e) => {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) setCartOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [cartOpen]);

  // Lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const orderViaWhatsApp = () => {
    const items = getCartItems();
    if (!items.length) return;
    const total = getCartTotal();
    let msg = `*CAFE JANOSHI — ORDER*\n\n`;
    items.forEach(i => {
      msg += `• ${i.name}  ×${i.quantity}  Rs ${i.price * i.quantity}\n`;
    });
    msg += `\n*Total: Rs ${total}*\n\nName:\nPhone:\nAddress:`;
    window.open(`https://wa.me/923210001112?text=${encodeURIComponent(msg)}`, '_blank');
    setCartOpen(false);
  };

  return (
    <>
      {/* ═══ NAVBAR ═══ */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner wrap">

          {/* Logo */}
          <button className="nav-logo" onClick={() => go('#')}>
            <span className="nav-logo-word">JANOSHI</span>
            <span className="nav-logo-sub">Cafe · Okara</span>
          </button>

          {/* Desktop links — centred */}
          <ul className="nav-links">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <button className="nav-link" onClick={() => go(href)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="nav-actions">
            {/* Cart */}
            <div className="cart-wrap" ref={cartRef}>
              <button
                className="cart-trigger"
                onClick={() => setCartOpen(v => !v)}
                aria-label="Cart"
              >
                <ShoppingCart size={17} strokeWidth={1.5} />
                {cartCount > 0 && <span className="cart-dot">{cartCount}</span>}
              </button>

              {/* Cart Panel */}
              {cartOpen && (
                <div className="cart-panel">
                  <div className="cart-head">
                    <span className="cart-head-title">Your Order</span>
                    <button onClick={() => setCartOpen(false)} className="cart-close">
                      <X size={15} />
                    </button>
                  </div>

                  {cartCount === 0 ? (
                    <div className="cart-empty">
                      <ShoppingCart size={28} strokeWidth={1} />
                      <p>Nothing here yet</p>
                      <button className="cart-browse" onClick={() => { setCartOpen(false); go('#menu'); }}>
                        Browse Menu
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="cart-items">
                        {getCartItems().map(item => (
                          <div key={item.id} className="cart-row">
                            <div className="cart-row-info">
                              <span className="cart-row-name">{item.name}</span>
                              <div className="cart-qty-row">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="cart-qty-btn"><Minus size={10} /></button>
                                <span className="cart-qty-num">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="cart-qty-btn"><Plus size={10} /></button>
                              </div>
                            </div>
                            <div className="cart-row-right">
                              <span className="cart-row-price">Rs {item.price * item.quantity}</span>
                              <button onClick={() => removeFromCart(item.id)} className="cart-del"><X size={11} /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cart-foot">
                        <div className="cart-total">
                          <span>Total</span>
                          <span>Rs {getCartTotal()}</span>
                        </div>
                        <button onClick={orderViaWhatsApp} className="cart-order-btn">
                          <span>Order via WhatsApp</span>
                          <ChevronRight size={13} />
                        </button>
                        <button onClick={clearCart} className="cart-clear">Clear order</button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Reserve CTA */}
            <button className="nav-reserve" onClick={() => go('#reservation')}>
              Reserve a Table
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ MOBILE FULLSCREEN MENU ═══ */}
      <div className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`}>
        <div className="mob-inner">
          <nav className="mob-links">
            {LINKS.map(({ label, href }, i) => (
              <button
                key={label}
                className="mob-link"
                style={{ transitionDelay: menuOpen ? `${i * 55 + 80}ms` : '0ms' }}
                onClick={() => { setMenuOpen(false); setTimeout(() => go(href), 350); }}
              >
                <span>{label}</span>
                <ChevronRight size={16} strokeWidth={1} />
              </button>
            ))}
          </nav>
          <div className="mob-meta">
            <a href="tel:03210001112">0321 000 1112</a>
            <span>Tehsil Rd, Waris Colony, Okara</span>
            <span>Open daily · until 12:59 am</span>
          </div>
        </div>
      </div>

      {/* ═══ STYLES ═══ */}
      <style jsx global>{`

        /* ── Nav shell ── */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          height: 72px;
          transition: background .6s var(--ease), box-shadow .6s var(--ease), backdrop-filter .6s var(--ease);
        }
        .nav--scrolled {
          background: rgba(243,237,226,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 var(--rule);
        }
        .nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }
        .nav-logo-word {
          font-family: var(--serif);
          font-size: 1.6rem;
          font-weight: 300;
          letter-spacing: .2em;
          color: var(--cream);
          line-height: 1;
          transition: color .5s var(--ease);
        }
        .nav--scrolled .nav-logo-word { color: var(--ink); }
        .nav-logo-sub {
          font-family: var(--sans);
          font-size: .5rem;
          font-weight: 300;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: rgba(243,237,226,.5);
          transition: color .5s var(--ease);
        }
        .nav--scrolled .nav-logo-sub { color: var(--ink-3); }

        /* ── Links ── */
        .nav-links {
          display: flex;
          list-style: none;
          gap: 36px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          font-family: var(--sans);
          font-size: .68rem;
          font-weight: 300;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(243,237,226,.75);
          background: none;
          border: none;
          position: relative;
          padding-bottom: 3px;
          transition: color .35s var(--ease);
          cursor: pointer;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: currentColor;
          transition: width .4s var(--ease);
        }
        .nav-link:hover { color: rgba(243,237,226,1); }
        .nav-link:hover::after { width: 100%; }
        .nav--scrolled .nav-link { color: var(--ink-2); }
        .nav--scrolled .nav-link:hover { color: var(--ink); }

        /* ── Actions ── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }

        /* ── Cart trigger ── */
        .cart-wrap { position: relative; }
        .cart-trigger {
          position: relative;
          display: flex;
          align-items: center;
          color: rgba(243,237,226,.8);
          background: none;
          border: none;
          padding: 6px;
          transition: color .3s;
          cursor: pointer;
        }
        .nav--scrolled .cart-trigger { color: var(--ink-2); }
        .cart-trigger:hover { color: var(--cream); }
        .nav--scrolled .cart-trigger:hover { color: var(--ink); }
        .cart-dot {
          position: absolute;
          top: 0; right: 0;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--gold);
          color: var(--cream);
          font-size: .55rem;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          letter-spacing: 0;
        }

        /* ── Cart panel ── */
        .cart-panel {
          position: absolute;
          top: calc(100% + 16px);
          right: 0;
          width: 330px;
          background: var(--cream);
          border: 1px solid var(--rule);
          box-shadow: 0 24px 64px rgba(30,26,23,.15);
          animation: panelIn .35s var(--ease-out);
          z-index: 300;
        }
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cart-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px 14px;
          border-bottom: 1px solid var(--rule-lt);
        }
        .cart-head-title {
          font-family: var(--serif);
          font-size: 1.15rem;
          font-weight: 300;
          letter-spacing: .05em;
          color: var(--ink);
        }
        .cart-close {
          color: var(--ink-3);
          padding: 4px;
          transition: color .3s;
          display: flex;
        }
        .cart-close:hover { color: var(--ink); }
        .cart-empty {
          padding: 44px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--ink-3);
        }
        .cart-empty p { font-size: .78rem; letter-spacing: .08em; color: var(--ink-3); font-weight: 300; }
        .cart-browse {
          font-family: var(--sans);
          font-size: .62rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          border: 1px solid var(--rule);
          color: var(--ink-2);
          padding: 8px 18px;
          margin-top: 4px;
          transition: all .3s;
        }
        .cart-browse:hover { border-color: var(--ink); color: var(--ink); }
        .cart-items { max-height: 220px; overflow-y: auto; }
        .cart-items::-webkit-scrollbar { width: 2px; }
        .cart-items::-webkit-scrollbar-thumb { background: var(--rule); }
        .cart-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          border-bottom: 1px solid var(--rule-lt);
          gap: 10px;
        }
        .cart-row:last-child { border-bottom: none; }
        .cart-row-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
        .cart-row-name {
          font-family: var(--sans);
          font-size: .78rem;
          font-weight: 300;
          color: var(--ink);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: .03em;
        }
        .cart-qty-row { display: flex; align-items: center; gap: 8px; }
        .cart-qty-btn {
          width: 20px; height: 20px;
          border: 1px solid var(--rule);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-2);
          transition: all .25s;
        }
        .cart-qty-btn:hover { border-color: var(--ink); color: var(--ink); }
        .cart-qty-num { font-size: .78rem; font-weight: 300; color: var(--ink); min-width: 14px; text-align: center; }
        .cart-row-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .cart-row-price { font-size: .8rem; font-weight: 300; color: var(--ink); letter-spacing: .03em; }
        .cart-del { color: var(--ink-3); padding: 2px; transition: color .25s; display: flex; }
        .cart-del:hover { color: var(--ink); }
        .cart-foot { padding: 14px 20px 18px; border-top: 1px solid var(--rule-lt); }
        .cart-total {
          display: flex;
          justify-content: space-between;
          font-family: var(--sans);
          font-size: .7rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--ink);
          font-weight: 300;
          margin-bottom: 12px;
        }
        .cart-order-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--sans);
          font-size: .64rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          font-weight: 300;
          background: var(--ink);
          color: var(--cream);
          padding: 13px;
          border: 1px solid var(--ink);
          transition: background .35s var(--ease);
          margin-bottom: 8px;
        }
        .cart-order-btn:hover { background: var(--gold-dk); border-color: var(--gold-dk); }
        .cart-clear {
          width: 100%;
          font-family: var(--sans);
          font-size: .6rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          font-weight: 300;
          color: var(--ink-3);
          padding: 6px;
          text-align: center;
          transition: color .3s;
          border: none;
          background: none;
        }
        .cart-clear:hover { color: var(--ink); }

        /* ── Reserve button ── */
        .nav-reserve {
          font-family: var(--sans);
          font-size: .62rem;
          letter-spacing: .22em;
          text-transform: uppercase;
          font-weight: 300;
          color: var(--cream);
          border: 1px solid rgba(243,237,226,.45);
          padding: 9px 20px;
          background: none;
          transition: all .4s var(--ease);
          white-space: nowrap;
          display: none;
        }
        .nav-reserve:hover {
          background: rgba(243,237,226,.12);
          border-color: rgba(243,237,226,.8);
        }
        .nav--scrolled .nav-reserve {
          color: var(--ink);
          border-color: var(--ink);
        }
        .nav--scrolled .nav-reserve:hover {
          background: var(--ink);
          color: var(--cream);
        }
        @media (min-width: 768px) { .nav-reserve { display: block; } }

        /* ── Hamburger ── */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: rgba(243,237,226,.85);
          transition: transform .4s var(--ease), opacity .4s, background .5s var(--ease);
          transform-origin: center;
        }
        .nav--scrolled .hamburger span { background: var(--ink); }
        .hamburger--open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .hamburger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger--open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        @media (min-width: 768px) {
          .hamburger { display: none; }
          .nav-links  { display: flex; }
        }
        @media (max-width: 767px) { .nav-links { display: none; } }

        /* ── Mobile fullscreen menu ── */
        .mob-menu {
          position: fixed;
          inset: 0;
          z-index: 199;
          background: var(--cream);
          display: flex;
          flex-direction: column;
          pointer-events: none;
          opacity: 0;
          transition: opacity .45s var(--ease);
        }
        .mob-menu--open { opacity: 1; pointer-events: auto; }
        .mob-inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 48px;
          padding: 100px 32px 60px;
          height: 100%;
        }
        .mob-links { display: flex; flex-direction: column; }
        .mob-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--serif);
          font-size: clamp(2rem, 8vw, 3rem);
          font-weight: 300;
          color: var(--ink);
          letter-spacing: .02em;
          padding: 14px 0;
          border-bottom: 1px solid var(--rule-lt);
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity .55s var(--ease-out), transform .55s var(--ease-out), color .3s;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          text-align: left;
          cursor: pointer;
        }
        .mob-menu--open .mob-link { opacity: 1; transform: none; }
        .mob-link:hover { color: var(--gold-dk); }
        .mob-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: var(--sans);
          font-size: .65rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--ink-3);
          font-weight: 300;
        }
        .mob-meta a { color: var(--ink-2); transition: color .3s; }
        .mob-meta a:hover { color: var(--ink); }
      `}</style>
    </>
  );
}