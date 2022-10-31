import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";

const MobileNabvar = () => {
  return (
    <div className="flex flex-col flex-1">
      <nav className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-4 mx-auto text-white">
          <span className="md:hidden">
            <RiMenuLine size={30} />
          </span>
          <div className="flex justify-center ml-4 flex-1">
            <div className="relative w-full max-w-xl focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <RiSearchLine />
              </div>
              <input
                className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 
                  dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-400 focus:placeholder-gray-500
                   focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text"
                placeholder="Search for bugs"
                aria-label="Search"
              />
            </div>
          </div>

          <div className="flex items-center flex-shrink-0 ml-4">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Toggle color mode"
            >
              <MdDarkMode size={30} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNabvar;
