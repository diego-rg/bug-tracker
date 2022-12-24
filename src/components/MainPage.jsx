import React, { useState, useEffect } from "react";

import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugCards from "./BugCards";
import CreateBug from "./CreateBug";
import Loader from "./Loader";

const MainPage = (props) => {
  const [term, setTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [showCreateBug, setShowCreateBug] = useState(false);

  //Hide scroll on modal open
  const scrollbarVisible = () => {
    return document.body.clientHeight > window.innerHeight;
  };

  useEffect(() => {
    showCreateBug && scrollbarVisible()
      ? document.getElementById("app-container").classList.add("mr-4")
      : document.getElementById("app-container").classList.remove("mr-4");

    showCreateBug
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {props.loading && <Loader />}

      {showCreateBug && (
        <CreateBug show={showCreateBug} setShow={setShowCreateBug} />
      )}

      <DesktopSidebar
        showCreateBug={showCreateBug}
        setShowCreateBug={setShowCreateBug}
      />

      <MobileSidebar
        showCreateBug={showCreateBug}
        setShowCreateBug={setShowCreateBug}
        openMenu={openMenu}
      />

      <div className="w-full">
        <Nabvar
          term={term}
          setTerm={setTerm}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <BugCards term={term} />
      </div>
    </div>
  );
};

export default MainPage;
