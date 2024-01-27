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
    backgroundImage: `url(assets/images/backgrounds/landing-dark.png)`,
  }),
}));

const Landing = () => {
  const { isDarkMode } = useDarkMode();


  return (
    <StyledContainer dark={isDarkMode}>
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        <Navbar />

        <Labels />

        <div className="sm:h-12 md:h-20" />

        <TopSection />

        <div className="sm:h-12 md:h-20" />
      </div>
    </StyledContainer>
  );
};

export default Landing;
