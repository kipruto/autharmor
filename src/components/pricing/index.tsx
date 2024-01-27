"use client";

import { useState } from "react";
import {
  VIRTUAL_CONTAINER_HEIGHT,
  PRICING_OPTIONS,
  PRICING_TABS,
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
      <div className="dark:bg-transparent bg-warm py-32">
        <div className="container mx-auto">
          <SectionHead
            title={
              <>
                Our Pricing{" "}
                <span className="text-primary-500 dark:text-primary_light">
                  Plans
                </span>
              </>
            }
            description="We offer flexible pricing plans for both workforce and consumers,
          which can be tailored to their specific needs, requirements and
          features. Read more below."
          />
          <div className="flex  justify-center mt-10">
            <div className="py-1 bg-primary-500 dark:bg-primary_light rounded-md border-2 border-primary-300">
              {PRICING_TABS.map((tab, index) => {
                const isActive = active === index;

                return (
                  <button
                    onClick={() => setActive(index)}
                    key={tab}
                    className={`py-2.5 px-10 rounded-md mx-1 font-sans font-bold border-2 ${
                      isActive
                        ? "bg-white text-primary-500 dark:text-primary_light border-primary-300"
                        : "text-white border-transparent"
                    } dark:border-transparent`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-warm dark:bg-transparent"
        style={{
          height: VIRTUAL_CONTAINER_HEIGHT,
          zIndex: -1,
          position: "absolute",
          right: 0,
          left: 0,
        }}
      />

      <div className="flex md:justify-center container mx-auto">
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
