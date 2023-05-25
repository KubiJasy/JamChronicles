import classes from "./AppHeader.module.css";
import { logo } from "../assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "./Button";
import logout from "../utils/logout";
import { updateAuth } from "../stateManagement/redux/auth/authActions";

const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(updateAuth({ user: null }));
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <header className={classes["app-header"]}>
        <Link to="/app">
          <img width="180" height="43" src={logo} alt="JamChronicles" />
        </Link>
        <div className={classes["app-header__links"]}>
          <NavLink className={classes["app-header__link"]} to="soon">
            Account
          </NavLink>
          <NavLink className={classes["app-header__link"]} to="soon">
            Support
          </NavLink>
          <Button
            onClick={logoutHandler}
            className={classes["app-header__btn"]}
          >
            Log Out
          </Button>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
