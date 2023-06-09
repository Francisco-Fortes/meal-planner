import "./loginForm.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/actions/index.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(logInAction(userData));
  };

  return (
    <Container className="">
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-0">
          <h2 className="text-center">APP-LOGO</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="login-80p mb-4 fw-bold" type="submit">
              SIGN IN
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

// <div className="d-flex justify-content-center">
//   <a href="http://localhost:3001/users/">
//     <p className="text-center mx-3 mb-0">Forgot password?</p>
//   </a>
//   <a href="http://localhost:3000/register">
//     <p>Need an account?</p>
//   </a>
// </div>
// <div className="d-flex justify-content-center my-4">
//   <p className="text-center text-muted mx-3 mb-0">
//     OR QUICK ACCESS
//   </p>
// </div>
// <Container fluid className="d-flex justify-content-center m-1">
//   <Row
//     style={{ width: "100%", justifyContent: "space-evenly" }}
//     className="login-40p"
//   >
//     <Col style={{ maxWidth: "fit-content" }} className="m-0 p-0">
//       <a href="http://localhost:3001/users/facebookLogin">
//         <Button className="login-quick-button">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="currentColor"
//             className="bi bi-facebook m-2"
//             viewBox="0 0 16 16"
//           >
//             <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//           </svg>
//         </Button>
//       </a>
//     </Col>
//     <Col className="m-0 p-0" style={{ maxWidth: "fit-content" }}>
//       <a href="http://localhost:3001/users/googleLogin">
//         <Button className="login-quick-button">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="currentColor"
//             className="bi bi-google m-2"
//             viewBox="0 0 16 16"
//           >
//             <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
//           </svg>
//         </Button>
//       </a>
//     </Col>
//   </Row>
// </Container>
