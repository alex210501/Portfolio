import styled from "styled-components";

import appleMemoji from "../images/memoji-apple-laptop.png";
import Section, { labeledSectionProps } from "./Sections";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  margin: auto;
`;

const StyledPresentation = styled.div`
  text-align: left;
`;

const StyledPresentationText = styled.h1`
  margin: 0;
  font-size: 2em;
`;

const StyledPresentationSpecialization = styled.h2`
  margin: 0;
  font-size: 1em;
`;

const StyledName = styled.strong`
  color: ${({ theme }) => theme.colors.homeName};
`;

function Presentation() {
  return (
    <StyledPresentation>
      <StyledPresentationText>Hi,</StyledPresentationText>
      <StyledPresentationText>
        My name is <StyledName>Alejandro</StyledName>
      </StyledPresentationText>
      <StyledPresentationText>
        Software Engineer @ Datadog
      </StyledPresentationText>
      <StyledPresentationSpecialization>
        Embedded Systems | Distributed Systems | Backend
      </StyledPresentationSpecialization>
    </StyledPresentation>
  );
}

function AvatarImage() {
  return <img src={appleMemoji} alt="AB" />;
}

export default function Home({ innerRef }: labeledSectionProps) {
  return (
    <Section innerRef={innerRef}>
      <StyledContainer>
        <Presentation />
        <AvatarImage />
      </StyledContainer>
    </Section>
  );
}
