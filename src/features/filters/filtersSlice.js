import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: "",
  status: "",
  priority: "",
  severity: "",
};

export const filterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    setSeverity: (state, action) => {
      state.severity = action.payload;
    },
  },
});

export const { setTerm, setStatus, setPriority, setSeverity } = filterSlice.actions;

export default filterSlice.reducer;
