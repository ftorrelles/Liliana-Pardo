import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sobre mi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/businessCard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tarjeta de presentación
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: lilianapardo@sersanarcrecer.com</p>
          <p>Tel: +57 301 768 0417</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=61572433170250"
              className="social-icon"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://wa.me/573017680417?text=Hola%20Dra.%20Liliana%20Pardo,%20me%20gustaría%20agendar%20una%20consulta"
              className="social-icon"
              target="_blank"
            >
              <i class="bx bxl-whatsapp-square"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572433170250"
              className="social-icon"
              target="_blank"
            >
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
