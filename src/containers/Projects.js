import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaMedium,
  FaYoutube,
  FaYelp,
} from "react-icons/fa";
import {
  SiRails,
  SiMaterialUi,
  SiJavascript,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import { DiMaterializecss, DiRuby, DiSqllite } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
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
        <Modal.Title id="contained-modal-title-vcenter">Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} m={6} style={{ marginTop: 10, marginBottom: 20 }}>
            <Card bg="dark">
              <Card.Img variant="top" src="jitter_card.png" />
              <Card.Body className="text-center">
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Jitter is a Ruby on Rails application that allows users to
                  search by city for top rated coffee shops. I built this app because I love finding new places
                  to satisfy my caffeine problem.
                  <br />
                  <br />
                </Card.Text>
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Technologies utilized:
                  <br />
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <SiRails size={40} /> <br /> Ruby on Rails
                    </li>
                    <li>
                      <DiMaterializecss size={40} />
                      <br /> Materialize CSS
                    </li>
                    <li>
                      <FaYelp size={30} /> <br /> Yelp Fusion API
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  href="https://github.com/sean-slaughter/jitter"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Code: <br /> <FaGithub size={25} />
                </Button>
                <Button
                  href="https://medium.com/@seanslaughterthompson/jitter-a-ruby-on-rails-coffee-shop-locator-f14bbb919d7d"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Blog: <br /> <FaMedium size={25} />
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=VLgSinVM5ZQ&t=2s"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Demo: <br /> <FaYoutube size={25} />
                </Button>
                <Button
                  href="http://jitter-coffee.herokuapp.com"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Live App:
                  <br /> <FiExternalLink size={25} />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} m={6} style={{ marginTop: 10, marginBottom: 20 }}>
            <Card bg="dark">
              <Card.Img variant="top" src="game_of_life.png" />
              <Card.Body className="text-center">
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  A simulation of John Conway's game of life, created with
                  ReactJS. I built this because I was fascinated at the life like patterns that
                  can be created with a simple set of rules. This was really fun to program. 
                  <br />
                  <br />
                </Card.Text>
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Technologies utilized: <br />
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <SiReact size={40} /> <br /> ReactJS/Redux
                    </li>
                    <li>
                      <SiMaterialUi size={35} /> <br /> MaterialUI
                    </li>
                    <li>
                      <SiPostgresql size={30} /> <br /> PostgreSQL
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  href="http://github.com/sean-slaughter/game-of-life-frontend"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Code: <br /> <FaGithub size={25} />
                </Button>
                <Button
                  href="https://medium.com/@seanslaughterthompson/creating-conways-game-of-life-with-reactjs-redux-ac6733c3868e"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Blog: <br /> <FaMedium size={25} />
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=t3Ls_tK-KGQ"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Demo: <br /> <FaYoutube size={25} />
                </Button>
                <Button
                  href="http://st-game-of-life.herokuapp.com"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Live App:
                  <br /> <FiExternalLink size={25} />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} m={6} style={{ marginTop: 10, marginBottom: 10 }}>
            <Card bg="dark">
              <Card.Img variant="top" src="rendezvous.png" />
              <Card.Body className="text-center">
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Rendezvous is an appointment booking platfrom written in Ruby. I built this
                  because my partner is an esthetician and needed an app to help manage her clients.
                  <br />
                  <br />
                </Card.Text>
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Technologies utilized:
                  <br />
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <DiRuby size={30} /> <br /> Ruby
                    </li>
                    <li>
                      <DiMaterializecss size={40} />
                      <br /> Materialize CSS
                    </li>
                    <li>
                      <DiSqllite size={40} />
                      <br /> SQLite 3
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  href="https://github.com/sean-slaughter/rendezvous"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Code: <br /> <FaGithub size={25} />
                </Button>
                <Button
                  href="https://medium.com/@seanslaughterthompson/rendezvous-an-mvc-appointment-booking-platform-7879d2b2a0cc"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Blog: <br /> <FaMedium size={25} />
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=RdQKrceTOTs&t=145s"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Demo: <br /> <FaYoutube size={25} />
                </Button>
                <Button
                  href="https://rrendezvous.herokuapp.com"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Live App:
                  <br /> <FiExternalLink size={25} />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} m={6} style={{ marginTop: 10, marginBottom: 20 }}>
            <Card bg="dark">
              <Card.Img variant="top" src="petes-za.png" />
              <Card.Body className="text-center">
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Sample restaurant ordering system written in VanillaJS. I built this to practice
                  making fetch calls to render JSON in a single page application.
                  <br />
                  <br />
                </Card.Text>
                <Card.Text style={{ fontSize: 25, color: "white" }}>
                  Technologies utilized:
                  <br />
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <SiJavascript size={40} /> <br /> JavaScript
                    </li>
                    <li>
                      <SiRails size={40} /> <br /> Ruby on Rails
                    </li>
                    <li>
                      <DiSqllite size={40} />
                      <br /> SQLite 3
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  href="https://github.com/sean-slaughter/petes-za"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Code: <br /> <FaGithub size={25} />
                </Button>
                <Button
                  href="https://medium.com/@seanslaughterthompson/building-a-single-page-e-commerce-application-with-vanillajs-eb43f529688"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Blog: <br /> <FaMedium size={25} />
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=pocwIcRtIlU"
                  variant="outline-light"
                  style={{ margin: 5 }}
                >
                  Demo: <br /> <FaYoutube size={25} />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="outline-dark" onClick={handleClick}>
            Back
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
