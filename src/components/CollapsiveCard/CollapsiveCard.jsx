import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";

const CollapsiveCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {recipe.map((recipe) => (
        <Card>
          <Card.Header>
            <Card.Title>{recipe.title}</Card.Title>
            <Button
              variant="primary"
              onClick={() => setOpen(!open)}
              aria-controls="recipe-details"
              aria-expanded={open}
            >
              {open ? "Hide Details" : "Show Details"}
            </Button>
          </Card.Header>
          <Collapse in={open}>
            <div id="recipe-details">
              <Card.Body>
                <Card.Img variant="top" src={recipe.picture} />
                <Card.Text>{recipe.description}</Card.Text>
                <Card.Text>
                  <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
                </Card.Text>
                <Card.Text>
                  <strong>Instructions:</strong>
                </Card.Text>
                {/* <ol>
                  {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol> */}
              </Card.Body>
            </div>
          </Collapse>
        </Card>
      ))}
    </>
  );
};

export default CollapsiveCard;
