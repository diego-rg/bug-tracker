import React from "react";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";
import getBugs from "./getBugs";

const UpdateBug = (props) => {
  const updateBug = async (bugData) => {
    try {
      const updateBugResponse = await bugsAPI.put(
        `/bugs/${props.bugId}`,
        bugData
      );
      if (updateBugResponse.status === 200) {
        console.log(updateBugResponse.data.message);
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
      initialValues={props.formValues}
      show={props.show}
      setShow={props.setShow}
      onSubmit={updateBug}
      enableReinitialize
    />
  );
};

export default UpdateBug;
