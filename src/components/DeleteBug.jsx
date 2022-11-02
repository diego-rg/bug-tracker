import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import bugsAPI from "../apis/bugs";
import getBugs from "../scripts/getBugs";

const DeleteBug = (props) => {
  const [errorMessage, setErrorMessage] = useState();

  const deleteBug = async (bugId) => {
    try {
      const deleteBugResponse = await bugsAPI.delete(`/bugs/${bugId}`);
      if (deleteBugResponse.status === 200) {
        props.setShow(false);
        getBugs(props.setBugs);
      }
    } catch (error) {
      setErrorMessage("Error: bug removal failed.");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Warning
          </h3>
          <button
            onClick={() => props.setShow(false)}
            type="button"
            className="btn-menu"
          >
            <AiOutlineClose size={24} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <p className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          This bug will be deleted and its data lost. Do you wish to proceed?
        </p>

        {props.errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="flex ">
          <button
            onClick={() => props.setShow(false)}
            type="button"
            className="btn-primary"
          >
            No, go back
          </button>
          <button
            onClick={() => deleteBug(props.bugId)}
            type="button"
            className="btn-danger"
          >
            Yes, delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBug;
