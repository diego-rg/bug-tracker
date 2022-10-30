import React, { useState, useEffect } from "react";

import bugsAPI from "../apis/bugs";
import deleteBug from "./deleteBug";
import CreateBug from "./CreateBug";
import UpdateBug from "./UpdateBug";

const BugList = () => {
  const [bugs, setBugs] = useState([]);
  const [selectedBugId, setSelectedBugId] = useState();
  // const [showBugDetails, setShowBugDetails] = useState(false);
  const [showUpdateBug, setShowUpdateBug] = useState(false);
  const [showCreateBug, setShowCreateBug] = useState(false);
  // const [showDeleteBug, setShowDeleteBug] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  //get all Bugs
  useEffect(() => {
    getBugs();
  }, []);

  const getBugs = async () => {
    try {
      const { data } = await bugsAPI.get("/bugs");
      setBugs(data.bugs);
    } catch (error) {
      console.log(error);
    }
  };

  //get selected bug data
  const getBugById = async (bugId) => {
    try {
      const { data } = await bugsAPI.get(`/bugs/${bugId}`);
      const { name, description, status, priority, severity } = data.bug;
      setFormValues({ name, description, status, priority, severity });
    } catch (error) {
      console.log(error);
    }
  };

  //update
  const openUpdateBug = (bugId) => {
    getBugById(bugId);
    setShowUpdateBug(true);
    setSelectedBugId(bugId);
    console.log(formValues);
    console.log(showUpdateBug);
  };

  const renderBugs = bugs.map((bug) => {
    return (
      <div
        key={bug._id}
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {bug.name}
        </h5>
        <div className="flex text-white dark:text-white">
          <p className="mb-3 p-1 font-normal">Status: {bug.status}</p>
          <p className="mb-3 p-1 font-normal">Priority: {bug.priority}</p>
          <p className="mb-3 p-1 font-normal">Severity: {bug.severity}</p>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bug.description}
        </p>
        {/* <button
          onClick={() => setShowBugDetails(true)}
          className="m-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
        </button> */}
        <button
          onClick={() => openUpdateBug(bug._id)}
          className="m-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </button>
        <button
          onClick={() => deleteBug(bug._id)}
          className="m-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg
         hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <button
        onClick={() => setShowCreateBug(true)}
        className="m-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Bug
      </button>
      <div className="flex flex-wrap">{renderBugs}</div>

      {showCreateBug && (
        <CreateBug show={showCreateBug} setShow={setShowCreateBug} />
      )}

      {showUpdateBug && (
        <UpdateBug
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
