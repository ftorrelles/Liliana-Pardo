import React from "react";
import "../styles/ContentBlog.css";

const articles = [
  {
    id: 1,
    title: "Cómo mejorar tu bienestar emocional",
    description:
      "Descubre estrategias prácticas para mantener el equilibrio emocional en tu día a día.",
    image: "/blogmanejoemociones.jpg",
    link: "/articulos/bienestar-emocional",
  },
  {
    id: 2,
    title: "La importancia de la terapia familiar",
    description:
      "Aprende cómo la terapia familiar puede fortalecer los lazos y resolver conflictos.",
    image: "/blogterapiafamiliar.jpg",
    link: "/articulos/terapia-familiar",
  },
  {
    id: 3,
    title: "Tips para manejar el estrés en el trabajo",
    description:
      "Conoce técnicas efectivas para reducir el estrés laboral y mejorar tu productividad.",
    image: "/blogmanejoestres.jpg",
    link: "/articulos/manejo-del-estres",
  },
  {
    id: 4,
    title: "Tips para manejar el estrés en el trabajo",
    description:
      "Conoce técnicas efectivas para reducir el estrés laboral y mejorar tu productividad.",
    image: "/blogmanejoestres.jpg",
    link: "/articulos/manejo-del-estres",
  },
];

const ContentBlog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Blog y Artículos</h2>
        <p className="blog-description">
          Explora contenido creado por la Dra. Liliana Pardo para ayudarte a
          alcanzar el bienestar emocional y social.
        </p>
        <div className="blog-grid">
          {articles.map((article) => (
            <div className="blog-card" key={article.id}>
              <img
                src={article.image}
                alt={article.title}
                className="blog-image"
              />
              <div className="blog-content">
                <h3 className="blog-article-title">{article.title}</h3>
                <p className="blog-article-description">
                  {article.description}
                </p>
                <a href={article.link} className="blog-read-more">
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlog;
