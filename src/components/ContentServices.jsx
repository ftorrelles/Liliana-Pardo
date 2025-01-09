import React from "react";
import {
  FaUserMd,
  FaUsers,
  FaChalkboardTeacher,
  FaBriefcaseMedical,
} from "react-icons/fa";
import "../styles/ContentServices.css";

// Arreglo de servicios
const services = [
  {
    id: 1,
    title: "Terapias Individuales",
    description:
      "Atención personalizada para manejar emociones y superar retos personales.",
    icon: <FaUserMd />,
    whatsappMessage: "Quiero conocer acerca de las Terapias Individuales",
  },
  {
    id: 2,
    title: "Terapias Familiares",
    description:
      "Fortalecimiento de la comunicación y vínculos familiares en un espacio seguro.",
    icon: <FaUsers />,
    whatsappMessage: "Quiero conocer acerca de las Terapias Familiares",
  },
  {
    id: 3,
    title: "Capacitaciones",
    description:
      "Formación en competencias laborales y bienestar para equipos interdisciplinarios.",
    icon: <FaChalkboardTeacher />,
    whatsappMessage: "Quiero conocer acerca de las Capacitaciones",
  },
  {
    id: 4,
    title: "Protocolos Psicosociales",
    description:
      "Diseño de planes para la atención integral de poblaciones vulnerables.",
    icon: <FaBriefcaseMedical />,
    whatsappMessage: "Quiero conocer acerca de los Protocolos Psicosociales",
  },
];

const ContentServices = () => {
  const sendToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+573245630864?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Servicios Profesionales</h2>
        <p className="services-description">
          Explora cómo la Dra. Liliana Pardo puede ayudarte a alcanzar tu
          bienestar emocional y social.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-background">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  className="cta-button"
                  onClick={() => sendToWhatsApp(service.whatsappMessage)}
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentServices;
