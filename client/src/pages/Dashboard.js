import { Welcome, Calendar, AppNavigation, Footer } from "../components";
import classes from "./Dashboard.module.css";
import checkLogin from "../utils/checkLogin";
import store from "../stateManagement/redux/store";

const { authUser } = store.getState();

const Dashboard = () => {
  return (
    <>
      <main className={classes["dashboard-main"]}>
        <Welcome />
        <Calendar />
        <AppNavigation />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;

export const loader = async () => {
  await checkLogin(authUser);
  return null;
};
