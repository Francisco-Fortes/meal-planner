import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlannerAction,
  getPlannersAction,
  getPlannerAction,
} from "../redux/actions/index.js";
import MealPlannerCard from "./MealPlanner/MealPlannerCard.jsx";

const TestPlanner = () => {
  const planners = useSelector((state) => state.planner.planners);
  const planner = useSelector((state) => state.planner.planner);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [selectedPlannerId, setSelectedPlannerId] = useState(null);

  useEffect(() => {
    dispatch(getPlannersAction());
  }, []);

  const handleGetPlannerById = (id) => {
    dispatch(getPlannerAction(id));
    setSelectedPlannerId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const plannerData = {
      title: title,
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
    dispatch(createPlannerAction(plannerData));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button type="submit">Create Planner</button>
        </form>
      </div>

      <div>
        {planners && planners.length > 0 ? (
          <ul>
            {planners &&
              planners.map((planner) => (
                <li
                  key={planner._id}
                  onClick={() => handleGetPlannerById(planner._id)}
                >
                  {planner.title}
                </li>
              ))}
          </ul>
        ) : (
          <div>User has not created any plan</div>
        )}
      </div>
      {selectedPlannerId && planner && (
        <div>
          <h2 key={planner._id}>{planner.title}</h2>
          <ListGroup>
            <ListGroup.Item>
              <h5>Monday</h5>
              <ul>
                {planner.Monday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Monday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Tuesday</h5>
              <ul>
                {planner.Tuesday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Tuesday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Wednesday</h5>
              <ul>
                {planner.Wednesday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Wednesday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Thursday</h5>
              <ul>
                {planner.Thursday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Thursday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Friday</h5>
              <ul>
                {planner.Friday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Friday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Saturday</h5>
              <ul>
                {planner.Saturday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Saturday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Sunday</h5>
              <ul>
                {planner.Sunday.map((recipe) => (
                  <li key={recipe._id}>
                    <MealPlannerCard recipe={recipe} />
                  </li>
                ))}
              </ul>
              <span>
                {/* WIP: Calories per serving field BE */}
                Total Calories:
                {planner.Sunday.reduce(
                  (totalCalories, recipe) =>
                    totalCalories +
                    Math.floor(
                      recipe.nutritionData?.calories / recipe.servings
                    ),
                  0
                )}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      )}
    </>
  );
};

export default TestPlanner;
