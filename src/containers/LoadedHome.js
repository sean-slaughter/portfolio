import React from 'react'
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function LoadedHome(props) {
    return (
        <Container>
        <div className="home-container">
            <div>
              <Image src="resume.jpeg" roundedCircle width={225}/>
            </div>
            <p className="home-text text-center">
            Hi! I'm Sean Thompson
            </p>
            <p
            className="home-text text-center">
                And I'm a Computer Science student and <br/> software developer based out of Milwaukee, WI.
            </p>
            <br/>
            <p className="home-description text-center"> 
            Some of my current favorite technologies include Java, ReactJS, Rails, PostgreSQL, and MongoDB.
            </p>
            <p className="home-description text-center"> 
            Lets connect and create something great together!
            </p>
        </div>
        <div>
        <Row className="justify-content-center home-buttons">
          <Link to='/about'>
            <Button variant="outline-dark" style={{marginLeft: 20, marginRight: 20}}size="lg">About Me</Button>
          </Link>
          <Link to='/projects'>
            <Button variant="outline-dark" style={{marginLeft: 20, marginRight: 20}}size="lg">Projects</Button>
          </Link>
            <Button href="mailto:sthompson2822@gmail.com"variant="outline-dark" style={{marginLeft: 20, marginRight: 20}}size="lg">Contact</Button>
        </Row>
        </div>
      </Container>
    )
}
