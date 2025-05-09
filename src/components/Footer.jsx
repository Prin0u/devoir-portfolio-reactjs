import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-2 mt-auto">
      <div className="container mx-auto">
        <div className="row d-flex justify-content-center flex-grow-1">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>John Doe</h5>
            <address>
              40 rue Laure Diebold <br />
              69009 Lyon, France <br />
              10 20 30 40 50 <br />
              john.doe@gmail.com
            </address>

            <div className="mt-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3 fs-4"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3 fs-4"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/legalnotice" className="text-white">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
