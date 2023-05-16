import { LoginForm } from "../components";
import { Footer } from "../components";

const Login = () => {
  return (
    <>
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;

export const action = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };

  console.log(submission);

  // send POST request to the backend
  // handle ok response by redirecting to /app and saving the JWS token in either localStorage or in a cookie
  // handle errors by throwing them and handling them in the default error page
  return null;
};
