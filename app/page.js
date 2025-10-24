"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Espera 1 segundo antes de mostrar el popup
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      {/* CONTENIDO PRINCIPAL DEL HOME */}
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Bienvenido al sitio
      </h1>
      <p style={{ textAlign: "center" }}>
        Este es el contenido del Home. (Acá va lo que ya tengas)
      </p>

      {/* POPUP CON IMAGEN */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          >
            <img
              src="/promoevento.jpg"
              alt="Promoción del evento"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "10px 10px 0 0",
              }}
            />

            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(0,0,0,0.7)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
