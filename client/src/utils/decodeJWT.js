import jwtDecode from "jwt-decode";

export default function decodeJWT(jwt) {
  return jwtDecode(jwt);
}
