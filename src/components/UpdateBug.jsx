import React, { useState } from "react";
import { useSelector } from "react-redux";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";

const UpdateBug = (props) => {
  const selectedBug = useSelector((state) => state.bugs.selectedBug);
  const [errorMessage, setErrorMessage] = useState();

  const updateBug = async (bugData) => {
    try {
      const updateBugResponse = await bugsAPI.put(`/bugs/${selectedBug._id}`, bugData);
      if (updateBugResponse.status === 200) {
        console.log(updateBugResponse.data.message);
        props.setShow(false);
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
      initialValues={props.formValues}
      show={props.show}
      setShow={props.setShow}
      onSubmit={updateBug}
      enableReinitialize
    />
  );
};

export default UpdateBug;
