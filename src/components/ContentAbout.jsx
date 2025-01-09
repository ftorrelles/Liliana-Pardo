import React from "react";
import "../styles/ContentAbout.css";

const ContentAbout = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="about2.png" alt="Dra. Liliana Pardo" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Conoce a la Dra. Liliana Pardo</h2>
          <p className="about-description">
            Psicóloga clínica con más de 20 años de experiencia liderando
            proyectos psicosociales, coordinando equipos interdisciplinarios y
            desarrollando protocolos de atención integral a víctimas de
            conflicto armado.
          </p>
          <p className="about-highlights">
            Su trayectoria incluye la capacitación en competencias laborales, el
            acompañamiento terapéutico individual y familiar, y la atención a
            poblaciones vulnerables. Su compromiso con el bienestar emocional y
            social la ha llevado a ser referente en el diseño de estrategias de
            rehabilitación y desarrollo comunitario.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentAbout;
