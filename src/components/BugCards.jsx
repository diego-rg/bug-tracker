import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  useGetAllBugsQuery,
  // useGetBugByIdQuery,
} from "../features/bugs/bugsApi";
import bugsAPI from "../apis/bugs";
import BugDetails from "./BugDetails";
import UpdateBug from "./UpdateBug";
import DeleteBug from "./DeleteBug";
import FilterOptions from "./FilterOptions";
import Loader from "./Loader";

const BugCards = () => {
  const dispatch = useDispatch();
  const selectedBug = useSelector((state) => state.selectedBug);
  const term = useSelector((state) => state.filters.term);
  const status = useSelector((state) => state.filters.status);
  const priority = useSelector((state) => state.filters.priority);
  const severity = useSelector((state) => state.filters.severity);

  // const {
  //   data: bug,
  //   error: bugError,
  //   isLoading: isLoadingBug,
  // } = useGetBugByIdQuery(selectedBug);

  const { data: bugs, error: bugsError, isLoading: isLoadingBugs } = useGetAllBugsQuery();

  const [showBugDetails, setShowBugDetails] = useState(false);
  const [showUpdateBug, setShowUpdateBug] = useState(false);
  const [showDeleteBug, setShowDeleteBug] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  //Hide scroll on modal open
  const scrollbarVisible = () => {
    return document.body.clientHeight > window.innerHeight;
  };

  useEffect(() => {
    (showBugDetails || showUpdateBug || showDeleteBug) && scrollbarVisible()
      ? document.getElementById("app-container").classList.add("mr-4")
      : document.getElementById("app-container").classList.remove("mr-4");

    showBugDetails || showUpdateBug || showDeleteBug
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");
  });

  //Set selected bug data to fill the form
  const getBugById = async (bugId) => {
    try {
      const { data } = await bugsAPI.get(`/bugs/${bugId}`);
      const { name, description, status, priority, severity } = data.bug;
      setFormValues({ name, description, status, priority, severity });
    } catch (error) {
      console.log(error);
    }
  };

  //Show details modal
  const openBugDetails = (bug) => {
    setShowBugDetails(true);
    dispatch(selectedBug);
  };

  //Show update modal
  const openUpdateBug = (bug) => {
    getBugById(bug._id);
    setShowUpdateBug(true);
    dispatch(selectedBug);
  };

  //Show delete modal
  const openDeleteBug = (bug) => {
    setShowDeleteBug(true);
    dispatch(selectedBug);
  };

  return (
    <main>
      <FilterOptions />

      <div className="flex flex-wrap justify-evenly p-2">
        {bugsError ? (
          <p>ERROR</p>
        ) : isLoadingBugs ? (
          <Loader />
        ) : bugs ? (
          <>
            {bugs.bugs
              .filter(
                (bug) =>
                  (bug.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .includes(term) ||
                    bug.description
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(term)) &&
                  bug.status.includes(status) &&
                  bug.priority.includes(priority) &&
                  bug.severity.includes(severity)
              )
              .map((bug) => {
                return (
                  <div key={bug._id} className="card-container">
                    <h5 className="card-title">
                      {bug.name.length > 27 ? bug.name.slice(0, 27).concat("", "...") : bug.name}
                    </h5>
                    <ul className="card-list">
                      <li>Status: {bug.status}</li>
                      <li>Priority: {bug.priority}</li>
                      <li>Severity: {bug.severity}</li>
                    </ul>

                    <button onClick={() => openBugDetails(bug)} className="btn-primary ">
                      Details
                    </button>
                    <button onClick={() => openUpdateBug(bug)} className="btn-primary ">
                      Edit
                    </button>
                    <button onClick={() => openDeleteBug(bug)} className="btn-danger">
                      Delete
                    </button>
                  </div>
                );
              })}
          </>
        ) : null}

        {showBugDetails && <BugDetails bugData={selectedBug} show={showBugDetails} setShow={setShowBugDetails} />}

        {showDeleteBug && <DeleteBug bugId={selectedBug._id} show={showDeleteBug} setShow={setShowDeleteBug} />}

        {showUpdateBug && (
          <UpdateBug bugId={selectedBug._id} show={showUpdateBug} setShow={setShowUpdateBug} formValues={formValues} />
        )}
      </div>
    </main>
  );
};

export default BugCards;
