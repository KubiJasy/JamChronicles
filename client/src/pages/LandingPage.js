import LandingHeader from "../components/LandingHeader";
import Footer from "../components/Footer";
import RoundedCard from "../components/RoundedCard";
import Button from "../components/Button";
import classes from "./LandingPage.module.css";
import diaryImg from "../assets/diaryImg.png";
import manageSongs from "../assets/manageSongs.png";
import customisedPractice from "../assets/customisedPractice.png";
import learningProgress from "../assets/learningProgress.png";
import practiceSchedule from "../assets/practiceSchedule.png";
import frustatedImg from "../assets/frustatedImg.png";

const Dashboard = () => {
  return (
    <>
      <LandingHeader />

      {/* Benefits.... */}
      <section className={classes["benefits"]}>
        <h3>
          With{" "}
          <span className={classes["accent-text-orange"]}>JamChronicles</span>,
          you can ....
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

      {/* Humantrigger */}
      <section className={classes.frustrated}>
        <img src={frustatedImg} alt="" />
        <div className={classes["frustrated__left"]}>
          <p>
            Say Goodbye to the{" "}
            <span className={classes["accent-text-blue"]}>Frustration</span> of
            a{" "}
            <span className={classes["accent-text-blue"]}>
              Disorganized Music Repertoire{" "}
            </span>
            and an{" "}
            <span className={classes["accent-text-blue"]}>
              Aimless Practice Routine
            </span>{" "}
          </p>
          <p>
            With{" "}
            <span className={classes["accent-text-orange"]}>JamChronicles</span>
            , You'll Have Everything You Need to{" "}
            <span className={classes["accent-text-orange"]}>Level Up</span> in
            Your Musical Journey
          </p>
        </div>
      </section>

      {/* call to action */}
      <section className={classes["call-to-action"]}>
        <div className={classes["call-to-action__text"]}>
          <p>
            Try it now for{" "}
            <span className={classes["accent-text-orange"]}>FREE!</span>
          </p>
        </div>
        <div className={classes["call-to-action__right"]}>
          <p>
            Don't <span className="semi-bold">miss out</span> on the{" "}
            <span className={classes["accent-text-blue"]}>future</span> of song
            learning
          </p>
          <p>
            Join{" "}
            <span className={classes["accent-text-orange"]}>JamChronicles</span>{" "}
            today and unleash your full musical potential!
          </p>
          <Button link={true} navigateTo="/signup">
            Sign Up
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
