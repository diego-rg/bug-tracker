import React, { useState, useEffect } from "react";

import getBugs from "../scripts/getBugs";
import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugList from "./BugList";
import CreateBug from "./CreateBug";

const MainPage = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [bugs, setBugs] = useState([]);
  const [showCreateBug, setShowCreateBug] = useState(false);

  //Get all bugs
  useEffect(() => {
    getBugs(setBugs);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {showCreateBug && (
        <CreateBug
          setBugs={setBugs}
          show={showCreateBug}
          setShow={setShowCreateBug}
        />
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

      <div className="flex flex-col flex-1">
        <Nabvar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          dark={props.dark}
          setDark={props.setDark}
        />
        <BugList bugs={bugs} setBugs={setBugs} />
      </div>
    </div>
  );
};

export default MainPage;
