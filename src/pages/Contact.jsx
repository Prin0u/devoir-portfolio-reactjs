import React from "react";
import "../components/css/Contact.scss";
import Separator from "../components/Separator";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section className="contact-description">
        <h1 className="title text-center mt-5">Contact</h1>
        <p className="text-center mb-4">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <Separator variant="contact" className="mobile-contact" />
      </section>
      {/* Formulaire à gauche */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="container-fluid col-md-6 px-4">
              <h2 className="py-2">Formulaire de contact</h2>
              <Separator variant="contact" />
              <form>
                <div className="form-group mt-5">
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="name"
                    placeholder="Votre nom"
                  />

                  <input
                    type="email"
                    className="form-control mb-2"
                    id="email"
                    placeholder="Votre adresse email"
                  />

                  <input
                    type="tel"
                    className="form-control mb-2"
                    id="phone"
                    placeholder="Votre numéro de téléphone"
                  />

                  <input
                    type="text"
                    className="form-control mb-2"
                    id="subject"
                    placeholder="Sujet"
                  />

                  <textarea
                    className="form-control mb-2"
                    id="message"
                    rows="15"
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <div className="mt-auto text-center">
                  <button className="btn btn-primary">Envoyer</button>
                </div>
              </form>
            </div>

            {/* Mes Coordonnées à droite */}
            <div className="container-fluid col-md-6">
              <h2 className="py-2">Mes coordonnées</h2>
              <Separator variant="contact" />
              <div className="contact-info mt-5">
                <strong>John Doe</strong>
                <div className="coordonnees">
                  <p>
                    <i class="bi bi-map"> </i>
                    40 rue Laure Diebold <br />
                    <i class="bi bi-geo-alt"> </i>
                    69009 Lyon, France <br />
                    <i class="bi bi-phone"> </i>
                    10 20 30 40 50 <br />
                    <i class="bi bi-envelope-at"> </i>
                    john.doe@gmail.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254311303493!2d4.7943654860275045!3d45.77866190716716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1745612971223!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    style={{ border: 0, maxWidth: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Localisation de John Doe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
