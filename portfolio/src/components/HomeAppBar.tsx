import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import styled from "styled-components";

import AppBarAvatar from "./AppBarAvatar";

interface NavigationBarProps {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  experiencesSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const StyledLink = styled.h2`
  margin: 10px;
  
  &:hover {
    cursor: pointer;
  }
`;

function HomeAppBar({
  aboutSectionRef,
  experiencesSectionRef,
  contactSectionRef,
}: NavigationBarProps) {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    console.log(ref, ref.current, aboutSectionRef);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <Toolbar>
        <AppBarAvatar />
        <Box style={{ flexGrow: 1 }} />
        <StyledLink onClick={() => scrollToSection(aboutSectionRef)}>
          About
        </StyledLink>
        <StyledLink onClick={() => scrollToSection(experiencesSectionRef)}>
          Experiences
        </StyledLink>
        <StyledLink onClick={() => scrollToSection(contactSectionRef)}>
          Contact
        </StyledLink>
        <StyledLink>Resume</StyledLink>
      </Toolbar>
    </Box>
  );
}

export default HomeAppBar;
