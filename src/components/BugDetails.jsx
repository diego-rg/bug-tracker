import { AiOutlineClose } from "react-icons/ai";

const BugDetails = (props) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-80 flex justify-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-4 m-auto w-full max-w-2xl h-full md:h-auto">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {props.bugData.name}
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
