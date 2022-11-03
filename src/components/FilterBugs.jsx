import { RiSearchLine } from "react-icons/ri";

const FilterBugs = (props) => {
  const onInputChange = (event) => {
    props.setTerm(
      event.target.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  };

  return (
    <div className="flex justify-center ml-4 flex-1">
      <div className="relative w-full max-w-xl focus-within:text-gray-500">
        <div className="absolute inset-y-0 flex items-center pl-2">
          <RiSearchLine />
        </div>
        <input
          value={props.term}
          onChange={onInputChange}
          className="form-input pl-8"
          type="text"
          placeholder="Search for bugs"
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default FilterBugs;
