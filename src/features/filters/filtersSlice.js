import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: "",
};

export const filterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const { setTerm } = filterSlice.actions;

export default filterSlice.reducer;
