import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import {
  getRecipesAction,
  addFavouriteAction,
  removeFavouriteAction,
} from "../../redux/actions/index.js";

const TestCounter = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const favourites = useSelector((state) => state.favouriteRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const handleAddToFavourites = (recipe) => {
    dispatch(addFavouriteAction(recipe));
  };

  const handleRemoveFromFavourites = (recipeId) => {
    dispatch(removeFavouriteAction(recipeId));
  };

  const favoriteCount = favourites.length;

  return (
    <div>
      <h2>Favorites: {favoriteCount}</h2>
      {recipes.map((recipe) => (
        <Card key={recipe._id}>
          <Card.Header>
            <Card.Title>{recipe.title}</Card.Title>
            <Button
              variant="primary"
              onClick={() => setOpen(!open)}
              aria-controls="recipe-details"
              aria-expanded={open}
            >
              {open ? "Hide Details" : `${recipe.title}`}
            </Button>
          </Card.Header>
          <Card.Body>
            <img src={recipe.image} alt={recipe.title} />
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.ingredients}</Card.Text>
            {favourites &&
            favourites.some((favourite) => favourite._id === recipe._id) ? (
              <Button
                variant="danger"
                onClick={() => handleRemoveFromFavourites(recipe._id)}
              >
                Remove from favourites
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => handleAddToFavourites(recipe)}
              >
                Add to favourites
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TestCounter;
