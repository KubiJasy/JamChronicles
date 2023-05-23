import { constructionSVG } from "../assets";
import { Link } from "react-router-dom";
import { Footer } from "../components";

const ComingSoon = () => {
  return (
    <>
      <main
        style={{
          maxWidth: "1400px",
          margin: "197px auto 343px",
          fontFamily: "Nunito Sans, sans-serif",
          color: "var(--fresh-air)",
          textAlign: "center",
          fontSize: "var(--font-size-xl)",
        }}
      >
        <img src={constructionSVG} alt="under construction" />
        <p>This page is under construction.</p>
        <p>
          Come back later when this{" "}
          <span
            style={{
              fontWeight: "400",
            }}
            className="accent-text-orange"
          >
            “room”
          </span>{" "}
          has been completed.
        </p>
        <p>
          Back to{" "}
          <span
            style={{
              fontWeight: "400",
            }}
            className="accent-text-orange"
          >
            <Link
              style={{
                color: "inherit",
              }}
              to=".."
            >
              previous
            </Link>
          </span>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoon;
