"use client";

import { useState } from "react";
import {
  VIRTUAL_CONTAINER_HEIGHT,
  PRICING_OPTIONS,
} from "./constants";
import PricingCard from "./card";
import SectionHead from "components/section-head";
import useDarkMode from "hooks/useDarkMode";

export default function Pricing() {
  const [active, setActive] = useState(0);
  const [activePrice, setActivePrice] = useState(1);

  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ position: "relative" }}>
      <div className="dark:bg-bg_dark bg-warm pt-32 pb-8 md:pb-14">
        <div className="container mx-auto">
          <SectionHead
            title={
              <h1 className="text-4xl md:text-5xl ">
              Our Pricing {" "}
                <span className="text-primary-500 dark:text-primary_light">
                  Plans
                </span>
              </h1>
            }

            description={<h3 className="text-sm md:text-md"> We offer flexible pricing plans for both workforce and consumers,
            which can be tailored to their specific needs, requirements and
            features. Read more below.</h3>
            }
            />
        </div>
      </div>

      <div
        className="bg-warm dark:bg-bg_dark"
        style={{
          height: VIRTUAL_CONTAINER_HEIGHT,
          zIndex: -1,
          position: "absolute",
          right: 0,
          left: 0,
        }}
      />

      <div className="flex flex-col md:flex-row md:justify-center container mx-auto">
        {PRICING_OPTIONS.map((option, index) => (
          <PricingCard
            {...option}
            key={option.title}
            onClick={() => setActivePrice(index)}
            isActive={activePrice === index}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
}
