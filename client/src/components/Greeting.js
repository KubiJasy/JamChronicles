import classes from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={classes["container"]}>
      <p className={classes["greeting"]}>
        <span className={classes["greeting__intro"]}>Hi, </span>
        <br />
        Good morning <span className={classes["greeting__name"]}>Jasmine</span>
      </p>
    </div>
  );
};

export default Greeting;
