import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBug: [],
};

export const bugsSlice = createSlice({
  name: "selectedBug",
  initialState,
  reducers: {
    selectBug: (state, action) => {
      state.selectedBug = action.payload;
    },
  },
});

export const { selectBug } = bugsSlice.actions;

export default bugsSlice.reducer;
