'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Smooth fade out after content loads
    const timer = setTimeout(() => setOpacity(0), 200);
    const timer2 = setTimeout(() => {
      const loader = document.getElementById('global-loader');
      if (loader) loader.style.display = 'none';
    }, 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div 
      id="global-loader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--cream)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.4s ease',
        opacity: opacity,
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}>
        {/* Elegant spinner */}
        <div style={{
          width: 48,
          height: 48,
          border: '2px solid var(--border)',
          borderTopColor: 'var(--gold)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <span style={{
          fontFamily: 'var(--serif)',
          fontSize: '0.85rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ink-3)',
        }}>
          JANOSHI
        </span>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}