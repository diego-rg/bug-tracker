import React, { useState } from "react";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";

const CreateBug = (props) => {
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
        props.setShow(false);
        //actualizar bugs
      }
    } catch (error) {
      if (
        error.response.data.message ===
        "Bug validation failed: name: A bug with that name already exists"
      ) {
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
      show={props.show}
      setShow={props.setShow}
      onSubmit={submitBug}
    />
  );
};

export default CreateBug;
