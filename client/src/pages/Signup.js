import SignupForm from "../components/SignupForm";
import { Footer } from "../components";
import { redirect } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <SignupForm />
      <Footer />
    </>
  );
};

export default Signup;

export const action = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    firstName: data.get("first_name"),
    lastName: data.get("last_name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  console.log(submission);

  return redirect("/login");
};
