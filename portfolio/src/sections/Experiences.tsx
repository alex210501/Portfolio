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

interface accordionItemProps {
  infos: ExperienceInfo;
}

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
  margin-bottom: 1em;
  border: 0;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  border-radius: 1em;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LocationWebsiteContainer = styled.div`
  display: flex;
  align-items: center;
`;

const JobDescriptionContainer = styled.p`
  text-align: justify;
  margin-bottom: 1em;
  margin-top: 0;
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
  align-items: center;
  padding-right: 0.5em;
  gap: 2em;
`;

const CompanyLogo = styled.img`
  display: inline-block;
  flex: 1;
  object-fit: contain;
  width: 100%;
  height: 100%;
  min-width: 100px;
`;

const StyledChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.chip};
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors.link};
`;

const WebsiteContainer = styled.a`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.link};
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
        <Location>{location}</Location>

        <WebsiteContainer href={`https://${companyWebsite}`}>
          <StyledIcon sx={{ ml: "0.5em", mr: "0.2em" }}>
            <ArrowOutward />
          </StyledIcon>
          <p>{companyWebsite}</p>
        </WebsiteContainer>
      </LocationWebsiteContainer>
    </div>
  );
}

function Skills({ skills }: skillsProps) {
  return (
    <SkillsContainer>
      {skills.map((skill) => {
        return <StyledChip label={skill} />;
      })}
    </SkillsContainer>
  );
}

function ExperienceAccordionSummary({ infos, onClick }: accordionSummaryProps) {
  return (
    <StyledAccordionSummary onClick={onClick}>
      <h3>
        {infos.current ? (
          <strong>
            {infos.title} @ {infos.company}
          </strong>
        ) : (
          `${infos.title} @ ${infos.company}`
        )}
      </h3>
      <Box style={{ flexGrow: 1 }} />
      <h3>{infos.dates}</h3>
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
        {infos.logo && <CompanyLogo src={logo} alt={logo} />}
      </ContentContainer>
      {infos.skills && <Skills skills={infos.skills} />}
    </AccordionDetails>
  );
}

function ExperienceAccordionItem({ infos }: accordionItemProps) {
  const [isExpanded, setExpanded] = useState(false);

  const onClickHandler = () => {
    setExpanded(isExpanded ? false : true);
  };

  return (
    <div>
      <ExperienceAccordionSummary infos={infos} onClick={onClickHandler} />
      <ExperienceAccordionDetails infos={infos} isExpanded={isExpanded} />
    </div>
  );
}

function ExperienceAccordion() {
  const experiences = useContext(AppContext).experiences;

  return (
    <AccordionStyled>
      {experiences.map((exp) => {
        return <ExperienceAccordionItem infos={exp} />;
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
