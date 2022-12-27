import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugCards from "./BugCards";
import CreateBug from "./CreateBug";
import BugDetails from "./BugDetails";
import DeleteBug from "./DeleteBug";
import UpdateBug from "./UpdateBug";

const MainPage = () => {
  const showCreateBugModal = useSelector((state) => state.modals.isOpenCreate);
  const showDetailsBugModal = useSelector((state) => state.modals.isOpenDetails);
  const showDeleteBugModal = useSelector((state) => state.modals.isOpenDelete);
  const showUpdateBugModal = useSelector((state) => state.modals.isOpenUpdate);
  const [openMenu, setOpenMenu] = useState(false);

  //Hide scroll on modal open
  const isScrollbarVisible = () => {
    return document.body.clientHeight > window.innerHeight;
  };

  useEffect(() => {
    (showCreateBugModal || showDetailsBugModal || showDeleteBugModal || showUpdateBugModal) && isScrollbarVisible()
      ? document.getElementById("app-container").classList.add("mr-4")
      : document.getElementById("app-container").classList.remove("mr-4");

    showCreateBugModal || showDetailsBugModal || showDeleteBugModal || showUpdateBugModal
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {showCreateBugModal && <CreateBug />}
      {showDetailsBugModal && <BugDetails />}
      {showDeleteBugModal && <DeleteBug />}
      {showUpdateBugModal && <UpdateBug />}

      <DesktopSidebar />
      <MobileSidebar openMenu={openMenu} />

      <div className="w-full">
        <Nabvar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <BugCards />
      </div>
    </div>
  );
};

export default MainPage;
