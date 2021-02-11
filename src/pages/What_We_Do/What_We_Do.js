import React from "react";
import Container from "../../components/Container/Container";
import { Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Image1 from "../../assets/images/what_we_do1.png";
import "./What_We_Do.css";
import Button from "../../components/Button/Button";
import SubContainer from "../../components/Container/SubContainer";
import How_It_Works from "./component/How It Works/How_It_Works";

const What_We_Do = (props) => {
  console.log(props);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="what_we_do_cont">
        <Col className="what_we_do_col_1" sm={12} lg={5}>
          <h6 className="what_we_do_title">About Us</h6>
          <h6 className="what_we_do_sub_title">What we do</h6>
          <h6 className="what_we_do_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi
            vitae, sodales consectetur ornare. Turpis luctus eu consectetur
            massa tempus imperdiet in magna lectus. Malesuada sit pulvinar vitae
            feugiat eget vel. Aliquet justo, dignissim in hac vitae in. Aliquam
            nullam ultrices placerat a maecenas. Malesuada.
          </h6>
          <div className="what_we_do_btn_cont">
            <Button title="Try it Out"  coloured="true"/>
          </div>
        </Col>
        <Col className="what_we_do_col_2" sm={12} lg={7}>
          <div className="what_we_do_image what_we_do_image_cont">
            <Image fluid src={Image1} className="what_we_do_image" />
          </div>
        </Col>
      </Container>
      <SubContainer>
        <How_It_Works/>
      </SubContainer>
    </motion.div>
  );
};

export default What_We_Do;
