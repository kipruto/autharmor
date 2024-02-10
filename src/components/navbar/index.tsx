import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAVBAR_HEIGHT, NAVBAR_LOGO_WIDTH, NAV_CONFIGS } from "./config";
import useDarkMode from "hooks/useDarkMode";
import logo_wide from "assets/images/logo-wide.png";
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {

  const [setIsDarkMode] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, toggle } = useDarkMode();


  const toggleNavbar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="py-7 flex justify-between items-center border-b dark:border-b-gray-700 relative">
      <div className="flex-shrink-0">
        <Link href="/" className="text-white text-lg font-semibold">
          <Image
            src={logo_wide}
            alt="logo"
            style={{ width: NAVBAR_LOGO_WIDTH, height: "auto" }}
          />
        </Link>
      </div>

      <div className="lg:flex lg:items-center hidden md:flex">
        <div className="mt-4 lg:mt-0">
          {NAV_CONFIGS.map((config) => {
            return (
              <Link
                key={config.name}
                href={config.path}
                className="text-gray-900 dark:text-gray-100 hover:bg-gray-700 mx-3 px-3 text-md py-2 rounded"
              >
                {config.name}
              </Link>
            );
          })}
        </div>



      </div>
<div className="flex flex-row items-center justify-center">
<div className="hidden md:flex">
        <button
          onClick={toggle}
          className=" rounded-full w-8 h-8 flex items-center justify-center p-1 focus:outline-none "
        >
          <div className="flex items-center justify-center  w-full h-full bg-gray-200 dark:bg-white rounded-full transition-transform duration-300 transform">
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} className="text-dark" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-gray-600" />
            )}
          </div>
        </button>
      </div>
      <div className="hidden md:flex">
      <a href="#" className="hover:text-gray-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none no-underline">
  Login
</a>
<a href="#" className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:bg-primary-600">
  Sign Up
</a>

      </div>


<button
          onClick={toggleNavbar}
          className="text-gray-700 bg-white border border-gray-400 dark:bg-gray-900 focus:outline-none focus:bg-gray-500  rounded flex items-center justify-center px-3 py-2 md:hidden "
        >
          <FontAwesomeIcon icon={ faBars }
            className={`text-${isDarkMode ? 'white' : 'gray'} `}
          />
        </button>
</div>





      <div  className={`bg-gray-600 min-h-screen absolute left-0 top-0 lg:hidden ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <button
          onClick={toggleNavbar}
          className="text-white  focus:outline-none focus:bg-gray-500  rounded flex items-center justify-center p-5 float-right"
        >
          <FontAwesomeIcon
            icon={isSidebarOpen ? faTimes : faBars}
            className={`text-${isDarkMode ? 'white' : 'gray'} `}
          />
        </button>
          <ul className="p-0">
            <div className="mt-20 lg:mt-0 flex flex-col w-full px-10">
              {NAV_CONFIGS.map((config) => {
                return (
                  <Link
                    key={config.name}
                    href={config.path}
                    className="text-white dark:text-gray-100 hover:bg-gray-700 mx-3 px-3 text-md py-4 border-b rounded"
                  >
                    {config.name}
                  </Link>
                );
              })}

<div className="flex flex-col space-y-2 mt-2 md:hidden">
      <a href="#" className="hover:text-gray-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none no-underline">
  Login
</a>
<a href="#" className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:bg-primary-600">
  Sign Up
</a>

      </div>
              <button
              onClick={toggle}
              className="bg-gray-200 dark:bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center p-1 focus:outline-none ml-5 mt-10"
            >
              <div className="flex items-center justify-center  p-1 w-full h-full bg-white dark:bg-white rounded-full transition-transform duration-300 transform">
                {isDarkMode ? (
                  <FontAwesomeIcon icon={faSun} className="text-gray-700" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} className="text-gray-600" />
                )}
              </div>

            </button>
            </div>

          </ul>
        </div>

    </nav>
  );
};

export default Navbar;
