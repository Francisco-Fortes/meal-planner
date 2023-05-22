import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Card>
      <Card.Img variant="top" src={recipe.picture} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By {recipe.author.name}
        </Card.Subtitle>
        <Card.Text>{recipe.description}</Card.Text>
        <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
