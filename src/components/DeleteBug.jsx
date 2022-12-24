import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import bugsAPI from "../apis/bugs";

const DeleteBug = (props) => {
  const [errorMessage, setErrorMessage] = useState();

  const deleteBug = async (bugId) => {
    try {
      const deleteBugResponse = await bugsAPI.delete(`/bugs/${bugId}`);
      if (deleteBugResponse.status === 200) {
        props.setShow(false);
        //actualizar bugs
      }
    } catch (error) {
      setErrorMessage("Error: bug removal failed.");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Warning</h3>
          <button
            onClick={() => props.setShow(false)}
            type="button"
            className="btn-menu"
          >
            <AiOutlineClose size={24} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4">
          <p className="modal-description">
            This bug will be deleted and its data lost. Do you wish to proceed?
          </p>

          {props.errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

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
