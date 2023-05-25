import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth/authReducers";

const store = configureStore({ reducer: authReducer });
export default store;
