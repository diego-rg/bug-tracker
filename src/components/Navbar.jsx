import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import { CgMoon, CgSun } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

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
        <button onClick={handleNav} className="md:hidden btn-menu">
          {props.openMenu ? (
            <AiOutlineClose size={30} />
          ) : (
            <RiMenuLine size={30} />
          )}
        </button>
        <div className="flex justify-center ml-4 flex-1">
          <div className="relative w-full max-w-xl focus-within:text-gray-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <RiSearchLine />
            </div>
            <input
              className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 
                  dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-400 focus:placeholder-gray-500
                   focus:bg-white focus:border-gray-300 focus:outline-none focus:shadow-outline-gray form-input"
              type="text"
              placeholder="Search for bugs"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="flex items-center flex-shrink-0 ml-4">
          <button
            onClick={handleTheme}
            className="rounded-md focus:outline-none focus:shadow-outline-gray btn-menu"
            aria-label="Toggle color mode"
          >
            {props.dark ? <CgSun size={30} /> : <CgMoon size={30} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nabvar;
