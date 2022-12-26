import React, { useState, useEffect } from "react";

import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugCards from "./BugCards";
import CreateBug from "./CreateBug";

const MainPage = () => {
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
        <Nabvar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <BugCards />
      </div>
    </div>
  );
};

export default MainPage;
