import React, { useState, useEffect } from "react";

import bugsAPI from "../apis/bugs";
import getBugs from "../scripts/getBugs";
import CreateBug from "./CreateBug";
import UpdateBug from "./UpdateBug";
import DeleteBug from "./DeleteBug";

const BugList = () => {
  const [bugs, setBugs] = useState([]);
  const [selectedBugId, setSelectedBugId] = useState();
  // const [showBugDetails, setShowBugDetails] = useState(false);
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

  //Set selected bug data
  const getBugById = async (bugId) => {
    try {
      const { data } = await bugsAPI.get(`/bugs/${bugId}`);
      const { name, description, status, priority, severity } = data.bug;
      setFormValues({ name, description, status, priority, severity });
    } catch (error) {
      console.log(error);
    }
  };

  //Show update modal
  const openUpdateBug = (bugId) => {
    getBugById(bugId);
    setShowUpdateBug(true);
    setSelectedBugId(bugId);
  };

  //Show delete modal
  const openDeleteBug = (bugId) => {
    setShowDeleteBug(true);
    setSelectedBugId(bugId);
  };

  const renderBugs = bugs.map((bug) => {
    return (
      <div
        key={bug._id}
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          {bug.name}
        </h5>
        <ul className="flex flex-col text-sm text-gray-500 dark:text-gray-300">
          <li>Status: {bug.status}</li>
          <li>Priority: {bug.priority}</li>
          <li>Severity: {bug.severity}</li>
        </ul>
        <p className="mb-3 text-gray-700 dark:text-gray-400">
          {bug.description}
        </p>
        {/* <button
          onClick={() => setShowBugDetails(true)}
          className="btn-primary "
        >
          Details
        </button> */}
        <button onClick={() => openUpdateBug(bug._id)} className="btn-primary ">
          Edit
        </button>
        <button onClick={() => openDeleteBug(bug._id)} className="btn-danger">
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <button onClick={() => setShowCreateBug(true)} className="btn-primary ">
        Create Bug
      </button>
      <div className="flex flex-wrap">{renderBugs}</div>

      {showDeleteBug && (
        <DeleteBug
          setBugs={setBugs}
          bugId={selectedBugId}
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
          show={showUpdateBug}
          setShow={setShowUpdateBug}
          bugId={selectedBugId}
          formValues={formValues}
        />
      )}
    </div>
  );
};

export default BugList;
