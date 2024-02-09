"use client";


import Image from "next/image";
import Link from "next/link";
import { NAVBAR_HEIGHT, NAVBAR_LOGO_WIDTH, NAV_CONFIGS } from "./config";

import logo_wide from "assets/images/logo-wide.png";
import useDarkMode from "hooks/useDarkMode";

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add logic here to toggle dark mode
  };

  const { toggle } = useDarkMode();

  return (
    <nav className="py-7 flex justify-between items-center border-b dark:border-b-gray-700">
      <div className="flex-shrink-0">
        <Link href="/" className="text-white text-lg font-semibold"><Image
            src={logo_wide}
            alt="logo"
            style={{ width: NAVBAR_LOGO_WIDTH, height: "auto" }}
          /> </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleNavbar}
          className="text-white focus:outline-none focus:bg-gray-700 px-2 py-1 rounded"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
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
      <div>
        <button
      onClick={toggle}
      className="bg-gray-200 dark:bg-gray-500 rounded-full w-12 h-6 flex items-center justify-between p-1 focus:outline-none"
    >
      <div className={`w-5 h-5 bg-gray-700 dark:bg-white rounded-full transition-transform duration-300 transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}> </div>
    </button>

      </div>
    </nav>
  );
};

export default Navbar;
