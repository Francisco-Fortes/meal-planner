import "./profile-page.css";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ProfilePage() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          {/* <Card> */}
          <Row style={{ backgroundColor: "#fe9901", height: 200 }}>
            <Col
              className="my-4 mt-5 d-flex flex-column"
              style={{ width: 150 }}
            >
              <img
                src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                alt="unplash-profile-pic"
                className="mt-2 mb-2 rounded"
                style={{ width: 150 }}
              />
              <Button
                className="text-orange"
                bg="dark"
                type="button"
                variant="outline-warning"
                style={{ width: 150 }}
              >
                Edit profile
              </Button>
            </Col>
            <Col className="text-white">
              <h5>Jane Doe</h5>
              <p>Unplash</p>
            </Col>
          </Row>
          {/* <Card.Body */}
          <Row className="p-4 text-black">
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="small text-muted mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </p>
                <p className="mb-1 h5">2</p>
              </div>
              <div className="px-3">
                <p className="small text-muted mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-card-heading"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>
                </p>
                <p className="mb-1 h5">3</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-bold mb-1">About me</p>
              <div className="p-4">
                <p className="mb-1">I love baking!</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-bold mb-0">My recipes</p>
              <p className="mb-0">
                <a href="#View more" className="text-muted">
                  View more
                </a>
              </p>
            </div>
            <Row xs={10}>
              <Col md={4}>
                {/* <Card.Img */}
                {/* Collapsive Cards? */}
                <img
                  src="https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-1"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
              <Col md={4}>
                {/* <Card.Img */}
                <img
                  variant="top"
                  src="https://images.unsplash.com/photo-1596818531679-96ef98b9a497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-2"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
              <Col md={4}>
                <img
                  src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-3"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
            </Row>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-bold mb-0">My favourites</p>
              <p className="mb-0">
                <a href="#View more" className="text-muted">
                  View more
                </a>
              </p>
            </div>
            <Row>
              <Col xs={10} md={4}>
                {/* <Card.Img */}
                {/* Collapsive Cards? */}
                <img
                  src="https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-1"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
              <Col md={4}>
                {/* <Card.Img */}
                <img
                  src="https://images.unsplash.com/photo-1596818531679-96ef98b9a497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-2"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
              <Col md={4}>
                <img
                  src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-3"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
            </Row>
            {/* {/* <Row xs={2} md={2}> 
              <Col>
                {/* <Card.Img 
                <img
                  src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-3"
                  className="w-100 rounded-3 mb-2"
                />
              </Col>
              <Col>
                {/* <Card.Img 
                <img
                  variant="top"
                  src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-4"
                  className="w-100 rounded-3 thumbnail"
                />
              </Col>
            </Row> */}
          </Row>
          {/* </Card.Body> */}
          {/* </Card> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
