import "../profile-form.css";
import "./mini-card.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { getRecipesAction } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";

const MiniCard = ({ propsTitle }) => {
  const recipes = useSelector((state) => state.recipe?.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
  }, []);

  return (
    <Container>
      <h2>{propsTitle}</h2>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe._id} className="m-2">
            <Card style={{ width: "200px" }}>
              <div className="rel">
                <Card.Img variant="top" src={recipe.picture} />
                {recipe.shared === true && (
                  <Badge className="card-badge abs-tr p-1">SHARED</Badge>
                )}
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

export default MiniCard;
