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

//   const updateBug = async (bugData, id) => {
//     try {
//       const updateBugResponse = await bugsAPI.put(`/bugs/${id}`, bugData);
//       if (updateBugResponse.status === 200) {
//         console.log(updateBugResponse.data.message);
//         // window.location.reload();//cambiar por useEffect
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
//     <BugForm
//       initialValues={formValues}
//       onSubmit={() => updateBug()}
//     />
//   );
// };

// export default UpdateBug;
