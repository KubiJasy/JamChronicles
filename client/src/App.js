//DONE I have to add routing
//button hover states and anchor hover states
//DONE also see how to refactor the dashboard page to use just a bunch of components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard, { loader as DashboardLoader } from "./pages/Dashboard";
import ComingSoon, { loader as ComingSoonLoader } from "./pages/ComingSoon";
import ErrorPage from "./pages/ErrorPage";
import Login, { action as LoginAction } from "./pages/Login";
import Signup, { action as SignupAction } from "./pages/Signup";
import { AuthLayout } from "./components";
import { ScrollToTop } from "./components";
import { AppLayout } from "./components";
// import { useAuth } from "../State Management/Context/AuthContext";

const App = () => {
  // const {
  //   authUser,
  //   setAuthUser,
  //   getAccessToken,
  //   storeAccessToken,
  //   removeAccessToken,
  // } = useAuth();

  const router = createBrowserRouter([
    {
      element: <ScrollToTop />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
              action: LoginAction,
            },
            { path: "signup", element: <Signup />, action: SignupAction },
          ],
        },
        {
          path: "/app",
          element: <AppLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
              loader: DashboardLoader,
            },
            {
              path: "soon",
              element: <ComingSoon />,
              loader: ComingSoonLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
