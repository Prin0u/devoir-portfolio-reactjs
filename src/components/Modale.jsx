import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, ModalHeader } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/Modale.scss";

const Modale = ({ show, handleClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const infos = {
      name: "John Doe",
      location: "Lyon, France",
      bio: "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
      repositories: 1,
      followers: 15,
      following: 0,
      github: "https://github.com/github-john-doe",
      image: "/images/johndoe.png",
    };

    setData(infos);
  }, []);

  if (!data) return null;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      contentClassName="bg-dark text-white"
    >
      <ModalHeader className="border-bottom border-secondary bg-dark border-0">
        <h4>Mon profil Github</h4>
      </ModalHeader>
      <Modal.Body>
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/images/johndoe.png"
              alt="John Doe"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </Col>
          <Col md={6}>
            <div className="border-bottom border-secondary">
              <p className="my-2">
                <i class="bi bi-person"> </i>
                <a
                  href="https://github.com/github-john-doe"
                  target="_blank"
                  rel="noreferrer"
                >
                  John Doe
                </a>
              </p>
            </div>
            <div className="border-bottom border-secondary">
              <i className="bi bi-geo-alt d-block my-2"> </i>
            </div>
            <div className="border-bottom border-secondary">
              <p className="my-2">
                {" "}
                <i className="bi bi-card-text"> </i>
                As we all know, John Doe's identity is unknown. I just wanted to
                contribute without being known.
              </p>
            </div>
            <div className="border-bottom border-secondary">
              <p className="my-2">
                {" "}
                <i class="bi bi-box"> </i>
                Repositories : 1
              </p>
            </div>{" "}
            <div className="border-bottom border-secondary">
              <p className="my-2">
                {" "}
                <i class="bi bi-people"> </i>
                Followers : 15
              </p>
            </div>{" "}
            <div>
              <p className="my-2">
                {" "}
                <i class="bi bi-people"> </i>
                Following : 0
              </p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="border-top border-secondary bg-dark border-0">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modale;
