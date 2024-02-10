"use client";

import Navbar from "components/navbar";
import Labels from "./labels";
import TopSection from "./top-section";
import useDarkMode from "hooks/useDarkMode";
import backgroundImage from "assets/images/backgrounds/landing-dark.png";
import styled from "styled-components";

const StyledContainer = styled("div").withConfig({
  shouldForwardProp: (prop) => !["dark"].includes(prop),
})<{
  dark: boolean;
}>(({ dark }) => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  ...(dark && {
    backgroundColor: "#1a202c",
  }),
}));

const Landing = () => {
  const { isDarkMode } = useDarkMode();


  return (
    <StyledContainer dark={isDarkMode}>
      <div className="container mx-auto flex flex-col md:min-h-screen px-10 ">
        <Navbar />

        <Labels />

        <TopSection />

        <div className="sm:h-12 md:h-20" />
        <div className="mt-20 md:mt-44 border-t border-gray-400 dark:border-t-gray-700 "></div>
      </div>
    </StyledContainer>
  );
};

export default Landing;
