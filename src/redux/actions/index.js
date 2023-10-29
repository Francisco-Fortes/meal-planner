export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPES = "ADD_RECIPES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SAVE_CURRENT_USER = "SAVE_CURRENT_USER";
export const SAVE_PLANNER = "SAVE_PLANNER";
export const FETCH_ALL_PLANNERS = "FETCH_ALL_PLANNERS";
export const GET_PLANNERS = "GET_PLANNERS";
export const GET_PLANNER = "GET_PLANNER";
export const GET_RECIPE = "GET_RECIPE";
export const DELETE_PLANNER = "DELETE_PLANNER";
export const RENAME_PLANNER = "RENAME_PLANNER";
export const DUPLICATE_PLANNER = "DUPLICATE_PLANNER";

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

export const getRecipeAction = (recipeId) => {
  return async (dispatch) => {
    console.log(`Fetching recipe with ID ${recipeId} from the API`);
    console.log(recipeId);
    try {
      let resp = await fetch(
        `${process.env.REACT_APP_BE_URL}/recipes/${recipeId}`
      );
      if (resp.ok) {
        let fetchedRecipe = await resp.json();
        dispatch({
          type: GET_RECIPE,
          payload: fetchedRecipe,
        });
        console.log(fetchedRecipe);
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

export const addRecipeAction = (recipeData) => {
  return async (dispatch, getState) => {
    console.log("Posting a new recipe");
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipeData),
      });
      if (response.ok) {
        let addedRecipe = await response.json();
        dispatch({
          type: ADD_RECIPES,
          payload: addedRecipe,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserserRecipes = () => {
  console.log("fetchUserserRecipes is called");
  return async (dispatch, getState) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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

export const createPlannerAction = (plannerData) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/planners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(plannerData),
      });
      console.log(plannerData);
      if (response.ok) {
        await response.json();
        dispatch({
          type: SAVE_PLANNER,
          payload: plannerData,
        });
        console.log(plannerData);
        console.log("New planer created successfully!");
        await dispatch(getPlannersAction());
      } else {
        console.log("Error creating a new planner.");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getPlannersAction = () => {
  return async (dispatch, getState) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/planners", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let plannerData = await response.json();
        console.log("plannerData from planners endpoint", plannerData);
        dispatch({
          type: GET_PLANNERS,
          payload: plannerData,
        });
        console.log("updated state", getState());
      } else {
        console.log("There was an issue loading the planners");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getPlannerAction = (plannerId) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch(
        `http://localhost:3001/planners/${plannerId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        let plannerData = await response.json();
        console.log("plannerData from getPlannerAction", plannerData);
        dispatch({
          type: GET_PLANNER,
          payload: plannerData,
        });
      } else {
        console.log("There was an issue loading the planner");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePlannerAction = (plannerId) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");

      const response = await fetch(
        `http://localhost:3001/planners/${plannerId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        dispatch({
          type: DELETE_PLANNER,
          payload: plannerId,
        });
        console.log("Planner deleted successfully");
      } else {
        console.log("Error deleting planner");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// export const renamePlannerAction = (plannerId, newTitle) => {
//   return {
//     type: RENAME_PLANNER,
//     payload: {
//       plannerId,
//       newTitle,
//     },
//   };
// };

export const renamePlannerAction = (plannerId, newTitle) => {
  return async (dispatch) => {
    console.log("Renaming planner action called");
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      const response = await fetch(
        `http://localhost:3001/planners/${plannerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title: newTitle }), // Send the new title
        }
      );
      console.log(newTitle);

      if (response.ok) {
        dispatch({
          type: RENAME_PLANNER,
          payload: {
            plannerId,
            newTitle,
          },
        });
        console.log("Planner renamed successfully");
      } else {
        console.log("Error renaming planner");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const duplicatePlannerAction = (plannerId, newTitle) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      const response = await fetch(
        `http://localhost:3001/planners/duplicate/${plannerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title: newTitle }), // Send the new title
        }
      );

      if (response.ok) {
        const duplicatedPlanner = await response.json();
        dispatch({
          type: DUPLICATE_PLANNER,
          payload: duplicatedPlanner,
        });
        console.log("Planner duplicated successfully");
      } else {
        console.log("Error duplicating planner");
      }
    } catch (error) {
      console.error("Error duplicating planner:", error);
    }
  };
};
// export const getCurrentPlanner = () => {
//   console.log("getCurrentPlanner is called");
//   return async (dispatch, getState) => {
//     try {
//       const accessToken = localStorage.getItem("UserAccessToken");
//       const token = accessToken.split('"').join("");
//       let response = await fetch(
//         // `http://localhost:3001/planners/${plannerId}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.ok) {
//         let plannerData = await response.json();
//         console.log("plannerData", plannerData);
//         dispatch({
//           type: SAVE_PLANNER,
//           payload: plannerData,
//         });
//         console.log("updated state", getState());
//       } else {
//         console.log("There was an issue loading the planner");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
