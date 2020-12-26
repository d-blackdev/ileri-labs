import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SubContainer from "../Container/SubContainer";
import Logo from "../../assets/images/Logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <SubContainer className="footer">
      <Col sm={6} md={4} lg={3}>
        <div className="footer_logo_cont">
          <Image src={Logo} alt="Ileri" className="footer_logo" />
        </div>
        <h6 className="footer_tel">08132086914</h6>
        <h6 className="footer_mail">hello@ilerilabs.com</h6>
        <h6 className="footer_address1">ILERI LABS, </h6>
        <h6 className="footer_address">
          5, Williams Close, Off Babs Animashaun, Aguda, Surulere
        </h6>
        <h6 className="footer_address2">Lagos. 101283</h6>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h6 className="footer_header">Learn More</h6>
        {/* LINKS */}
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            Our Story
          </Link>
        </h6>
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            The Private Label Process
          </Link>
        </h6>
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            Get Samples
          </Link>
        </h6>
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            Custom Formulation
          </Link>
        </h6>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h6 className="footer_header">Customer Care</h6>
        {/* LINKS */}
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            Company Policies
          </Link>
        </h6>
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            FAQs
          </Link>
        </h6>
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            Contact Us
          </Link>
        </h6>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h6 className="footer_header">Customer Care</h6>
        {/* LINKS */}
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            Questions or feedback ?
          </Link>
        </h6>
        <h6 className="footer_nav">
          <Link className="footer_nav" to="#">
            We’d love to hear from you
          </Link>
        </h6>
        {/* ICONS */}
        <div className="footer_icons">
          <Link to="#" className="footer_icon">
            <FaFacebook className="single_footer_icon"/>
          </Link>
          <Link to="#" className="footer_icon">
            <FaTwitter className="single_footer_icon"/>
          </Link>
          <Link to="#" className="footer_icon">
            <FaInstagram className="single_footer_icon"/>
          </Link>
        </div>
      </Col>
    </SubContainer>
  );
};

export default Footer;
