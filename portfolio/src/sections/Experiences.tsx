import React, { useState } from "react";
import { Box, Chip, Icon, Link } from "@mui/material";
import { ArrowOutward, LocationOnOutlined } from "@mui/icons-material";
import styled from "styled-components";

import amazonLogo from "../images/amazon-logo.png";
import Section, { labeledSectionProps } from "./Sections";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../components/Accordion";

// Define the type for the callback function
type OnClickCallback = () => void;

interface ExperienceInfo {
  current: boolean;
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  companyLogo: string | null;
  location: string;
  date: string;
  description: string;
  skills: string[];
}

interface accordionProps {
  infos: ExperienceInfo[];
}

interface accordionItemProps {
  info: ExperienceInfo;
}

interface accordionSummaryProps {
  info: ExperienceInfo;
  onClick: OnClickCallback;
}

interface accordionDetailsProps {
  info: ExperienceInfo;
  isExpanded: boolean;
}

interface locationWebsiteProps {
  location: string;
  companyWebsite: string;
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

function LocationAndWebsite({
  location,
  companyWebsite,
}: locationWebsiteProps) {
  return (
    <div>
      <LocationWebsiteContainer>
        <Icon sx={{ mr: "0.2em" }}>
          <LocationOnOutlined />
        </Icon>
        <p>{location}</p>
        <Icon sx={{ ml: "0.5em", mr: "0.2em" }}>
          <ArrowOutward />
        </Icon>
        <Link href={`https://${companyWebsite}`}>{companyWebsite}</Link>
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

function ExperienceAccordionSummary({ info, onClick }: accordionSummaryProps) {
  return (
    <StyledAccordionSummary onClick={onClick}>
      <h3>
        {info.current ? (
          <strong>
            {info.jobTitle} @ {info.companyName}
          </strong>
        ) : (
          `${info.jobTitle} @ ${info.companyName}`
        )}
      </h3>
      <Box style={{ flexGrow: 1 }} />
      <h3>{info.date}</h3>
    </StyledAccordionSummary>
  );
}

function ExperienceAccordionDetails({
  info,
  isExpanded,
}: accordionDetailsProps) {
  return (
    <AccordionDetails isActive={isExpanded}>
      <ContentContainer>
        <div style={{ flex: 3 }}>
          <LocationAndWebsite
            location={info.location}
            companyWebsite={info.companyWebsite}
          />
          <JobDescriptionContainer>{info.description}</JobDescriptionContainer>
        </div>
        {info.companyLogo && (
          <CompanyLogo src={info.companyLogo} alt={info.companyLogo} />
        )}
      </ContentContainer>
      <Skills skills={info.skills} />
    </AccordionDetails>
  );
}

function ExperienceAccordionItem2({ info }: accordionItemProps) {
  const [isExpanded, setExpanded] = useState(false);

  const onClickHandler = () => {
    setExpanded(isExpanded ? false : true);
  };

  return (
    <div>
      <ExperienceAccordionSummary info={info} onClick={onClickHandler} />
      <ExperienceAccordionDetails info={info} isExpanded={isExpanded} />
    </div>
  );
}

function ExperienceAccordion({ infos }: accordionProps) {
  return (
    <AccordionStyled>
      {infos.map((info) => {
        return <ExperienceAccordionItem2 info={info} />;
      })}
    </AccordionStyled>
  );
}

function Experiences({ innerRef }: labeledSectionProps) {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const obj: ExperienceInfo = {
    current: true,
    jobTitle: "SWE",
    companyName: "Google",
    date: "Sep 2022 - Jun 2022",
    description: lorem,
    location: "Brussels, Belgium",
    companyWebsite: "google.com",
    companyLogo: amazonLogo,
    skills: ["C++", "C", "TypeScript", "Python", "Python", "Python", "Python"],
  };
  const obj2: ExperienceInfo = {
    current: false,
    jobTitle: "SWE",
    companyName: "AMZN",
    date: "Sep 2022 - Jun 2022",
    description: lorem,
    location: "Brussels, Belgium",
    companyWebsite: "https://google.com",
    companyLogo: "../images/amazon-logo.png",
    skills: ["C++", "C", "TypeScript", "Python"],
  };

  return (
    <Section innerRef={innerRef}>
      <Container>
        <h1>Experiences</h1>
        <ExperienceAccordion infos={[obj, obj2, obj]} />
      </Container>
    </Section>
  );
}

export default Experiences;
