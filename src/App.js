import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import getCookie from "./scripts/getCookie";
import { getToken } from "./features/auth/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import MainPage from "./components/MainPage";
import Login from "./components/Login";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const token = useSelector((state) => state.auth.token);

  dispatch(getToken(getCookie("token")));
  console.log(token);

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
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
