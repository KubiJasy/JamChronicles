import { Link } from "react-router-dom";
import classes from "./NavigationCard.module.css";

const NavigationCard = ({
  bImage,
  overlayText,
  bImageBlur,
  width,
  height,
  overlayTextMont,
  link,
}) => {
  return (
    <div
      style={{
        background: `url(${bImage})`,
        backgroundSize: "cover",
        width: width,
        height: height,
      }}
    >
      <div
        className={
          bImageBlur ? classes["b-image-blur"] : classes["no-b-image-blur"]
        }
      >
        <p
          className={`${classes["overlay-text"]} ${
            overlayTextMont
              ? classes["overlay-text__montserrat"]
              : classes["overlay-text__poppins"]
          }`}
        >
          {link ? (
            <Link
              style={{
                textDecoration: "none",
                color: "var(--fresh-air)",
              }}
              to={link}
            >
              {overlayText}
            </Link>
          ) : (
            overlayText
          )}
        </p>
      </div>
    </div>
  );
};

export default NavigationCard;
