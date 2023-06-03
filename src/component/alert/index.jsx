import React from 'react'
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button"
import { Modal } from "react-bootstrap"

export default (props) => {

    const { message, idForUnmount } = props;

    const node = document.getElementById(idForUnmount)

    const handleClose = () => { 
        ReactDOM.unmountComponentAtNode(node)
        document.body.removeChild(node);
    }

    return <Modal show={true} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>            
        </Modal.Footer>
    </Modal>
    
}