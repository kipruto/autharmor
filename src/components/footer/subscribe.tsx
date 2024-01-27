"use client";

import bgImage from "assets/images/footer/subscribe-bg.png";
import React from "react";

export default function Subscribe({
  setHeight,
}: {
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className="container mx-auto flex flex-col items-center bg-primary-500 rounded-lg dark:bg-primary_light justify-center max-w-[1200px] pt-12 pb-24"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px",
        backgroundSize: "contain",
      }}
      ref={(el) => {
        const height = el?.clientHeight ?? 0;

        setHeight(height);
      }}
    >
      <p className="font-volkhov text-gray-200 font-bold text-4xl text-center">
        Subscribe to our <br />
        Newsletter
      </p>

      <div className="flex flex-col sm:flex-row items-center rounded-lg bg-white py-2 pr-2 pl-3 mt-10 font-poppins font-regular">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.55566 5.33301L8.289 8.88301C8.64455 9.14967 9.13344 9.14967 9.489 8.88301L14.2223 5.33301"
            stroke="#999999"
            strokeLinecap="round"
          />
          <rect
            x="0.5"
            y="0.5"
            width="17.6667"
            height="15"
            rx="4.5"
            stroke="#999999"
          />
        </svg>

        <input
          className="w-full sm:w-96  px-2 py-2 text-gray-400 outline-none focus:outline-none font-regular mb-6 sm:mb-0 font-regular"
          type="search"
          name="search"
          placeholder="Enter your mail"
        />

        <button className="px-6 py-2.5 bg-primary-600 dark:bg-primary_light hover:bg-primary-700 font-regular rounded-md text-gray-100">
          Subscribe
        </button>
      </div>
    </div>
  );
}
