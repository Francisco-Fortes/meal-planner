import { Col, Container, Row } from "react-bootstrap";
import CollapsibleCard from "../CollapsibleCard/CollapsibleCard";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

const MainLayout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CustomCarousel />
        </Col>
      </Row>
      <Row>
        <CollapsibleCard />
      </Row>
    </Container>
  );
};

export default MainLayout;
