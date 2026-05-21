



// 'use client';

// import { useState } from 'react';
// import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';

// const go = (href) => {
//   if (href === '#') { window.scrollTo({ top:0, behavior:'smooth' }); return; }
//   document.querySelector(href)?.scrollIntoView({ behavior:'smooth' });
// };

// const QUICK = [
//   { label:'Home',          href:'#' },
//   { label:'Experience',    href:'#experience' },
//   { label:'Menu',          href:'#menu' },
//   { label:'Gallery',       href:'#ambiance' },
//   { label:'Our Story',     href:'#story' },
//   { label:'Reserve',       href:'#reservation' },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [done, setDone]   = useState(false);

//   const subscribe = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setDone(true); setEmail('');
//     setTimeout(() => setDone(false), 3000);
//   };

//   return (
// <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(243,237,226,.06)' }}>
//       {/* Main footer body */}
//       <div className="wrap" style={{ padding:'80px 60px 0' }}>
//         <div className="ft-body">

//           {/* Brand */}
//           <div className="ft-brand">
//             <button className="ft-logo" onClick={() => go('#')}>
//               <span className="ft-logo-word">JANOSHI</span>
//               <span className="ft-logo-tag">Cafe · Okara · Est. 2012</span>
//             </button>
//             <p className="ft-brand-desc">
//               A refined café experience in the heart of Okara — artisan coffee, handcrafted desserts, 
//               and premium dining that keeps Okara coming back.
//             </p>
//             <div className="ft-socials">
//               {[
//                 { icon:<Instagram size={16} strokeWidth={1.5}/>, href:'https://instagram.com/cafejanoshi', label:'Instagram' },
//                 { icon:<Facebook size={16} strokeWidth={1.5}/>,  href:'https://facebook.com/Janoshi',     label:'Facebook'  },
//                 { icon:<MessageCircle size={16} strokeWidth={1.5}/>, href:'https://wa.me/923210001112',   label:'WhatsApp'  },
//               ].map(s => (
//                 <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={s.label}>
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick links */}
//           <div className="ft-col">
//             <div className="ft-col-hd">Navigate</div>
//             <ul className="ft-links">
//               {QUICK.map(({ label, href }) => (
//                 <li key={label}>
//                   <button className="ft-link" onClick={() => go(href)}>{label}</button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="ft-col">
//             <div className="ft-col-hd">Contact</div>
//             <div className="ft-contact">
//               {[
//                 { icon:<Phone size={13} strokeWidth={1.5}/>,  text:'0321 000 1112',                   href:'tel:03210001112' },
//                 { icon:<MapPin size={13} strokeWidth={1.5}/>, text:'RC7X+CW4, Tehsil Rd\nWaris Colony, Okara', href:'https://maps.google.com/?q=Cafe+Janoshi+Okara' },
//                 { icon:<Clock size={13} strokeWidth={1.5}/>,  text:'Mon – Sun · 10:00 am – 12:59 am', href: null },
//               ].map((c,i) => (
//                 <div key={i} className="ft-contact-row">
//                   <span className="ft-contact-icon">{c.icon}</span>
//                   {c.href
//                     ? <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="ft-contact-text ft-contact-link" style={{whiteSpace:'pre-line'}}>{c.text}</a>
//                     : <span className="ft-contact-text">{c.text}</span>
//                   }
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div className="ft-col">
//             <div className="ft-col-hd">Stay Close</div>
//             <p className="ft-nl-sub">Seasonal menus, special events, and exclusive offers — delivered quietly.</p>
//             {done ? (
//               <div className="ft-nl-done">Subscribed — welcome to the family.</div>
//             ) : (
//               <form onSubmit={subscribe} className="ft-nl-form">
//                 <input
//                   type="email" required value={email} onChange={e => setEmail(e.target.value)}
//                   placeholder="your@email.com"
//                   className="ft-nl-input"
//                 />
//                 <button type="submit" className="ft-nl-btn"><ArrowRight size={14} strokeWidth={1.5} /></button>
//               </form>
//             )}
//             <div className="ft-price">Rs 1,000 – 6,000 per person</div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="wrap">
//         <div className="ft-bar">
//           <span className="ft-copy">© {new Date().getFullYear()} Cafe Janoshi · Okara, Punjab, Pakistan</span>
//           <span className="ft-tagline">Every meal, a memory.</span>
//         </div>
//       </div>

//       <style jsx global>{`
//         .ft-body {
//           display: grid;
//           grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
//           gap: 60px;
//           padding-bottom: 72px;
//           border-bottom: 1px solid rgba(243,237,226,.06);
//         }
//         @media (max-width: 1100px) { .ft-body { grid-template-columns: 1fr 1fr; gap: 44px; } }
//         @media (max-width: 580px)  { .ft-body { grid-template-columns: 1fr; gap: 40px; } }

//         .ft-brand { display: flex; flex-direction: column; gap: 20px; }
//         .ft-logo { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 4px; text-align: left; }
//         .ft-logo-word {
//           font-family: var(--serif);
//           font-size: 2.2rem;
//           font-weight: 300;
//           letter-spacing: .18em;
//           color: #f3ede2;
//           line-height: 1;
//           transition: opacity .3s;
//         }
//         .ft-logo:hover .ft-logo-word { opacity: .7; }
//         .ft-logo-tag {
//           font-family: var(--sans);
//           font-size: .52rem;
//           letter-spacing: .28em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.28);
//           font-weight: 300;
//         }
//         .ft-brand-desc {
//           font-family: var(--sans);
//           font-size: .82rem;
//           font-weight: 100;
//           line-height: 1.8;
//           color: rgba(243,237,226,.38);
//           max-width: 300px;
//         }
//         .ft-socials { display: flex; gap: 10px; }
//         .ft-social {
//           width: 34px; height: 34px;
//           border: 1px solid rgba(243,237,226,.14);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(243,237,226,.45);
//           transition: all .3s;
//         }
//         .ft-social:hover { border-color: rgba(243,237,226,.5); color: #f3ede2; }

//         .ft-col { display: flex; flex-direction: column; gap: 0; }
//         .ft-col-hd {
//           font-family: var(--sans);
//           font-size: .58rem;
//           letter-spacing: .26em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.28);
//           font-weight: 300;
//           margin-bottom: 22px;
//         }
//         .ft-links { list-style: none; display: flex; flex-direction: column; gap: 8px; }
//         .ft-link {
//           font-family: var(--sans);
//           font-size: .82rem;
//           font-weight: 100;
//           color: rgba(243,237,226,.45);
//           background: none;
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           letter-spacing: .04em;
//           transition: color .3s;
//           padding: 0;
//         }
//         .ft-link:hover { color: rgba(243,237,226,.85); }

//         .ft-contact { display: flex; flex-direction: column; gap: 16px; }
//         .ft-contact-row { display: flex; gap: 10px; align-items: flex-start; }
//         .ft-contact-icon { color: rgba(243,237,226,.22); margin-top: 2px; flex-shrink: 0; }
//         .ft-contact-text {
//           font-family: var(--sans);
//           font-size: .8rem;
//           font-weight: 100;
//           color: rgba(243,237,226,.4);
//           letter-spacing: .03em;
//           line-height: 1.55;
//           white-space: pre-line;
//         }
//         .ft-contact-link { text-decoration: none; transition: color .3s; }
//         .ft-contact-link:hover { color: rgba(243,237,226,.75); }

//         .ft-nl-sub {
//           font-family: var(--sans);
//           font-size: .8rem;
//           font-weight: 100;
//           color: rgba(243,237,226,.35);
//           line-height: 1.7;
//           margin-bottom: 20px;
//         }
//         .ft-nl-form {
//           display: flex;
//           border-bottom: 1px solid rgba(243,237,226,.15);
//           margin-bottom: 18px;
//           transition: border-color .3s;
//         }
//         .ft-nl-form:focus-within { border-color: rgba(243,237,226,.4); }
//         .ft-nl-input {
//           flex: 1;
//           background: none; border: none; outline: none;
//           font-family: var(--sans);
//           font-size: .84rem;
//           font-weight: 100;
//           color: #f3ede2;
//           padding: 8px 0;
//           letter-spacing: .04em;
//         }
//         .ft-nl-input::placeholder { color: rgba(243,237,226,.2); }
//         .ft-nl-btn {
//           color: rgba(243,237,226,.45);
//           padding: 8px 0 8px 12px;
//           background: none;
//           border: none;
//           display: flex;
//           transition: color .3s;
//         }
//         .ft-nl-btn:hover { color: #f3ede2; }
//         .ft-nl-done {
//           font-family: var(--sans);
//           font-size: .72rem;
//           letter-spacing: .1em;
//           color: var(--gold-lt);
//           margin-bottom: 18px;
//         }
//         .ft-price {
//           font-family: var(--sans);
//           font-size: .6rem;
//           letter-spacing: .16em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.18);
//           font-weight: 300;
//         }

//         .ft-bar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 22px 0;
//           gap: 12px;
//           flex-wrap: wrap;
//         }
//         .ft-copy, .ft-tagline {
//           font-family: var(--sans);
//           font-size: .6rem;
//           letter-spacing: .12em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.2);
//           font-weight: 300;
//         }
//         .ft-tagline { font-style: italic; }
//       `}</style>
//     </footer>
//   );
// }










// 'use client';

// import { useState } from 'react';
// import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';

// const go = (href) => {
//   if (href === '#') { window.scrollTo({ top:0, behavior:'smooth' }); return; }
//   document.querySelector(href)?.scrollIntoView({ behavior:'smooth' });
// };

// const QUICK = [
//   { label:'Home',          href:'#' },
//   { label:'Experience',    href:'#experience' },
//   { label:'Menu',          href:'#menu' },
//   { label:'Gallery',       href:'#ambiance' },
//   { label:'Our Story',     href:'#story' },
//   { label:'Reserve',       href:'#reservation' },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [done, setDone]   = useState(false);

//   const subscribe = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setDone(true); setEmail('');
//     setTimeout(() => setDone(false), 3000);
//   };

//   return (
//     <footer style={{ background: '#1e1a17', borderTop: '1px solid rgba(243,237,226,.06)', width: '100%', position: 'relative', zIndex: 10 }}>
//       {/* Main footer body */}
//       <div className="wrap" style={{ padding: '80px 60px 0' }}>
//         <div className="ft-body">

//           {/* Brand */}
//           <div className="ft-brand">
//             <button className="ft-logo" onClick={() => go('#')}>
//               <span className="ft-logo-word">JANOSHI</span>
//               <span className="ft-logo-tag">Cafe · Okara · Est. 2012</span>
//             </button>
//             <p className="ft-brand-desc">
//               A refined café experience in the heart of Okara — artisan coffee, handcrafted desserts, 
//               and premium dining that keeps Okara coming back.
//             </p>
//             <div className="ft-socials">
//               {[
//                 { icon:<Instagram size={16} strokeWidth={1.5}/>, href:'https://instagram.com/cafejanoshi', label:'Instagram' },
//                 { icon:<Facebook size={16} strokeWidth={1.5}/>,  href:'https://facebook.com/Janoshi',     label:'Facebook'  },
//                 { icon:<MessageCircle size={16} strokeWidth={1.5}/>, href:'https://wa.me/923210001112',   label:'WhatsApp'  },
//               ].map(s => (
//                 <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={s.label}>
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick links */}
//           <div className="ft-col">
//             <div className="ft-col-hd">Navigate</div>
//             <ul className="ft-links">
//               {QUICK.map(({ label, href }) => (
//                 <li key={label}>
//                   <button className="ft-link" onClick={() => go(href)}>{label}</button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="ft-col">
//             <div className="ft-col-hd">Contact</div>
//             <div className="ft-contact">
//               {[
//                 { icon:<Phone size={13} strokeWidth={1.5}/>,  text:'0321 000 1112',                   href:'tel:03210001112' },
//                 { icon:<MapPin size={13} strokeWidth={1.5}/>, text:'RC7X+CW4, Tehsil Rd\nWaris Colony, Okara', href:'https://maps.google.com/?q=Cafe+Janoshi+Okara' },
//                 { icon:<Clock size={13} strokeWidth={1.5}/>,  text:'Mon – Sun · 10:00 am – 12:59 am', href: null },
//               ].map((c,i) => (
//                 <div key={i} className="ft-contact-row">
//                   <span className="ft-contact-icon">{c.icon}</span>
//                   {c.href
//                     ? <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="ft-contact-text ft-contact-link" style={{whiteSpace:'pre-line'}}>{c.text}</a>
//                     : <span className="ft-contact-text">{c.text}</span>
//                   }
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div className="ft-col">
//             <div className="ft-col-hd">Stay Close</div>
//             <p className="ft-nl-sub">Seasonal menus, special events, and exclusive offers — delivered quietly.</p>
//             {done ? (
//               <div className="ft-nl-done">Subscribed — welcome to the family.</div>
//             ) : (
//               <form onSubmit={subscribe} className="ft-nl-form">
//                 <input
//                   type="email" required value={email} onChange={e => setEmail(e.target.value)}
//                   placeholder="your@email.com"
//                   className="ft-nl-input"
//                 />
//                 <button type="submit" className="ft-nl-btn"><ArrowRight size={14} strokeWidth={1.5} /></button>
//               </form>
//             )}
//             <div className="ft-price">Rs 1,000 – 6,000 per person</div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="wrap">
//         <div className="ft-bar">
//           <span className="ft-copy">© {new Date().getFullYear()} Cafe Janoshi · Okara, Punjab, Pakistan</span>
//           <span className="ft-tagline">Every meal, a memory.</span>
//         </div>
//       </div>

//       <style jsx global>{`
//         .ft-body {
//           display: grid;
//           grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
//           gap: 60px;
//           padding-bottom: 72px;
//           border-bottom: 1px solid rgba(243,237,226,.06);
//         }
//         @media (max-width: 1100px) { .ft-body { grid-template-columns: 1fr 1fr; gap: 44px; } }
//         @media (max-width: 580px)  { .ft-body { grid-template-columns: 1fr; gap: 40px; } }

//         .ft-brand { display: flex; flex-direction: column; gap: 20px; }
//         .ft-logo { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 4px; text-align: left; padding: 0; }
//         .ft-logo-word {
//           font-family: var(--serif);
//           font-size: 2.2rem;
//           font-weight: 300;
//           letter-spacing: .18em;
//           color: #f3ede2;
//           line-height: 1;
//           transition: opacity .3s;
//         }
//         .ft-logo:hover .ft-logo-word { opacity: .7; }
//         .ft-logo-tag {
//           font-family: var(--sans);
//           font-size: .52rem;
//           letter-spacing: .28em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.28);
//           font-weight: 300;
//         }
//         .ft-brand-desc {
//           font-family: var(--sans);
//           font-size: .82rem;
//           font-weight: 100;
//           line-height: 1.8;
//           color: rgba(243,237,226,.38);
//           max-width: 300px;
//         }
//         .ft-socials { display: flex; gap: 10px; }
//         .ft-social {
//           width: 34px; height: 34px;
//           border: 1px solid rgba(243,237,226,.14);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(243,237,226,.45);
//           transition: all .3s;
//         }
//         .ft-social:hover { border-color: rgba(243,237,226,.5); color: #f3ede2; }

//         .ft-col { display: flex; flex-direction: column; gap: 0; }
//         .ft-col-hd {
//           font-family: var(--sans);
//           font-size: .58rem;
//           letter-spacing: .26em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.28);
//           font-weight: 300;
//           margin-bottom: 22px;
//         }
//         .ft-links { list-style: none; display: flex; flex-direction: column; gap: 8px; padding: 0; }
//         .ft-link {
//           font-family: var(--sans);
//           font-size: .82rem;
//           font-weight: 100;
//           color: rgba(243,237,226,.45);
//           background: none;
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           letter-spacing: .04em;
//           transition: color .3s;
//           padding: 0;
//         }
//         .ft-link:hover { color: rgba(243,237,226,.85); }

//         .ft-contact { display: flex; flex-direction: column; gap: 16px; }
//         .ft-contact-row { display: flex; gap: 10px; align-items: flex-start; }
//         .ft-contact-icon { color: rgba(243,237,226,.22); margin-top: 2px; flex-shrink: 0; }
//         .ft-contact-text {
//           font-family: var(--sans);
//           font-size: .8rem;
//           font-weight: 100;
//           color: rgba(243,237,226,.4);
//           letter-spacing: .03em;
//           line-height: 1.55;
//           white-space: pre-line;
//         }
//         .ft-contact-link { text-decoration: none; transition: color .3s; }
//         .ft-contact-link:hover { color: rgba(243,237,226,.75); }

//         .ft-nl-sub {
//           font-family: var(--sans);
//           font-size: .8rem;
//           font-weight: 100;
//           color: rgba(243,237,226,.35);
//           line-height: 1.7;
//           margin-bottom: 20px;
//         }
//         .ft-nl-form {
//           display: flex;
//           border-bottom: 1px solid rgba(243,237,226,.15);
//           margin-bottom: 18px;
//           transition: border-color .3s;
//         }
//         .ft-nl-form:focus-within { border-color: rgba(243,237,226,.4); }
//         .ft-nl-input {
//           flex: 1;
//           background: none; border: none; outline: none;
//           font-family: var(--sans);
//           font-size: .84rem;
//           font-weight: 100;
//           color: #f3ede2;
//           padding: 8px 0;
//           letter-spacing: .04em;
//         }
//         .ft-nl-input::placeholder { color: rgba(243,237,226,.2); }
//         .ft-nl-btn {
//           color: rgba(243,237,226,.45);
//           padding: 8px 0 8px 12px;
//           background: none;
//           border: none;
//           display: flex;
//           transition: color .3s;
//           cursor: pointer;
//         }
//         .ft-nl-btn:hover { color: #f3ede2; }
//         .ft-nl-done {
//           font-family: var(--sans);
//           font-size: .72rem;
//           letter-spacing: .1em;
//           color: var(--gold-lt);
//           margin-bottom: 18px;
//         }
//         .ft-price {
//           font-family: var(--sans);
//           font-size: .6rem;
//           letter-spacing: .16em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.18);
//           font-weight: 300;
//         }

//         .ft-bar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 22px 0;
//           gap: 12px;
//           flex-wrap: wrap;
//         }
//         .ft-copy, .ft-tagline {
//           font-family: var(--sans);
//           font-size: .6rem;
//           letter-spacing: .12em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,.2);
//           font-weight: 300;
//         }
//         .ft-tagline { font-style: italic; }
//       `}</style>
//     </footer>
//   );
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
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(243,237,226,.06)' }}>
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
          cursor: pointer;
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