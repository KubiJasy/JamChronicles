import classes from "./AppHeader.module.css";
import { logo } from "../assets";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const AppHeader = () => {
  return (
    <>
      <header className={classes["app-header"]}>
        <Link to="/">
          <img width="180" height="43" src={logo} alt="JamChronicles" />
        </Link>
        <div className={classes["app-header__links"]}>
          <NavLink className={classes["app-header__link"]} to="soon">
            Account
          </NavLink>
          <NavLink className={classes["app-header__link"]} to="soon">
            Support
          </NavLink>
          <Button link className={classes["app-header__btn"]}>
            Log Out
          </Button>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
