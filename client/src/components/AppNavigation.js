import classes from "./AppNavigation.module.css";
import NavigationCard from "./NavigationCard";
import {
  practiceScheduleBackground,
  practiceSessionsBackground,
  progressReportBackground,
  repertoireBackground,
} from "../assets";

const AppNavigation = () => {
  const width = "45%";
  const height = "380px";
  return (
    <div className={classes["app-navigation"]}>
      <p
        className={`accent-text-orange-semibold ${classes["app-navigation__caption"]}`}
      >
        Access your...
      </p>
      <div className={classes["app-navigation__components"]}>
        <NavigationCard
          bImage={repertoireBackground}
          width={width}
          height={height}
          overlayText="Repertoire (Songs)"
          link="soon"
        />
        <NavigationCard
          bImage={practiceSessionsBackground}
          width={width}
          height={height}
          overlayText="Practice Sessions"
          link="soon"
        />
        <NavigationCard
          bImage={practiceScheduleBackground}
          bImageBlur
          width={width}
          height={height}
          overlayText="Practice Schedule"
          link="soon"
        />
        <NavigationCard
          bImage={progressReportBackground}
          width={width}
          height={height}
          overlayText="Progress Report"
          link="soon"
        />
      </div>
    </div>
  );
};

export default AppNavigation;
