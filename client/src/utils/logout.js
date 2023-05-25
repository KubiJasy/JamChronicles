import { removeAccessToken } from "./localStorageFunc";
import axios from "../api/axios";


export default async function logout () {
    removeAccessToken()
    const response = await axios.get("/auth/logout", {
        withCredentials: true,
      });
    return response.data;
}