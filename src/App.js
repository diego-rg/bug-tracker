import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Loader from "./components/Loader";
import { useGetCurrentUserQuery } from "./features/api/apiSlice";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { data, error, isLoading, isSuccess } = useGetCurrentUserQuery();

  console.log(data);

  const [loading, setLoading] = useState(false);

  // Garda o estado do theme no localStorage + aplica a clase para cambialo
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    darkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  });

  return (
    <div id="app-container">
      <Routes>
        <Route
          path="*"
          element={<MainPage loading={loading} setLoading={setLoading} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="isErrorIsLoading">
        {error && <p>An error occured</p>}
        {isLoading && <Loader />}
      </div>
      {isSuccess && <>{data}</>}
    </div>
  );
}

export default App;
