import React, { useState } from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";
import "../styles/ContentAchievements.css";

const ContentAchievements = () => {
  // Logros Universitarios
  const academicAchievements = [
    {
      icon: <FaGraduationCap />,
      title: "Candidata a Magíster en DIH y DICA",
      institution: "Escuela Superior de Guerra",
      year: "2018",
    },
    {
      icon: <FaCertificate />,
      title: "Especialización en Psicología Clínica",
      institution: "Universidad Católica de Colombia",
      year: "2004",
    },
    {
      icon: <FaGraduationCap />,
      title: "Psicóloga",
      institution: "Universidad Antonio Nariño",
      year: "2000",
    },
  ];

  // Cursos y Actualizaciones
  const courses = [
    "Curso Derechos Humanos a la Población NARP - ESAP, Bogotá, diciembre de 2022",
    "Curso Básico de Derecho Internacional Humanitario (DIH) - Cruz Roja Internacional, Bogotá, marzo de 2016",
    "Seminario Internacional: Experiencias Regionales en Derechos Sexuales y Reproductivos - Secretaría de la Mujer",
    "Formación en el Modelo de Servicios Amigables en Salud Sexual y Reproductiva - Hospital Materno Infantil y Hospital Rafael Uribe Uribe, Bogotá, junio de 2015",
    "FORO Ley Estatutaria - Hospital de Tunjuelito, Bogotá, mayo de 2015",
    "Seminario-Taller 'Mujeres Exitosas, Tras la Huella Personal' - Ejército Nacional de Colombia, Bogotá, agosto de 2014",
    "Seminario Lineamientos de Acción Integral y Comunicaciones Estratégicas - Ejército Nacional de Colombia, Bogotá, junio de 2014",
    "I Congreso Internacional de Familia Militar - Ejército Nacional de Colombia y Universidad de La Sabana, Bogotá, noviembre de 2012",
    "III Encuentro Distrital en Salud Mental - Hospital del Sur y Universidad del Bosque, Bogotá, octubre de 2010",
    "Seminario Casas Refugio: Estrategias para la Protección de los Derechos de las Víctimas de Violencia de Género - Embajada de España, Bogotá, agosto de 2010",
    "Sexta Audiencia, Cátedra de Derechos Humanos - Personería de Bogotá, julio de 2010",
    "Taller: Implementación de Servicios Amigables para Jóvenes y Adolescentes - Ministerio de Protección Social y UNFPA, Bogotá, julio de 2009",
    "Conferencia: Globalización y Cambios en el Orden de Género en América Latina - Red de Universidades Alma Mater, Bogotá, junio de 2008",
    "Curso Taller: Entrevista en Abordaje de Casos de Delito Sexual - Medicina Legal, Bogotá, octubre-diciembre de 2005",
    "Congreso Distrital de Defensores y Defensoras de Derechos Humanos - Personería Distrital, Bogotá, septiembre de 2005",
    "Conversatorio de Trata de Personas - Secretaría de Educación, Bogotá, septiembre de 2005",
    "FORO: 'El Abuso Sexual Contra Niños y Niñas' - Movimiento MIRA, Bogotá, noviembre de 2004",
    "Seminario de Manejo de Adicciones en Situación de Marginación Social - Universidad Católica de Colombia, Bogotá, abril de 2002",
    "V Congreso Colombiano de Psicología de la Salud - Universidad del Bosque, Bogotá, julio de 2001",
    "Foro de Depresión y Estrés Postraumático - Policía Nacional, Bogotá, 2000",
    "Seminario de Actualización sobre SIDA en Colombia - Liga Colombiana de Lucha contra el SIDA, Bogotá, 2000",
    "Simposio en Salud Mental - Hospital Simón Bolívar, Bogotá, 2000",
    "Seminario de Alta Gerencia - Universidad Antonio Nariño, Bogotá, 1999",
    "Seminario de Violencia Intrafamiliar - Universidad Antonio Nariño, Bogotá, 1999",
    "Seminario de Clínica Hospitalaria: Un Enfoque Psicodinámico - Universidad Antonio Nariño, Bogotá, 1999",
    "Curso de Inglés - Universidad La Gran Colombia, Bogotá, 1999",
  ];

  // Estado para manejar el acordeón
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-title">Logros Académicos y Cursos</h2>
        <p className="achievements-description">
          Descubre los títulos y certificaciones que respaldan la experiencia
          profesional de la Dra. Liliana Pardo.
        </p>

        {/* Logros Universitarios */}
        <ol className="achievements-list">
          {academicAchievements.map((achievement, index) => (
            <li className="achievement-item" key={index}>
              <span className="achievement-icon">{achievement.icon}</span>
              <div className="achievement-details">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-institution">
                  {achievement.institution}
                </p>
                <span className="achievement-year">{achievement.year}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* Acordeón para Cursos */}
        <div className="accordion-container">
          <button
            className="accordion-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Ocultar Cursos" : "Ver Cursos y Actualizaciones"}
          </button>
          {isOpen && (
            <ul className="courses-list">
              {courses.map((course, index) => (
                <li key={index} className="course-item">
                  <FaChalkboardTeacher className="course-icon" />
                  {course}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentAchievements;
