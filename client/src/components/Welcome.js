import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";
import { dashboardBImage as image } from "../assets";
import Greeting from "./Greeting";
import Quote from "./Quote";
import { playIcon } from "../assets";

const Welcome = () => {
  return (
    <>
      <div className={classes["welcome"]}>
        <div className={classes["welcome__accent-shape"]}></div>
        <div
          style={{
            background: `url(${image})`,
          }}
          className={classes["welcome__b-image"]}
        >
          <div className={classes["welcome__blur-cancel"]}>
            <Greeting />
            <Link to="soon" className={classes["btn"]}>
              <img
                width="24"
                height="27"
                src={playIcon}
                alt="Begin a session"
              />
              <p>Begin a session</p>
            </Link>
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
