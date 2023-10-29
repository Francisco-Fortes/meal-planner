import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlannerAction,
  getPlannersAction,
  getPlannerAction,
  deletePlannerAction,
  renamePlannerAction,
  duplicatePlannerAction,
} from "../redux/actions/index.js";
import MealPlannerCard from "./MealPlanner/MealPlannerCard.jsx";

const TestPlanner = () => {
  const planners = useSelector((state) => state.planner.planners);
  const planner = useSelector((state) => state.planner.planner);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(""); // WIP: Null or Undefined?
  const [titles, setTitles] = useState({}); //added
  const [selectedPlannerId, setSelectedPlannerId] = useState("");

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

  const handleDeletePlanner = (plannerId) => {
    if (window.confirm("Are you sure you want to delete this planner?")) {
      dispatch(deletePlannerAction(plannerId))
        .then(() => {
          setSelectedPlannerId(null);
          dispatch(getPlannersAction()); // Fetch updated list of planners
        })
        .catch((error) => {
          console.error("Error deleting planner:", error);
        });
    }
  };

  const handleRenamePlanner = (plannerId, title) => {
    console.log("Renaming planner:", plannerId, title); // Check values before dispatch
    dispatch(renamePlannerAction(plannerId, title));
    console.log("After dispatch planner:", plannerId, title); // Check values before dispatch
  };

  //works
  // const handleDuplicatePlanner = (plannerId, title) => {
  //   dispatch(duplicatePlannerAction(plannerId, title));
  // };
  const handleDuplicatePlanner = (plannerId, customTitle) => {
    const existingPlanner = planners.find((pl) => pl._id === plannerId);

    if (existingPlanner) {
      const titleToUse = customTitle || `Copy of ${existingPlanner.title}`;
      dispatch(duplicatePlannerAction(plannerId, titleToUse));
    }
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

      <Container>
        {planners && planners.length > 0 ? (
          <Row>
            {planners.map((planner) => (
              <Col key={planner._id}>
                <div>
                  <span onClick={() => handleGetPlannerById(planner._id)}>
                    {titles[planner._id] || planner.title}
                  </span>
                  <button onClick={() => handleDeletePlanner(planner._id)}>
                    Delete
                  </button>
                  {/* if I add title below I'm getting null */}
                  <button
                    onClick={() => handleDuplicatePlanner(planner._id, title)}
                  >
                    Duplicate
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          //BELOW CODE PART 1
          <div>User has not created any plan</div>
        )}
      </Container>
      {selectedPlannerId && planner && (
        <div>
          <h2 key={planner._id}>{planner.title}</h2>
          <input
            type="text"
            value={titles[planner._id] || planner.title}
            onChange={(e) => {
              setTitles((prevTitles) => ({
                ...prevTitles,
                [planner._id]: e.target.value,
              }));
            }}
          />
          <button
            onClick={() =>
              handleRenamePlanner(planner._id, titles[planner._id])
            }
          >
            Rename Planner
          </button>
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

//CODE PART 1
// <ul>
//   {planners.map((planner) => (
//     <li key={planner._id}>
//       <div>
//         <span onClick={() => handleGetPlannerById(planner._id)}>
//           {planner.title}
//         </span>
//         <button onClick={() => handleDeletePlanner(planner._id)}>
//           Delete
//         </button>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button
//           onClick={() => handleRenamePlanner(planner._id, title)}
//         >
//           Rename Planner
//         </button>
//       </div>
//     </li>
//   ))}
// </ul>
//CODE PART 1 END
