import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <Container fluid className="heroContainer">
      <Row className="d-flex justify-content-center m-0 p-0">
        <Col md="5">
          <h2>ALL YOUR MEALS IN LESS THAN 3 MINUTES</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
