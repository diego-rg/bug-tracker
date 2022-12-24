import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import themeSlice from "../features/theme/themeSlice";
import { authApi } from "../features/auth/authApi";
import { bugsApi } from "../features/bugs/bugsApi";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
    [bugsApi.reducerPath]: bugsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, bugsApi.middleware]),
});

setupListeners(store.dispatch);
