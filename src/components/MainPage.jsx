import React, { useState } from "react";

import DesktopSidebar from "./DesktopSidebar";
import MobileNabvar from "./MobileNavbar";
import MobileSidebar from "./MobileSidebar";

const MainPage = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <DesktopSidebar />
      <MobileSidebar openMenu={openMenu} />
      <MobileNabvar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        dark={props.dark}
        setDark={props.setDark}
      />
    </div>
  );
};

export default MainPage;
