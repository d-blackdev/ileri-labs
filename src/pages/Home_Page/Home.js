import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "./Home.css";
import Containers from "../../components/Container/Container";
import { settings, data } from "./component/CarouselSettings";
// IMAGES
import ListImage from "../../assets/images/listImage.svg";
import Image1 from "../../assets/images/Image.png";
import Image3 from "../../assets/images/Background.png";
import Image2 from "../../assets/images/Group image.png";
import Image4 from "../../assets/images/home_test.png";
import Image5 from "../../assets/images/review_image_1.png";
import Image6 from "../../assets/images/home_launch.png";
// COMPONENTS
import Button from "../../components/Button/Button";
import SubContainers from "../../components/Container/SubContainer";
import StepsComponent from "./component/stepsContainer/StepsComponent";
import CarouselItem from "../../components/Carousel/CarouselItem";
// SLICK CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const carouselList = data.map((data, index) => (
    <CarouselItem {...data} key={index} />
  ));

  return (
    <>
      <Containers>
       
        <Col sm={12} lg={7} className="col1">
          <div className="main_text_cont">
            <h1 className="main_Text">
              <p className="manu">Manufacture</p>
              <p className="formulate">Formulate</p>
              <p className="brand">Brand</p>
            </h1>
          </div>
          {/* div */}
          <div className="otherContent">
            <div className="box ">
              <p className="info">
                Nigeria’s first ever private label natural cosmetics brand
                created to help anyone with passion launch their very own safe
                and effective skincare or haircare brand.
              </p>
            </div>
            <div className="list_group">
              {/* Single text */}
              <h6 className="single-text">
                <img src={ListImage} alt="logo" />
                <p className="list-text">Low minimum order quantity</p>
              </h6>
              {/* Single text */}
              <h6 className="single-text">
                <img src={ListImage} alt="logo" />
                <p className="list-text">Safe and effective products</p>
              </h6>
              {/* Single text */}
              <h6 className="single-text">
                <img src={ListImage} alt="logo" />
                <p className="list-text">
                  Worked with over 30 brands to launch their brands
                </p>
              </h6>
              {/* Single text */}
              <h6 className="single-text">
                <img src={ListImage} alt="logo" />
                <p className="list-text">
                  Free basic branding available for first time clients
                </p>
              </h6>
              {/* Single text */}
              <h6 className="single-text">
                <img src={ListImage} alt="logo" />
                <p className="list-text">
                  Test our products before you commit to production
                </p>
              </h6>
            </div>
          </div>
        </Col>
        <Col lg={5} className="col2">
          <img src={Image3} alt="logo" className="image" />
        </Col>
      </Containers>
      {/* Launch section */}
      <div className="col3">
        <h6 className="col3_text">
          Launch Your Brand of Skincare or Haircare Products
        </h6>
        <Button title="Get Started" />
      </div>
      {/* PROCESS SECTION */}
      <SubContainers className=" pt-5 subCont">
        <Col xs={12} lg={5} className="process_col1">
          <Image src={Image2} alt="ileri" className="home_image2" fluid />
        </Col>
        <Col xs={12} className="toggleImage">
          <Image src={Image1} alt="Ileri-Labs" fluid className="toggleimage" />
        </Col>
        <Col xs={12} lg={7} className="pt-5 process_col2 pb-5">
          <h6 className="process_text">The Private Label Process</h6>
          <StepsComponent />
          <Button coloured="true" title="Learn more" />
        </Col>
        {/* TEST SECTION */}
        <Col xs={12} className="home_test ">
          <Row className="mr-0 ml-0">
            <Col lg={4} className="home_test_col1">
              <Image
                src={Image4}
                alt="Ileri"
                fluid
                className="home_test_image"
              />
            </Col>
            <Col lg={8} className="home_test_col2">
              <h6 className="home_test_col2_text">Test Before You Invest</h6>
              <p className="home_test_para">
                Test any of our sample kits for as low as N15,000. Get a Test
                Kit to help you confirm the effectiveness of our products.
                Select a kit that addresses the solution you want your brand to
                solve.
              </p>
              <div className="home_test_btn">
                <Button
                  coloured="true"
                  title="Get a test kit"
                  page="/get-a-kit"
                />
              </div>
            </Col>
          </Row>
        </Col>
        {/* CLIENTS REVIEW SECTION */}
        <Col xs={12} className="home_review position-relative ">
          <Image src={Image5} alt="Ileri-images" className="review_image1" />

          <h6 className="review_text">Clients Reviews</h6>
          <h6 className="review_subText">
            We are happy when our clients are too.
          </h6>
          <div className="carousel_Cont">
            <Slider {...settings} className="slider mx-auto">
              {carouselList}
            </Slider>
          </div>
        </Col>
        {/* HOME_VIDEO_SECTION */}
        <Col xs={12} className="home_video">
          <div className="home_video_cont">
            <ReactPlayer
              controls={true}
              width="100%"
              height="350px"
              wrapper="div"
              // light={true}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
        </Col>
        {/* HOME_LAUCNH */}
        <Col xs={12} className="home_launch">
          <div className="home_launch_cont">
            <Image src={Image6} fluid className="home_launch_img" />
            <div className="home_lauch_content">
              <h6 className="home_launch_text">Launch Your Haircare Brand</h6>
              <div className="home_launch_btn">
                <Button title="Start Here" />
              </div>
            </div>
          </div>
        </Col>
      </SubContainers>
    </>
  );
};

export default Home;
