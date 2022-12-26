import { RiMenuLine } from "react-icons/ri";
import { CgMoon, CgSun } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../features/theme/themeSlice";
import SearchBugs from "./SearchBugs";

const Nabvar = (props) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleNav = () => {
    props.setOpenMenu(!props.openMenu);
  };

  return (
    <header className="sticky top-0 z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between h-full px-4 mx-auto text-black dark:text-white">
        <button onClick={handleNav} className="md:hidden btn-menu" aria-label="Toggle mobile menu">
          {props.openMenu ? <AiOutlineClose size={27} /> : <RiMenuLine size={27} />}
        </button>

        <SearchBugs />

        <div className="flex items-center flex-shrink-0 ml-2">
          <button onClick={() => dispatch(toggleTheme())} className="btn-menu" aria-label="Toggle color mode">
            {darkMode ? <CgMoon size={27} /> : <CgSun size={27} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nabvar;
