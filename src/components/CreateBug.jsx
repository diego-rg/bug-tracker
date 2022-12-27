import React, { useState } from "react";
import { useDispatch } from "react-redux";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";
import { switchCreateBugModal } from "../features/modals/modalSlice";

const CreateBug = () => {
  const dispatch = useDispatch();

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
      const postBugResponse = await bugsAPI.post("/bugs", bugData);
      if (postBugResponse.status === 200) {
        console.log(postBugResponse.data.message);
        dispatch(switchCreateBugModal());
        //actualizar bugs
      }
    } catch (error) {
      if (error.response.data.message === "Bug validation failed: name: A bug with that name already exists") {
        setErrorMessage("Error: a bug with that name already exists.");
      } else {
        setErrorMessage("Error: bug creation failed.");
      }
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
