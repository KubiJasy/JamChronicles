import { Welcome, Calendar, AppNavigation, Footer } from "../components";
import classes from "./Dashboard.module.css";

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
