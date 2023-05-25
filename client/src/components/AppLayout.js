import { Outlet } from "react-router-dom";

import AppHeader from "./AppHeader";

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default AppLayout;

// export const loader = () => {
//   console.log("app layout loader fired...");
//   return null;
// };
