"use client";
import { useState } from "react";
import Subscribe from "./subscribe";
import FooterBottom from "./footer-bottom";

export default function Footer() {
  const [height, setHeight] = useState(0);

  return (
    <div className="">
      <Subscribe {...{ setHeight }} />
      <FooterBottom {...{ height }} />
    </div>
  );
}
