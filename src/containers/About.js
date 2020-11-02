import React, { useState } from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";


export default function About() {
  const [modalShow, setModalShow] = useState(true);

  const handleClick = () => {
    setModalShow(false);
  };
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
          I'm currently studying at the University of Wisconsin Milwaukee,
          spending way too much time on my computer, and playing music with any
          free time that I have.
        </p>
        <p className="modal-text">
         
        </p>
        <Row className="justify-content-center">
          <Button
            variant="outline-dark"
            style={{ margin: 20 }}
            href="https://github.com/sean-slaughter"
          >
            My Code:
            <br />
            <FaGithub size={50} />
          </Button>
          <Button
            variant="outline-dark"
            style={{ margin: 20 }}
            href="https://medium.com/@seanslaughterthompson"
          >
            My Blog:
            <br />
            <FaMedium size={50} />
          </Button>
          <Button
            variant="outline-dark"
            style={{ margin: 20 }}
            href="https://linkedin.com/in/seanslaughterthompson"
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
