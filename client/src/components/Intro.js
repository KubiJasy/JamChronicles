import classes from "./Intro.module.css";
import { diaryImg } from "../assets";

const Intro = () => {
  return (
    <>
      {/* Introduction.... */}
      <section className={classes["intro-container"]}>
        <div className={classes["intro-left"]}>
          <h3>
            Introducing{" "}
            <span className="accent-text-orange">JamChronicles</span>
          </h3>
          <p className={classes["intro-text"]}>
            The innovative app that will <br /> revolutionize the way you{" "}
            <span className="accent-text-blue">organize</span> <br /> and{" "}
            <span className="accent-text-blue">learn</span> your music!
          </p>
        </div>
        <div className={classes["intro-background"]}>
          <img src={diaryImg} alt="" />
        </div>
      </section>
    </>
  );
};

export default Intro;
