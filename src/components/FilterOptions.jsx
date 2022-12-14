import { useDispatch } from "react-redux";

import { setStatus, setPriority, setSeverity } from "../features/filters/filtersSlice";

const FilterOptions = () => {
  const dispatch = useDispatch();

  const handleStatus = (event) => {
    dispatch(setStatus(event.target.value));
  };

  const handleSeverity = (event) => {
    dispatch(setPriority(event.target.value));
  };

  const handlePriority = (event) => {
    dispatch(setSeverity(event.target.value));
  };

  return (
    <div className="flex justify-center">
      <div className="p-2 md:p-4">
        <label htmlFor="status" className="form-label font-semibold text-xs md:text-sm m-0">
          Status
        </label>
        <select onChange={handleStatus} id="status" className="form-input text-xs md:text-sm p-1 w-auto">
          <option value="" defaultValue>
            All
          </option>
          <option value="new">New</option>
          <option value="assigned">Assigned</option>
          <option value="fixed">Fixed</option>
        </select>
      </div>

      <div className="p-2 md:p-4">
        <label htmlFor="priority" className="form-label font-semibold text-xs md:text-sm m-0">
          Priority
        </label>
        <select onChange={handlePriority} id="priority" className="form-input text-xs md:text-sm p-1 w-auto">
          <option value="" defaultValue>
            All
          </option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="p-2 md:p-4">
        <label htmlFor="severity" className="form-label font-semibold text-xs md:text-sm m-0">
          Severity
        </label>
        <select onChange={handleSeverity} id="severity" className="form-input text-xs md:text-sm p-1 w-auto">
          <option value="" defaultValue>
            All
          </option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
