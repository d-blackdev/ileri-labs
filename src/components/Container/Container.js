import React from "react";
// import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Row } from "react-bootstrap";
import './Container.css'

const Home = (props) => {
  return (
    <Container className="home" fluid>
      {/* <Navbar /> */}
      <Row className="content" {...props}>
       {props.children}
      </Row>
    </Container>
  );
};

export default Home;

