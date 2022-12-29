import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import getCookie from "./scripts/getCookie";
import { getToken } from "./features/auth/auth.slice";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
// import Loader from "./components/Loader";
// import { useGetCurrentUserQuery } from "./features/auth/authApi";

function App() {
  const dispatch = useDispatch();
  //state + reducerName(store) + stateName(slice)
  const darkMode = useSelector((state) => state.theme.darkMode);

  const token = useSelector((state) => state.auth.token);
  console.log(token);
  // const {
  //   data: currentUser,
  //   error: currentUserError,
  //   isLoading: isLoadingCurrentUser,
  // } = useGetCurrentUserQuery();

  useEffect(() => {
    const tokenCookie = getCookie("token");
    dispatch(getToken(tokenCookie));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {/* {currentUserError ? (
        <p>ERROR</p>
      ) : isLoadingCurrentUser ? (
        <Loader />
      ) : currentUser ? (
        <>{currentUser}</>
      ) : null} */}
    </div>
  );
}

export default App;
