import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Contact() {
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
                This is where I will tell you about me.
            </Modal.Body>
            <Modal.Footer>
                <Link to="/">
                    <Button variant="outline-dark" onClick={handleClick}>Back</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    ) 
}
