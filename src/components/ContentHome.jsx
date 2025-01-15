import React from "react";
import "../styles/ContentHome.css";

const ContentHome = () => {
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
            <button className="cta-button">Agenda tu consulta</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHome;
