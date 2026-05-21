'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Plus, ArrowRight } from 'lucide-react';
import { useCart, registerMenuItem } from '../context/CartContext';

/* 8 signature items — original image paths from Menu.jsx */
const SIGNATURE = [
  { id:'sig-dome',     name:'Chocolate Dome Cake',   price:1499, tag:'Dessert',   img:'/domecake.jpg',       desc:'Dramatic chocolate sphere — warm sauce reveal tableside.' },
  { id:'sig-lava',     name:'JN White Lava Cake',    price:999,  tag:'Dessert',   img:'/whitelava.jpg',      desc:'Molten white chocolate with crisp golden crust.' },
  { id:'sig-stuffed',  name:'Stuffed Chicken',       price:1999, tag:'Signature', img:'/stuffed.jpg',        desc:'Cheese-stuffed breast, house herb butter sauce.' },
  { id:'sig-rib',      name:'Rib Eye Steak',         price:4499, tag:'Premium',   img:'/ribeyesteak.jpg',    desc:'Prime cut — choice of six signature sauces.' },
  { id:'sig-lotus',    name:'Lotus Latte',           price:699,  tag:'Coffee',    img:'/lotuslatte.jpg',     desc:'Biscoff lotus cream with velvety espresso base.' },
  { id:'sig-rose',     name:'Royal Rose Mojito',     price:599,  tag:'Mocktail',  img:'/royalrose.jpg',      desc:'Rose petals, fresh mint, sparkling lime.' },
  { id:'sig-jnburg',   name:'JN Special Burger',     price:999,  tag:'Burger',    img:'/jnspecialburger.jpg',desc:'Double smash, secret sauce, brioche bun.' },
  { id:'sig-seafood',  name:'Seafood Platter',       price:3999, tag:'For Two',   img:'/seafoodplatter.jpg', desc:'Prawns, fish fillet, calamari — serves 2–3.' },
];
SIGNATURE.forEach(i => registerMenuItem(i.id, i.name, i.price));

function Card({ item, delay }) {
  const ref = useRef(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity=1; el.style.transform='none'; }, delay); obs.disconnect(); }
    }, { threshold:.06 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);

  const handleAdd = () => { addToCart(item.id, item.name, item.price, 1); setAdded(true); setTimeout(() => setAdded(false), 1600); };

  return (
    <div ref={ref} className="fm-card" style={{ opacity:0, transform:'translateY(32px)', transition:'opacity .9s var(--ease-out), transform .9s var(--ease-out)' }}>
      <div className="fm-img-wrap">
        <img src={item.img} alt={item.name} className="fm-img" loading="lazy"/>
        <span className="fm-tag">{item.tag}</span>
        <span className="fm-price">Rs {item.price.toLocaleString()}</span>
      </div>
      <div className="fm-body">
        <div className="fm-name">{item.name}</div>
        <p className="fm-desc">{item.desc}</p>
        <button className={`fm-add${added?' fm-add-done':''}`} onClick={handleAdd}>
          <Plus size={11} strokeWidth={2}/> {added ? 'Added' : 'Add to order'}
        </button>
      </div>
    </div>
  );
}

export default function FeaturedMenu() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold:.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section id="menu-preview" style={{ background:'var(--dark)', padding:'130px 0 110px' }}>
      <div className="wrap">
        <div ref={ref} className="reveal" style={{ marginBottom:64, display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24 }}>
          <div>
            <span className="eyebrow eyebrow-lt">Signature Selections</span>
            <h2 style={{ color:'#f3ede2' }}>A taste of<br/><em style={{fontStyle:'italic'}}>what awaits you</em></h2>
          </div>
          <p style={{ color:'rgba(243,237,226,.5)', maxWidth:320, fontSize:'.9rem', lineHeight:1.8, paddingBottom:8 }}>
            Eight of our most celebrated creations. Each one a reason to visit.
          </p>
        </div>

        <div className="fm-grid">
          {SIGNATURE.map((item, i) => <Card key={item.id} item={item} delay={i*65}/>)}
        </div>

        <div style={{ textAlign:'center', marginTop:60 }}>
          <Link href="/menu" className="btn btn-ol" style={{ gap:12 }}>
            <span>View Full Menu — 155+ Items</span>
            <ArrowRight size={13} strokeWidth={2}/>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .fm-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(243,237,226,.07); border:1px solid rgba(243,237,226,.07); }
        @media(max-width:1100px){.fm-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.fm-grid{grid-template-columns:1fr}}

        .fm-card { background:var(--dark); display:flex; flex-direction:column; overflow:hidden; transition:background .4s var(--ease); }
        .fm-card:hover { background:var(--dark-2); }
        .fm-img-wrap { position:relative; aspect-ratio:3/2; overflow:hidden; background:var(--dark-2); }
        .fm-img { width:100%; height:100%; object-fit:cover; filter:brightness(.85); transition:transform .9s var(--ease), filter .5s; }
        .fm-card:hover .fm-img { transform:scale(1.06); filter:brightness(.95); }
        .fm-tag { position:absolute; top:14px; left:14px; font-family:var(--sans); font-size:.55rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(243,237,226,.75); border:1px solid rgba(243,237,226,.25); padding:4px 10px; background:rgba(30,26,23,.4); backdrop-filter:blur(6px); }
        .fm-price { position:absolute; bottom:0; right:0; font-family:var(--serif); font-size:1.2rem; font-weight:400; color:#f3ede2; background:rgba(30,26,23,.65); backdrop-filter:blur(8px); padding:7px 13px; }
        .fm-body { padding:22px 22px 20px; flex:1; display:flex; flex-direction:column; gap:0; }
        .fm-name { font-family:var(--serif); font-size:1.2rem; font-weight:400; color:#f3ede2; line-height:1.15; margin-bottom:8px; }
        .fm-desc { font-family:var(--sans); font-size:.78rem; font-weight:400; color:rgba(243,237,226,.42); line-height:1.65; flex:1; margin-bottom:14px; }
        .fm-add { display:inline-flex; align-items:center; gap:7px; font-family:var(--sans); font-size:.6rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:rgba(243,237,226,.5); border:1px solid rgba(243,237,226,.18); padding:8px 14px; background:none; transition:all .35s var(--ease); align-self:flex-start; }
        .fm-add:hover,.fm-add-done { color:#f3ede2; border-color:rgba(243,237,226,.55); background:rgba(243,237,226,.06); }
      `}</style>
    </section>
  );
}