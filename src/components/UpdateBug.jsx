import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";
import { switchUpdateBugModal } from "../features/modals/modalSlice";

const UpdateBug = () => {
  const dispatch = useDispatch();
  const selectedBug = useSelector((state) => state.bugs.selectedBug);
  const [errorMessage, setErrorMessage] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  useEffect(() => {
    setFormValues({
      name: selectedBug.name,
      description: selectedBug.description,
      status: selectedBug.status,
      priority: selectedBug.priority,
      severity: selectedBug.severity,
    });
  }, [selectedBug]);

  const updateBug = async (bugData) => {
    try {
      const updateBugResponse = await bugsAPI.put(`/bugs/${selectedBug._id}`, bugData);
      if (updateBugResponse.status === 200) {
        console.log(updateBugResponse.data.message);
        dispatch(switchUpdateBugModal());
        //update bugs
      }
    } catch (error) {
      if (error.response.data.message === "Bug validation failed: name: A bug with that name already exists") {
        setErrorMessage("Error: a bug with that name already exists.");
      } else {
        setErrorMessage("Error: bug data update failed.");
      }
    }
  };

  return (
    <BugForm
      errorMessage={errorMessage}
      initialValues={formValues}
      onSubmit={updateBug}
      enableReinitialize
      reducer={switchUpdateBugModal}
    />
  );
};

export default UpdateBug;
