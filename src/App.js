import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel.jsx";
import GridFeatures from "./components/GridFeatures/GridFeatures.jsx";
import SignInModal from "./components/SignInModal/SignInModal.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
import ProfilePage from "./components/Profile/ProfilePage.jsx";
import { useEffect, useState } from "react";
import { Button, Card, Collapse, ListGroup } from "react-bootstrap";
import CollapsiveCard from "./components/CollapsiveCard/CollapsiveCard";
import RecipeForm from "./components/RecipeForm/RecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = process.env.REACT_APP_BE_URL;
      const resp = await fetch(`${apiUrl}/recipes`);
      const data = await resp.json();
      setRecipes(data);
      console.log(data);
    }
    fetchData();
  }, []);

  // const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <RecipeForm />
      <CollapsiveCard recipe={recipes} />
      {/* <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-card"
          aria-expanded={open}
        >
          Test
        </Button>
        <Collapse in={open}> */}
      {/* <div id="collapse-card"> */}
      {/* {recipes.map((recipe, index) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={recipe.picture} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))} */}
      {/* </div> */}
      {/* </Collapse> */}
      {/* </> */}
      {/* <CustomNavbar /> */}
      {/* <LoginForm /> */}
      {/* <Hero />  */}
      {/* <CustomCarousel />
      <GridFeatures /> */}
      {/* <SignInModal /> */}
      {/* <ProfilePage recipes={recipes} /> */}
    </div>
  );
}

export default App;
