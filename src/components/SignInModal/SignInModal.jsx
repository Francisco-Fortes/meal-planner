import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import LoginForm from "../Login/LoginForm";

function SignInModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="main-btn" onClick={handleShow}>
        <span>Sign In</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
        <Modal.Header>
          <Modal.Title className="m-auto">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
