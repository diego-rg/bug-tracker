import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { switchDetailsBugModal } from "../features/modals/modalSlice";
import timeDateConversor from "../scripts/timeDateConversor";

const BugDetails = () => {
  const dispatch = useDispatch();
  const selectedBug = useSelector((state) => state.bugs.selectedBug);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{selectedBug.name}</h3>
          <button onClick={() => dispatch(switchDetailsBugModal())} type="button" className="btn-menu">
            <AiOutlineClose size={24} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4">
          <p className="modal-description">{selectedBug.description}</p>

          <ul className="modal-list">
            <li>Status: {selectedBug.status}</li>
            <li>Priority: {selectedBug.priority}</li>
            <li>Severity: {selectedBug.severity}</li>
            <li>Creation date: {timeDateConversor(selectedBug.createdAt)}</li>
            <li>Last update: {timeDateConversor(selectedBug.updatedAt)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BugDetails;
