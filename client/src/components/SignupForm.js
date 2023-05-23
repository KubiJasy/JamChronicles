import { useSubmit, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import classes from "./SignupForm.module.css";
import { signupPicture } from "../assets";
import Card from "./Card";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const signUpForm = useForm({ mode: "onBlur" });
  const { register, handleSubmit, formState, control, getValues } = signUpForm;
  const { errors, isDirty, isValid } = formState;

  const submit = useSubmit();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    submit(data, { action: "/signup", method: "post" });
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
            <img src={signupPicture} alt="Signup stock imagae" />
          </div>
          <div className={classes["form-components"]}>
            <div className={classes["signup-form"]}>
              <p className={classes["form-caption"]}>Create an account</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes["form-control"]}>
                  <input
                    className={getInputState("first_name")}
                    type="text"
                    placeholder="First Name"
                    {...register("first_name", {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                    })}
                  />
                  <p className={classes["form-control__error"]}>
                    {errors.first_name && `⚠ ${errors.first_name?.message}`}
                  </p>
                </div>
                <div className={classes["form-control"]}>
                  <input
                    className={getInputState("last_name")}
                    type="text"
                    placeholder="Last Name"
                    {...register("last_name", {
                      required: {
                        value: true,
                        message: "Last name is required",
                      },
                    })}
                  />
                  <p className={classes["form-control__error"]}>
                    {errors.last_name && `⚠ ${errors.last_name?.message}`}
                  </p>
                </div>
                <div className={classes["form-control"]}>
                  <input
                    className={getInputState("email")}
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
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
                    className={classes["signup__btn"]}
                  >
                    {navigation.state === "submitting"
                      ? "Creating account..."
                      : "Create account"}
                  </Button>
                  <p className={classes["redirect"]}>
                    Already have an account?{" "}
                    <Link
                      className="accent-text-orange__link-normal"
                      to="/login"
                    >
                      Log in
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

export default SignupForm;
