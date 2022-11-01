import React, { useState } from "react";

import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugList from "./BugList";

const MainPage = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex min-h-screen md:h-screen bg-gray-50 dark:bg-gray-900">
      <DesktopSidebar />
      <MobileSidebar openMenu={openMenu} />

      <div className="flex flex-col flex-1">
        <Nabvar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          dark={props.dark}
          setDark={props.setDark}
        />
        <BugList />
      </div>
    </div>
  );
};

export default MainPage;
