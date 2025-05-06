import React from "react";
import "../components/css/Portfolio.scss";
import Separator from "../components/Separator";
import { Helmet } from "react-helmet";

function Portfolio() {
  const realisations = [
    {
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      image: "/images/portfolio/fresh-food.jpg",
      tool: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      image: "/images/portfolio/restaurant-japonais.jpg",
      tool: "Site réalisé avec WordPress",
    },
    {
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      image: "/images/portfolio/espace-bien-etre.jpg",
      tool: "Site réalisé avec LARAVEL",
    },
    {
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      image: "/images/portfolio/seo.jpg",
      tool: "Utilisation des outils SEO",
    },
    {
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      image: "/images/portfolio/coder.jpg",
      tool: "PHP - SYMPHONY",
    },
    {
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      image: "/images/portfolio/screens.jpg",
      tool: "Réalisé avec FIGMA",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <section className="portfolio-section">
        <img
          src="/images/banner.jpg"
          alt="Bannière bleue"
          className="img-fluid"
        />
        <div className="portfolio-container">
          <h1 className="title text-center mt-2">Portfolio</h1>
          <p className="text-center mb-4">
            Voici quelques-unes de mes réalisations
          </p>
          <Separator variant="services" />

          <div className="row mt-5">
            {realisations.slice(0, 3).map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{service.title}</h5>
                    <p className="card-text text-center">
                      {service.description}
                    </p>
                    <div className="mt-auto text-center">
                      <button className="btn btn-primary">Voir le site</button>
                    </div>
                    <footer className="card-footer text-center mt-3">
                      <small>{service.tool}</small>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {realisations.slice(3, 6).map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{service.title}</h5>
                    <p className="card-text text-center">
                      {service.description}
                    </p>
                    <div className="mt-auto text-center">
                      <button className="btn btn-primary">Voir le site</button>
                    </div>
                    <footer className="card-footer text-center mt-3">
                      <small>{service.tool}</small>{" "}
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
