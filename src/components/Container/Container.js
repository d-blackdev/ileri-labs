import React from "react";

import { Container, Row } from "react-bootstrap";
import "./Container.css";

const Home = (props) => {
  return (
    <Container className="home" fluid>
      <Row className="content" {...props}>
        {props.children}
      </Row>
    </Container>
  );
};

export default Home;
