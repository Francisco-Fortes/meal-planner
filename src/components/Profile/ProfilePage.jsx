import "./profile-page.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import ProfileRecipeCard from "../ProfileRecipe";
import RecipeCard from "../RecipeCard";
import CollapsibleCard from "../CollapsibleCard/CollapsibleCard";

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setAbout(currentUser.about);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Row style={{ backgroundColor: "#fe9901", height: 200 }}>
            <Col
              className="my-4 mt-5 d-flex flex-column"
              style={{ width: 150 }}
            >
              <img
                src={avatar}
                alt="profile-pic"
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
                Edit private settings
              </Button>
            </Col>
            <Col className="text-white">
              <h5>{firstName}</h5>
              <p>{lastName}</p>
            </Col>
          </Row>
          <Row className="p-4 text-black">
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="small text-muted mb-0">
                  <AiOutlineHeart />
                </p>
                <p className="mb-1 h5">2</p>
              </div>
              <div className="px-3">
                <p className="small text-muted mb-0">
                  <GrNotes />
                </p>
                <p className="mb-1 h5">3</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-bold mb-1">About me</p>
              <Button className="edit-about-btn">
                <FaPencilAlt />
              </Button>
              <div className="p-4">
                <p className="mb-1">{about}</p>
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
              <CollapsibleCard />
            </Row>
            {/* <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-bold mb-0">My favourites</p>
              <p className="mb-0">
                <a href="#View more" className="text-muted">
                  View more
                </a>
              </p>
            </div>
            <Row>
              <Col xs={10} md={4}>
                <img
                  src="https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="unplash-recipe-1"
                  className="rounded-5"
                  style={{ width: 300, height: 200 }}
                />
              </Col>
              <Col md={4}>
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
            </Row> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
