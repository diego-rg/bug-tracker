import { AiOutlineClose } from "react-icons/ai";

const BugDetails = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {props.bugData.name}
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

        <ul className="flex flex-col text-sm text-gray-500 dark:text-gray-300">
          <li>Status: {props.bugData.status}</li>
          <li>Priority: {props.bugData.priority}</li>
          <li>Severity: {props.bugData.severity}</li>
        </ul>

        <p className="mb-3 text-gray-700 dark:text-gray-400">
          {props.bugData.description}
        </p>

        <ul className="flex flex-col text-sm text-gray-500 dark:text-gray-300">
          <li>Created: {props.bugData.createdAt}</li>
          <li>Last update: {props.bugData.updatedAt}</li>
        </ul>
      </div>
    </div>
  );
};

export default BugDetails;
