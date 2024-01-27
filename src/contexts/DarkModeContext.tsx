"use client";

import { createContext, useCallback, useEffect, useState } from "react";

import { setCookie } from "utils/client-cookies";

const DarkModeContext = createContext<UseDarkModeOutput>(
  null as unknown as UseDarkModeOutput
);

export const DarkModeProvider = ({
  children,
  mode: _mode,
}: DarkModeProviderProps) => {
  const [mode, setMode] = useState(_mode);

  const isDarkMode = mode === "dark";

  const toggle = useCallback(() => {
    const newMode = isDarkMode ? "light" : "dark";
    setMode(newMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setCookie("theme", mode);
  }, [mode]);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        mode: isDarkMode ? "dark" : "light",
        toggle,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export type DarkModeProviderProps = React.PropsWithChildren<
  Omit<UseDarkModeOutput, "isDarkMode" | "toggle">
>;

export interface UseDarkModeOutput {
  mode: "dark" | "light";
  isDarkMode: boolean;
  toggle: VoidFunction;
}
export default DarkModeContext;
