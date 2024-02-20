import { cloneElement } from "react";

export const HeadIcon = (props: {
  className?: string;
  icon: React.ReactElement;
  center?: boolean;
}) => {
  return (
    <>
      <div
        className={`flex flex-col flex-shrink-0  lg:pt-[60px]" ${
          props.center ? "items-center" : "items-start lg:pr-[100px]"
        }`}
      >
        {cloneElement(props.icon, {
          className: `w-16 md:w-24 h-16 md:w-24 text-primary-500 dark:text-primary_light ${
            props.className ?? ""
          }`,
        })}
      </div>
    </>
  );
};
