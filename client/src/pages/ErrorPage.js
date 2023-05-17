import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./ErrorPage.module.css";
import AuthHeader from "../components/AuthHeader";
import { Footer } from "../components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <AuthHeader />
      <div className={classes["mainbox"]}>
        <div className={classes["err"]}>4</div>
        <FontAwesomeIcon
          className={classes["far"]}
          icon={icon({ name: "question-circle", style: "regular" })}
          spin
        />
        <div className={classes["err2"]}>4</div>
        <div className={classes["msg"]}>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go{" "}
            <Link className={classes["link"]} to="/">
              home
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
