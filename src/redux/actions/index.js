export const GET_RECIPES = "GET_RECIPES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const getRecipesAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetching RECIPES from the API");
    try {
      let resp = await fetch("http://localhost:3001/recipes");
      if (resp.ok) {
        let fetchedRecipes = await resp.json();
        dispatch({
          type: GET_RECIPES,
          payload: fetchedRecipes,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFavouriteAction = (recipe) => {
  return {
    type: ADD_FAVOURITE,
    payload: recipe,
  };
};

export const removeFavouriteAction = (recipeId) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: recipeId,
  };
};
