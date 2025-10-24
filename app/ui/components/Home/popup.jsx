// app/components/Popup.jsx
'use client';
import { useState, useEffect } from 'react';

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      onClick={() => setShow(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '90%',
        }}
      >
        <button
          onClick={() => setShow(false)}
          aria-label="Cerrar"
          style={{
            position: 'absolute',
            top: -12,
            right: -12,
            width: 32,
            height: 32,
            borderRadius: 999,
            border: 'none',
            background: '#fff',
            cursor: 'pointer',
            fontSize: 18,
            lineHeight: '32px',
            textAlign: 'center',
          }}
        >
          ×
        </button>

        <img
          src="/promoevento.jpg"
          alt="Promoción del evento"
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: 8,
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          }}
        />
      </div>
    </div>
  );
}
