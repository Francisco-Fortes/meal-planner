import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlannerAction,
  getPlannersAction,
  getPlannerAction,
} from "../redux/actions/index.js";

const TestPlanner = () => {
  const planners = useSelector((state) => state.planner.plannerData);
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
        {planners.map((planner) => (
          <div
            key={planner._id}
            onClick={() => handleGetPlannerById(planner._id)}
          >
            {planner.title}
          </div>
        ))}
      </div>

      {selectedPlannerId && (
        <div>
          <h2>{planner.title}</h2>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{planner.Monday[0]}</td>
                <td>{planner.Tuesday[0]}</td>
                <td>{planner.Wednesday[0]}</td>
                <td>{planner.Thursday[0]}</td>
                <td>{planner.Friday[0]}</td>
                <td>{planner.Saturday[0]}</td>
                <td>{planner.Sunday[0]}</td>
              </tr>
              <tr>
                <td>{planner.Monday[1]}</td>
                <td>{planner.Tuesday[1]}</td>
                <td>{planner.Wednesday[1]}</td>
                <td>{planner.Thursday[1]}</td>
                <td>{planner.Friday[1]}</td>
                <td>{planner.Saturday[1]}</td>
                <td>{planner.Sunday[1]}</td>
              </tr>
              <tr>
                <td>{planner.Monday[2]}</td>
                <td>{planner.Tuesday[2]}</td>
                <td>{planner.Wednesday[2]}</td>
                <td>{planner.Thursday[2]}</td>
                <td>{planner.Friday[2]}</td>
                <td>{planner.Saturday[2]}</td>
                <td>{planner.Sunday[2]}</td>
              </tr>
              <tr>
                <td>{planner.Monday[3]}</td>
                <td>{planner.Tuesday[3]}</td>
                <td>{planner.Wednesday[3]}</td>
                <td>{planner.Thursday[3]}</td>
                <td>{planner.Friday[3]}</td>
                <td>{planner.Saturday[3]}</td>
                <td>{planner.Sunday[3]}</td>
              </tr>
              <tr>
                <td>{planner.Monday[4]}</td>
                <td>{planner.Tuesday[4]}</td>
                <td>{planner.Wednesday[4]}</td>
                <td>{planner.Thursday[4]}</td>
                <td>{planner.Friday[4]}</td>
                <td>{planner.Saturday[4]}</td>
                <td>{planner.Sunday[4]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default TestPlanner;
