import { useDispatch } from "react-redux";

import { RiAddCircleLine, RiBookOpenLine, RiQuestionLine, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";

import deleteCookie from "../scripts/deleteCookie";
import { switchCreateBugModal } from "../features/modals/modalSlice";
import { useGetCurrentUserQuery } from "../features/auth/authApi";

const logOutUser = (cookieName) => {
  deleteCookie(cookieName);
  window.open("http://localhost:8000/api/users/logout", "_self");
};

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
        <p className="mt-4 text-center">Error</p>
      ) : isLoadingCurrentUser ? (
        <p className="mt-4 text-center">Loading...</p>
      ) : currentUser ? (
        <p className="mt-4 text-center">{currentUser}</p>
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
          <button className="btn-sidebar btn-menu opacity-30" onClick={() => logOutUser("token")}>
            <RiLogoutBoxLine size={40} />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
