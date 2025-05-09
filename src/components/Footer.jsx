import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer className="bg-dark text-white p-4">
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
                  href="https://github.com/github-john-doe"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="text-white me-3 fs-4"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://x.com/johndoefromx"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="text-white me-3 fs-4"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://uk.linkedin.com/company/john-doe"
                  target="_blank"
                  rel="noreferrer nofollow"
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
                <li>
                  <Link to="/portfolio" className="text-white">
                    Fresh Food
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-white">
                    Restaurant Akira
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-white">
                    Espace bien-être
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-white">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-white">
                    Création d'une API
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.figma.com/design/wtL4DNIkFHPNzWWq7nFhUW/devoir-figma?node-id=0-1&p=f&t=o13Pq97JWaQsOXyc-0"
                    className="text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Maquette d'un site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
