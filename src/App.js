import React, { useState, useEffect } from "react";

import MainPage from "./components/MainPage";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  });

  return (
    <div>
      <MainPage dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
