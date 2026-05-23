

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { ArrowRight, Instagram } from 'lucide-react';

// // Gallery Images - Different images for each (no repeats)
// const GALLERY_IMAGES = [
//   { id: 1, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85', title: 'The Dining Hall', category: 'Space', size: 'large' },
//   { id: 2, src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85', title: 'Intimate Corner', category: 'Space', size: 'small' },
//   { id: 3, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85', title: 'Outdoor Seating', category: 'Space', size: 'small' },
//   { id: 4, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85', title: 'Coffee Art', category: 'Cuisine', size: 'small' },
//   { id: 5, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85', title: 'Evening Ambiance', category: 'Space', size: 'medium' },
//   { id: 6, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85', title: 'Artisan Pizza', category: 'Cuisine', size: 'small' },
//   { id: 7, src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85', title: 'Signature Steak', category: 'Cuisine', size: 'small' },
//   { id: 8, src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85', title: 'Pasta Delight', category: 'Cuisine', size: 'small' },
//   { id: 9, src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85', title: 'Dessert Special', category: 'Cuisine', size: 'small' },
//   { id: 10, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85', title: 'Pour Over Coffee', category: 'Cuisine', size: 'medium' },
// ];

// const CATEGORIES = ['All', 'Space', 'Cuisine'];

// function GalleryHero() {
//   const [ready, setReady] = useState(false);
  
//   useEffect(() => {
//     const t = setTimeout(() => setReady(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div className="gallery-hero">
//       <div className="gallery-hero-bg"></div>
//       <div className="gallery-hero-overlay"></div>
      
//       <div className="wrap" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
//         <div className="gallery-hero-content" style={{ 
//           opacity: ready ? 1 : 0, 
//           transform: ready ? 'none' : 'translateY(32px)',
//           transition: 'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)'
//         }}>
//           <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.45)' }}>Visual Diary</span>
//           <h1 className="gallery-hero-title">
//             A glimpse into<br/>
//             <em>our world</em>
//           </h1>
//           <p className="gallery-hero-text">
//             From intimate corners to culinary masterpieces — every image tells a story of warmth, 
//             elegance, and exceptional taste.
//           </p>
//           <div className="gallery-hero-buttons">
//             <Link href="/menu" className="btn btn-ol">
//               Explore Menu <ArrowRight size={14} />
//             </Link>
//             <a 
//               href="https://instagram.com/cafejanoshi" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="btn btn-ol"
//               style={{ borderColor: 'rgba(243,237,226,0.2)' }}
//             >
//               <Instagram size={14} /> Follow Us
//             </a>
//           </div>
//         </div>
//       </div>
      
//       <div className="gallery-hero-scroll">
//         <span>Scroll</span>
//         <div className="gallery-hero-scroll-line"></div>
//       </div>
//     </div>
//   );
// }

// function GalleryImage({ image, index, onOpen }) {
//   const ref = useRef(null);
  
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setTimeout(() => {
//           el.style.opacity = '1';
//           el.style.transform = 'none';
//         }, index * 60);
//         obs.disconnect();
//       }
//     }, { threshold: 0.05 });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [index]);

//   const sizeClass = image.size === 'large' ? 'gallery-item--large' : 
//                     image.size === 'medium' ? 'gallery-item--medium' : 'gallery-item--small';

//   return (
//     <div 
//       ref={ref}
//       className={`gallery-item ${sizeClass}`}
//       style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)' }}
//       onClick={() => onOpen(image)}
//     >
//       <div className="gallery-item-inner">
//         <img src={image.src} alt={image.title} loading="lazy" />
//         <div className="gallery-item-overlay">
//           <div className="gallery-item-info">
//             <span className="gallery-item-category">{image.category}</span>
//             <span className="gallery-item-title">{image.title}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function GalleryPage() {
//   const [activeImage, setActiveImage] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) entry.target.classList.add('on');
//       });
//     }, { threshold: 0.15 });
    
//     if (headerRef.current) obs.observe(headerRef.current);
    
//     return () => obs.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleKey = (e) => { if (e.key === 'Escape') setActiveImage(null); };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, []);

//   const filteredImages = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

//   return (
//     <>
//       <GalleryHero />

//       <section style={{ background: 'var(--cream)', padding: '100px 0' }}>
//         <div className="wrap">
//           <div ref={headerRef} className="reveal" style={{ marginBottom: 56, textAlign: 'center' }}>
//             <span className="eyebrow">Moments Captured</span>
//             <h2 style={{ maxWidth: 700, margin: '0 auto' }}>
//               Where every frame<br/><em style={{ fontStyle: 'italic' }}>holds a memory</em>
//             </h2>
//           </div>

//           <div className="gallery-filters reveal" style={{ marginBottom: 48, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
//             {CATEGORIES.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className={`gallery-filter ${filter === cat ? 'gallery-filter--active' : ''}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="gallery-grid">
//             {filteredImages.map((image, idx) => (
//               <GalleryImage key={image.id} image={image} index={idx} onOpen={setActiveImage} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section style={{ background: 'var(--cream-2)', padding: '80px 0', textAlign: 'center' }}>
//         <div className="wrap">
//           <div className="reveal">
//             <span className="eyebrow">Follow Our Journey</span>
//             <h2 style={{ marginBottom: 24 }}>
//               More on<br/><em style={{ fontStyle: 'italic' }}>Instagram</em>
//             </h2>
//             <p style={{ maxWidth: 500, margin: '0 auto 32px', color: 'var(--ink-2)' }}>
//               Daily updates, behind-the-scenes, and exclusive offers.
//             </p>
//             <a 
//               href="https://instagram.com/cafejanoshi" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="btn btn-od"
//               style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
//             >
//               <Instagram size={14} /> @cafejanoshi
//             </a>
//           </div>
//         </div>
//       </section>

//       {activeImage && (
//         <div className="gallery-lightbox" onClick={() => setActiveImage(null)}>
//           <div className="gallery-lightbox-inner" onClick={e => e.stopPropagation()}>
//             <img src={activeImage.src} alt={activeImage.title} />
//             <div className="gallery-lightbox-info">
//               <div>
//                 <span className="gallery-lightbox-category">{activeImage.category}</span>
//                 <span className="gallery-lightbox-title">{activeImage.title}</span>
//               </div>
//               <button onClick={() => setActiveImage(null)} className="gallery-lightbox-close">✕</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         .gallery-hero {
//           position: relative;
//           height: 80vh;
//           min-height: 600px;
//           overflow: hidden;
//           background: var(--dark);
//         }
        
//         .gallery-hero-bg {
//           position: absolute;
//           inset: 0;
//           background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90');
//           background-size: cover;
//           background-position: center 40%;
//           transform: scale(1.05);
//           animation: heroZoom 20s ease-out forwards;
//         }
        
//         @keyframes heroZoom {
//           from { transform: scale(1.05); }
//           to { transform: scale(1.1); }
//         }
        
//         .gallery-hero-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, rgba(30,26,23,0.3) 0%, rgba(30,26,23,0.7) 100%);
//         }
        
//         .gallery-hero-content {
//           max-width: 800px;
//         }
        
//         .gallery-hero-title {
//           font-family: var(--serif);
//           font-size: clamp(3rem, 7vw, 6rem);
//           font-weight: 400;
//           line-height: 0.95;
//           color: var(--cream);
//           margin-bottom: 28px;
//         }
        
//         .gallery-hero-title em {
//           font-style: italic;
//           font-weight: 300;
//         }
        
//         .gallery-hero-text {
//           font-size: clamp(1rem, 1.8vw, 1.15rem);
//           color: rgba(243,237,226,0.7);
//           max-width: 550px;
//           margin-bottom: 48px;
//           line-height: 1.8;
//         }
        
//         .gallery-hero-buttons {
//           display: flex;
//           gap: 16px;
//           flex-wrap: wrap;
//         }
        
//         .gallery-hero-scroll {
//           position: absolute;
//           bottom: 32px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 12px;
//           opacity: 0;
//           animation: fadeUpScroll 1s ease-out 1.2s forwards;
//         }
        
//         @keyframes fadeUpScroll {
//           from { opacity: 0; transform: translateX(-50%) translateY(10px); }
//           to { opacity: 0.6; transform: translateX(-50%) translateY(0); }
//         }
        
//         .gallery-hero-scroll span {
//           font-family: var(--sans);
//           font-size: 0.58rem;
//           font-weight: 600;
//           letter-spacing: 0.26em;
//           text-transform: uppercase;
//           color: rgba(243,237,226,0.5);
//         }
        
//         .gallery-hero-scroll-line {
//           width: 1px;
//           height: 60px;
//           background: linear-gradient(to bottom, rgba(243,237,226,0.5), transparent);
//           animation: scrollLine 2.2s ease-in-out infinite;
//         }
        
//         @keyframes scrollLine {
//           0%, 100% { opacity: 0.3; transform: scaleY(1); }
//           50% { opacity: 1; transform: scaleY(1.2); }
//         }
        
//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(12, 1fr);
//           gap: 5px;
//         }
        
//         @media (max-width: 900px) {
//           .gallery-grid {
//             grid-template-columns: repeat(6, 1fr);
//           }
//         }
        
//         @media (max-width: 640px) {
//           .gallery-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
        
//         .gallery-item {
//           cursor: pointer;
//         }
        
//         .gallery-item--large {
//           grid-column: span 6;
//           grid-row: span 2;
//         }
        
//         .gallery-item--medium {
//           grid-column: span 4;
//           grid-row: span 2;
//         }
        
//         .gallery-item--small {
//           grid-column: span 3;
//         }
        
//         @media (max-width: 900px) {
//           .gallery-item--large,
//           .gallery-item--medium {
//             grid-column: span 4;
//           }
//           .gallery-item--small {
//             grid-column: span 3;
//           }
//         }
        
//         @media (max-width: 640px) {
//           .gallery-item--large,
//           .gallery-item--medium,
//           .gallery-item--small {
//             grid-column: span 2;
//             grid-row: span 1;
//           }
//         }
        
//         .gallery-item-inner {
//           position: relative;
//           aspect-ratio: 1/1;
//           overflow: hidden;
//           background: var(--cream-2);
//         }
        
//         .gallery-item--large .gallery-item-inner {
//           aspect-ratio: 16/11;
//         }
        
//         .gallery-item--medium .gallery-item-inner {
//           aspect-ratio: 4/5;
//         }
        
//         .gallery-item-inner img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 1s var(--ease);
//         }
        
//         .gallery-item:hover .gallery-item-inner img {
//           transform: scale(1.06);
//         }
        
//         .gallery-item-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(30,26,23,0.7) 0%, transparent 60%);
//           opacity: 0;
//           transition: opacity 0.5s var(--ease);
//           display: flex;
//           align-items: flex-end;
//           padding: 24px;
//         }
        
//         .gallery-item:hover .gallery-item-overlay {
//           opacity: 1;
//         }
        
//         .gallery-item-info {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }
        
//         .gallery-item-category {
//           font-family: var(--sans);
//           font-size: 0.6rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: var(--gold);
//         }
        
//         .gallery-item-title {
//           font-family: var(--serif);
//           font-size: 1.1rem;
//           font-weight: 400;
//           color: var(--cream);
//           font-style: italic;
//         }
        
//         .gallery-filter {
//           font-family: var(--sans);
//           font-size: 0.65rem;
//           font-weight: 500;
//           letter-spacing: 0.16em;
//           text-transform: uppercase;
//           padding: 8px 24px;
//           color: var(--ink-2);
//           background: none;
//           border: 1px solid var(--border);
//           cursor: pointer;
//           transition: all 0.3s var(--ease);
//         }
        
//         .gallery-filter:hover {
//           color: var(--ink);
//           border-color: var(--ink);
//         }
        
//         .gallery-filter--active {
//           color: var(--ink);
//           border-color: var(--ink);
//           background: rgba(58,54,58,0.03);
//         }
        
//         .gallery-lightbox {
//           position: fixed;
//           inset: 0;
//           z-index: 1000;
//           background: rgba(30,26,23,0.95);
//           backdrop-filter: blur(12px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           animation: lbFade 0.35s var(--ease);
//           cursor: pointer;
//         }
        
//         @keyframes lbFade {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         .gallery-lightbox-inner {
//           cursor: default;
//           max-width: 85vw;
//           max-height: 85vh;
//           animation: lbScale 0.4s var(--ease-out);
//         }
        
//         @keyframes lbScale {
//           from { opacity: 0; transform: scale(0.96); }
//           to { opacity: 1; transform: scale(1); }
//         }
        
//         .gallery-lightbox-inner img {
//           max-width: 100%;
//           max-height: 75vh;
//           object-fit: contain;
//           display: block;
//         }
        
//         .gallery-lightbox-info {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 16px 0 0;
//           gap: 20px;
//         }
        
//         .gallery-lightbox-category {
//           font-family: var(--sans);
//           font-size: 0.65rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: var(--gold);
//           display: block;
//           margin-bottom: 6px;
//         }
        
//         .gallery-lightbox-title {
//           font-family: var(--serif);
//           font-size: 1.2rem;
//           font-weight: 400;
//           color: var(--cream);
//           font-style: italic;
//         }
        
//         .gallery-lightbox-close {
//           width: 36px;
//           height: 36px;
//           border: 1px solid rgba(243,237,226,0.2);
//           background: none;
//           color: rgba(243,237,226,0.6);
//           font-size: 1rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s;
//         }
        
//         .gallery-lightbox-close:hover {
//           border-color: rgba(243,237,226,0.6);
//           color: var(--cream);
//         }
        
//         .reveal {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: opacity 1s var(--ease-out), transform 1s var(--ease-out);
//         }
        
//         .reveal.on {
//           opacity: 1;
//           transform: none;
//         }
//       `}</style>
//     </>
//   );
// }












'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram } from 'lucide-react';

const IMAGES = [
  { id:1,  src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85', title:'The Dining Hall',   cat:'Space',   size:'large'  },
  { id:2,  src:'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85',  title:'Intimate Corner',  cat:'Space',   size:'small'  },
  { id:3,  src:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85', title:'Outdoor Seating',  cat:'Space',   size:'small'  },
  { id:4,  src:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85', title:'Coffee Craft',     cat:'Cuisine', size:'small'  },
  { id:5,  src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85',title:'Evening Vibe',     cat:'Space',   size:'medium' },
  { id:6,  src:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85', title:'Artisan Pizza',    cat:'Cuisine', size:'small'  },
  { id:7,  src:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85',  title:'Signature Steak',  cat:'Cuisine', size:'small'  },
  { id:8,  src:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85', title:'Dessert Theatre',  cat:'Cuisine', size:'small'  },
  { id:9,  src:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85',  title:'Pasta Creations',  cat:'Cuisine', size:'small'  },
  { id:10, src:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85',  title:'Coffee Bar',       cat:'Space',   size:'medium' },
  { id:11, src:'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=85',  title:'Warm Lighting',    cat:'Space',   size:'small'  },
  { id:12, src:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85', title:'Signature Burger', cat:'Cuisine', size:'small'  },
];

const CATS = ['All', 'Space', 'Cuisine'];

function GalleryItem({ img, i, onOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, i*55); obs.disconnect(); }
    }, { threshold:.04 });
    obs.observe(el); return () => obs.disconnect();
  }, [i]);

  return (
    <div
      ref={ref}
      className={`gi gi--${img.size}`}
      style={{ opacity:0, transform:'translateY(24px)', transition:'opacity .85s var(--ease-out), transform .85s var(--ease-out)', cursor:'pointer' }}
      onClick={() => onOpen(img)}
    >
      <div className="gi-inner">
        <img src={img.src} alt={img.title} loading="lazy" className="gi-img" />
        <div className="gi-ov">
          <span className="gi-cat">{img.cat}</span>
          <span className="gi-title">{img.title}</span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lb, setLb]         = useState(null);
  const [ready, setReady]   = useState(false);
  const headRef = useRef(null);

  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const fn = (e) => { if (e.key==='Escape') setLb(null); };
    window.addEventListener('keydown', fn); return () => window.removeEventListener('keydown', fn);
  }, []);
  useEffect(() => {
    const el = headRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const shown = filter==='All' ? IMAGES : IMAGES.filter(i=>i.cat===filter);

  return (
    <>
      {/* ── Cinematic Hero ── */}
      <div style={{ position:'relative', height:'75vh', minHeight:500, overflow:'hidden', background:'var(--dark)' }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90)`,
          backgroundSize:'cover', backgroundPosition:'center 40%',
          transform:'scale(1.05)',
          animation:'ghZoom 20s ease-out forwards',
        }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(30,26,23,.35) 0%, rgba(30,26,23,.7) 100%)' }}/>
        <div className="wrap" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', alignItems:'center' }}>
          <div style={{ opacity:ready?1:0, transform:ready?'none':'translateY(28px)', transition:'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)', maxWidth:700 }}>
            <span className="eyebrow eyebrow-lt">Visual Diary</span>
            <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(3rem,7vw,6rem)', fontWeight:400, lineHeight:.95, color:'#f3ede2', marginBottom:24 }}>
              A glimpse into<br/><em style={{fontStyle:'italic'}}>our world</em>
            </h1>
            <p style={{ fontFamily:'var(--sans)', fontWeight:400, fontSize:'clamp(.9rem,1.8vw,1.05rem)', color:'rgba(243,237,226,.65)', lineHeight:1.8, maxWidth:500, marginBottom:40 }}>
              From intimate corners to culinary masterpieces — every image tells a story of warmth, elegance, and exceptional taste.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <Link href="/menu" className="btn btn-sl"><span>Explore Menu</span><ArrowRight size={13} strokeWidth={2}/></Link>
              <a href="https://instagram.com/cafejanoshi" target="_blank" rel="noopener noreferrer" className="btn btn-ol" style={{ borderColor:'rgba(243,237,226,.25)' }}>
                <Instagram size={13} strokeWidth={2}/><span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:10, opacity:ready?1:0, transition:'opacity 1s ease 1.2s' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:'.55rem', fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'rgba(243,237,226,.38)' }}>Scroll</span>
          <div style={{ width:1, height:48, background:'linear-gradient(to bottom, rgba(243,237,226,.45), transparent)', animation:'hscroll 2.2s ease-in-out infinite' }}/>
        </div>
      </div>

      {/* ── Gallery Section ── */}
      <section style={{ background:'var(--cream)', padding:'100px 0 120px' }}>
        <div className="wrap">
          <div ref={headRef} className="reveal" style={{ textAlign:'center', marginBottom:56 }}>
            <span className="eyebrow">Moments Captured</span>
            <h2 style={{ maxWidth:600, margin:'0 auto' }}>
              Where every frame<br/><em style={{fontStyle:'italic'}}>holds a memory</em>
            </h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display:'flex', justifyContent:'center', gap:10, marginBottom:56, flexWrap:'wrap' }}>
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  fontFamily:'var(--sans)', fontSize:'.65rem', fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase',
                  padding:'8px 24px', color: filter===c ? 'var(--ink)' : 'var(--ink-2)',
                  background: filter===c ? 'rgba(58,54,58,.04)' : 'none',
                  border:`1px solid ${filter===c ? 'var(--ink)' : 'var(--border)'}`,
                  cursor:'pointer', transition:'all .3s var(--ease)',
                }}
              >{c}</button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="gall-grid">
            {shown.map((img, i) => <GalleryItem key={img.id} img={img} i={i} onOpen={setLb}/>)}
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section style={{ background:'var(--cream-2)', padding:'80px 0', textAlign:'center' }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth:500, margin:'0 auto' }}>
            <span className="eyebrow">Follow Our Journey</span>
            <h2 style={{ marginBottom:20 }}>More on<br/><em style={{fontStyle:'italic'}}>Instagram</em></h2>
            <p style={{ marginBottom:32, color:'var(--ink-2)', fontSize:'.95rem' }}>
              Daily updates, behind-the-scenes, and exclusive offers from Cafe Janoshi Okara.
            </p>
            <a href="https://instagram.com/cafejanoshi" target="_blank" rel="noopener noreferrer" className="btn btn-od" style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
              <Instagram size={14} strokeWidth={2}/><span>@cafejanoshi</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Reserve CTA ── */}
      <section style={{ background:'var(--dark)', padding:'90px 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=50)', backgroundSize:'cover', backgroundPosition:'center', filter:'brightness(.12)', pointerEvents:'none' }}/>
        <div className="wrap" style={{ position:'relative', zIndex:1 }}>
          <div className="reveal">
            <span className="eyebrow eyebrow-lt">Visit Us</span>
            <h2 style={{ color:'#f3ede2', marginBottom:22, maxWidth:600, margin:'0 auto 22px' }}>
              Ready to create<br/><em style={{fontStyle:'italic'}}>your own memories?</em>
            </h2>
            <p style={{ color:'rgba(243,237,226,.45)', maxWidth:460, margin:'0 auto 40px', fontSize:'.95rem' }}>
              Experience the ambiance, flavours, and warmth of Cafe Janoshi — book your table today.
            </p>
            <Link href="/reserve" className="btn btn-sl"><span>Reserve a Table</span><ArrowRight size={13} strokeWidth={2}/></Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lb && (
        <div onClick={() => setLb(null)} style={{ position:'fixed', inset:0, zIndex:1000, background:'rgba(30,26,23,.94)', backdropFilter:'blur(12px)', display:'flex', alignItems:'center', justifyContent:'center', animation:'lbFade .3s ease', cursor:'pointer' }}>
          <div onClick={e=>e.stopPropagation()} style={{ maxWidth:'88vw', maxHeight:'88vh', cursor:'default', animation:'lbScale .35s var(--ease-out)' }}>
            <img src={lb.src} alt={lb.title} style={{ maxWidth:'100%', maxHeight:'76vh', objectFit:'contain', display:'block' }}/>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:14 }}>
              <div>
                <span style={{ fontFamily:'var(--sans)', fontSize:'.6rem', fontWeight:600, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--gold)', display:'block', marginBottom:4 }}>{lb.cat}</span>
                <span style={{ fontFamily:'var(--serif)', fontSize:'1.1rem', fontWeight:400, color:'rgba(243,237,226,.85)', fontStyle:'italic' }}>{lb.title}</span>
              </div>
              <button onClick={() => setLb(null)} style={{ width:34, height:34, border:'1px solid rgba(243,237,226,.2)', background:'none', color:'rgba(243,237,226,.55)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', transition:'all .3s', fontSize:'.9rem' }}>✕</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes ghZoom { from{transform:scale(1.05)} to{transform:scale(1.1)} }
        @keyframes hscroll { 0%,100%{opacity:.35} 50%{opacity:1} }
        @keyframes lbFade  { from{opacity:0} to{opacity:1} }
        @keyframes lbScale { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }

        .gall-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 240px;
          gap: 5px;
        }
        @media(max-width:1024px){.gall-grid{grid-template-columns:repeat(6,1fr);grid-auto-rows:200px}}
        @media(max-width:640px) {.gall-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:180px}}

        .gi { overflow:hidden; background:var(--cream-2); }
        .gi--large  { grid-column:span 6; grid-row:span 2; }
        .gi--medium { grid-column:span 4; grid-row:span 2; }
        .gi--small  { grid-column:span 3; }
        @media(max-width:1024px){
          .gi--large,.gi--medium{grid-column:span 4;grid-row:span 2}
          .gi--small{grid-column:span 3}
        }
        @media(max-width:640px){
          .gi--large,.gi--medium,.gi--small{grid-column:span 2;grid-row:span 1}
        }

        .gi-inner { position:relative; width:100%; height:100%; overflow:hidden; }
        .gi-img { width:100%; height:100%; object-fit:cover; filter:brightness(.85); transition:transform 1s var(--ease),filter .5s; }
        .gi:hover .gi-img { transform:scale(1.07); filter:brightness(.95); }
        .gi-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(30,26,23,.72) 0%,transparent 55%); opacity:0; transition:opacity .45s var(--ease); display:flex; flex-direction:column; justify-content:flex-end; padding:20px; gap:5px; }
        .gi:hover .gi-ov { opacity:1; }
        .gi-cat  { font-family:var(--sans); font-size:.58rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); }
        .gi-title{ font-family:var(--serif); font-size:1.05rem; font-weight:400; color:#f3ede2; font-style:italic; }
      `}</style>
    </>
  );
}