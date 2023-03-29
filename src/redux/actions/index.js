export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPES = "ADD_RECIPES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SAVE_CURRENT_USER = "SAVE_CURRENT_USER";

export const getRecipesAction = () => {
  return async (dispatch) => {
    console.log("Fetching RECIPES from the API");
    try {
      let resp = await fetch(`${process.env.REACT_APP_BE_URL}/recipes`);
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

export const getRandomRecipesAction = () => {
  return async (dispatch) => {
    console.log("Fetching RECIPES from the API");
    try {
      let resp = await fetch(`${process.env.REACT_APP_BE_URL}/recipes`);
      if (resp.ok) {
        let fetchedRecipes = await resp.json();
        const randomFetchedRecipes = fetchedRecipes
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        dispatch({
          type: GET_RECIPES,
          payload: randomFetchedRecipes,
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
    console.log("logInAction is called");
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/login`,
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let userData = await response.json();
        let accessToken = userData.accessToken;
        localStorage.setItem("UserAccessToken", accessToken);
        console.log("Before fetchCurrentUser dispatch");
        await dispatch(fetchCurrentUser());
        console.log("After fetchCurrentUser dispatch");
        console.log("userData", userData);
        window.location.replace("http://localhost:3000/profile");
      } else {
        console.log("There was a problem logging into your account");
      }
    } catch (err) {
      console.log(err);
    }
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
        console.log("updated state", getState());
      } else {
        console.log("There was an issue while fetching your data");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const createUserAction = (userData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const newData = await response.json();
        let accessToken = newData.accessToken;
        localStorage.setItem("UserAccessToken", accessToken);
        dispatch({
          type: SAVE_CURRENT_USER,
          payload: userData,
        });
        console.log("New user created successfully!");
        await dispatch(fetchCurrentUser());
        window.location.replace("http://localhost:3000/profile");
      } else {
        console.log("Error creating new user.");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUserAction = (userData) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(fetchCurrentUser());
      } else {
        console.log("There was an error updating the information");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeCurrentUser = () => {
  window.location.replace("http://localhost:3000/");
  return {
    type: SAVE_CURRENT_USER,
    payload: [],
  };
};

// export const addRecipeAction = () => {
//   return async (dispatch, getState) => {
//     console.log("Posting a new recipe");
//     try {
//       let resp = await fetch(`${process.env.REACT_APP_BE_URL}/recipes`);
//       if (resp.ok) {
//         let fetchedRecipes = await resp.json();
//         dispatch({
//           type: GET_RECIPES,
//           payload: fetchedRecipes,
//         });
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const fetchUserserRecipes = () => {
//   console.log("fetchUserserRecipes is called");
//   return async (dispatch, getState) => {
//     try {
//       const accessToken = localStorage.getItem("UserAccessToken");
//       const token = accessToken.split('"').join("");
//       let response = await fetch("http://localhost:3001/users/me", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         let userData = await response.json();
//         console.log("userData", userData);
//         dispatch({
//           type: SAVE_CURRENT_USER,
//           payload: userData,
//         });
//         console.log("updated state", getState()); // add this line to log the updated state
//       } else {
//         console.log("There was an issue while fetching your data");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
