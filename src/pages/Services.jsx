import React from "react";
import "../components/css/Services.scss";

function Services() {
  return (
    <>
      <section>
        <img
          src="/images/banner.jpg"
          alt="Bannière bleue"
          className="img-fluid"
        />
        <h1 className="title text-center mt-5">Mon offre de services</h1>
        <p className="text-center">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <hr className="mx-auto separation-bleue" />
      </section>

      <section>
        <div className="container mt-5">
          <div className="row g-3">
            <div className=" col-md-4 px-2">
              <div className="services service-box text-center">
                <i
                  className="bi bi-brush"
                  style={{ fontSize: "2rem", color: "#007bff" }}
                ></i>
                <h3 className="title">UX Design</h3>
                <p>
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (site web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
            <div className=" col-md-4 px-2">
              <div className="services service-box text-center">
                <i
                  className="bi bi-code-slash"
                  style={{ fontSize: "2rem", color: "#007bff" }}
                ></i>

                <h3 className="title">Développement web</h3>
                <p>
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </div>
            <div className=" col-md-4 px-2">
              <div className="services service-box text-center">
                <i
                  className="bi bi-search"
                  style={{ fontSize: "2rem", color: "#007bff" }}
                />
                <h3 className="title">Référencement</h3>
                <p>
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
    </>
  );
}

export default Services;
