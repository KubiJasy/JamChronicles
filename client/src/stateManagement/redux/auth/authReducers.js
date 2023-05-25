import { UPDATE_AUTH } from "./authTypes";

const initalState = {
  authUser: null,
};

export function reducer(prevState = initalState, action) {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        authUser: action.payload.user,
      };
    default:
      return prevState;
  }
}
