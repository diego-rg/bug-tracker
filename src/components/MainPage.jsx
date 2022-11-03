import React, { useState, useEffect } from "react";

import getBugs from "../scripts/getBugs";
import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugCards from "./BugCards";
import CreateBug from "./CreateBug";

const MainPage = (props) => {
  const [bugs, setBugs] = useState([]);
  const [term, setTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
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

      <div className="w-full">
        <Nabvar
          term={term}
          setTerm={setTerm}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          dark={props.dark}
          setDark={props.setDark}
        />
        <BugCards bugs={bugs} setBugs={setBugs} term={term} />
      </div>
    </div>
  );
};

export default MainPage;
