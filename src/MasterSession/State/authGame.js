import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
};

const authGame = createSlice({
  name: "userData",
  initialState,
  reducers: {
    activeUser: (state, { payload }) => {
      state.userName = payload.userName;
      state.userEmail = payload.userEmail;
    },
    logOut: (state) => {
      state.userEmail = null;
      state.userName = null;
    },
  },
});

export const { activeUser, logOut } = authGame.actions;

export const selectUserEmail = (state) => state.userData.userEmail;
export const selectUserName = (state) => state.userData.userName;

export default authGame.reducer;
