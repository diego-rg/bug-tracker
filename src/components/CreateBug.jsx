import React, { useState } from "react";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";

const CreateBug = () => {
  const [formValues, setformValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  const onSubmit = async (bugFormData) => {
    try {
      await bugsAPI.post("/bugs", bugFormData);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <BugForm initialValues={formValues} onSubmit={onSubmit}>
      Submit Bug
    </BugForm>
  );
};

export default CreateBug;
