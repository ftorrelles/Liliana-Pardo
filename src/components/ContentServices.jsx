import React from "react";
import {
  FaUserMd,
  FaUsers,
  FaChalkboardTeacher,
  FaBriefcaseMedical,
  FaPaw,
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
    id: 4,
    title: "Ayuda Psicosocial",
    description:
      "Apoyo en problemas como adicciones, depresión, ansiedad, problemas en la infancia, trastornos adaptativos y estrés postraumático.",
    icon: <FaBriefcaseMedical />,
    whatsappMessage: "Quiero conocer acerca de la Ayuda Psicosocial",
  },
  {
    id: 5,
    title: "Problemas de Pareja",
    description:
      "Terapias enfocadas en mejorar la comunicación y resolver conflictos en relaciones de pareja.",
    icon: <FaUsers />,
    whatsappMessage: "Quiero conocer acerca de los Problemas de Pareja",
  },
  {
    id: 6,
    title: "Mascotas de Compañía (Soporte Emocional)",
    description:
      "Integración de mascotas para apoyar el bienestar emocional y psicológico.",
    icon: <FaPaw />,
    whatsappMessage:
      "Quiero conocer acerca del servicio de Mascotas de Compañía",
  },
  {
    id: 3,
    title: "Capacitaciones",
    description:
      "Formación en competencias laborales y bienestar para equipos interdisciplinarios.",
    icon: <FaChalkboardTeacher />,
    whatsappMessage: "Quiero conocer acerca de las Capacitaciones",
  },
];

const ContentServices = () => {
  const sendToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+573017680417?text=${encodedMessage}`;
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
