import React, { useState } from "react";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";
import getBugs from "./getBugs";

const CreateBug = (props) => {
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
        getBugs(props.setBugs);
      }
    } catch (error) {
      if (
        error.response.data.message ===
        "Bug validation failed: name: A bug with that name already exists"
      ) {
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <BugForm
      initialValues={formValues}
      show={props.show}
      setShow={props.setShow}
      onSubmit={submitBug}
    />
  );
};

export default CreateBug;
