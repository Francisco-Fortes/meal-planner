// import React, { useState } from "react";
// import { Badge, Button, Modal } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { addRecipeToPlanner } from "../actions/plannerActions";

// const AddRecipeToPlannerButton = () => {
//   const dispatch = useDispatch();
//   const [show, setShow] = useState(false);
//   const planners = useSelector((state) => state.planners.planners);
//   const [selectedPlanner, setSelectedPlanner] = useState(null);
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [recipes, setRecipes] = useState([]);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handlePlannerSelection = (planner) => {
//     setSelectedPlanner(planner);
//     setSelectedDay(null);
//     setRecipes([]);
//   };

//   const handleDaySelection = (day) => {
//     setSelectedDay(day);
//     setRecipes(selectedPlanner[day] || []);
//   };

//   const handleRecipeSelection = (recipe) => {
//     dispatch(addRecipeToPlanner(selectedPlanner._id, selectedDay, recipe._id));
//     handleClose();
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Open Planners
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Select a Planner</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {planners.map((planner) => (
//             <div key={planner._id}>
//               <h5>{planner.title}</h5>
//               <div>
//                 <strong>Monday:</strong>{" "}
//                 <span
//                   className="day"
//                   onClick={() => handleDaySelection("Monday")}
//                 >
//                   {planner.Monday.slice(0, 5).map((recipeId) => (
//                     <Badge
//                       key={recipeId}
//                       className="recipe-badge"
//                       onClick={() =>
//                         handleRecipeSelection(
//                           planner.Monday.find(
//                             (recipe) => recipe._id === recipeId
//                           )
//                         )
//                       }
//                     >
//                       {
//                         planner.Monday.find((recipe) => recipe._id === recipeId)
//                           .title
//                       }
//                     </Badge>
//                   ))}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default AddRecipeToPlannerButton;

// // import React, { useState } from "react";
// // import { Badge, Button, Modal } from "react-bootstrap";
// // import { useSelector } from "react-redux";

// // const AddRecipeToPlannerButton = () => {
// //   const [show, setShow] = useState(false);
// //   const planners = useSelector((state) => state.planners.planners);
// //   const [selectedPlanner, setSelectedPlanner] = useState(null);
// //   const [selectedDay, setSelectedDay] = useState(null);
// //   const [recipes, setRecipes] = useState([]);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   const handlePlannerSelection = (planner) => {
// //     setSelectedPlanner(planner);
// //     setSelectedDay(null);
// //     setRecipes([]);
// //   };

// //   const handleDaySelection = (day) => {
// //     setSelectedDay(day);
// //     setRecipes(selectedPlanner[day] || []);
// //   };

// //   const handleRecipeSelection = (recipe) => {
// //     // Do something with the selected recipe
// //   };

// //   return (
// //     <>
// //       <Button variant="primary" onClick={handleShow}>
// //         Open Planners
// //       </Button>

// //       <Modal show={show} onHide={handleClose}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Select a Planner</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           {planners.map((planner) => (
// //             <div key={planner._id}>
// //               <h5>{planner.title}</h5>
// //               <div>
// //                 <strong>Monday:</strong>{" "}
// //                 <span
// //                   className="day"
// //                   onClick={() => handleDaySelection("Monday")}
// //                 >
// //                   {planner.Monday.slice(0, 5).map((recipeId) => (
// //                     <Badge
// //                       key={recipeId}
// //                       className="recipe-badge"
// //                       onClick={() =>
// //                         handleRecipeSelection(
// //                           planner.MondayRecipes.find(
// //                             (recipe) => recipe._id === recipeId
// //                           )
// //                         )
// //                       }
// //                     >
// //                       {
// //                         planner.Monday.recipe.find(
// //                           (recipe) => recipe._id === recipeId
// //                         ).title
// //                       }
// //                     </Badge>
// //                   ))}
// //                 </span>
// //               </div>
// //           ))}
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //       </>
// //       );
// //     };

// //     export default AddRecipeToPlannerButton;

// //     {/* <div>
// //       <strong>Tuesday:</strong>{" "}
// //       <span
// //         className="day"
// //         onClick={() => handleDaySelection("Tuesday")}
// //       >
// //         {planner.Tuesday.slice(0, 5).map((recipeId) => (
// //           <Badge
// //             key={recipeId}
// //             className="recipe-badge"
// //             onClick={() =>
// //               handleRecipeSelection(
// //                 planner.TuesdayRecipes.find(
// //                   (recipe) => recipe._id === recipeId
// //                 )
// //               )
// //             }
// //           >
// //             {
// //               planner.TuesdayRecipes.find(
// //                 (recipe) => recipe._id === recipeId
// //               ).title
// //             }
// //           </Badge>
// //         ))}
// //       </span>
// //     </div>
// //     <div>
// //       <strong>Wednesday:</strong>{" "}
// //       <span
// //         className="day"
// //         onClick={() => handleDaySelection("Wednesday")}
// //       >
// //         {planner.Wednesday.slice(0, 5).map((recipeId) => (
// //           <Badge
// //             key={recipeId}
// //             className="recipe-badge"
// //             onClick={() =>
// //               handleRecipeSelection(
// //                 planner.WednesdayRecipes.find(
// //                   (recipe) => recipe._id === recipeId
// //                 )
// //               )
// //             }
// //           >
// //             {
// //               planner.WednesdayRecipes.find(
// //                 (recipe) => recipe._id === recipeId
// //               ).title
// //             }
// //           </Badge>
// //         ))}
// //       </span>
// //     </div>
// //     <div>
// //       <strong>Thursday:</strong>{" "}
// //       <span
// //         className="day"
// //         onClick={() => handleDaySelection("Thursday")}
// //       >
// //         {planner.Thursday.slice(0, 5).map((recipeId) => (
// //           <Badge
// //             key={recipeId}
// //             className="recipe-badge"
// //             onClick={() =>
// //               handleRecipeSelection(
// //                 planner.ThursdayRecipes.find(
// //                   (recipe) => recipe._id === recipeId
// //                 )
// //               )
// //             }
// //           >
// //             {
// //               planner.ThursdayRecipes.find(
// //                 (recipe) => recipe._id === recipeId
// //               ).title
// //             }
// //           </Badge>
// //         ))}
// //       </span>
// //     </div>
// //     <div>
// //       <strong>Friday:</strong>{" "}
// //       <span
// //         className="day"
// //         onClick={() => handleDaySelection("Friday")}
// //       >
// //         {planner.Friday.slice(0, 5).map((recipeId) => (
// //           <Badge
// //             key={recipeId}
// //             className="recipe-badge"
// //             onClick={() =>
// //               handleRecipeSelection(
// //                 planner.FridayRecipes.find(
// //                   (recipe) => recipe._id === recipeId
// //                 )
// //               )
// //             }
// //           >
// //             {
// //               planner.FridayRecipes.find(
// //                 (recipe) => recipe._id === recipeId
// //               ).title
// //             }
// //           </Badge>
// //         ))}
// //       </span>
// //     </div>
// //     <div>
// //       <strong>Saturday:</strong>{" "}
// //       <span
// //         className="day"
// //         onClick={() => handleDaySelection("Saturday")}
// //       >
// //         {planner.Saturday.slice(0, 5).map((recipeId) => (
// //           <Badge
// //             key={recipeId}
// //             className="recipe-badge"
// //             onClick={() =>
// //               handleRecipeSelection(
// //                 planner.SaturdayRecipes.find(
// //                   (recipe) => recipe._id === recipeId
// //                 )
// //               )
// //             }
// //           >
// //             {
// //               planner.SaturdayRecipes.find(
// //                 (recipe) => recipe._id === recipeId
// //               ).title
// //             }
// //           </Badge>
// //         ))}
// //       </span>
// //     </div>
// //     <div>
// //       <strong>Sunday:</strong>{" "}
// //       <span
// //         className="day"
// //         onClick={() => handleDaySelection("Sunday")}
// //       >
// //         {planner.Sunday.slice(0, 5).map((recipeId) => (
// //           <Badge
// //             key={recipeId}
// //             className="recipe-badge"
// //             onClick={() =>
// //               handleRecipeSelection(
// //                 planner.SundayRecipes.find(
// //                   (recipe) => recipe._id === recipeId
// //                 )
// //               )
// //             }
// //           >
// //             {
// //               planner.SundayRecipes.find(
// //                 (recipe) => recipe._id === recipeId
// //               ).title
// //             }
// //           </Badge>
// //         ))}
// //       </span>
// //     </div> */}
// //   </div>
