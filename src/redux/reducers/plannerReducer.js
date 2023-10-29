import {
  GET_PLANNER,
  SAVE_PLANNER,
  DELETE_PLANNER,
  RENAME_PLANNER,
  DUPLICATE_PLANNER,
} from "../actions/index.js";
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
    case DELETE_PLANNER:
      return {
        ...state,
        planners: state.planners.filter(
          (planner) => planner._id !== action.payload
        ),
      };
    case RENAME_PLANNER:
      const updatedPlanners = state.planners.map((planner) => {
        if (planner._id === action.payload.plannerId) {
          return {
            ...planner,
            title: action.payload.newTitle,
          };
        }
        return planner;
      });
      return {
        ...state,
        planners: updatedPlanners,
      };
    case DUPLICATE_PLANNER:
      return {
        ...state,
        // Add the duplicated planner to the list of planners
        planners: [...state.planners, action.payload],
      };

    default:
      return state;
  }
};

export default plannerReducer;
