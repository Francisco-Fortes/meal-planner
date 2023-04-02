import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge, ListGroup, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeAction } from "../redux/actions";
import "./recipe-container.css";

function RecipePage() {
  const { recipeId } = useParams();
  const recipe = useSelector((state) => state.recipe.recipe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeAction(recipeId));
  }, [recipeId]);

  if (!recipe) {
    return <div>We are getting your recipe...</div>;
  }

  return (
    <Container fluid className="recipe-container">
      <Row>
        <Col
          className="recipe-image"
          style={{ backgroundImage: `url(${recipe.picture})` }}
        ></Col>
        <div className="recipe-info">
          <h2>{recipe.title}</h2>
          <p className="recipe-author">
            By {recipe.author.firstName} {recipe.author.lastName}
          </p>
          <Row>
            <Col>
              <h6>Cooking Time</h6>
              <p>
                {recipe.cookingTime?.value} {recipe.cookingTime?.unit}
              </p>
            </Col>
            <Col>
              <h6>Servings</h6>
              <p>{recipe.servings}</p>
            </Col>
          </Row>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6>Ingredients</h6>
              <ul>
                {recipe.ingredients?.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Nutrition Data</h6>
              <p>{recipe.nutritionData.calories} kcal</p>
              <p>
                {`${
                  recipe.nutritionData.totalNutrientsKCal.CHOCDF_KCAL.quantity /
                  recipe.servings
                } kcal of CARBOHYDRATES per serving`}
              </p>
              <p>
                {`${
                  recipe.nutritionData.totalNutrientsKCal.FAT_KCAL.quantity /
                  recipe.servings
                } kcal of FATS per serving`}
              </p>
              <p>
                {`${
                  recipe.nutritionData.totalNutrientsKCal.PROCNT_KCAL.quantity /
                  recipe.servings
                } kcal of PROTEINS per serving`}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h6>Steps</h6>
              <ol>
                {recipe.steps?.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </ListGroup.Item>
          </ListGroup>
          <Badge bg="secondary">
            {recipe.shared ? "Shared" : "Not Shared"}
          </Badge>
          <Link to="/">Back to Recipes</Link>
        </div>
      </Row>
    </Container>
  );
}

export default RecipePage;
