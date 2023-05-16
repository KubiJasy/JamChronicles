import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return props.link ? (
    <Link
      to={props.navigateTo}
      className={`${classes["btn"]} ${props.className}`}
    >
      {props.children}
    </Link>
  ) : (
    <button
      type={props.type}
      className={`${classes["btn"]} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
