import { AiOutlineClose } from "react-icons/ai";

import timeDateConversor from "../scripts/timeDateConversor";

const BugDetails = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{props.bugData.name}</h3>
          <button onClick={() => props.setShow(false)} type="button" className="btn-menu">
            <AiOutlineClose size={24} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4">
          <p className="modal-description">{props.bugData.description}</p>

          <ul className="modal-list">
            <li>Status: {props.bugData.status}</li>
            <li>Priority: {props.bugData.priority}</li>
            <li>Severity: {props.bugData.severity}</li>
            <li>Creation date: {timeDateConversor(props.bugData.createdAt)}</li>
            <li>Last update: {timeDateConversor(props.bugData.updatedAt)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BugDetails;
