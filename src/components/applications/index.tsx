"use client";

import { useState } from "react";
import Image from "next/image";
import saasApplication from "assets/images/applications/saas.png";

import { APPLICATION_ITEMS } from "./config";
import SectionHead from "components/section-head";
import useDarkMode from "hooks/useDarkMode";

const backgroundImage = "/assets/images/backgrounds/applications-dark.png";

export default function Applications() {
  const [active, setActive] = useState(0);

  const { isDarkMode } = useDarkMode();

  return (
    <div
      className="p-10 lg:pt-32 lg:pb-36"
      style={{
        ...(isDarkMode && {
          backgroundColor: "#1a202c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "-300px"
        }),
      }}
    >
      <div className="container mx-auto">
        <SectionHead
          preTitle="APPLICATIONS"
          title={
            <>
              <span className="text-primary-500 dark:text-primary_light">
                Limitless
              </span>{" "}
              Business Use-Cases.
            </>
          }
          description="Level up your user experience. Whatever your industry"
        />

        <div className="flex flex-full justify-center mt-16 overflow-x-auto ">
          {APPLICATION_ITEMS.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={item.title}
                className={` flex px-5 text-gray-400 flex-col justify-center items-center cursor-pointer font-sans font-semibold ${isActive
                    ? "text-primary-100 "
                    : "text-gray-600 dark:text-gray-200"
                  }`}
                onClick={() => setActive(index)}
              >
                {item.icon}
                <p className="text-sm">{item.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mt-14 overflow-hidden">
          <div className="sm:col-span-2 lg:col-span-1 flex items-center justify-center">
            <Image
              src={saasApplication}
              alt=""
              unoptimized
              className="h-[300px] w-auto"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-1 p-0">
            <h2 className="font-semibold font-sans text-3xl my-10 dark:text-gray-200">
              {APPLICATION_ITEMS[active].title}
            </h2>

            <div className="text-gray-500 dark:text-gray-300 w-full md:w-[45vw] lg:w-[28vw] flex flex-wrap">
              <p className="mb-3">
                Make your SaaS platform more secure and improve compliance with privacy
                and data protection requirements. Give your clients peace of mind their
                data is protected with industry-leading passkey authentication
                systems.
              </p>

              <p>1. Prevent account take-overs and improve security.</p>
              <p>2. One-click logins prevent abandoned carts</p>
              <p>3. Keep users coming back to your platform</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
