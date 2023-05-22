import "../text-section.css";
import { Container, Row } from "react-bootstrap";
import Hero from "../Hero/Hero";
import TextSection from "../TextSection";
import StepsSection from "../StepsSection";
const MainLayout = () => {
  return (
    <Container fluid className="text-section">
      <Row>
        <Hero />
      </Row>
      <Row className="justify-content-start align-items-center">
        <TextSection />
      </Row>
      <Row className="justify-content-center py-5">
        <StepsSection />
      </Row>
    </Container>
  );
};

export default MainLayout;
