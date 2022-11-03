import {
  RiAddCircleLine,
  RiBookOpenLine,
  RiQuestionLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";

const MobileSidebar = (props) => {
  if (props.openMenu && window.innerWidth < 768) {
    return (
      <nav className="fixed inset-y-0 shadow-md z-20 flex-shrink-0 w-40 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <a
            className="flex justify-center items-center text-lg font-bold text-gray-800 dark:text-gray-200"
            href="localhost:3000"
          >
            <span className="text-purple-700 dark:text-purple-500">
              <VscDebug size={20} />
            </span>
            <span className="mr-2 ml-1">Bug Tracker</span>
          </a>

          <ul className="mt-6">
            <li className="relative px-6 py-4">
              <button
                className="btn-menu btn-sidebar opacity-30"
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
              <button
                className="btn-sidebar btn-menu opacity-30"
                href="../index.html"
              >
                <RiLogoutBoxLine size={40} />
                <span>Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default MobileSidebar;
