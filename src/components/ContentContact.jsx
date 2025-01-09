import React from "react";
import "../styles/ContentContact.css";

const ContentContact = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">¡Contáctanos!</h2>
        <p className="contact-description">
          Estamos aquí para ayudarte. Encuentra nuestras vías de contacto
          fácilmente.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="bx bxs-phone-call contact-icon"></i>
            <p className="contact-info">+57 310 694 2538</p>
          </div>
          <div className="contact-item">
            <i className="bx bxs-map contact-icon"></i>
            <p className="contact-info">Calle 123 #45-67, Bogotá, Colombia</p>
          </div>
          <div className="contact-item">
            <i className="bx bxl-whatsapp contact-icon"></i>
            <p className="contact-info">WhatsApp: +57 310 694 2538</p>
          </div>
          <div className="contact-socials">
            <a href="#" className="social-link">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#" className="social-link">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentContact;
