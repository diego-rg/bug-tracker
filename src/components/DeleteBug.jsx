import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";

import { switchDeleteBugModal } from "../features/modals/modalSlice";
import bugsAPI from "../apis/bugs";

const DeleteBug = (props) => {
  const dispatch = useDispatch();
  const selectedBug = useSelector((state) => state.bugs.selectedBug);

  const [errorMessage, setErrorMessage] = useState();

  const deleteBug = async () => {
    try {
      const deleteBugResponse = await bugsAPI.delete(`/bugs/${selectedBug._id}`);
      if (deleteBugResponse.status === 200) {
        dispatch(switchDeleteBugModal());
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
          <button onClick={() => dispatch(switchDeleteBugModal())} type="button" className="btn-menu">
            <AiOutlineClose size={24} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4">
          <p className="modal-description">This bug will be deleted and its data lost. Do you wish to proceed?</p>

          {props.errorMessage && <p className="error-message">{errorMessage}</p>}

          <button onClick={() => dispatch(switchDeleteBugModal())} type="button" className="btn-primary">
            No, go back
          </button>
          <button onClick={() => deleteBug(selectedBug._id)} type="button" className="btn-danger">
            Yes, delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBug;
