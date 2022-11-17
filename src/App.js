import React, { useState, useEffect } from "react";

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
      {/* <MainPage dark={dark} setDark={setDark} /> */}
      <Login />
    </div>
  );
}

export default App;
