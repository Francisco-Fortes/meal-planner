import "./custom-carousel.css";
import { Card, Carousel } from "react-bootstrap";
import React, { useEffect } from "react";
import { getRecipesAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CarouselRecipe = () => {
  const recipes = useSelector((state) => state.recipe?.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
  }, []);

  return (
    <>
      {recipes.map((recipe) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1184365354/pl/zdj%C4%99cie/kompozycja-z-g%C3%B3ry-r%C3%B3%C5%BCnych-azjatyckich-potraw-w-misce.jpg?s=612x612&w=0&k=20&c=KgSk0y9hAO5p6Tgkb8VrMSe8m2DeeCLVkz4unRF6OE0="
            alt="recipe-title-pic"
          />
          <Carousel.Caption>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </>
  );
};

export default CarouselRecipe;
