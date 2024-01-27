"use client";

import { useCallback, useState } from "react";
import { FAQ_ITEMS } from "./constants";
import FaqCard from "./faq-card";
import dynamic from "next/dynamic";
import SectionHead from "components/section-head";

const ContactForm = dynamic(() => import("./contact-form"), { ssr: false });

export default function Faq() {
  const [activeFaq, setACtiveFaq] = useState<null | number>(0);

  const toggle = useCallback(
    (index: number) => {
      setACtiveFaq((prev) => (prev === index ? null : index));
    },
    [setACtiveFaq]
  );

  return (
    <div className="container mx-auto pt-32 pb-60">
      <SectionHead
        title={
          <>
            Frequently Asked{" "}
            <span className="text-primary-500 dark:text-primary_light">
              Questions
            </span>
          </>
        }
        description="We got some your questions answered."
      />

      <div className="h-28"></div>

      <div className="flex sm:flex-col lg:flex-row px-2">
        <div className="flex-1 lg:pr-4">
          {FAQ_ITEMS.map((item, index) => (
            <FaqCard
              key={index}
              {...item}
              isActive={index === activeFaq}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
        <div className="flex-1 lg:pl-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
