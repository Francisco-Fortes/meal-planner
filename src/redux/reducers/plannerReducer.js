import { GET_PLANNER, SAVE_PLANNER } from "../actions/index.js";
import { GET_PLANNERS } from "../actions/index.js";
const initialState = {
  planner: {},
  planners: [],
};

const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PLANNER:
      return {
        ...state,
        planners: action.payload,
      };
    case GET_PLANNER:
      return {
        ...state,
        planner: action.payload,
      };
    case GET_PLANNERS:
      return {
        ...state,
        planners: action.payload,
      };
    default:
      return state;
  }
};

export default plannerReducer;
