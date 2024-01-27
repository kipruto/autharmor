"use client";

import DarkModeContext, { UseDarkModeOutput } from "contexts/DarkModeContext";
import { useContext } from "react";

export default function useDarkMode(): UseDarkModeOutput {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}