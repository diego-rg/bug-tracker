import React, { useState, useEffect } from "react";

import BugList from "./components/BugList";
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
      <BugList />
    </div>
  );
}

export default App;
