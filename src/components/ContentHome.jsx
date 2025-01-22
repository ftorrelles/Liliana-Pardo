import React from "react";
import "../styles/ContentHome.css";

const ContentHome = () => {
  const handleButton = () => {
    window.open(
      "https://wa.me/573017680417?text=Hola%20Dra.%20Liliana%20Pardo,%20me%20gustaría%20agendar%20una%20consulta",
      "_blank"
    );
  };
  return (
    <>
      <div className="space-navbar-pages"></div>
      <div className="home-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Ser, sanar, crecer.</h1>
            <p className="hero-subtitle">
              La Dra. Liliana Pardo, experta en psicología clínica.
            </p>
            <button onClick={handleButton} className="cta-button">
              Agenda tu consulta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHome;
