import React, { useState, useEffect } from "react";

import bugsAPI from "../apis/bugs";
import DesktopSidebar from "./DesktopSidebar";
import Nabvar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import BugCards from "./BugCards";
import CreateBug from "./CreateBug";
import Loader from "./Loader";

const MainPage = (props) => {
  const [bugs, setBugs] = useState([]);
  const [term, setTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [showCreateBug, setShowCreateBug] = useState(false);

  const getBugs = async () => {
    try {
      props.setLoading(true);
      const { data } = await bugsAPI.get("/bugs");
      setBugs(data.bugs);
      props.setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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

  //Get all bugs
  useEffect(() => {
    getBugs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {props.loading && <Loader />}

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
