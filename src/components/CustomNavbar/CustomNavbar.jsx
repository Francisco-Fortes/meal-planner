import "./custom-navbar.css";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
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
    <Navbar collapseOnSelect className="main-color" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={PlanEatLogo} alt="PlanEat-logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/planner">Planner</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/recipeForm">Recipes</Nav.Link>
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
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
