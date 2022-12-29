import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { getToken } = authSlice.actions;

export default authSlice.reducer;
