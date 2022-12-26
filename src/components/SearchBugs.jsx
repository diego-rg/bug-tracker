import { useDispatch } from "react-redux";

import { setTerm } from "../features/filters/filtersSlice";
import { RiSearchLine } from "react-icons/ri";

const SearchBugs = () => {
  const dispatch = useDispatch();

  const handleInput = (event) => {
    dispatch(
      setTerm(
        event.target.value
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
    );
  };

  return (
    <div className="flex justify-center ml-2 flex-1">
      <div className="relative w-full max-w-xl focus-within:text-gray-500">
        <div className="absolute inset-y-0 flex items-center pl-2">
          <RiSearchLine />
        </div>
        <input
          onChange={handleInput}
          className="form-input pl-8"
          type="text"
          placeholder="Search for bugs"
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default SearchBugs;
