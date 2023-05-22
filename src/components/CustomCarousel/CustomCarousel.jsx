import "./custom-carousel.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import React, { useEffect } from "react";
import CarouselRecipe from "./CarouselRecipe";
import { useDispatch, useSelector } from "react-redux";
import { getRandomRecipesAction } from "../../redux/actions";

const CustomCarousel = () => {
  const recipes = useSelector((state) => state.recipe?.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomRecipesAction());
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Carousel fade>
            {recipes.map((recipe) => (
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={recipe.picture}
                  alt={recipe.title}
                />
                <Carousel.Caption>
                  <h3>{recipe.title}</h3>
                  <p>number of likes</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomCarousel;
