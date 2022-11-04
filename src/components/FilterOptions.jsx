const FilterOptions = (props) => {
  const handleStatus = (event) => {
    props.setFilterByStatus(event.target.value);
  };

  return (
    <div className="flex">
      <div className="p-2 md:p-4">
        <label
          htmlFor="status"
          className="form-label font-semibold text-xs md:text-sm m-0"
        >
          Status
        </label>
        <select
          id="status"
          className="form-input text-xs md:text-sm p-1 w-auto"
        >
          <option value="" defaultValue>
            All
          </option>
          <option value="new">New</option>
          <option value="assigned">Assigned</option>
          <option value="fixed">Fixed</option>
        </select>
      </div>

      <div className="p-2 md:p-4">
        <label
          htmlFor="priority"
          className="form-label font-semibold text-xs md:text-sm m-0"
        >
          Priority
        </label>
        <select
          id="priority"
          className="form-input text-xs md:text-sm p-1 w-auto"
        >
          <option value="" defaultValue>
            All
          </option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="p-2 md:p-4">
        <label
          htmlFor="severity"
          className="form-label font-semibold text-xs md:text-sm m-0"
        >
          Severity
        </label>
        <select
          id="severity"
          className="form-input text-xs md:text-sm p-1 w-auto"
        >
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
