import { RiMenuLine } from "react-icons/ri";
import { CgMoon, CgSun } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

import SearchBugs from "./SearchBugs";

const Nabvar = (props) => {
  const handleNav = () => {
    props.setOpenMenu(!props.openMenu);
  };

  const handleTheme = () => {
    props.setDark(!props.dark);
  };

  return (
    <header className="sticky top-0 z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between h-full px-4 mx-auto text-black dark:text-white">
        <button
          onClick={handleNav}
          className="md:hidden btn-menu"
          aria-label="Toggle mobile menu"
        >
          {props.openMenu ? (
            <AiOutlineClose size={27} />
          ) : (
            <RiMenuLine size={27} />
          )}
        </button>

        <SearchBugs term={props.term} setTerm={props.setTerm} />

        <div className="flex items-center flex-shrink-0 ml-2">
          <button
            onClick={handleTheme}
            className="btn-menu"
            aria-label="Toggle color mode"
          >
            {props.dark ? <CgSun size={27} /> : <CgMoon size={27} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nabvar;
