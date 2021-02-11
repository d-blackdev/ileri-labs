import React, { useEffect } from "react";
import "./How_It_Works.css";
import { Col, Image, Row } from "react-bootstrap";
import Image1 from "../../../../assets/images/what_we_do_2.svg";
import Image2 from "../../../../assets/images/what_we_do_3.svg";
import Image3 from "../../../../assets/images/what_we_do_4.svg";
import Image4 from "../../../../assets/images/what_we_do_5.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const How_It_Works = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <Col xs={12} className="col-component">
      <h6 className="col-component-title">How it Works</h6>

      <h6 className="col-component-sub-title">
        a new spin on private labeling
      </h6>
      <Row className="mt-5">
        {/* SINGLE CONT */}
        <Col lg={4} md={6}>
          <div data-aos="flip-left" className="what_single_flex mb-5">
            <div className="what_we_do_img_cont">
              <Image
                src={Image4}
                fluid
                alt="Ileri-Labs"
                className="what_we_do_flex_image"
              />
            </div>
            <h6 className="what_we_do_text2">Sign up</h6>
            <h6 className="what_we_do_subText2">
              The first step for creating your brand
            </h6>
          </div>
        </Col>
        {/* SINGLE CONT */}
        <Col lg={4} md={6}>
          <div data-aos="flip-left" className="what_single_flex mb-5">
            <div className="what_we_do_img_cont">
              <Image
                src={Image3}
                fluid
                alt="Ileri-Labs"
                className="what_we_do_flex_image"
              />
            </div>
            <h6 className="what_we_do_text2">Pick your products</h6>
            <h6 className="what_we_do_subText2">
              Pick any products you are interested in launching
            </h6>
          </div>
        </Col>
        {/* SINGLE CONT */}
        <Col lg={4} md={6}>
          <div data-aos="flip-left" className="what_single_flex mb-5">
            <div className="what_we_do_img_cont">
              <Image
                src={Image2}
                fluid
                alt="Ileri-Labs"
                className="what_we_do_flex_image"
              />
            </div>
            <h6 className="what_we_do_text2">Make products</h6>
            <h6 className="what_we_do_subText2">
              Make payment and check out from your cart
            </h6>
          </div>
        </Col>
        {/* SINGLE CONT */}
        <Col lg={4} md={6}>
          <div data-aos="flip-left" className="what_single_flex mb-5">
            <div className="what_we_do_img_cont">
              <Image
                src={Image1}
                fluid
                alt="Ileri-Labs"
                className="what_we_do_flex_image"
              />
            </div>
            <h6 className="what_we_do_text2">Launch your products</h6>
            <h6 className="what_we_do_subText2">
              Launch your product across the world
            </h6>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default How_It_Works;
//  <Row className="col-component">
//    <h6 className="col-component-title">How it Works</h6>
//    <h6 className="col-component-sub-title">a new spin on private labeling</h6>
//    <div className="what_flex_cont mt-5 d-flex justify-around flex-wrap">
//      {/* Single flex */}

//      <div data-aos="flip-left" className="what_single_flex mb-5">
//        <div className="what_we_do_img_cont">
//          <Image
//            src={Image4}
//            fluid
//            alt="Ileri-Labs"
//            className="what_we_do_flex_image"
//          />
//        </div>
//        <h6 className="what_we_do_text2">Sign up</h6>
//        <h6 className="what_we_do_subText2">
//          The first step for creating your brand
//        </h6>
//      </div>
//      <div data-aos="flip-left" className="what_single_flex mb-5">
//        <div className="what_we_do_img_cont">
//          <Image
//            src={Image3}
//            fluid
//            alt="Ileri-Labs"
//            className="what_we_do_flex_image"
//          />
//        </div>
//        <h6 className="what_we_do_text2">Pick your products</h6>
//        <h6 className="what_we_do_subText2">
//          Pick any products you are interested in launching
//        </h6>
//      </div>
//      <div data-aos="flip-left" className="what_single_flex mb-5">
//        <div className="what_we_do_img_cont">
//          <Image
//            src={Image2}
//            fluid
//            alt="Ileri-Labs"
//            className="what_we_do_flex_image"
//          />
//        </div>
//        <h6 className="what_we_do_text2">Make products</h6>
//        <h6 className="what_we_do_subText2">
//          Make payment and check out from your cart
//        </h6>
//      </div>
//      <div data-aos="flip-left" className="what_single_flex mb-5">
//        <div className="what_we_do_img_cont">
//          <Image
//            src={Image1}
//            fluid
//            alt="Ileri-Labs"
//            className="what_we_do_flex_image"
//          />
//        </div>
//        <h6 className="what_we_do_text2">Launch your products</h6>
//        <h6 className="what_we_do_subText2">
//          Launch your product across the world
//        </h6>
//      </div>
//    </div>
//  </Row>;
