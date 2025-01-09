import React, { useState } from "react";
import "../styles/ContentTestimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    text: "La Dra. Liliana me ayudó a superar una etapa difícil en mi vida. Su enfoque profesional y humano marcó una gran diferencia.",
    role: "Paciente individual",
  },
  {
    id: 2,
    name: "Familia Rodríguez",
    text: "Gracias a sus terapias familiares, logramos mejorar nuestra comunicación y fortalecer los lazos familiares. ¡Estamos muy agradecidos!",
    role: "Terapia familiar",
  },
  {
    id: 3,
    name: "Laura Gómez",
    text: "Las capacitaciones impartidas por la Dra. Liliana fueron clave para mejorar las dinámicas en nuestro equipo laboral. Excelente profesional.",
    role: "Participante de capacitación",
  },
];

const ContentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonios</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
        <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
        <p className="testimonial-role">{testimonials[currentIndex].role}</p>
      </div>
      <div className="testimonial-controls">
        <button onClick={prevTestimonial} className="control-button">
          &#8592; {/* Flecha izquierda */}
        </button>
        <button onClick={nextTestimonial} className="control-button">
          &#8594; {/* Flecha derecha */}
        </button>
      </div>
    </section>
  );
};

export default ContentTestimonials;
