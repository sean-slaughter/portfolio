import React, { useState } from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";


export default function About() {
  const [modalShow, setModalShow] = useState(true);

  const handleClick = () => {
    setModalShow(false);
  };

  const handleClickGH = () => {
    window.open("https://github.com/sean-slaughter/")
  }

  const handleClickMedium = () => {
    window.open("https://seanslaughterthompson.medium.com/")
  }

  const handleClickLI = () => {
    window.open("https://www.linkedin.com/in/seanslaughterthompson/")
  }

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">About Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="modal-text">
          I'm currently studying at the University of Wisconsin Milwaukee.
          When I'm not spending my time coding or learning, I am either playing music or riding my bike.
          In all honestly though...I'm spending most of my time coding.
        </p>
        <p className="modal-text">
         
        </p>
        <Row className="justify-content-center">
            <Button
              onClick={handleClickGH}
              variant="outline-dark"
              style={{ margin: 20 }}
            >
              My Code:
              <br />
              <FaGithub size={50} />
            </Button>
            <Button
              onClick={handleClickMedium}
              variant="outline-dark"
              style={{ margin: 20 }}
            >
              My Blog:
              <br />
              <FaMedium size={50} />
            </Button>
            <Button
              onClick={handleClickLI}
              variant="outline-dark"
              style={{ margin: 20 }}
            >
              My Network:
              <br />
              <FaLinkedin size={50} />
            </Button>
        </Row>
    
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="outline-dark" onClick={handleClick}>
            Close
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
