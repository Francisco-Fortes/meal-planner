import { SAVE_CURRENT_USER } from "../actions/index.js";

const initialState = {
  currentUser: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
