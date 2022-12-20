import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MainPage from "./components/MainPage";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    darkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  });

  return (
    <div id="app-container">
      <MainPage loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
