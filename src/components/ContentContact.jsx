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
            <p className="contact-info">+57 301 7680417</p>
          </div>
          <div className="contact-item">
            <i className="bx bxs-map contact-icon"></i>
            <p className="contact-info">Bogotá, Colombia</p>
          </div>
          <div className="contact-item">
            <i className="bx bxl-whatsapp contact-icon"></i>
            <p className="contact-info">WhatsApp: +57 301 7680417</p>
          </div>
          <div className="contact-socials">
            <a
              href="https://www.facebook.com/profile.php?id=61572433170250"
              className="social-link"
              target="_blank"
            >
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a
              href="https://www.instagram.com/ser_sanar_crecer/"
              className="social-link"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentContact;
