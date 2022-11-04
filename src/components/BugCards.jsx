import React, { useState, useEffect } from "react";

import bugsAPI from "../apis/bugs";
import BugDetails from "./BugDetails";
import UpdateBug from "./UpdateBug";
import DeleteBug from "./DeleteBug";
import FilterOptions from "./FilterOptions";

const BugCards = (props) => {
  const [selectedBug, setSelectedBug] = useState();
  const [showBugDetails, setShowBugDetails] = useState(false);
  const [showUpdateBug, setShowUpdateBug] = useState(false);
  const [showDeleteBug, setShowDeleteBug] = useState(false);
  const [filterByStatus, setFilterByStatus] = useState("");
  const [filterByPriority, setFilterByPriority] = useState("");
  const [filterBySeverity, setFilterBySeverity] = useState("");
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
    setSelectedBug(bug);
  };

  //Show update modal
  const openUpdateBug = (bug) => {
    getBugById(bug._id);
    setShowUpdateBug(true);
    setSelectedBug(bug);
  };

  //Show delete modal
  const openDeleteBug = (bug) => {
    setShowDeleteBug(true);
    setSelectedBug(bug);
  };

  //Filter and render bugs
  const renderBugs = props.bugs
    .filter(
      (bug) =>
        (bug.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(props.term) ||
          bug.description
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(props.term)) &&
        bug.status.includes(filterByStatus) &&
        bug.priority.includes(filterByPriority) &&
        bug.severity.includes(filterBySeverity)
    )
    .map((bug) => {
      return (
        <div key={bug._id} className="card-container">
          <h5 className="card-title">
            {bug.name.length > 30
              ? bug.name.slice(0, 30).concat("", "...")
              : bug.name}
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
    });

  return (
    <main>
      <div className="flex justify-center">
        <FilterOptions
          setFilterByStatus={setFilterByStatus}
          setFilterByPriority={setFilterByPriority}
          setFilterBySeverity={setFilterBySeverity}
        />
      </div>

      <div className="flex flex-wrap justify-evenly p-2">
        {renderBugs}

        {showBugDetails && (
          <BugDetails
            bugData={selectedBug}
            show={showBugDetails}
            setShow={setShowBugDetails}
          />
        )}

        {showDeleteBug && (
          <DeleteBug
            setBugs={props.setBugs}
            bugId={selectedBug._id}
            show={showDeleteBug}
            setShow={setShowDeleteBug}
          />
        )}

        {showUpdateBug && (
          <UpdateBug
            setBugs={props.setBugs}
            bugId={selectedBug._id}
            show={showUpdateBug}
            setShow={setShowUpdateBug}
            formValues={formValues}
          />
        )}
      </div>
    </main>
  );
};

export default BugCards;
