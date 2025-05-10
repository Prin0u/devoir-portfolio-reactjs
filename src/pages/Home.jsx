import React, { useState } from "react";
import "../components/css/Home.scss";
import Separator from "../components/Separator";
import { Helmet } from "react-helmet";
import Modale from "../components/Modale";

function Home() {
  const [showModale, setShowModale] = useState(false);
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Portfolio de John Doe, développeur web full stack"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="John Doe Développeur Web Full Stack"
        />
        <meta
          property="og:description"
          content="Découvrez le portfolio de John Doe, développeur web full stack"
        />
      </Helmet>

      <div className="homepage">
        <header>
          <div className="partie-haute">
            <div className="contenu-partie-haute">
              <img
                src="/images/hero-bg.jpg"
                alt="Portrait professionnel de John Doe"
                className="image-partie-haute"
              />
              <div className="titre">
                <h1>Bonjour, je suis John Doe</h1>
                <h2 className="mt-1">Développeur web Full Stack</h2>
                <div className="button-learn-more">
                  <button
                    className="btn btn-danger"
                    onClick={() => setShowModale(true)}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container-fluid partie-basse mx-auto py-5">
            <div className="row contenu-partie-basse">
              <div className="col-md-6 partie-gauche px-4">
                <h2>A propos</h2>
                <Separator variant="home" />
                <img
                  src="/images/john-doe-about.jpg"
                  alt="Portrait de John Doe"
                  className="img-fluid mb-3 mt-1"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tempore perferendis nostrum,
                  ex delectus reiciendis impedit aut iure enim placeat? Natus,
                  neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tempore perferendis nostrum,
                  ex delectus reiciendis impedit aut iure enim placeat? Natus,
                  neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tempore perferendis nostrum,
                  ex delectus reiciendis impedit aut iure enim placeat? Natus,
                  neque at?
                </p>
              </div>
              <div className="col-md-6 partie-droite px-4">
                <h2>Mes compétences</h2>
                <Separator variant="home" />
                <div className="competence-bar">
                  <div className="competence-item">
                    <label>HTML5 90%</label>
                    <div className="progress-bar">
                      <div className="filler html"></div>
                    </div>
                  </div>
                  <div className="competence-item">
                    <label>CSS3 80%</label>
                    <div className="progress-bar">
                      <div className="filler css"></div>
                    </div>
                  </div>
                  <div className="competence-item">
                    <label>JAVASCRIPT 70%</label>
                    <div className="progress-bar">
                      <div className="filler js"></div>
                    </div>
                  </div>
                  <div className="competence-item">
                    <label>PHP 60%</label>
                    <div className="progress-bar">
                      <div className="filler php"></div>
                    </div>
                  </div>
                  <div className="competence-item">
                    <label>REACT 50%</label>
                    <div className="progress-bar">
                      <div className="filler react"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modale show={showModale} handleClose={() => setShowModale(false)} />
      </div>
    </div>
  );
}

export default Home;
