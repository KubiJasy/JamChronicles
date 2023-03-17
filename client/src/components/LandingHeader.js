import React from "react";
import logo from "../assets/logo.svg";
import classes from "./LandingHeader.module.css";
import Button from "./Button";

const LandingHeader = () => {
  return (
    <header className={classes["header-container"]}>
      <img width="180" height="43" src={logo} alt="JamChronicles Logo" />
      <Button>Login</Button>
    </header>
  );
};

export default LandingHeader;
