import React from "react";
import styled from "styled-components";

import AppBarAvatar from "./AppBarAvatar";

interface NavigationBarProps {
  homeSectionRef: React.RefObject<HTMLDivElement>;
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  experiencesSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const StyledLink = styled.h2`
  margin: auto;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledToolbar = styled.div`
  top: 0;
  padding: 0.5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: white;
  z-index: 10;
`;

const SectionNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

function HomeAppBar({
  homeSectionRef,
  aboutSectionRef,
  experiencesSectionRef,
  contactSectionRef,
}: NavigationBarProps) {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <StyledToolbar>
        <AppBarAvatar onClick={() => scrollToSection(homeSectionRef)} />
        <SectionNav>
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
        </SectionNav>
      </StyledToolbar>
  );
}

export default HomeAppBar;
