import { redirect } from "react-router-dom";
import decodeJWT from "../utils/decodeJWT";
import expiredToken from "../utils/expiredToken";
import refreshToken from "../utils/refreshToken";
import store from "../stateManagement/redux/store";
import { updateAuth } from "../stateManagement/redux/auth/authActions";
import logout from "./logout";
import { storeAccessToken, getAccessToken } from "../utils/localStorageFunc";

export default async function checkLogin(authUser) {
  // route protection
  const token = getAccessToken();
  // if there is no access token, it means the user was never logged in or has logged out
  // therefore to access that dashboard page, redirect to login page and sign in
  if (!token) {
    throw redirect("/login");
  }
  // if the token exists, it means the user is signed in but the access token has expired.
  // a valid refresh token may exist so try generating a new access token. if this works out, go to the dashboard, else if there is an error, it means the user has to sign in again so redirect to the login page. Also remove the access token and setAuthUser to null so that the user starts afresh basically.
  const decodedToken = decodeJWT(token);
  const tokenExpired = expiredToken(decodedToken);

  if (tokenExpired) {
    try {
      const { user, accessToken } = await refreshToken();
      storeAccessToken(accessToken);
      store.dispatch(
        updateAuth({
          user,
        })
      );
      return true;
    } catch (err) {
      console.error(err);
      store.dispatch(
        updateAuth({
          user: null,
        })
      );
      await logout();
      throw redirect("/login");
    }
  }
  return true;
}
