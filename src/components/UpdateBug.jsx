// import React, { useState, useEffect } from "react";

// import bugsAPI from "../apis/bugs";
// import BugForm from "./BugForm";

// const UpdateBug = () => {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     description: "",
//     status: "",
//     priority: "",
//     severity: "",
//   });

//   const onSubmit = async (bugFormData) => {
//     try {
//       const postBug = await bugsAPI.post("/bugs", bugFormData);
//       if (postBug.status === 200) {
//         console.log(postBug.data.message);
//       }
//     } catch (error) {
//       if (
//         error.response.data.message ===
//         "Bug validation failed: name: A bug with that name already exists"
//       ) {
//         console.log(error.response.data.message);
//       } else {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <BugForm initialValues={formValues} onSubmit={onSubmit}>
//       Submit Bug
//     </BugForm>
//   );
// };

// export default UpdateBug;
