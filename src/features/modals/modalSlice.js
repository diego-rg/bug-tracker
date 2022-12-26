import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenDetails: false,
  isOpenCreate: false,
  isOpenUpdate: false,
  isOpenDelete: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    switchDetailsBugModal: (state) => {
      state.isOpenDetails = !state.isOpenDetails;
    },
    switchCreateBugModal: (state) => {
      state.isOpenCreate = !state.isOpenCreate;
    },
    switchUpdateBugModal: (state) => {
      state.isOpenUpdate = !state.isOpenUpdate;
    },
    switchDeleteBugModal: (state) => {
      state.isOpenDelete = !state.isOpenDelete;
    },
  },
});

export const { switchDetailsBugModal, switchCreateBugModal, switchUpdateBugModal, switchDeleteBugModal } =
  modalSlice.actions;

export default modalSlice.reducer;
