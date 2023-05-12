// I have to add routing, button hover states and anchor hover states
// also see how to refactor the dashboard page to use just a bunch of components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/ComingSoon";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthLayout from "./components/AuthLayout";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "soon", element: <ComingSoon /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
