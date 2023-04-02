import "../profile-form.css";
import "./collapsible-card.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { getRecipesAction } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";

const CollapsibleCard = () => {
  const recipes = useSelector((state) => state.recipe?.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
  }, []);

  return (
    <Container>
      <h2>RECIPES</h2>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe._id} className="m-2">
            <Card style={{ width: "14rem" }}>
              <div className="rel">
                <Card.Img variant="top" src={recipe.picture} />
                <Badge className="card-badge abs-tr p-1">SHARED</Badge>
                <div className="card-container abs-b pb-1">
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    {recipe.cookingTime.value} {recipe.cookingTime.unit}
                  </Card.Text>
                </div>
              </div>
              <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollapsibleCard;
