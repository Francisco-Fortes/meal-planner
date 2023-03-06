import "./custom-carousel.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function CustomCarousel() {
  return (
    <Container>
      <Row>
        <Col className="d-none d-md-block">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1349452146/photo/hexagonal-labyrinth-maze-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=ySCtUr9p49R5NRzdjhswks-guUcTfG_2kr7f3cNSQeE="
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1349455848/photo/hexagonal-labyrinth-maze-neon-lighting.jpg?b=1&s=170667a&w=0&k=20&c=D_esBzwVeLtOSCkRKJuRMRjlPuEtZemcrKgg37BU1xU="
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/941338506/photo/flying-numbers-abstract-digital-technology-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=uWTz6F-9FsY3w0TKtQQkSCBg69gg7sviK3PsyGJQ-bA="
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomCarousel;
