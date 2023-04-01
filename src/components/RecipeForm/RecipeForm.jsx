import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addRecipeAction } from "../../redux/actions";
import { useDispatch } from "react-redux";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [cookingTime, setCookingTime] = useState({
    value: "",
    unit: "minutes",
  });
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [servings, setServings] = useState("");
  const [shared, setShared] = useState(false);
  const dispatch = useDispatch();

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      title,
      ingredients,
      steps,
      picture,
      cookingTime,
      servings,
      shared,
    };
    dispatch(addRecipeAction(recipeData));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="8">
          <h2 className="text-center mb-5">Add a Recipe</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="servings">
              <Form.Label>Servings</Form.Label>
              <Form.Control
                type="number"
                name="servings"
                required
                onChange={(e) => setServings(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="picture">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="text"
                name="picture"
                required
                onChange={(e) => setPicture(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="ingredients">
              <Form.Label>Ingredients</Form.Label>
              {ingredients.map((ingredient, index) => (
                <div className="d-flex mb-3" key={`ingredient-${index}`}>
                  <Form.Control
                    type="text"
                    value={ingredient}
                    required
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index] = e.target.value;
                      setIngredients(newIngredients);
                    }}
                  />
                  <Button
                    variant="outline-danger"
                    className="ms-2"
                    onClick={() => removeIngredient(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button variant="outline-secondary" onClick={addIngredient}>
                Add Ingredient
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="cookingTime">
              <Form.Label>Cooking Time</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Cooking time"
                    value={cookingTime.value}
                    required
                    onChange={(e) =>
                      setCookingTime({
                        ...cookingTime,
                        value: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={cookingTime.unit}
                    required
                    onChange={(e) =>
                      setCookingTime({
                        ...cookingTime,
                        unit: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Select unit
                    </option>
                    <option value="minutes">Minutes</option>
                    <option value="hours">Hours</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Steps</Form.Label>
              {steps.map((step, index) => (
                <div key={index} className="d-flex align-items-center">
                  <Form.Control
                    className="me-3"
                    type="text"
                    value={step}
                    onChange={(e) => {
                      const newSteps = [...steps];
                      newSteps[index] = e.target.value;
                      setSteps(newSteps);
                    }}
                    required
                  />
                  {index !== 0 && (
                    <Button variant="danger" onClick={() => removeStep(index)}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button className="mt-3" onClick={addStep}>
                Add Step
              </Button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="shared">
              <Form.Check
                type="checkbox"
                label="Shared"
                checked={shared}
                onChange={(e) => setShared(e.target.checked)}
              />
            </Form.Group>

            <Button className="main-btn mb-4 fw-bold" type="submit">
              SUBMIT RECIPE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default RecipeForm;
