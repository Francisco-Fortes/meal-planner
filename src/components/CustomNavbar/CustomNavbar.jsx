import "./custom-navbar.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import SignInModal from "../SignInModal/SignInModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../../redux/actions";
import PlanEatLogo from "./EAT.jpg";
function CustomNavbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("UserAccessToken");
    dispatch(removeCurrentUser());
  };

  return (
    <Navbar
      collapseOnSelect
      className="main-color justify-content-between align-items-start"
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img src={PlanEatLogo} alt="PlanEat-logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav align-items-center" />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/planner">Planner</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/recipes">Recipes</Nav.Link>
          <Nav.Link href="/recipeForm">Add a Recipe</Nav.Link>
          {currentUser.email ? (
            <Nav.Item>
              <Button className="main-btn" onClick={handleLogout}>
                Log Out
              </Button>
            </Nav.Item>
          ) : (
            <>
              <Nav.Item>
                <SignInModal />
              </Nav.Item>
              <Nav.Item>
                <SignUpModal />
              </Nav.Item>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
