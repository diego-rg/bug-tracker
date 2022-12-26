import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainPage from "./components/MainPage";
import Login from "./components/Login";
// import Loader from "./components/Loader";
// import { useGetCurrentUserQuery } from "./features/auth/authApi";

function App() {
  //state + reducerName(store) + stateName(slice)
  const darkMode = useSelector((state) => state.theme.darkMode);

  // const {
  //   data: currentUser,
  //   error: currentUserError,
  //   isLoading: isLoadingCurrentUser,
  // } = useGetCurrentUserQuery();

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
