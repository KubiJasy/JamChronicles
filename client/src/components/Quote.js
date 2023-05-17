import classes from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={classes["container"]}>
      <p className={classes["quote"]}>
        <q>
          In some ways, my gift for music and writing was born out of tragedy,
          really, and loss
        </q>
        <br />
        <span className={classes["quote__author"]}>-Joni Mitchell</span>
      </p>
    </div>
  );
};

export default Quote;
