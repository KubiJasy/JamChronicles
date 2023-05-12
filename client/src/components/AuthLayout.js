import { Outlet } from "react-router";
import AuthHeader from "./AuthHeader";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
};

export default AuthLayout;
