import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BugForm from "./BugForm";
import { switchUpdateBugModal } from "../features/modals/modalSlice";
import { useEditBugMutation } from "../features/bugs/bugsApi";

const UpdateBug = () => {
  const dispatch = useDispatch();
  const selectedBug = useSelector((state) => state.bugs.selectedBug);
  const [editBug] = useEditBugMutation();

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
      await editBug({ id: selectedBug._id, ...bugData }).unwrap();
      dispatch(switchUpdateBugModal());
    } catch (error) {
      setErrorMessage(error.data.message);
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
