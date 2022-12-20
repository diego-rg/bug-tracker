import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
