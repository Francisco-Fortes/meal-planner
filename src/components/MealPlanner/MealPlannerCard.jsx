import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const MealPlannerCard = ({ recipe }) => {
  return (
    <Card className="m-0 p-0" style={{ width: "16rem" }}>
      <Row className="g-0">
        <Col>
          <Card.Img src={recipe.picture} alt={recipe.title} />
        </Col>
        <Col md="8">
          <Card.Body>
            <Card.Title className="mb-1">{recipe.title}</Card.Title>
            <Card.Subtitle className="small">
              <span>{`${Math.floor(
                recipe.nutritionData.calories / recipe.servings
              )} kcal/person`}</span>
            </Card.Subtitle>
            <Card.Text className="small">{recipe.cookingTime.value}'</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default MealPlannerCard;
