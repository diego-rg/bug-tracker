import { useDispatch } from "react-redux";

import { RiAddCircleLine, RiBookOpenLine, RiQuestionLine, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";

import { switchCreateBugModal } from "../features/modals/modalSlice";
import { useGetCurrentUserQuery } from "../features/auth/authApi";

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const { data: currentUser, error: currentUserError, isLoading: isLoadingCurrentUser } = useGetCurrentUserQuery();

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="flex justify-center items-center text-lg font-bold text-gray-800 dark:text-gray-200" href="/">
        <span className="text-purple-700 dark:text-purple-500">
          <VscDebug size={20} />
        </span>
        <span className="mr-3 ml-1">Bug Tracker</span>
      </a>

      {currentUserError ? (
        <p className="mt-4 text-center text-gray-900 dark:text-white">Error</p>
      ) : isLoadingCurrentUser ? (
        <p className="mt-4 text-center text-gray-900 dark:text-white">Loading...</p>
      ) : currentUser ? (
        <p className="mt-4 text-center text-gray-900 dark:text-white">{currentUser}</p>
      ) : null}

      <ul className="mt-6">
        <li className="relative px-6 py-4">
          <button className="btn-sidebar btn-menu opacity-30">
            <MdOutlineCreateNewFolder size={40} />
            <span>Create Project</span>
          </button>
        </li>
        <li className="relative px-6 py-4">
          <button onClick={() => dispatch(switchCreateBugModal())} className="btn-sidebar btn-menu">
            <RiAddCircleLine size={40} />
            <span>Create Bug</span>
          </button>
        </li>

        <li className="relative px-6 py-4">
          <a className="btn-sidebar btn-menu" href="https://github.com/diego-rg/bug-tracker">
            <RiBookOpenLine size={40} />
            <span>Documentation</span>
          </a>
        </li>

        <li className="relative px-6 py-4">
          <a className="btn-sidebar btn-menu" href="https://diego-rg.vercel.app/">
            <RiQuestionLine size={40} />
            <span>About</span>
          </a>
        </li>

        <li className="relative px-6 py-4">
          <a className="btn-sidebar btn-menu opacity-30" href={process.env.REACT_APP_LOGOUT}>
            <RiLogoutBoxLine size={40} />
            <span>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
