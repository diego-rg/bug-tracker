import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import bugsSlice from "../features/bugs/bugsSlice";
import themeSlice from "../features/theme/themeSlice";
import filtersSlice from "../features/filters/filtersSlice";
import modalSlice from "../features/modals/modalSlice";
import authSlice from "../features/auth/auth.slice";
import { authApi } from "../features/auth/authApi";
import { bugsApi } from "../features/bugs/bugsApi";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    bugs: bugsSlice,
    filters: filtersSlice,
    modals: modalSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [bugsApi.reducerPath]: bugsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, bugsApi.middleware]),
});

setupListeners(store.dispatch);
