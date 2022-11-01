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
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-80 flex justify-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-4 m-auto w-full max-w-2xl h-full md:h-auto">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Warning
          </h3>
          <button
            onClick={() => props.setShow(false)}
            type="button"
            className="btn-close"
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
