'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, X, ChevronRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NAV = [
  { label: 'Home',      href: '/',       page: true  },
  { label: 'Menu',      href: '/menu',   page: true  },
  { label: 'Experience',href: '/experience',    page: true },
  { label: 'Gallery',   href: '/gallery',    page: true },
  { label: 'Reserve',   href: '/reserve',page: true },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobOpen,   setMobOpen]   = useState(false);
  const [cartOpen,  setCartOpen]  = useState(false);
  const cartRef = useRef(null);
  const path = usePathname();

  const { cartCount, getCartTotal, getCartItems, clearCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) setCartOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [cartOpen]);

  useEffect(() => { document.body.style.overflow = mobOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobOpen]);
  useEffect(() => { setMobOpen(false); }, [path]);

  const handleNav = (href, page, e) => {
      console.log('Navigating to:', href, 'Page navigation:', page);  // ✅ Add this

    if (!page) {
      e.preventDefault();
      setMobOpen(false);
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else {
      setMobOpen(false);
    }
  };

  const orderWA = () => {
    const items = getCartItems();
    if (!items.length) return;
    let msg = `*CAFE JANOSHI ORDER*\n\n`;
    items.forEach(i => { msg += `• ${i.name} ×${i.quantity} — Rs ${i.price * i.quantity}\n`; });
    msg += `\n*Total: Rs ${getCartTotal()}*\n\nName:\nPhone:\nAddress:`;
    window.open(`https://wa.me/923210001112?text=${encodeURIComponent(msg)}`, '_blank');
    setCartOpen(false);
  };

  const onHero = path === '/';
  const light  = onHero && !scrolled;

  return (
    <>
      <nav className={`jnav${scrolled ? ' jnav-bg' : ''}${light ? ' jnav-hero' : ''}`}>
        <div className="wrap jnav-inner">

          {/* Logo */}
          <Link href="/" className="jnav-logo">
            <span className="jnav-logo-name" style={{ color: light ? 'rgba(243,237,226,0.95)' : 'var(--ink)' }}>JANOSHI</span>
            <span className="jnav-logo-sub"  style={{ color: light ? 'rgba(243,237,226,0.4)' : 'var(--ink-3)' }}>Cafe · Okara</span>
          </Link>

          {/* Desktop links */}
          <ul className="jnav-links">
            {NAV.map(({ label, href, page }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={(e) => handleNav(href, page, e)}
                  className="jnav-link"
                  style={{ color: light ? 'rgba(243,237,226,0.75)' : 'var(--ink-2)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="jnav-right">
            {/* Cart */}
            <div className="jnav-cart" ref={cartRef}>
              <button onClick={() => setCartOpen(v => !v)} className="jnav-cart-btn" style={{ color: light ? 'rgba(243,237,226,0.8)' : 'var(--ink-2)' }}>
                <ShoppingCart size={18} strokeWidth={1.5} />
                {cartCount > 0 && <span className="jnav-badge">{cartCount}</span>}
              </button>

              {cartOpen && (
                <div className="jnav-panel">
                  <div className="jpan-head">
                    <span className="jpan-title">Your Order</span>
                    <button onClick={() => setCartOpen(false)} className="jpan-x"><X size={15} /></button>
                  </div>
                  {cartCount === 0 ? (
                    <div className="jpan-empty">
                      <ShoppingCart size={24} strokeWidth={1} />
                      <p>Nothing added yet</p>
                      <Link href="/menu" onClick={() => setCartOpen(false)} className="jpan-browse">Browse Full Menu</Link>
                    </div>
                  ) : (
                    <>
                      <div className="jpan-items">
                        {getCartItems().map(item => (
                          <div key={item.id} className="jpan-row">
                            <div className="jpan-info">
                              <span className="jpan-name">{item.name}</span>
                              <div className="jpan-qty">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="jpan-qb"><Minus size={10}/></button>
                                <span className="jpan-qn">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="jpan-qb"><Plus size={10}/></button>
                              </div>
                            </div>
                            <div className="jpan-right">
                              <span className="jpan-price">Rs {(item.price * item.quantity).toLocaleString()}</span>
                              <button onClick={() => removeFromCart(item.id)} className="jpan-del"><X size={11}/></button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="jpan-foot">
                        <div className="jpan-total"><span>Total</span><span>Rs {getCartTotal().toLocaleString()}</span></div>
                        <button onClick={orderWA} className="jpan-order">Order via WhatsApp <ChevronRight size={13}/></button>
                        <button onClick={clearCart} className="jpan-clear">Clear order</button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Reserve CTA */}
            <Link
              href="#reserve"
              onClick={(e) => { e.preventDefault(); document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="jnav-cta"
              style={light ? { color:'rgba(243,237,226,0.9)', borderColor:'rgba(243,237,226,0.4)' } : {}}
            >
              Reserve
            </Link>

            {/* Hamburger */}
            <button onClick={() => setMobOpen(v => !v)} className={`jnav-ham${mobOpen?' jnav-ham-x':''}`}>
              <span style={{ background: light ? 'rgba(243,237,226,0.85)' : 'var(--ink)' }} />
              <span style={{ background: light ? 'rgba(243,237,226,0.85)' : 'var(--ink)' }} />
              <span style={{ background: light ? 'rgba(243,237,226,0.85)' : 'var(--ink)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`jmob${mobOpen?' jmob-open':''}`}>
        <div className="jmob-inner">
          <nav className="jmob-links">
            {NAV.map(({ label, href, page }, i) => (
              <Link
                key={label}
                href={href}
                onClick={(e) => handleNav(href, page, e)}
                className="jmob-link"
                style={{ transitionDelay: mobOpen ? `${i*55+80}ms` : '0ms' }}
              >
                <span>{label}</span>
                <ChevronRight size={16} strokeWidth={1}/>
              </Link>
            ))}
          </nav>
          <div className="jmob-meta">
            <a href="tel:03210001112">0321 000 1112</a>
            <span>Tehsil Rd, Waris Colony, Okara</span>
            <span>Open daily · 10 am – 12:59 am</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .jnav {
          position: fixed; top:0; left:0; right:0; height:72px; z-index:500;
          transition: background .55s var(--ease), box-shadow .55s var(--ease);
        }
        .jnav-bg {
          background: rgba(243,237,226,.97);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 1px 0 var(--border);
        }
        .jnav-inner { height:100%; display:flex; align-items:center; justify-content:space-between; gap:24px; }

        .jnav-logo { display:flex; flex-direction:column; gap:2px; flex-shrink:0; }
        .jnav-logo-name { font-family:var(--serif); font-size:1.65rem; font-weight:400; letter-spacing:.2em; line-height:1; transition:opacity .3s; }
        .jnav-logo:hover .jnav-logo-name { opacity:.7; }
        .jnav-logo-sub  { font-family:var(--sans); font-size:.52rem; font-weight:600; letter-spacing:.28em; text-transform:uppercase; }

        .jnav-links { display:none; align-items:center; gap:32px; flex:1; justify-content:center; }
        @media (min-width:900px) { .jnav-links { display:flex; } }

        .jnav-link {
          font-family:var(--sans); font-size:.68rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase;
          position:relative; padding-bottom:3px; transition:opacity .3s;
        }
        .jnav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:currentColor; transition:width .4s var(--ease); }
        .jnav-link:hover { opacity:1; }
        .jnav-link:hover::after { width:100%; }

        .jnav-right { display:flex; align-items:center; gap:14px; flex-shrink:0; }

        .jnav-cart { position:relative; }
        .jnav-cart-btn { position:relative; display:flex; align-items:center; padding:6px; transition:opacity .3s; }
        .jnav-cart-btn:hover { opacity:.7; }
        .jnav-badge {
          position:absolute; top:-3px; right:-5px;
          width:17px; height:17px; border-radius:50%;
          background:var(--gold); color:var(--dark);
          font-size:.58rem; font-weight:700;
          display:flex; align-items:center; justify-content:center;
        }

        .jnav-panel {
          position:absolute; top:calc(100% + 14px); right:0; width:340px;
          background:var(--cream); border:1px solid var(--border);
          box-shadow:0 20px 60px rgba(30,26,23,.14);
          animation:panIn .3s var(--ease-out);
          z-index:600;
        }
        @keyframes panIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }

        .jpan-head { display:flex; justify-content:space-between; align-items:center; padding:18px 20px 14px; border-bottom:1px solid var(--border-lt); }
        .jpan-title { font-family:var(--serif); font-size:1.1rem; font-weight:400; color:var(--ink); letter-spacing:.04em; }
        .jpan-x { color:var(--ink-3); display:flex; padding:4px; transition:color .3s; }
        .jpan-x:hover { color:var(--ink); }
        .jpan-empty { padding:40px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px; color:var(--ink-3); }
        .jpan-empty p { font-size:.8rem; font-weight:400; }
        .jpan-browse { font-family:var(--sans); font-size:.62rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase; border:1px solid var(--border); color:var(--ink-2); padding:8px 18px; display:inline-block; transition:all .3s; margin-top:4px; }
        .jpan-browse:hover { border-color:var(--ink); color:var(--ink); }
        .jpan-items { max-height:230px; overflow-y:auto; }
        .jpan-items::-webkit-scrollbar { width:2px; }
        .jpan-row { display:flex; align-items:center; justify-content:space-between; padding:12px 20px; border-bottom:1px solid var(--border-lt); gap:10px; }
        .jpan-row:last-child { border:none; }
        .jpan-info { flex:1; min-width:0; display:flex; flex-direction:column; gap:5px; }
        .jpan-name { font-family:var(--sans); font-size:.8rem; font-weight:500; color:var(--ink); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .jpan-qty { display:flex; align-items:center; gap:7px; }
        .jpan-qb { width:20px; height:20px; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--ink-2); transition:all .25s; }
        .jpan-qb:hover { border-color:var(--ink); color:var(--ink); }
        .jpan-qn { font-size:.8rem; font-weight:500; color:var(--ink); min-width:16px; text-align:center; }
        .jpan-right { display:flex; align-items:center; gap:8px; flex-shrink:0; }
        .jpan-price { font-size:.82rem; font-weight:500; color:var(--ink); }
        .jpan-del { color:var(--ink-3); display:flex; padding:2px; transition:color .25s; }
        .jpan-del:hover { color:var(--ink); }
        .jpan-foot { padding:14px 20px 18px; border-top:1px solid var(--border-lt); }
        .jpan-total { display:flex; justify-content:space-between; font-family:var(--sans); font-size:.72rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--ink); margin-bottom:12px; }
        .jpan-order { width:100%; display:flex; align-items:center; justify-content:center; gap:8px; font-family:var(--sans); font-size:.65rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; background:var(--ink); color:var(--cream); padding:13px; border:1px solid var(--ink); transition:background .35s; margin-bottom:8px; }
        .jpan-order:hover { background:var(--gold-dk); border-color:var(--gold-dk); }
        .jpan-clear { width:100%; font-family:var(--sans); font-size:.6rem; font-weight:500; letter-spacing:.16em; text-transform:uppercase; color:var(--ink-3); padding:6px; text-align:center; transition:color .3s; }
        .jpan-clear:hover { color:var(--ink); }

        .jnav-cta {
          display:none; font-family:var(--sans); font-size:.62rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase;
          color:var(--ink); border:1px solid var(--ink); padding:9px 22px; transition:all .4s var(--ease); white-space:nowrap;
        }
        .jnav-cta:hover { background:var(--ink); color:var(--cream); }
        @media (min-width:900px) { .jnav-cta { display:inline-block; } }

        .jnav-ham { display:flex; flex-direction:column; gap:5px; padding:4px; }
        .jnav-ham span { display:block; width:22px; height:1px; transition:transform .38s var(--ease), opacity .38s; transform-origin:center; }
        .jnav-ham-x span:nth-child(1) { transform:translateY(6px) rotate(45deg); }
        .jnav-ham-x span:nth-child(2) { opacity:0; transform:scaleX(0); }
        .jnav-ham-x span:nth-child(3) { transform:translateY(-6px) rotate(-45deg); }
        @media (min-width:900px) { .jnav-ham { display:none; } }

        .jmob { position:fixed; inset:0; z-index:490; background:var(--cream); opacity:0; pointer-events:none; transition:opacity .4s var(--ease); overflow-y:auto; }
        .jmob-open { opacity:1; pointer-events:auto; }
        .jmob-inner { display:flex; flex-direction:column; justify-content:center; gap:48px; padding:100px 32px 60px; min-height:100vh; }
        .jmob-links { display:flex; flex-direction:column; }
        .jmob-link {
          display:flex; justify-content:space-between; align-items:center;
          font-family:var(--serif); font-size:clamp(2rem,8vw,3.2rem); font-weight:400;
          color:var(--ink); padding:14px 0; border-bottom:1px solid var(--border-lt);
          opacity:0; transform:translateX(-20px); transition:opacity .5s var(--ease-out), transform .5s var(--ease-out), color .3s;
        }
        .jmob-open .jmob-link { opacity:1; transform:none; }
        .jmob-link:hover { color:var(--gold-dk); }
        .jmob-meta { display:flex; flex-direction:column; gap:8px; font-family:var(--sans); font-size:.68rem; font-weight:500; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-3); }
        .jmob-meta a { color:var(--ink-2); transition:color .3s; }
        .jmob-meta a:hover { color:var(--ink); }
      `}</style>
    </>
  );
}