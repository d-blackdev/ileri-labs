import React, { useEffect } from "react";
import { Col, Image,Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import "./GetKit.css";
import Container from "../../components/Container/Container";
import SubContainer from "../../components/Container/SubContainer";
import Image1 from "../../assets/images/kit_image.png";
import Image2 from "../../assets/images/kit_rect.png";
import Image3 from "../../assets/images/kit_flower.png";
import Image4 from "../../assets/images/kit_svg9.svg";
import Image5 from "../../assets/images/kit_image1.png";
import Image6 from "../../assets/images/kit_svg1.svg";
import Image7 from "../../assets/images/kit_svg2.svg";
import Image8 from "../../assets/images/kit_svg3.svg";
import Image9 from "../../assets/images/kit_svg4.svg";
import Image10 from "../../assets/images/kit_svg5.svg";
import Image11 from "../../assets/images/kit_svg6.svg";
import Image12 from "../../assets/images/kit_svg7.svg";
import Image13 from "../../assets/images/kit_svg8.svg";
import Image14 from "../../assets/images/kit_image2.png";
import Image15 from "../../assets/images/kit_image3.png";
import Image16 from "../../assets/images/kit_image4.png";
import Button from "../../components/Button/Button";

const GetKit = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="kit_cont">
        <Image fluid src={Image2} className="kit_rect_image" />
        <Image fluid src={Image3} className="kit_flower_image" />
        <Col sm={12} lg={7} className="kit-col1">
          <Image
            src={Image1}
            fluid
            className="kit_col1_image"
            alt="Ileri-Labs"
          />
        </Col>
        <Col sm={12} lg={5} className="kit-col2">
          <div data-aos="zoom-in" className="kit_discover">
            <h6 className="kit_main_text">DISCOVER</h6>
            <h6 className="kit_main_text">YOUR </h6>
            <h6 className="kit_main_text">BRAND</h6>
          </div>
          <div className="kit_list">
            {/* single list */}
            <h6 className="kit_single_list">
              <Image src={Image4} alt="Ileri-Labs" className="kit_list_svg" />
              <p className="kit_single_text">Our luxury formulas</p>
            </h6>
            {/* single list */}
            <h6 className="kit_single_list">
              <Image src={Image4} alt="Ileri-Labs" className="kit_list_svg" />
              <p className="kit_single_text">Your unique label design</p>
            </h6>
            {/* single list */}
            <h6 className="kit_single_list">
              <Image src={Image4} alt="Ileri-Labs" className="kit_list_svg" />
              <p className="kit_single_text">
                Your own brand of beauty products
              </p>
            </h6>
            {/* single list */}
            <h6 className="kit_single_list">
              <Image src={Image4} alt="Ileri-Labs" className="kit_list_svg" />
              <p className="kit_single_text">customized to fit your business</p>
            </h6>
          </div>
          <div className="kit_btn_cont">
            <Button title="Shop sample kits" wide_black="true" />
          </div>
        </Col>
        {/* READY TO TRY */}
        <Col className="pt-5" lg={7} className="kit_ready_col1">
          <div data-aos="fade-right" className="kit_ready_cont">
            <h6 className="kit_ready_text">Ready to give it a try?</h6>
            <h6 className="kit_ready_subText">Then follow these steps</h6>
            <div className="kit_ready_steps_cont mt-4">
              {/* sing;e steps */}
              <h6 className="single_kit_step d-flex">
                <Image src={Image6} alt="Ileri-Labs" fluid />
                <p className="single_kit_step_text ml-3">
                  Choose your sample kit
                </p>
              </h6>
              {/* sing;e steps */}
              <h6 className="single_kit_step d-flex">
                <Image src={Image7} alt="Ileri-Labs" fluid />
                <p className="single_kit_step_text ml-3">
                  Choose the formulas you'd like to sample & their packaging
                  style
                </p>
              </h6>
              {/* sing;e steps */}
              <h6 className="single_kit_step d-flex">
                <Image src={Image8} alt="Ileri-Labs" fluid />
                <p className="single_kit_step_text ml-3">
                  Submit your design requests in the cart for a custom label
                  design.
                </p>
              </h6>
              {/* sing;e steps */}
              <h6 className="single_kit_step d-flex">
                <Image src={Image9} alt="Ileri-Labs" fluid />
                <p className="single_kit_step_text ml-3">
                  Receive a proof of your label design to provide edits.
                </p>
              </h6>
              {/* sing;e steps */}
              <h6 className="single_kit_step d-flex">
                <Image src={Image10} alt="Ileri-Labs" fluid />
                <p className="single_kit_step_text ml-3">
                  Receive and test your product samples.
                </p>
              </h6>
            </div>
          </div>
          <div className="kit_btn_cont">
            <Button title="Choose my Kits" wide_black="true" />
          </div>
        </Col>
        <Col className="pt-5" lg={5} className="kit_ready_col2">
          <Image
            src={Image5}
            alt="Ileri-Labs"
            fluid
            className="kit_ready_col2_image"
          />
        </Col>
      </Container>
      <SubContainer>
        <Col xs={12} className="kit_manufacture pt-5">
          <h6 className="kit_manufacture_text">
            Manufacture. Formulate. Brand
          </h6>
          <h6 className="kit_manufacture_subText">
            Nigeria’s first ever private label natural cosmetics brand created
            to help anyone with passion launch their very own safe and effective
            skincare or haircare brand.
          </h6>
          {/* MANUFACTURE SUBCONTAINER */}
          <div className="kit_flex_cont  d-flex justify-around flex-wrap">
            {/* Single flex */}
            <div data-aos="flip-left" className="kit_single_flex mb-5">
              <Image
                src={Image11}
                alt="Ileri-Labs"
                fluid
                className="single_kit_flex_image"
              />
              <h6 className="single_kit_text">Manufacturing of products</h6>
              <h6 className="single_kit_subText text-center">
                Duis id eleifend habitasse est sit ornare id urna sit sit.
              </h6>
            </div>
            {/* Single flex */}
            <div data-aos="flip-left" className="kit_single_flex mb-5">
              <Image
                src={Image12}
                alt="Ileri-Labs"
                fluid
                className="single_kit_flex_image"
              />
              <h6 className="single_kit_text">Formulation of products</h6>
              <h6 className="single_kit_subText">
                Duis id eleifend habitasse est sit ornare id urna sit sit.
              </h6>
            </div>
            {/* Single flex */}
            <div data-aos="flip-left" className="kit_single_flex mb-5">
              <Image
                src={Image13}
                alt="Ileri-Labs"
                fluid
                className="single_kit_flex_image"
              />
              <h6 className="single_kit_text">Formulation of products</h6>
              <h6 className="single_kit_subText">
                Duis id eleifend habitasse est sit ornare id urna sit sit.
              </h6>
            </div>
          </div>
          {/* KIT_BTN */}
          <div className="kit_flex_btn_cont mx-auto">
            <Button title="Try it out" wide_black="true" />
          </div>
        </Col>
        <Col xs={12} className="kit_flex_image_col">
          <h6 className="kit_flex_text">Simple. Unique. Classic</h6>
          <Row className="mt-5 mx-auto">
            <Col md={4} sm={6} className="single_kit_flex_img mb-5"><Image src={Image14} alt="Ileri" fluid/></Col>
            <Col md={4} sm={6} className="single_kit_flex_img mb-5"><Image src={Image15} alt="Ileri" fluid/></Col>
            <Col md={4} sm={6} className="single_kit_flex_img mb-5"><Image src={Image16} alt="Ileri" fluid/></Col>
          </Row>
        </Col>
      </SubContainer>
    </motion.div>
  );
};

export default GetKit;
