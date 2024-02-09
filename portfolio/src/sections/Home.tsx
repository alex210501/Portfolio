import { useContext } from "react";
import styled from "styled-components";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import appleMemoji from "../images/memoji-apple-laptop.png";
import Section, { labeledSectionProps } from "./Sections";
import { AppContext } from "../utils/Context";
import { Icon } from "@mui/material";

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
  display: flex;
  flex-flow: column;
  gap: 3em;
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

const StyledIcon = styled(Icon)`
  color: white;
  scale: 1.2;
`;

const ContactLinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1em;

  & p {
    font-size: 1.5em;
    margin: 0;
  }
`;

const ContactLinkRow = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 1em;
`;

function ContactLink({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <ContactLinkRow>
      <StyledIcon>{children}</StyledIcon>
      <a href={href}>
        <p>{label}</p>
      </a>
    </ContactLinkRow>
  );
}

function Presentation() {
  const data = useContext(AppContext);
  const home = data.home;

  return (
    <StyledPresentation>
      <div>
        <StyledPresentationText>Hi,</StyledPresentationText>
        <StyledPresentationText>
          My name is <StyledName>{home.name}</StyledName>
        </StyledPresentationText>
        <StyledPresentationText>{home.currentPosition}</StyledPresentationText>
        <StyledPresentationSpecialization>
          {home.specialization}
        </StyledPresentationSpecialization>
      </div>
      <ContactLinkContainer>
      <ContactLink href={`mailto:${data.email}`} label="Email">
        <EmailRoundedIcon />
      </ContactLink>
        <ContactLink href={data.linkedin} label="LinkedIn">
          <LinkedInIcon />
        </ContactLink>
        <ContactLink href={data.github} label="GitHub">
          <GitHubIcon />
        </ContactLink>
      </ContactLinkContainer>
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
