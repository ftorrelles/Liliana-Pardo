import React from "react";
import "../styles/ContentHome.css";

const ContentHome = () => {
  return (
    <div className="home-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienestar emocional para construir un mejor mañana
          </h1>
          <p className="hero-subtitle">
            La Dra. Liliana Pardo, experta en psicología clínica. Ser, sanar,
            crecer.
          </p>
          <button className="cta-button">Agenda tu consulta</button>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
