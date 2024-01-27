import { cloneElement } from "react";
import { WhyChooseUsItem } from "./constants";

export default function WhyChooseUsItem(props: WhyChooseUsItemProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 py-12 lg:p-24 border-slate-300 border-t">
      <div className="flex-shrink-0 lg:pr-[100px] lg:pt-[60px]">
        {cloneElement(props.icon, {
          className:
            "w-24 h-24 lg:w-24 lg:h-24 text-primary-500 dark:text-primary_light",
        })}
      </div>
      <div className="ml-4 font-sans">
        <p className="font-semibold font-sans text-xl lg:text-4xl text-center lg:text-left my-8">
          {props.title}
        </p>
        <div className="mt-2 text-base lg:text-xl text-gray-600 dark:text-gray-300 font-regular leading-snug">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export type WhyChooseUsItemProps = WhyChooseUsItem;
