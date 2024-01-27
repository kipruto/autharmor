"use client";

import Image from "next/image";
import Link from "next/link";
import { NAVBAR_HEIGHT, NAVBAR_LOGO_WIDTH, NAV_CONFIGS } from "./config";

import logo_wide from "assets/images/logo-wide.png";
import useDarkMode from "hooks/useDarkMode";

export default function Navbar() {
  const { toggle } = useDarkMode();

  return (
    <div style={{ height: NAVBAR_HEIGHT }}>
      <div
        className="fixed top-0 left-0 right-0  mx-auto w-full md:px-20 sm:px-10 flex items-center bg-white dark:bg-transparent dark:backdrop-blur-xl"
        style={{ zIndex: 1000 }}
      >
        <div
          className="flex items-center border-b border-gray-200 flex-1 dark:border-transparent"
          style={{ height: NAVBAR_HEIGHT }}
        >
          <Image
            src={logo_wide}
            alt="logo"
            style={{ width: NAVBAR_LOGO_WIDTH, height: "auto" }}
          />

          <nav className="flex flex-1 justify-center">
            {NAV_CONFIGS.map((config) => {
              return (
                <Link
                  key={config.name}
                  href={config.path}
                  className="text-gray-600 dark:text-gray-100 font-sans font-regular px-3 py-2"
                >
                  {config.name}
                </Link>
              );
            })}
          </nav>

          <button
            className="bg-primary-500 dark:bg-primary_light hover:bg-primary-600 text-white font-medium font-inter text-sm  py-3 rounded-full mr-2 px-10"
            onClick={toggle}
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
