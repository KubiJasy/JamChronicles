import classes from "./HumanTrigger.module.css";
import { frustatedImg } from "../assets";

const HumanTrigger = () => {
  return (
    <>
      {/* Humantrigger */}
      <section className={classes.frustrated}>
        <img src={frustatedImg} alt="" />
        <div className={classes["frustrated__left"]}>
          <p>
            Say Goodbye to the{" "}
            <span className="accent-text-blue">Frustration</span> of a{" "}
            <span className="accent-text-blue">
              Disorganized Music Repertoire{" "}
            </span>
            and an{" "}
            <span className="accent-text-blue">Aimless Practice Routine</span>{" "}
          </p>
          <p>
            With <span className="accent-text-orange">JamChronicles</span>,
            You'll Have Everything You Need to{" "}
            <span className="accent-text-orange">Level Up</span> in Your Musical
            Journey
          </p>
        </div>
      </section>
    </>
  );
};

export default HumanTrigger;
