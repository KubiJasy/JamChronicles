import axios from "../api/axios";
import { useNavigate, redirect } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useAuth } from "../../State Management/Context/AuthContext";
import { LoginForm } from "../components";
import { Footer } from "../components";

import store from "../stateManagement/redux/store";
import { updateAuth } from "../stateManagement/redux/auth/authActions";
import { storeAccessToken, getAccessToken } from "../utils/localStorageFunc";
const Login = () => {
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
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;

export async function action({ request }) {
  console.log("In login action");
  const formData = await request.formData();

  const submission = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // console.log(submission);

  // send POST request to the backend
  try {
    const res = await axios.post(`/auth/login`, submission, {
      withCredentials: true,
    });
    const { success, accessToken, user } = res.data;

    // handle ok response by redirecting to /app and saving the JWS token in either localStorage or in a cookie

    if (success && res.status === 200) {
      storeAccessToken(accessToken);
      store.dispatch(
        updateAuth({
          user,
        })
      );
    }

    return redirect("/app");
  } catch (err) {
    // handle errors by throwing them and handling them in the flash message component

    console.log(err);
    return null;
  }
}
