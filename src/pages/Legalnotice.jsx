import React from "react";
import "../components/css/Legalnotice.scss";
import Separator from "../components/Separator";
import { Helmet } from "react-helmet";

function Legalnotice() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions légales</title>
      </Helmet>
      <section className="container my-5">
        <h2 className="mb-4 text-center">Mentions légales</h2>
        <Separator variant="legalnotice" />
        <div className="accordion" id="accordionMentionsLegales">
          {/* Partie 1 : Éditeur du site */}
          <div className="accordion-item mt-5">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionMentionsLegales"
            >
              <div className="accordion-body">
                <p>
                  <span className="fs-3">John Doe</span>
                  <br />
                  <i className="bi bi-map"> </i>
                  40 rue Laure Diebold <br />
                  <i className="bi bi-geo-alt"> </i>
                  69009 Lyon, France <br />
                  <i className="bi bi-phone"> </i>
                  10 20 30 40 50 <br />
                  <i className="bi bi-envelope-at"> </i>
                  john.doe@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* Partie 2 : Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionMentionsLegales"
            >
              <div className="accordion-body">
                <p>
                  <strong>alwaysdata</strong>
                  <br />
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                  <br />
                  <a
                    className="d-block mt-3"
                    href="https://www.alwaysdata.com/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-globe"> </i>
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Partie 3 : Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionMentionsLegales"
            >
              <div className="accordion-body">
                <p>
                  Ce site a été réalisé par John Doe, étudiant au{" "}
                  <a
                    href="https://www.centre-europeen-formation.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline"
                  >
                    Centre Européen de formation.
                  </a>
                  <br />
                  <em className="d-block mt-3">
                    Les images utilisées sur ce site sont libres de droits et
                    ont été obtenues sur le site{" "}
                    <a
                      href="https://pixabay.com/fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      Pixabay
                    </a>
                  </em>
                  <em className="d-block mt-3">
                    La favicon de ce site a été fournie par{" "}
                    <a
                      href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </a>
                  </em>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Legalnotice;
