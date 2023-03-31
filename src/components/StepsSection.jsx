import { Col } from "react-bootstrap";
import test from "./Hero/background3.jpg";
function StepsSection() {
  return (
    <>
      <Col sm={6} md={4} xl={2} className="m-3 p-0 g-3">
        <h6>STEP 1</h6>
        <img
          style={{ width: "200px", height: "150px" }}
          src={test}
          alt="step1"
        />
      </Col>
      <Col sm={6} md={4} xl={2} className="m-3 p-0">
        <h6>STEP 1</h6>
        <img
          style={{ width: "200px", height: "150px" }}
          src={test}
          alt="step1"
        />
      </Col>
      <Col sm={6} md={4} xl={2} className="m-3 p-0">
        <h6>STEP 1</h6>
        <img
          style={{ width: "200px", height: "150px" }}
          src={test}
          alt="step1"
        />
      </Col>
      <Col sm={6} md={4} xl={2} className="m-3 p-0">
        <h6>STEP 1</h6>
        <img
          style={{ width: "200px", height: "150px" }}
          src={test}
          alt="step1"
        />
      </Col>
    </>
  );
}
export default StepsSection;
