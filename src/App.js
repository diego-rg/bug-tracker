import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MainPage from "./components/MainPage";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [loading, setLoading] = useState(false);

  // Garda o estado do theme no localStorage + aplica a clase para cambialo
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

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
