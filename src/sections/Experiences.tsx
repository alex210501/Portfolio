import React, { useContext, useState } from "react";
import { Box, Icon } from "@mui/material";
import { ArrowOutward, LocationOnOutlined } from "@mui/icons-material";
import styled from "styled-components";

import Section, { labeledSectionProps } from "./Sections";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../components/Accordion";
import { AppContext } from "../utils/Context";
import Chip from "../components/Chip";
import { ExperienceInfo } from "../utils/ConfigLoader";

// Define the type for the callback function
type OnClickCallback = () => void;

interface accordionSummaryProps {
  infos: ExperienceInfo;
  onClick: OnClickCallback;
}

interface accordionDetailsProps {
  infos: ExperienceInfo;
  isExpanded: boolean;
}

interface locationWebsiteProps {
  location?: string;
  companyWebsite?: string;
}

interface skillsProps {
  skills: string[];
}

const AccordionStyled = styled(Accordion)`
  width: 60%;
  padding: 0;
  margin-bottom: 1em;
  border: 0;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  border-radius: 0.7em;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ExperienceTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.experienceTitle};
  margin: 0.2em;
`;

const LocationWebsiteContainer = styled.div`
  display: flex;
  align-items: center;
`;

const JobDescriptionContainer = styled.p`
  text-align: justify;
  margin-bottom: 1em;
  margin-top: 0;
  font-size: ${({ theme }) => theme.fonts.experienceDescription};
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  padding-right: 0.5em;
  gap: 2em;
`;

const CompanyLogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  min-width: 100px;
`;

const CompanyLogo = styled.img`
  width: 100%;
  object-fit: contain;
  margin: auto;
`;

const StyledChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.chip};
`;

const WebsiteContainer = styled.a`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.link};
`;

const LocationWebsiteStyled = styled.p`
  color: ${({ theme }) => theme.colors.link};
  font-size: ${({ theme }) => theme.fonts.experienceLocationWebsite};
`;

function LocationAndWebsite({
  location,
  companyWebsite,
}: locationWebsiteProps) {
  return (
    <div>
      <LocationWebsiteContainer>
        <StyledIcon sx={{ mr: "0.2em" }}>
          <LocationOnOutlined />
        </StyledIcon>
        <LocationWebsiteStyled>{location}</LocationWebsiteStyled>
        <WebsiteContainer href={`https://${companyWebsite}`}>
          <StyledIcon sx={{ ml: "0.5em", mr: "0.2em" }}>
            <ArrowOutward />
          </StyledIcon>
          <LocationWebsiteStyled>{companyWebsite}</LocationWebsiteStyled>
        </WebsiteContainer>
      </LocationWebsiteContainer>
    </div>
  );
}

function Skills({ skills }: skillsProps) {
  return (
    <SkillsContainer>
      {skills.map((skill) => {
        return <StyledChip key={skill} label={skill} />;
      })}
    </SkillsContainer>
  );
}

function ExperienceAccordionSummary({ infos, onClick }: accordionSummaryProps) {
  return (
    <StyledAccordionSummary onClick={onClick}>
      <ExperienceTitle>
        {infos.current ? (
          <strong>
            {infos.title} @ {infos.company}
          </strong>
        ) : (
          `${infos.title} @ ${infos.company}`
        )}
      </ExperienceTitle>
      <Box style={{ flexGrow: 1 }} />
      <ExperienceTitle>{infos.dates}</ExperienceTitle>
    </StyledAccordionSummary>
  );
}

function ExperienceAccordionDetails({
  infos,
  isExpanded,
}: accordionDetailsProps) {
  const logo = process.env.PUBLIC_URL + infos.logo;

  return (
    <AccordionDetails isActive={isExpanded}>
      <ContentContainer>
        <div style={{ flex: 3 }}>
          <LocationAndWebsite
            location={infos.location}
            companyWebsite={infos.website}
          />
          <JobDescriptionContainer>{infos.description}</JobDescriptionContainer>
        </div>
        <CompanyLogoContainer>
          {infos.logo && <CompanyLogo src={logo} alt={logo} />}
        </CompanyLogoContainer>
      </ContentContainer>
      {infos.skills && <Skills skills={infos.skills} />}
    </AccordionDetails>
  );
}

function ExperienceAccordion() {
  const experiences = useContext(AppContext).experiences;
  const [panel, setPanel] = useState(-1);

  const onClickHandler = (index: number) => {
    setPanel(panel === index ? -1 : index);
  };

  return (
    <AccordionStyled>
      {experiences.map((exp, index) => {
        return (
          <div>
            <ExperienceAccordionSummary
              infos={exp}
              onClick={() => onClickHandler(index)}
            />
            <ExperienceAccordionDetails infos={exp} isExpanded={panel === index} />
          </div>
        );
      })}
    </AccordionStyled>
  );
}

function Experiences({ innerRef }: labeledSectionProps) {
  return (
    <Section innerRef={innerRef}>
      <Container>
        <h1>Experiences</h1>
        <ExperienceAccordion />
      </Container>
    </Section>
  );
}

export default Experiences;
