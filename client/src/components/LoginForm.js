import { Form } from "react-router-dom";
import Card from "./Card";
import { loginPicture } from "../assets";
import classes from "./LoginForm.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <main className={classes["main"]}>
      <Card>
        <div className={classes["main__form"]}>
          <div className={classes["auth-stock-image"]}>
            <img src={loginPicture} alt="login stock imagae" />
          </div>
          <div className={classes["form-components"]}>
            <div className={classes["login-form"]}>
              <p className={classes["form-caption"]}>Login</p>
              <p className={classes["form-caption__text"]}>
                Welcome back! Please enter your details.
              </p>
              <Form action="/login" method="post">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <div className={classes["container__submit"]}>
                  <Button type="submit" className={classes["login__btn"]}>
                    Login
                  </Button>
                  <p className={classes["redirect"]}>
                    Don't have an account?{" "}
                    <Link className="accent-text-orange__normal" to="/signup">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default LoginForm;
