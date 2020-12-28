import React,{useEffect} from "react";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "./Home.css";
import Containers from "../../components/Container/Container";
import { settings, data } from "./component/CarouselSettings";
import { motion } from "framer-motion";
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
// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const carouselList = data.map((data, index) => (
    <CarouselItem {...data} key={index} />
  ));

 useEffect(() => {
   Aos.init({ duration: 2500 });
 }, []);


  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Containers>
          <Col sm={12} lg={7} className="col1">
            <motion.div className="main_text_cont">
              <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  when: "beforeChildren",
                  staggerChildren: 0.5,
                }}
                className="main_Text"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="manu"
                >
                  Manufacture
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  className="formulate"
                >
                  Formulate
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 3 }}
                  className="brand"
                >
                  Brand
                </motion.p>
              </motion.h1>
            </motion.div>
            {/* div */}
            <div className="otherContent">
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: 4,
                  type: "spring",
                  mass: 0.5,
                  damping: 8,
                }}
                className="box "
              >
                <p className="info">
                  Nigeria’s first ever private label natural cosmetics brand
                  created to help anyone with passion launch their very own safe
                  and effective skincare or haircare brand.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 5,
                }}
                className="list_group"
              >
                {/* Single text */}
                <motion.h6 className="single-text">
                  <img src={ListImage} alt="logo" />
                  <p className="list-text">Low minimum order quantity</p>
                </motion.h6>
                {/* Single text */}
                <motion.h6 className="single-text">
                  <img src={ListImage} alt="logo" />
                  <p className="list-text">Safe and effective products</p>
                </motion.h6>
                {/* Single text */}
                <motion.h6 className="single-text">
                  <img src={ListImage} alt="logo" />
                  <p className="list-text">
                    Worked with over 30 brands to launch their brands
                  </p>
                </motion.h6>
                {/* Single text */}
                <motion.h6 className="single-text">
                  <img src={ListImage} alt="logo" />
                  <p className="list-text">
                    Free basic branding available for first time clients
                  </p>
                </motion.h6>
                {/* Single text */}
                <motion.h6 className="single-text">
                  <img src={ListImage} alt="logo" />
                  <p className="list-text">
                    Test our products before you commit to production
                  </p>
                </motion.h6>
              </motion.div>
            </div>
          </Col>
          <Col lg={5} className="col2">
            <img src={Image3} alt="logo" className="image" />
          </Col>
        </Containers>
        {/* Launch section */}
        <div className="col3 overflow-x-hidden">
          <h6 data-aos="fade" className="col3_text overflow-x-hidden">
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
            <Image
              src={Image1}
              alt="Ileri-Labs"
              fluid
              className="toggleimage"
            />
          </Col>
          <Col
            xs={12}
            lg={7}
            className="pt-5 process_col2 pb-5 overflow-x-hidden"
          >
            <h6 data-aos="zoom-in" className="process_text overflow-x-hidden">
              The Private Label Process
            </h6>
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
                  Select a kit that addresses the solution you want your brand
                  to solve.
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
      </motion.div>
    </>
  );
};

export default Home;
