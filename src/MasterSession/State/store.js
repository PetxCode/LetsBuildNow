import { configureStore } from "@reduxjs/toolkit";
import authUser from "./authGame";

export const store = configureStore({
  reducer: authUser,
});
