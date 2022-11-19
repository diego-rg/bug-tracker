import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Login from "./components/Login";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  });

  return (
    <div id="app-container">
      <Routes>
        <Route path="/" element={<MainPage dark={dark} setDark={setDark} />} />
        <Route
          path="/login"
          element={<Login dark={dark} setDark={setDark} />}
        />
      </Routes>
    </div>
  );
}

export default App;
