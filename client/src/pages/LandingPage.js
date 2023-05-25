// import { useAuth } from "../../State Management/Context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import { getAccessToken } from "../utils/localStorageFunc";

import {
  LandingHeader,
  Intro,
  Benefits,
  HumanTrigger,
  CTA,
  Footer,
} from "../components";

const Dashboard = () => {
  const token = getAccessToken();
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    if (authUser || token) {
      return navigate("/app", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <LandingHeader />
      <Intro />
      <Benefits />
      <HumanTrigger />
      <CTA />
      <Footer />
    </>
  );
};

export default Dashboard;
