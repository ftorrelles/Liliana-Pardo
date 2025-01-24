import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../styles/BusinessCard.css";

const BusinessCard = () => {
  return (
    <div className="card-business-container">
      <div className="card-business">
        <div className="card-business-logo">
          <img src="/logo footer.svg" alt="Logo" />
        </div>
        <h4 className="card-business-title">Ser, sanar, crecer.</h4>

        <p className="card-business-subtitle">
          Síguenos en nuestras redes sociales y visita nuestro sitio web
        </p>
        <div className="card-business-buttons card-business-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61572433170250"
            target="_blank"
            className="card-business-button"
          >
            <FaFacebook className="icon" /> Síguenos en Facebook
          </a>
          <a
            href="https://www.instagram.com/ser_sanar_crecer/"
            target="_blank"
            className="card-business-button"
          >
            <FaInstagram className="icon" />
            Síguenos en Instagram
          </a>
          <Link to="/" className="card-business-button">
            <CgWebsite className="icon" />
            Visita nuestro sitio web
          </Link>
          <a
            href="https://wa.me/573017680417?text=Hola%20Dra.%20Liliana%20Pardo,%20me%20gustaría%20agendar%20una%20consulta"
            target="_blank"
            className="card-business-button"
          >
            <FaWhatsapp className="icon" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
