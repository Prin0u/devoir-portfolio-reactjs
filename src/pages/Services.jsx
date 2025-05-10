import React from "react";
import "../components/css/Services.scss";
import Separator from "../components/Separator";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <div className="services">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <section>
        <img
          src="/images/banner.jpg"
          alt="Bannière bleue"
          className="img-fluid"
        />
        <h1 className="title text-center mt-5">Mon offre de services</h1>
        <p className="text-center mb-4">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <Separator variant="services" />
      </section>

      <section>
        <div className="row mx-auto my-5">
          <div className="col-md-4 mb-2 px-2">
            <div className="card shadow-sm">
              <div className="card-body">
                <i className="bi bi-brush fs-1"></i>
                <h3 className="card-title">UX Design</h3>
                <p className="card-text text-center">
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (site web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-2 px-2">
            <div className="card shadow-sm">
              <div className="card-body">
                <i className="bi bi-code-slash fs-1"></i>
                <h3 className="card-title">Développement web</h3>
                <p className="card-text text-center">
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-2 px-2">
            <div className="card shadow-sm">
              <div className="card-body">
                <i className="bi bi-search fs-1"></i>
                <h3 className="card-title">Référencement</h3>
                <p className="card-text text-center">
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le remonter dans les résultats
                  des moteurs de recherche (Google, Bing, Yahoo, etc.).
                  L'objectif est d'attirer un maximum de visiteurs qualifiés sur
                  le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
