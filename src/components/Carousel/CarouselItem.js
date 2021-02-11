import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import Image1 from "../../assets/images/home_test.png";
import "./Carousel.css";

const CarouselItem = ({ img, text, name, job }) => {
  return (
    <Carousel as="div" className="my_carousel">
      <Image fluid src={img} className="carousel_images" />
      <p className="carousel_text">{text}</p>
      <div className="carousel_divider" />
      {/* CAROUSEL DETAILS */}
      <p className="carousel_name">{name}</p>
      <p className="carousel_job">{job}</p>
    </Carousel>
  );
};

export default CarouselItem;

const Carousel = styled.div`
  max-width: 366px;
  height: 496px;
  background-color: #fff;
  padding-left: 40px;
  padding-top: 50px;
  border-radius: 10px;
  z-index: 100;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
 
  @media screen and (max-width:360px){
    width:300px
  }

  .carousel_images {
    width: 115px !important;
    height: 115px !important;
    border-radius: 50% !important;
  }
  .carousel_text {
    font-weight: 300;
    font-size: 16.16px;
    color: #a5593c;
    width: 90%;
    padding-top: 30px;
  }
  .carousel_divider {
    width: 100px;
    height: 2px;
    background-color: #687a61;
    border-radius: 20px;
    margin-top: 30px;
  }
  .carousel_name {
    font-weight: 500;
    font-size: 17.61px;
    color: #191919;
    margin-top: 10px;
  }
  .carousel_job {
    font-weight: 300;
    font-size: 16.61px;
    color: #191919;
    line-height: 24px;
  }
`;
