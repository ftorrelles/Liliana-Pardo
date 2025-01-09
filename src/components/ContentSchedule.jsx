import React from "react";
import "../styles/ContentSchedule.css";

const ContentSchedule = () => {
  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <div className="schedule-text">
          <h2 className="schedule-title">Reserva tu Consulta</h2>
          <p className="schedule-description">
            Organiza tu tiempo fácilmente seleccionando el día y la hora que
            mejor se adapten a tu agenda.
          </p>
        </div>
        <div className="schedule-calendar">
          <iframe
            src="https://calendly.com/torrellesf93/cita-de-servicios"
            className="calendly-iframe"
            title="Calendly Schedule"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContentSchedule;
