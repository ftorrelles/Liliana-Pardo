import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* <h3 className="footer-title">NexDev</h3> */}
          <img className="footer-logo" src="logo footer.svg" alt="logo" />
          <p className="footer-description">Ser, sanar, crecer</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@nexdev.com</p>
          <p>Tel: +57 310 694 2538</p>
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Liliana Pardo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
