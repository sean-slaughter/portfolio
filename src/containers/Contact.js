import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react';


const Contact = () => {
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
                <Button variant="outline-dark" onClick={handleClick}>Back</Button>
            </Modal.Footer>
        </Modal>
    ) 
}

export default Contact;
