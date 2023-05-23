import classes from "./CalltoAction.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CalltoAction = () => {
  return (
    <>
      {/* call to action */}
      <section className={classes["call-to-action"]}>
        <div className={classes["call-to-action__text"]}>
          <p>
            Try it now for{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="accent-text-orange__link">FREE!</span>
            </Link>
          </p>
        </div>
        <div className={classes["call-to-action__right"]}>
          <p>
            Don't <span className="semi-bold">miss out</span> on the{" "}
            <span className="accent-text-blue">future</span> of song learning
          </p>
          <p>
            Join <span className="accent-text-orange">JamChronicles</span> today
            and unleash your full musical potential!
          </p>
          <Button
            className={classes["signup__btn"]}
            link={true}
            navigateTo="/signup"
          >
            Sign Up
          </Button>
        </div>
      </section>
    </>
  );
};

export default CalltoAction;
