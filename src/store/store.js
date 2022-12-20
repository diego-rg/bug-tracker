import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/themeSlice";
import modalSlice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    modal: modalSlice,
  },
});
