import "./text-section.css";
import { Col } from "react-bootstrap";

function TextSection() {
  return (
    <Col className="mt-5">
      <h2 className="mt-5 mb-3">
        <span>Plan</span>ning M<span>ea</span>ls has never been <span>t</span>
        his easy!
      </h2>
      <p>
        PlanEat helps you stay on track with your calorie goals while enjoying
        delicious wholesome food.
      </p>

      <p>Plan for the whole week while choosing the meals you enjoy.</p>

      <h5 className="m-4">
        Ready to give it a shot? Start by following these 3 simple steps:
      </h5>
    </Col>
  );
}
export default TextSection;
