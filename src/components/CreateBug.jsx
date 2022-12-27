import React, { useState } from "react";
import { useDispatch } from "react-redux";

import BugForm from "./BugForm";
import { switchCreateBugModal } from "../features/modals/modalSlice";
import { usePostNewBugMutation } from "../features/bugs/bugsApi";

const CreateBug = () => {
  const dispatch = useDispatch();
  const [postNewBug] = usePostNewBugMutation();

  const [errorMessage, setErrorMessage] = useState();
  const [formValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  const submitBug = async (bugData) => {
    try {
      await postNewBug(bugData).unwrap();
      dispatch(switchCreateBugModal());
    } catch (error) {
      setErrorMessage(error.data.message);
    }
  };

  return (
    <BugForm
      errorMessage={errorMessage}
      initialValues={formValues}
      onSubmit={submitBug}
      reducer={switchCreateBugModal}
    />
  );
};

export default CreateBug;
