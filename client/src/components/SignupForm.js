import { Form } from "react-router-dom";
import classes from "./SignupForm.module.css";
import { signupPicture } from "../assets";
import Card from "./Card";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <main className={classes["main"]}>
      <Card>
        <div className={classes["main__form"]}>
          <div className={classes["auth-stock-image"]}>
            <img src={signupPicture} alt="Signup stock imagae" />
          </div>
          <div className={classes["form-components"]}>
            <div className={classes["signup-form"]}>
              <p className={classes["form-caption"]}>Create an account</p>
              <Form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
              </Form>
              <div className={classes["container__submit"]}>
                <Button className={classes["signup__btn"]}>
                  Create account
                </Button>
                <p className={classes["redirect"]}>
                  Already have an account?{" "}
                  <Link className="accent-text-orange__normal" to="/login">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default SignupForm;
