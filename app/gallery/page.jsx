// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { ArrowRight, Camera, Instagram } from 'lucide-react';

// // Curated gallery images (merged from both components + enhanced)
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

// // Filter categories
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
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) entry.target.classList.add('on');
//       });
//     }, { threshold: 0.15 });
    
//     if (headerRef.current) obs.observe(headerRef.current);
//     if (statsRef.current) obs.observe(statsRef.current);
    
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

//       {/* Gallery Grid Section */}
//       <section style={{ background: 'var(--cream)', padding: '100px 0' }}>
//         <div className="wrap">
//           <div ref={headerRef} className="reveal" style={{ marginBottom: 56, textAlign: 'center' }}>
//             <span className="eyebrow">Moments Captured</span>
//             <h2 style={{ maxWidth: 700, margin: '0 auto' }}>
//               Where every frame<br/><em style={{ fontStyle: 'italic' }}>holds a memory</em>
//             </h2>
//           </div>

//           {/* Filter Buttons */}
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

//           {/* Masonry Grid */}
//           <div className="gallery-grid">
//             {filteredImages.map((image, idx) => (
//               <GalleryImage key={image.id} image={image} index={idx} onOpen={setActiveImage} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats / Instagram Section */}
//       <section style={{ background: 'var(--cream-2)', padding: '90px 0' }}>
//         <div className="wrap">
//           <div ref={statsRef} className="reveal" style={{ textAlign: 'center' }}>
//             <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
//               <div className="gallery-stats">
//                 <div className="gallery-stat">
//                   <Camera size={28} strokeWidth={1.2} />
//                   <span className="gallery-stat-value">50+</span>
//                   <span className="gallery-stat-label">Captured Moments</span>
//                 </div>
//                 <div className="gallery-stat">
//                   <Instagram size={28} strokeWidth={1.2} />
//                   <span className="gallery-stat-value">10K+</span>
//                   <span className="gallery-stat-label">Instagram Followers</span>
//                 </div>
//               </div>
//             </div>
//             <p style={{ maxWidth: 500, margin: '0 auto 32px', color: 'var(--ink-2)', fontSize: '0.95rem' }}>
//               Follow us on Instagram for daily updates, behind-the-scenes, and exclusive offers.
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

//       {/* CTA Section */}
//       <section style={{ background: 'var(--dark)', padding: '100px 0', textAlign: 'center' }}>
//         <div className="wrap">
//           <div className="reveal">
//             <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.4)' }}>Visit Us</span>
//             <h2 style={{ color: 'var(--cream)', marginBottom: 24 }}>
//               Ready to create<br/><em style={{ fontStyle: 'italic' }}>your own memories?</em>
//             </h2>
//             <p style={{ color: 'rgba(243,237,226,0.5)', maxWidth: 500, margin: '0 auto 40px' }}>
//               Experience the ambiance, flavors, and warmth of Cafe Janoshi — book your table today.
//             </p>
//             <button 
//               onClick={() => document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' })}
//               className="btn btn-ol"
//             >
//               Reserve Your Table
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Lightbox */}
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
//         /* Hero Section */
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
        
//         /* Gallery Grid - Masonry */
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
        
//         /* Filters */
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
        
//         /* Stats */
//         .gallery-stats {
//           display: flex;
//           justify-content: center;
//           gap: 80px;
//           flex-wrap: wrap;
//         }
        
//         @media (max-width: 640px) {
//           .gallery-stats {
//             gap: 48px;
//           }
//         }
        
//         .gallery-stat {
//           text-align: center;
//         }
        
//         .gallery-stat svg {
//           color: var(--gold);
//           margin-bottom: 16px;
//         }
        
//         .gallery-stat-value {
//           display: block;
//           font-family: var(--serif);
//           font-size: 2.5rem;
//           font-weight: 400;
//           color: var(--ink);
//           line-height: 1;
//           margin-bottom: 8px;
//         }
        
//         .gallery-stat-label {
//           font-family: var(--sans);
//           font-size: 0.7rem;
//           letter-spacing: 0.16em;
//           text-transform: uppercase;
//           color: var(--ink-3);
//         }
        
//         /* Lightbox */
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
        
//         /* Reveal animations */
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

// Gallery Images - Different images for each (no repeats)
const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85', title: 'The Dining Hall', category: 'Space', size: 'large' },
  { id: 2, src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85', title: 'Intimate Corner', category: 'Space', size: 'small' },
  { id: 3, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85', title: 'Outdoor Seating', category: 'Space', size: 'small' },
  { id: 4, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85', title: 'Coffee Art', category: 'Cuisine', size: 'small' },
  { id: 5, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85', title: 'Evening Ambiance', category: 'Space', size: 'medium' },
  { id: 6, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85', title: 'Artisan Pizza', category: 'Cuisine', size: 'small' },
  { id: 7, src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85', title: 'Signature Steak', category: 'Cuisine', size: 'small' },
  { id: 8, src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85', title: 'Pasta Delight', category: 'Cuisine', size: 'small' },
  { id: 9, src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85', title: 'Dessert Special', category: 'Cuisine', size: 'small' },
  { id: 10, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85', title: 'Pour Over Coffee', category: 'Cuisine', size: 'medium' },
];

const CATEGORIES = ['All', 'Space', 'Cuisine'];

function GalleryHero() {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="gallery-hero">
      <div className="gallery-hero-bg"></div>
      <div className="gallery-hero-overlay"></div>
      
      <div className="wrap" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="gallery-hero-content" style={{ 
          opacity: ready ? 1 : 0, 
          transform: ready ? 'none' : 'translateY(32px)',
          transition: 'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)'
        }}>
          <span className="eyebrow" style={{ color: 'rgba(243,237,226,0.45)' }}>Visual Diary</span>
          <h1 className="gallery-hero-title">
            A glimpse into<br/>
            <em>our world</em>
          </h1>
          <p className="gallery-hero-text">
            From intimate corners to culinary masterpieces — every image tells a story of warmth, 
            elegance, and exceptional taste.
          </p>
          <div className="gallery-hero-buttons">
            <Link href="/menu" className="btn btn-ol">
              Explore Menu <ArrowRight size={14} />
            </Link>
            <a 
              href="https://instagram.com/cafejanoshi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ol"
              style={{ borderColor: 'rgba(243,237,226,0.2)' }}
            >
              <Instagram size={14} /> Follow Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="gallery-hero-scroll">
        <span>Scroll</span>
        <div className="gallery-hero-scroll-line"></div>
      </div>
    </div>
  );
}

function GalleryImage({ image, index, onOpen }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, index * 60);
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const sizeClass = image.size === 'large' ? 'gallery-item--large' : 
                    image.size === 'medium' ? 'gallery-item--medium' : 'gallery-item--small';

  return (
    <div 
      ref={ref}
      className={`gallery-item ${sizeClass}`}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)' }}
      onClick={() => onOpen(image)}
    >
      <div className="gallery-item-inner">
        <img src={image.src} alt={image.title} loading="lazy" />
        <div className="gallery-item-overlay">
          <div className="gallery-item-info">
            <span className="gallery-item-category">{image.category}</span>
            <span className="gallery-item-title">{image.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const headerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('on');
      });
    }, { threshold: 0.15 });
    
    if (headerRef.current) obs.observe(headerRef.current);
    
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setActiveImage(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const filteredImages = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <>
      <GalleryHero />

      <section style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="wrap">
          <div ref={headerRef} className="reveal" style={{ marginBottom: 56, textAlign: 'center' }}>
            <span className="eyebrow">Moments Captured</span>
            <h2 style={{ maxWidth: 700, margin: '0 auto' }}>
              Where every frame<br/><em style={{ fontStyle: 'italic' }}>holds a memory</em>
            </h2>
          </div>

          <div className="gallery-filters reveal" style={{ marginBottom: 48, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`gallery-filter ${filter === cat ? 'gallery-filter--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image, idx) => (
              <GalleryImage key={image.id} image={image} index={idx} onOpen={setActiveImage} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream-2)', padding: '80px 0', textAlign: 'center' }}>
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Follow Our Journey</span>
            <h2 style={{ marginBottom: 24 }}>
              More on<br/><em style={{ fontStyle: 'italic' }}>Instagram</em>
            </h2>
            <p style={{ maxWidth: 500, margin: '0 auto 32px', color: 'var(--ink-2)' }}>
              Daily updates, behind-the-scenes, and exclusive offers.
            </p>
            <a 
              href="https://instagram.com/cafejanoshi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-od"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              <Instagram size={14} /> @cafejanoshi
            </a>
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="gallery-lightbox" onClick={() => setActiveImage(null)}>
          <div className="gallery-lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.title} />
            <div className="gallery-lightbox-info">
              <div>
                <span className="gallery-lightbox-category">{activeImage.category}</span>
                <span className="gallery-lightbox-title">{activeImage.title}</span>
              </div>
              <button onClick={() => setActiveImage(null)} className="gallery-lightbox-close">✕</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .gallery-hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          overflow: hidden;
          background: var(--dark);
        }
        
        .gallery-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90');
          background-size: cover;
          background-position: center 40%;
          transform: scale(1.05);
          animation: heroZoom 20s ease-out forwards;
        }
        
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.1); }
        }
        
        .gallery-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(30,26,23,0.3) 0%, rgba(30,26,23,0.7) 100%);
        }
        
        .gallery-hero-content {
          max-width: 800px;
        }
        
        .gallery-hero-title {
          font-family: var(--serif);
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 0.95;
          color: var(--cream);
          margin-bottom: 28px;
        }
        
        .gallery-hero-title em {
          font-style: italic;
          font-weight: 300;
        }
        
        .gallery-hero-text {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(243,237,226,0.7);
          max-width: 550px;
          margin-bottom: 48px;
          line-height: 1.8;
        }
        
        .gallery-hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .gallery-hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: fadeUpScroll 1s ease-out 1.2s forwards;
        }
        
        @keyframes fadeUpScroll {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 0.6; transform: translateX(-50%) translateY(0); }
        }
        
        .gallery-hero-scroll span {
          font-family: var(--sans);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(243,237,226,0.5);
        }
        
        .gallery-hero-scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(243,237,226,0.5), transparent);
          animation: scrollLine 2.2s ease-in-out infinite;
        }
        
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 5px;
        }
        
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .gallery-item {
          cursor: pointer;
        }
        
        .gallery-item--large {
          grid-column: span 6;
          grid-row: span 2;
        }
        
        .gallery-item--medium {
          grid-column: span 4;
          grid-row: span 2;
        }
        
        .gallery-item--small {
          grid-column: span 3;
        }
        
        @media (max-width: 900px) {
          .gallery-item--large,
          .gallery-item--medium {
            grid-column: span 4;
          }
          .gallery-item--small {
            grid-column: span 3;
          }
        }
        
        @media (max-width: 640px) {
          .gallery-item--large,
          .gallery-item--medium,
          .gallery-item--small {
            grid-column: span 2;
            grid-row: span 1;
          }
        }
        
        .gallery-item-inner {
          position: relative;
          aspect-ratio: 1/1;
          overflow: hidden;
          background: var(--cream-2);
        }
        
        .gallery-item--large .gallery-item-inner {
          aspect-ratio: 16/11;
        }
        
        .gallery-item--medium .gallery-item-inner {
          aspect-ratio: 4/5;
        }
        
        .gallery-item-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s var(--ease);
        }
        
        .gallery-item:hover .gallery-item-inner img {
          transform: scale(1.06);
        }
        
        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(30,26,23,0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s var(--ease);
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }
        
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }
        
        .gallery-item-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .gallery-item-category {
          font-family: var(--sans);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }
        
        .gallery-item-title {
          font-family: var(--serif);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--cream);
          font-style: italic;
        }
        
        .gallery-filter {
          font-family: var(--sans);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 8px 24px;
          color: var(--ink-2);
          background: none;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.3s var(--ease);
        }
        
        .gallery-filter:hover {
          color: var(--ink);
          border-color: var(--ink);
        }
        
        .gallery-filter--active {
          color: var(--ink);
          border-color: var(--ink);
          background: rgba(58,54,58,0.03);
        }
        
        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(30,26,23,0.95);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lbFade 0.35s var(--ease);
          cursor: pointer;
        }
        
        @keyframes lbFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .gallery-lightbox-inner {
          cursor: default;
          max-width: 85vw;
          max-height: 85vh;
          animation: lbScale 0.4s var(--ease-out);
        }
        
        @keyframes lbScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .gallery-lightbox-inner img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          display: block;
        }
        
        .gallery-lightbox-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0 0;
          gap: 20px;
        }
        
        .gallery-lightbox-category {
          font-family: var(--sans);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 6px;
        }
        
        .gallery-lightbox-title {
          font-family: var(--serif);
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--cream);
          font-style: italic;
        }
        
        .gallery-lightbox-close {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(243,237,226,0.2);
          background: none;
          color: rgba(243,237,226,0.6);
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .gallery-lightbox-close:hover {
          border-color: rgba(243,237,226,0.6);
          color: var(--cream);
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s var(--ease-out), transform 1s var(--ease-out);
        }
        
        .reveal.on {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </>
  );
}