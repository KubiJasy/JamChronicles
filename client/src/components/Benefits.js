import classes from "./Benefits.module.css";
import {
  manageSongs,
  customisedPractice,
  learningProgress,
  practiceSchedule,
} from "../assets";
import RoundedCard from "../components/RoundedCard";

const Benefits = () => {
  return (
    <>
      {/* Benefits.... */}
      <section className={classes["benefits"]}>
        <h3>
          With <span className="accent-text-orange">JamChronicles</span>, you
          can ....
        </h3>
        <div className={classes["card-list"]}>
          <div className={classes["card-list__item"]}>
            <RoundedCard>
              <img src={manageSongs} alt="" />
              <p
                className={`${classes["card-text"]} ${classes["card-text-1"]}`}
              >
                Manage All of Your Songs and Musical Pieces in One Place
              </p>
            </RoundedCard>
          </div>
          <div className={classes["card-list__item"]}>
            <RoundedCard>
              <img src={customisedPractice} alt="" />
              <p
                className={`${classes["card-text"]} ${classes["card-text-2"]}`}
              >
                create customized practice sessions
              </p>
            </RoundedCard>
          </div>

          <div className={classes["card-list__item"]}>
            <RoundedCard>
              <img src={learningProgress} alt="" />
              <p
                className={`${classes["card-text"]} ${classes["card-text-3"]}`}
              >
                track your song learning progress
              </p>
            </RoundedCard>
          </div>

          <div className={classes["card-list__item"]}>
            <RoundedCard>
              <img src={practiceSchedule} alt="" />
              <p
                className={`${classes["card-text"]} ${classes["card-text-4"]}`}
              >
                Plan Your Practice Schedule in Advance
              </p>
            </RoundedCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
