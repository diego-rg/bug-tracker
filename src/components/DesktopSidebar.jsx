import {
  RiAddCircleLine,
  RiBookOpenLine,
  RiQuestionLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";

const DesktopSidebar = (props) => {
  return (
    <nav className="sticky inset-y-0 left-0 h-screen shadow-md z-10 hidden w-44 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="flex justify-center items-center text-lg font-bold text-gray-800 dark:text-gray-200"
          href="../index.html"
        >
          <VscDebug size={20} />
          <span className="mr-3 ml-1">Bug Tracker</span>
        </a>

        <ul className="mt-6">
          <li className="relative px-6 py-4">
            <button
              className="btn-sidebar btn-menu opacity-30"
              href="../index.html"
            >
              <MdOutlineCreateNewFolder size={40} />
              <span>Create Project</span>
            </button>
          </li>
          <li className="relative px-6 py-4">
            <button
              onClick={() => props.setShowCreateBug(true)}
              className="btn-sidebar btn-menu"
              href="../index.html"
            >
              <RiAddCircleLine size={40} />
              <span>Create Bug</span>
            </button>
          </li>

          <li className="relative px-6 py-4">
            <a
              className="btn-sidebar btn-menu"
              href="https://github.com/diego-rg/bug-tracker"
            >
              <RiBookOpenLine size={40} />
              <span>Documentation</span>
            </a>
          </li>

          <li className="relative px-6 py-4">
            <a
              className="btn-sidebar btn-menu"
              href="https://diego-rg.vercel.app/"
            >
              <RiQuestionLine size={40} />
              <span>About</span>
            </a>
          </li>

          <li className="relative px-6 py-4">
            <a className="btn-sidebar btn-menu opacity-30" href="../index.html">
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
