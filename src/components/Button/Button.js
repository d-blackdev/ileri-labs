import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = (props) => {
  const buttonVariants = {
    hover: {
      x: [0,-20,0],

      transition: {
        yoyo: Infinity,
        delay: 0.3,
      },
    },
    // visible: {
    //   x: [0, -100, 100, -100, 100, 0],
    //   transition: {
    //     duration:5
    //   }
    // },
  };
  return (
    <Link to={props.page ? props.page : "#"}>
      <motion.button
        // variants={buttonVariants}
        // whileHover="hover"
        // animate="visible"
        {...props}
        onClick={props.onClick}
        className={
          props.coloured
            ? "btn-cont coloured"
            : props.wide_black
            ? "btn-cont wide black"
            : "btn-cont"
        }
      >
        <p className="btn_text">{props.title}</p>
      </motion.button>
    </Link>
  );
};

export default Button;
