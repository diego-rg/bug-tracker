import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import getCookie from "./scripts/getCookie";
import { getToken } from "./features/auth/authSlice";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Loader from "./components/Loader";
import { useGetCurrentUserQuery } from "./features/auth/authApi";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const { data: currentUser, error: currentUserError, isLoading: isLoadingCurrentUser } = useGetCurrentUserQuery();

  const tokenCookie = getCookie("token");
  dispatch(getToken(tokenCookie));

  // Theme
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    darkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  });

  return (
    <div id="app-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      {currentUserError ? (
        <p>ERROR</p>
      ) : isLoadingCurrentUser ? (
        <Loader />
      ) : currentUser ? (
        <>{currentUser.name}</>
      ) : null}
    </div>
  );
}

export default App;
