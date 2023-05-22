import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col xs={6}>
            <p>Developed by: Francisco Fortes</p>
          </Col>
          <Col xs={6} className="d-flex justify-content-end align-items-center">
            <a href="https://github.com/Francisco-Fortes">
              <BsGithub size={24} className="mx-3 text-orange" />
            </a>
            <a href="https://www.linkedin.com/in/francisco-javier-fortes-carrillo/">
              <FaLinkedin size={24} className="mx-3" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
