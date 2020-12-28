import React from "react";
import Container from "../../components/Container/Container";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const What_We_Do = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <Container>
        <Col className="">
          <h1>What we Do</h1>
        </Col>
      </Container>
    </motion.div>
  );
};

export default What_We_Do;
