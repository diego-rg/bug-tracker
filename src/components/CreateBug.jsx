import React, { useState } from "react";

import bugsAPI from "../apis/bugs";
import BugForm from "./BugForm";

const CreateBug = () => {
  const [formValues] = useState({
    name: "",
    description: "",
    status: "",
    priority: "",
    severity: "",
  });

  const submitBug = async (bugFormData) => {
    try {
      const postBugResponse = await bugsAPI.post("/bugs", bugFormData);
      if (postBugResponse.status === 200) {
        console.log(postBugResponse.data.message);
        // window.location.reload();//cambiar por useEffect
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
    <BugForm initialValues={formValues} onSubmit={submitBug}>
      Submit Bug
    </BugForm>
  );
};

export default CreateBug;
