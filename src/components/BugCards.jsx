import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useGetAllBugsQuery } from "../features/bugs/bugsApi";
import { selectBug } from "../features/bugs/bugsSlice";
import { switchDetailsBugModal } from "../features/modals/modalSlice";
import UpdateBug from "./UpdateBug";
import DeleteBug from "./DeleteBug";
import FilterOptions from "./FilterOptions";
import Loader from "./Loader";

const BugCards = () => {
  const dispatch = useDispatch();
  const term = useSelector((state) => state.filters.term);
  const status = useSelector((state) => state.filters.status);
  const priority = useSelector((state) => state.filters.priority);
  const severity = useSelector((state) => state.filters.severity);

  const { data: bugs, error: bugsError, isLoading: isLoadingBugs } = useGetAllBugsQuery();

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
    (showUpdateBug || showDeleteBug) && scrollbarVisible()
      ? document.getElementById("app-container").classList.add("mr-4")
      : document.getElementById("app-container").classList.remove("mr-4");

    showUpdateBug || showDeleteBug
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");
  });

  //Show details modal
  const openBugDetails = (bug) => {
    dispatch(switchDetailsBugModal());
    dispatch(selectBug(bug));
  };

  //Show update modal
  const openUpdateBug = (bug) => {
    setFormValues({
      name: bug.name,
      description: bug.description,
      status: bug.status,
      priority: bug.priority,
      severity: bug.severity,
    });
    setShowUpdateBug(true);
    dispatch(selectBug(bug));
  };

  //Show delete modal
  const openDeleteBug = (bug) => {
    setShowDeleteBug(true);
    dispatch(selectBug(bug));
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

        {showDeleteBug && <DeleteBug show={showDeleteBug} setShow={setShowDeleteBug} />}

        {showUpdateBug && <UpdateBug show={showUpdateBug} setShow={setShowUpdateBug} formValues={formValues} />}
      </div>
    </main>
  );
};

export default BugCards;
