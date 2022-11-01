import React, { useState, useEffect } from "react";

import bugsAPI from "../apis/bugs";
import getBugs from "../scripts/getBugs";
import BugDetails from "./BugDetails";
import CreateBug from "./CreateBug";
import UpdateBug from "./UpdateBug";
import DeleteBug from "./DeleteBug";

const BugList = () => {
  const [bugs, setBugs] = useState([]);
  const [selectedBug, setSelectedBug] = useState();
  const [showBugDetails, setShowBugDetails] = useState(false);
  const [showUpdateBug, setShowUpdateBug] = useState(false);
  const [showCreateBug, setShowCreateBug] = useState(false);
  const [showDeleteBug, setShowDeleteBug] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  //Get all bugs
  useEffect(() => {
    getBugs(setBugs);
  }, []);

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

  const renderBugs = bugs.map((bug) => {
    return (
      <div
        key={bug._id}
        className="p-4 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          {bug.name}
        </h5>
        <ul className="flex flex-col text-sm text-gray-500 dark:text-gray-300">
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
    <div className="p-2">
      <button onClick={() => setShowCreateBug(true)} className="btn-primary ">
        Create Bug
      </button>
      <div className="flex flex-wrap">{renderBugs}</div>

      {showBugDetails && (
        <BugDetails
          bugData={selectedBug}
          show={showBugDetails}
          setShow={setShowBugDetails}
        />
      )}

      {showDeleteBug && (
        <DeleteBug
          setBugs={setBugs}
          bugId={selectedBug._id}
          show={showDeleteBug}
          setShow={setShowDeleteBug}
        />
      )}

      {showCreateBug && (
        <CreateBug
          setBugs={setBugs}
          show={showCreateBug}
          setShow={setShowCreateBug}
        />
      )}

      {showUpdateBug && (
        <UpdateBug
          setBugs={setBugs}
          bugId={selectedBug._id}
          show={showUpdateBug}
          setShow={setShowUpdateBug}
          formValues={formValues}
        />
      )}
    </div>
  );
};

export default BugList;
