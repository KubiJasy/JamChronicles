import { UPDATE_AUTH } from "./authTypes";

export const updateAuth = (payload) => {
  return {
    type: UPDATE_AUTH,
    info: "Update the auth state of the application",
    payload,
  };
};
