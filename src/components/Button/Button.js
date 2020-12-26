import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.page ? props.page : "#"}>
      <button
        {...props}
        onClick={props.onClick}
        className={props.coloured ? "btn-cont coloured" : "btn-cont"}
      >
        <p className="btn_text">{props.title}</p>
      </button>
    </Link>
  );
};

export default Button;
