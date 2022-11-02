import React, { useState } from "react";

import bugsAPI from "../apis/bugs";
import BugDetails from "./BugDetails";
import UpdateBug from "./UpdateBug";
import DeleteBug from "./DeleteBug";

const BugCards = (props) => {
  const [selectedBug, setSelectedBug] = useState();
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

  const renderBugs = props.bugs.map((bug) => {
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
    <main className="flex flex-wrap justify-evenly p-2">
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
    </main>
  );
};

export default BugCards;
