// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Send } from 'lucide-react'

// export default function Footer() {
//   const [email, setEmail]       = useState('')
//   const [subscribed, setSubscribed] = useState(false)

//   const handleSubscribe = e => {
//     e.preventDefault()
//     if (email) {
//       setSubscribed(true); setEmail('')
//       setTimeout(() => setSubscribed(false), 3000)
//     }
//   }

//   const scrollTo = (id) => {
//     if (id === 'home') { window.scrollTo({ top:0, behavior:'smooth' }); return }
//     document.querySelector(`#${id}`)?.scrollIntoView({ behavior:'smooth' })
//   }

//   return (
//     <footer style={{ background: 'var(--fg)', color: 'rgba(243,237,226,0.65)', paddingTop: '80px' }}>
//       <div className="ft-container">

//         {/* Top grid */}
//         <div className="ft-grid">

//           {/* Brand */}
//           <div className="ft-brand">
//             <div className="ft-logo">JANOSHI</div>
//             <div className="ft-logo-sub">Cafe · Okara</div>
//             <p className="ft-brand-desc">
//               Okara's premier dining destination where exceptional cuisine meets elegant ambiance. 
//               Experience culinary excellence in the heart of Punjab.
//             </p>
//             <div className="ft-social">
//               {[
//                 { icon: <Instagram size={16} strokeWidth={1.5} />, href: 'https://instagram.com/cafejanoshi' },
//                 { icon: <Facebook size={16} strokeWidth={1.5} />,  href: 'https://facebook.com/Janoshi' },
//               ].map((s, i) => (
//                 <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social-link">
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="ft-col">
//             <div className="ft-col-title">Explore</div>
//             <ul className="ft-links">
//               {[
//                 ['Home', 'home'], ['Menu', 'menu'], ['About Us', 'about'],
//                 ['Gallery', 'gallery'], ['Reservations', 'booking'], ['Contact', 'contact'],
//               ].map(([label, id]) => (
//                 <li key={id}>
//                   <button onClick={() => scrollTo(id)} className="ft-link">{label}</button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="ft-col">
//             <div className="ft-col-title">Contact</div>
//             <div className="ft-contact-list">
//               {[
//                 { icon: <MapPin size={14} strokeWidth={1.5} />, text: 'RC7X+CW4, Tehsil Rd\nWaris Colony, Okara', href: null },
//                 { icon: <Phone size={14} strokeWidth={1.5} />,  text: '0321 000 1112', href: 'tel:03210001112' },
//                 { icon: <Mail size={14} strokeWidth={1.5} />,   text: 'info@cafejanoshi.com', href: 'mailto:info@cafejanoshi.com' },
//                 { icon: <Clock size={14} strokeWidth={1.5} />,  text: 'Mon–Sun · 10 am – 12:59 am', href: null },
//               ].map((c, i) => (
//                 <div key={i} className="ft-contact-item">
//                   <span className="ft-contact-icon">{c.icon}</span>
//                   {c.href
//                     ? <a href={c.href} className="ft-contact-text ft-contact-link">{c.text}</a>
//                     : <span className="ft-contact-text" style={{whiteSpace:'pre-line'}}>{c.text}</span>
//                   }
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div className="ft-col">
//             <div className="ft-col-title">Stay Updated</div>
//             <p className="ft-newsletter-sub">Subscribe for special offers and events.</p>
//             {subscribed ? (
//               <div className="ft-subscribed">Thank you for subscribing!</div>
//             ) : (
//               <form onSubmit={handleSubscribe} className="ft-subscribe-form">
//                 <input
//                   type="email" value={email} onChange={e => setEmail(e.target.value)}
//                   required placeholder="your@email.com"
//                   className="ft-subscribe-input"
//                 />
//                 <button type="submit" className="ft-subscribe-btn">
//                   <Send size={14} />
//                 </button>
//               </form>
//             )}
//             <div className="ft-price-note">Rs 1,000 – 6,000 per person</div>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="ft-divider" />

//         {/* Bottom */}
//         <div className="ft-bottom">
//           <span className="ft-copyright">
//             © {new Date().getFullYear()} Cafe Janoshi · Okara, Punjab, Pakistan
//           </span>
//           <span className="ft-tagline">
//             Crafted with care · Every meal, a celebration
//           </span>
//         </div>

//       </div>

//       <style jsx global>{`
//         .ft-container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }
//         @media (max-width: 600px) { .ft-container { padding: 0 20px; } }

//         .ft-grid {
//           display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 60px;
//           padding-bottom: 64px;
//         }
//         @media (max-width: 1024px) { .ft-grid { grid-template-columns: 1fr 1fr; gap: 40px; } }
//         @media (max-width: 600px)  { .ft-grid { grid-template-columns: 1fr; gap: 40px; } }

//         /* Brand */
//         .ft-brand {}
//         .ft-logo {
//           font-family: var(--font-display); font-size: 2rem; font-weight: 300;
//           letter-spacing: 0.18em; color: #f3ede2; line-height: 1; margin-bottom: 4px;
//         }
//         .ft-logo-sub {
//           font-family: var(--font-body); font-size: 0.58rem; letter-spacing: 0.3em;
//           text-transform: uppercase; color: rgba(243,237,226,0.35); margin-bottom: 24px;
//         }
//         .ft-brand-desc {
//           font-family: var(--font-body); font-size: 0.82rem; font-weight: 100;
//           color: rgba(243,237,226,0.45); line-height: 1.75; margin-bottom: 28px;
//         }
//         .ft-social { display: flex; gap: 10px; }
//         .ft-social-link {
//           width: 34px; height: 34px; border: 1px solid rgba(243,237,226,0.2);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(243,237,226,0.5); text-decoration: none;
//           transition: all 0.3s;
//         }
//         .ft-social-link:hover { border-color: rgba(243,237,226,0.6); color: #f3ede2; }

//         /* Columns */
//         .ft-col-title {
//           font-family: var(--font-body); font-size: 0.62rem; letter-spacing: 0.22em;
//           text-transform: uppercase; color: rgba(243,237,226,0.45);
//           margin-bottom: 24px; font-weight: 300;
//         }
//         .ft-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
//         .ft-link {
//           font-family: var(--font-body); font-size: 0.82rem; font-weight: 100;
//           color: rgba(243,237,226,0.55); background: none; border: none;
//           cursor: pointer; text-align: left; padding: 0; letter-spacing: 0.04em;
//           transition: color 0.3s;
//         }
//         .ft-link:hover { color: #f3ede2; }

//         /* Contact */
//         .ft-contact-list { display: flex; flex-direction: column; gap: 16px; }
//         .ft-contact-item { display: flex; gap: 10px; align-items: flex-start; }
//         .ft-contact-icon { color: rgba(243,237,226,0.3); margin-top: 2px; flex-shrink: 0; }
//         .ft-contact-text {
//           font-family: var(--font-body); font-size: 0.8rem; font-weight: 100;
//           color: rgba(243,237,226,0.5); line-height: 1.5; letter-spacing: 0.03em;
//         }
//         .ft-contact-link { text-decoration: none; transition: color 0.3s; }
//         .ft-contact-link:hover { color: rgba(243,237,226,0.85); }

//         /* Newsletter */
//         .ft-newsletter-sub {
//           font-family: var(--font-body); font-size: 0.8rem; font-weight: 100;
//           color: rgba(243,237,226,0.4); margin-bottom: 20px; line-height: 1.6;
//         }
//         .ft-subscribe-form {
//           display: flex; border-bottom: 1px solid rgba(243,237,226,0.2); margin-bottom: 20px;
//         }
//         .ft-subscribe-input {
//           flex: 1; background: none; border: none; outline: none;
//           font-family: var(--font-body); font-size: 0.82rem; font-weight: 100;
//           color: #f3ede2; padding: 8px 0; letter-spacing: 0.04em;
//         }
//         .ft-subscribe-input::placeholder { color: rgba(243,237,226,0.25); }
//         .ft-subscribe-btn {
//           background: none; border: none; color: rgba(243,237,226,0.5);
//           cursor: pointer; padding: 8px 0 8px 10px; transition: color 0.3s;
//           display: flex; align-items: center;
//         }
//         .ft-subscribe-btn:hover { color: #f3ede2; }
//         .ft-subscribed {
//           font-family: var(--font-body); font-size: 0.75rem; letter-spacing: 0.1em;
//           color: var(--accent-light); margin-bottom: 16px;
//         }
//         .ft-price-note {
//           font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.12em;
//           color: rgba(243,237,226,0.25); text-transform: uppercase;
//         }

//         /* Bottom */
//         .ft-divider { height: 1px; background: rgba(243,237,226,0.08); }
//         .ft-bottom {
//           display: flex; justify-content: space-between; align-items: center;
//           padding: 24px 0; gap: 16px; flex-wrap: wrap;
//         }
//         .ft-copyright, .ft-tagline {
//           font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.1em;
//           color: rgba(243,237,226,0.25); font-weight: 300;
//         }
//         .ft-tagline { font-style: italic; }
//       `}</style>
//     </footer>
//   )
// }








'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';

const go = (href) => {
  if (href === '#') { window.scrollTo({ top:0, behavior:'smooth' }); return; }
  document.querySelector(href)?.scrollIntoView({ behavior:'smooth' });
};

const QUICK = [
  { label:'Home',          href:'#' },
  { label:'Experience',    href:'#experience' },
  { label:'Menu',          href:'#menu' },
  { label:'Gallery',       href:'#ambiance' },
  { label:'Our Story',     href:'#story' },
  { label:'Reserve',       href:'#reservation' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone]   = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true); setEmail('');
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <footer style={{ background: 'var(--charcoal-mid)', borderTop: '1px solid rgba(243,237,226,.06)' }}>

      {/* Main footer body */}
      <div className="wrap" style={{ padding:'80px 60px 0' }}>
        <div className="ft-body">

          {/* Brand */}
          <div className="ft-brand">
            <button className="ft-logo" onClick={() => go('#')}>
              <span className="ft-logo-word">JANOSHI</span>
              <span className="ft-logo-tag">Cafe · Okara · Est. 2012</span>
            </button>
            <p className="ft-brand-desc">
              A refined café experience in the heart of Okara — artisan coffee, handcrafted desserts, 
              and premium dining that keeps Okara coming back.
            </p>
            <div className="ft-socials">
              {[
                { icon:<Instagram size={16} strokeWidth={1.5}/>, href:'https://instagram.com/cafejanoshi', label:'Instagram' },
                { icon:<Facebook size={16} strokeWidth={1.5}/>,  href:'https://facebook.com/Janoshi',     label:'Facebook'  },
                { icon:<MessageCircle size={16} strokeWidth={1.5}/>, href:'https://wa.me/923210001112',   label:'WhatsApp'  },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="ft-col">
            <div className="ft-col-hd">Navigate</div>
            <ul className="ft-links">
              {QUICK.map(({ label, href }) => (
                <li key={label}>
                  <button className="ft-link" onClick={() => go(href)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-col">
            <div className="ft-col-hd">Contact</div>
            <div className="ft-contact">
              {[
                { icon:<Phone size={13} strokeWidth={1.5}/>,  text:'0321 000 1112',                   href:'tel:03210001112' },
                { icon:<MapPin size={13} strokeWidth={1.5}/>, text:'RC7X+CW4, Tehsil Rd\nWaris Colony, Okara', href:'https://maps.google.com/?q=Cafe+Janoshi+Okara' },
                { icon:<Clock size={13} strokeWidth={1.5}/>,  text:'Mon – Sun · 10:00 am – 12:59 am', href: null },
              ].map((c,i) => (
                <div key={i} className="ft-contact-row">
                  <span className="ft-contact-icon">{c.icon}</span>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="ft-contact-text ft-contact-link" style={{whiteSpace:'pre-line'}}>{c.text}</a>
                    : <span className="ft-contact-text">{c.text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="ft-col">
            <div className="ft-col-hd">Stay Close</div>
            <p className="ft-nl-sub">Seasonal menus, special events, and exclusive offers — delivered quietly.</p>
            {done ? (
              <div className="ft-nl-done">Subscribed — welcome to the family.</div>
            ) : (
              <form onSubmit={subscribe} className="ft-nl-form">
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="ft-nl-input"
                />
                <button type="submit" className="ft-nl-btn"><ArrowRight size={14} strokeWidth={1.5} /></button>
              </form>
            )}
            <div className="ft-price">Rs 1,000 – 6,000 per person</div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="wrap">
        <div className="ft-bar">
          <span className="ft-copy">© {new Date().getFullYear()} Cafe Janoshi · Okara, Punjab, Pakistan</span>
          <span className="ft-tagline">Every meal, a memory.</span>
        </div>
      </div>

      <style jsx global>{`
        .ft-body {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 60px;
          padding-bottom: 72px;
          border-bottom: 1px solid rgba(243,237,226,.06);
        }
        @media (max-width: 1100px) { .ft-body { grid-template-columns: 1fr 1fr; gap: 44px; } }
        @media (max-width: 580px)  { .ft-body { grid-template-columns: 1fr; gap: 40px; } }

        .ft-brand { display: flex; flex-direction: column; gap: 20px; }
        .ft-logo { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 4px; text-align: left; }
        .ft-logo-word {
          font-family: var(--serif);
          font-size: 2.2rem;
          font-weight: 300;
          letter-spacing: .18em;
          color: #f3ede2;
          line-height: 1;
          transition: opacity .3s;
        }
        .ft-logo:hover .ft-logo-word { opacity: .7; }
        .ft-logo-tag {
          font-family: var(--sans);
          font-size: .52rem;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: rgba(243,237,226,.28);
          font-weight: 300;
        }
        .ft-brand-desc {
          font-family: var(--sans);
          font-size: .82rem;
          font-weight: 100;
          line-height: 1.8;
          color: rgba(243,237,226,.38);
          max-width: 300px;
        }
        .ft-socials { display: flex; gap: 10px; }
        .ft-social {
          width: 34px; height: 34px;
          border: 1px solid rgba(243,237,226,.14);
          display: flex; align-items: center; justify-content: center;
          color: rgba(243,237,226,.45);
          transition: all .3s;
        }
        .ft-social:hover { border-color: rgba(243,237,226,.5); color: #f3ede2; }

        .ft-col { display: flex; flex-direction: column; gap: 0; }
        .ft-col-hd {
          font-family: var(--sans);
          font-size: .58rem;
          letter-spacing: .26em;
          text-transform: uppercase;
          color: rgba(243,237,226,.28);
          font-weight: 300;
          margin-bottom: 22px;
        }
        .ft-links { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .ft-link {
          font-family: var(--sans);
          font-size: .82rem;
          font-weight: 100;
          color: rgba(243,237,226,.45);
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          letter-spacing: .04em;
          transition: color .3s;
          padding: 0;
        }
        .ft-link:hover { color: rgba(243,237,226,.85); }

        .ft-contact { display: flex; flex-direction: column; gap: 16px; }
        .ft-contact-row { display: flex; gap: 10px; align-items: flex-start; }
        .ft-contact-icon { color: rgba(243,237,226,.22); margin-top: 2px; flex-shrink: 0; }
        .ft-contact-text {
          font-family: var(--sans);
          font-size: .8rem;
          font-weight: 100;
          color: rgba(243,237,226,.4);
          letter-spacing: .03em;
          line-height: 1.55;
          white-space: pre-line;
        }
        .ft-contact-link { text-decoration: none; transition: color .3s; }
        .ft-contact-link:hover { color: rgba(243,237,226,.75); }

        .ft-nl-sub {
          font-family: var(--sans);
          font-size: .8rem;
          font-weight: 100;
          color: rgba(243,237,226,.35);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .ft-nl-form {
          display: flex;
          border-bottom: 1px solid rgba(243,237,226,.15);
          margin-bottom: 18px;
          transition: border-color .3s;
        }
        .ft-nl-form:focus-within { border-color: rgba(243,237,226,.4); }
        .ft-nl-input {
          flex: 1;
          background: none; border: none; outline: none;
          font-family: var(--sans);
          font-size: .84rem;
          font-weight: 100;
          color: #f3ede2;
          padding: 8px 0;
          letter-spacing: .04em;
        }
        .ft-nl-input::placeholder { color: rgba(243,237,226,.2); }
        .ft-nl-btn {
          color: rgba(243,237,226,.45);
          padding: 8px 0 8px 12px;
          background: none;
          border: none;
          display: flex;
          transition: color .3s;
        }
        .ft-nl-btn:hover { color: #f3ede2; }
        .ft-nl-done {
          font-family: var(--sans);
          font-size: .72rem;
          letter-spacing: .1em;
          color: var(--gold-lt);
          margin-bottom: 18px;
        }
        .ft-price {
          font-family: var(--sans);
          font-size: .6rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(243,237,226,.18);
          font-weight: 300;
        }

        .ft-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ft-copy, .ft-tagline {
          font-family: var(--sans);
          font-size: .6rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(243,237,226,.2);
          font-weight: 300;
        }
        .ft-tagline { font-style: italic; }
      `}</style>
    </footer>
  );
}