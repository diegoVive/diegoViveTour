'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Cover from "../ui/components/Home/Cover/Cover";
import TheExperience from "../ui/components/Home/TheExperience/TheExperience";
import Data from "../ui/components/Home/Data/Data";
import Contact from "../ui/components/Home/Contact/Contact";
import Navbar from "../ui/components/Common/Navbar/Navbar";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowPopup(true), 1000);
  return () => clearTimeout(timer);
}, []);
return ({showPopup && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
    onClick={() => setShowPopup(false)}
  >
    <img
      src="/promoevento.jpg"
      alt="Promoción del evento"
      style={{
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
      }}
    />
  </div>
)}

    <main className={styles.main}>
      <Navbar />
      <Cover />
      <TheExperience />
      <Data />
      <Contact />
    </main>
  );
}
