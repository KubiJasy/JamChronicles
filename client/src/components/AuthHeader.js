import classes from "./AuthHeader.module.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header className={classes["header-container"]}>
      <Link to="/">
        <img width="800" height="170" src={logo} alt="JamChronicles Logo" />
      </Link>
    </header>
  );
};

export default AuthHeader;
