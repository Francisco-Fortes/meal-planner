import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const MealPlannerCard = () => {
  return (
    <Card className="m-0 p-0" style={{ width: "200px" }}>
      <Row className="g-0">
        <Col>
          <Card.Img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="unsplash-default-pic"
          />
        </Col>
        <Col md="8">
          <Card.Body>
            <Card.Title className="small">TEST CAKE</Card.Title>
            <Card.Text>40 minutes</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default MealPlannerCard;
