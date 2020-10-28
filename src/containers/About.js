import React, { useState } from 'react'
import { Button, Image, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa'
export default function About() {
    const [modalShow, setModalShow] = useState(true);

    const handleClick = () => {
        setModalShow(false)
    }

    return (
        <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    About Me
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="modal-text">
                I'm currently studying at the University of Wisconsin Milwaukee,
                spending way too much time on my computer, and playing music with any free time
                that I have.
                </p>
                <p className="modal-text">
                Anyways, here are some links to my socials and then enough about me, let's talk about MY DOGS. Because that is obviously why you came here.
                </p>
                <Row className="justify-content-center">
                    <Button variant="outline-dark" style={{margin:20}} href="https://github.com/sean-slaughter">My Code:<br/><FaGithub size={50}/></Button>
                    <Button variant="outline-dark" style={{margin:20}}href="https://medium.com/@seanslaughterthompson">My Blog:<br/><FaMedium size={50}/></Button>
                    <Button variant="outline-dark" style={{margin:20}}href="https://linkedin.com/in/seanslaughterthompson">My Network:<br/><FaLinkedin size={50}/></Button>
                </Row>
                <p className="modal-text text-center" style={{marginTop:25}}>
                    MY DOGS:
                </p>
                <Row className="justify-content-center">
                    <Image src="/nina.jpg" width={400} rounded/>
                </Row>
                <p className="modal-text text-center" style={{marginTop: 30}}>
                    This is Nina. She enjoys balls, tasty food, and carpeted areas. She is terrified of hardwood floors and spends most days sleeping.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/">
                    <Button variant="outline-dark" onClick={handleClick}>Close</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    ) 
}
