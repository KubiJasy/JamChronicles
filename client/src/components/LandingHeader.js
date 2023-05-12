import React from "react";
import logo from "../assets/logo.svg";
import classes from "./LandingHeader.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <header className={classes["header-container"]}>
      <Link to="/">
        <img width="180" height="43" src={logo} alt="JamChronicles Logo" />
      </Link>
      <Button className={classes["login__btn"]} link={true} navigateTo="/login">
        Login
      </Button>
    </header>
  );
};

export default LandingHeader;
