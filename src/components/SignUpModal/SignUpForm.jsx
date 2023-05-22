import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { createUserAction } from "../../redux/actions/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, password };
    dispatch(createUserAction(userData));
  };

  return (
    <Container className="">
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-0">
          <h2 className="text-center">APP-LOGO</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="main-btn mb-4 fw-bold" type="submit">
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
