import React from "react";
import classes from "./Footer.module.css";

import igSVG from "../assets/ig.svg";
import fbSVG from "../assets/fb.svg";

const Footer = () => {
  return (
    <footer className={classes["container"]}>
      <div className={classes["container__alignment"]}>
        <div className={classes["footer-content"]}>
          <div className={classes["icons"]}>
            <a href="##">
              <img src={igSVG} alt="" />
            </a>
            <a href="##">
              <img src={fbSVG} alt="" />
            </a>
          </div>
          <p className="monstserrat-s">
            <span className="bold">Support:</span>{" "}
            <a href="mailto:support@xyz.com">support@xyz.com</a>
          </p>
          <p className="monstserrat-xs">&#169; 2023 JamChronicles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
