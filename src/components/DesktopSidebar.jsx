import {
  RiAddCircleLine,
  RiBookOpenLine,
  RiQuestionLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

import { MdOutlineCreateNewFolder } from "react-icons/md";

const DesktopSidebar = () => {
  return (
    <nav className="z-20 hidden w-44 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="flex justify-center text-lg font-bold text-gray-800 dark:text-gray-200"
          href="localhost:3000"
        >
          <img
            className="w-8 inline"
            src="/favicon-white.ico"
            alt="Bug logo."
          />
          <span className="mr-3">Bug Tracker</span>
        </a>

        <ul className="mt-6">
          <li className="relative px-6 py-4">
            <a
              className="inline-flex flex-col items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="../index.html"
            >
              <MdOutlineCreateNewFolder size={40} />
              <span>Create Project</span>
            </a>
          </li>
          <li className="relative px-6 py-4">
            <a
              className="inline-flex flex-col items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="../index.html"
            >
              <RiAddCircleLine size={40} />
              <span>Create Bug</span>
            </a>
          </li>

          <li className="relative px-6 py-4">
            <a
              className="inline-flex flex-col items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="../index.html"
            >
              <RiBookOpenLine size={40} />
              <span>Documentation</span>
            </a>
          </li>

          <li className="relative px-6 py-4">
            <a
              className="inline-flex flex-col items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="../index.html"
            >
              <RiQuestionLine size={40} />
              <span>About</span>
            </a>
          </li>

          <li className="relative px-6 py-4">
            <a
              className="inline-flex flex-col items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="../index.html"
            >
              <RiLogoutBoxLine size={40} />
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopSidebar;