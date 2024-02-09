import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "contexts/DarkModeContext";
import StyledComponentsRegistry from "components/styled-components-registry";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();

  const theme = (cookieStore.get("theme")?.value || "light") as
    | "light"
    | "dark";

  return (
    <html lang="en" className={theme}>
      <body className={"font-sans dark:bg-dark dark:text-slate-200 flex flex-col w-full sm:w-full mx-auto"}>
        <DarkModeProvider mode={theme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </DarkModeProvider>
      </body>
    </html>
  );
}
