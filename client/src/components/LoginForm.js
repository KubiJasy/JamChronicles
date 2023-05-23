import { useSubmit, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Card from "./Card";
import { loginPicture } from "../assets";
import classes from "./LoginForm.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const loginForm = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, control, getValues } = loginForm;
  const { errors, isDirty, isValid } = formState;

  const submit = useSubmit();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    submit(data, { action: "/login", method: "post" });
  };

  const formValues = getValues();

  const getInputState = (fieldName) => {
    if (!formValues[fieldName]) {
      return classes["invalid"];
    } else if (!!formValues[fieldName] && !!errors[fieldName]) {
      return classes["invalid"];
    } else {
      return classes["valid"];
    }
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes["form-control"]}>
                  <input
                    className={getInputState("email")}
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: { value: true, message: "Email is required" },
                    })}
                  />
                  <p className={classes["form-control__error"]}>
                    {errors.email && `⚠ ${errors.email?.message}`}
                  </p>
                </div>
                <div className={classes["form-control"]}>
                  <input
                    className={getInputState("password")}
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "Minimum length of password must be 8 characters",
                      },
                    })}
                  />
                  <p className={classes["form-control__error"]}>
                    {errors.password && `⚠ ${errors.password?.message}`}
                  </p>
                </div>
                <div className={classes["container__submit"]}>
                  <Button
                    disabled={!isDirty || !isValid}
                    type="submit"
                    className={classes["login__btn"]}
                  >
                    {navigation.state === "submitting"
                      ? "Logging in..."
                      : "Login"}
                  </Button>
                  <p className={classes["redirect"]}>
                    Don't have an account?{" "}
                    <Link
                      className="accent-text-orange__link-normal"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
              <DevTool control={control} />
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default LoginForm;
