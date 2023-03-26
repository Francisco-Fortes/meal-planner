import "./custom-navbar.css";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import SignInModal from "../SignInModal/SignInModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../../redux/actions";

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
        <Navbar.Brand href="#home">APP-NAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
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

// {/* <Nav.Item href="#SearchModal">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     fill="currentColor"
//     className="bi bi-search"
//     viewBox="0 0 16 16"
//   >
//     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//   </svg>
// </Nav.Item> */}
