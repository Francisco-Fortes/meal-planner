export const GET_RECIPES = "GET_RECIPES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SAVE_CURRENT_USER = "SAVE_CURRENT_USER";

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

export const logInAction = (userData) => {
  return async (dispatch) => {
    console.groupCollapsed("logInAction"); // start a new group
    console.log("logInAction is called");
    try {
      let response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let userData = await response.json();
        let accessToken = userData.accessToken;
        localStorage.setItem("UserAccessToken", accessToken);
        window.location.replace("http://localhost:3000/1");
        console.log("Before fetchCurrentUser dispatch");
        dispatch(fetchCurrentUser());
        console.log("After fetchCurrentUser dispatch");
      } else {
        console.log("There was a problem logging into your account");
      }
    } catch (err) {
      console.log(err);
    }
    console.groupEnd();
  };
};

export const fetchCurrentUser = () => {
  console.log("fetchCurrentUser is called");
  return async (dispatch, getState) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let userData = await response.json();
        console.log("userData", userData);
        dispatch({
          type: SAVE_CURRENT_USER,
          payload: userData,
        });
        console.log("updated state", getState()); // add this line to log the updated state
      } else {
        console.log("There was an issue while fetching your data");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
