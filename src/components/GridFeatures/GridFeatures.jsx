import "./grid-features.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function GridFeatures() {
  return (
    // <Container className="grid-frame d-md-none d-block">
    //   <Row className="d-flex justify-content-center">
    //     <Col xs sm={6} className="mx-5">
    //       1
    //     </Col>
    //     <Col xs sm={6} className="mx-5">
    //       2
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col xs sm={6} className="mx-5">
    //       3
    //     </Col>
    //     <Col xs sm={6} className="mx-5">
    //       4
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className=" d-block">
      <Row className="justify-content-center align-items-center">
        <Col className="text-center" xs={3} style={{ margin: 4 }}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "red" }}
          ></div>
        </Col>
        <Col className="text-center" xs={3} style={{ margin: 4 }}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
          ></div>
        </Col>
        <Col className="text-center" xs={3} style={{ margin: 4 }}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "green" }}
          ></div>
        </Col>
        <Col className="text-center" xs={3} style={{ margin: 4 }}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "yellow" }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default GridFeatures;

// import { Container, Row, Col } from "react-bootstrap";

// function MyGrid() {
//   return (
//     <Container fluid>
//       <Row className="justify-content-center align-items-center">
//         <Col className="text-center" xs={3} style={{ margin: 4 }}>
//           <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}></div>
//         </Col>
//         <Col className="text-center" xs={3} style={{ margin: 4 }}>
//           <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}></div>
//         </Col>
//         <Col className="text-center" xs={3} style={{ margin: 4 }}>
//           <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }}></div>
//         </Col>
//         <Col className="text-center" xs={3} style={{ margin: 4 }}>
//           <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}></div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default MyGrid;
