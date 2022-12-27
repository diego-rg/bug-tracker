import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useGetAllBugsQuery } from "../features/bugs/bugsApi";
import { selectBug } from "../features/bugs/bugsSlice";
import { switchDetailsBugModal } from "../features/modals/modalSlice";
import { switchDeleteBugModal } from "../features/modals/modalSlice";
import { switchUpdateBugModal } from "../features/modals/modalSlice";
import FilterOptions from "./FilterOptions";
import Loader from "./Loader";

const BugCards = () => {
  const dispatch = useDispatch();
  const term = useSelector((state) => state.filters.term);
  const status = useSelector((state) => state.filters.status);
  const priority = useSelector((state) => state.filters.priority);
  const severity = useSelector((state) => state.filters.severity);

  const { data: bugs, error: bugsError, isLoading: isLoadingBugs } = useGetAllBugsQuery();

  //Select bug and show details modal
  const openBugDetails = (bug) => {
    dispatch(switchDetailsBugModal());
    dispatch(selectBug(bug));
  };

  //Select bug and show update modal
  const openUpdateBug = (bug) => {
    dispatch(switchUpdateBugModal());
    dispatch(selectBug(bug));
  };

  //Select bug and show delete modal
  const openDeleteBug = (bug) => {
    dispatch(switchDeleteBugModal());
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

                    <button onClick={() => openBugDetails(bug)} className="btn-primary">
                      Details
                    </button>
                    <button onClick={() => openUpdateBug(bug)} className="btn-primary">
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
      </div>
    </main>
  );
};

export default BugCards;
