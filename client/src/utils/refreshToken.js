import axios from "../api/axios";

export default async function refreshToken() {
  const response = await axios.get("/auth/regenerate-token", {
    withCredentials: true,
  });
  return response.data;
}
