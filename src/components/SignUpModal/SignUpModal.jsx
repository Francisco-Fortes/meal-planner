import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignUpForm from "./SignUpForm.jsx";

function SignUpModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="main-btn" onClick={handleShow}>
        <span>Sign Up</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
        <Modal.Header>
          <Modal.Title className="m-auto">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModal;
