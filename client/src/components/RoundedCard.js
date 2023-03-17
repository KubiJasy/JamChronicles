import React from "react";
import classes from "./RoundedCard.module.css";

const RoundedCard = (props) => {
  return <div className={classes["card"]}>{props.children}</div>;
};

export default RoundedCard;
