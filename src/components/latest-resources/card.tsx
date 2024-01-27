"use client";

import Image, { StaticImageData } from "next/image";

import styled from "styled-components";
import TimeIcon from "svg-icons/time";

const StyledImage = styled(Image).withConfig({
  shouldForwardProp: (prop) => !["row", "fill"].includes(prop),
})<{ row?: boolean }>(({ row }) => ({
  ...(!row && {
    width: "100%",
    height: "auto",
  }),

  ...(!!row && {
    height: 150,
    width: 150,
  }),
}));

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <div className={`py-8 lg:px-8 ${props.fill ? "flex-1" : ""}`}>
      <div
        className={`flex border dark:border-gray-500 rounded-3xl p-6  ${
          props.row ? "flex-row" : "flex-col"
        }`}
      >
        <StyledImage
          src={props.image}
          alt=""
          row={props.row}
          className="rounded-2xl"
        />

        <div className={`flex flex-col justify-around flex-1 ${props.row ? "ml-6" : "pt-6"}`}>
          <p className={`font-semibold ${props.row ? "text-2xl" : "text-3xl"}`}>
            {props.title}
          </p>

          <div className="flex flex-row items-center mt-4 text-gray-700 dark:text-gray-400">
            <TimeIcon />
            <p className="ml-4">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export type ResourceCardProps = {
  row?: boolean;
  fill?: boolean;
  image: StaticImageData;

  title: string;
  date: string;
};
