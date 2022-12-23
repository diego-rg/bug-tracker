import { CgMoon, CgSun } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { VscDebug } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../features/theme/themeSlice";

const googleLogin = "http://localhost:8000/api/oauth/google";

const Login = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div
        className="flex flex-col h-full min-w-fit md:w-1/5 items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 
      dark:border-gray-700 justify-center p-6 md:p-10"
      >
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="btn-menu"
              aria-label="Toggle color mode"
            >
              {darkMode ? <CgSun size={27} /> : <CgMoon size={27} />}
            </button>
          </div>

          <div className="flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-gray-200 py-8">
            <span className="text-purple-700 dark:text-purple-500">
              <VscDebug size={27} />
            </span>
            <span className="mr-2 ml-3">Bug Tracker</span>
          </div>

          <a className="btn-signIn cursor-pointer" href={googleLogin}>
            <FcGoogle size={20} />
            <span className="pl-2 text-md font-bold">Sign in with Google</span>
          </a>

          <a className="btn-signIn cursor-pointer" href="/login">
            <FaGithub size={20} />
            <span className="pl-2 text-md font-bold">Sign in with GitHub</span>
          </a>

          <a className="btn-signIn cursor-pointer" href="/login">
            <FaTwitter size={20} />
            <span className="pl-2 text-md font-bold">Sign in with Twitter</span>
          </a>

          <p className="mt-4">
            <a
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
              href="/"
            >
              Work in progress
            </a>
          </p>
          <p className="mt-1">
            <a
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
              href="/"
            >
              Work in progress
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
