import styled from "styled-components";

import { SkillBoxInfo } from "../utils/ConfigLoader";

const SkillContent = styled.div`
  max-width: 300px;
  padding: 1em;
  border: 1px solid #e3dbdb;
  border-radius: 0.5em;
  box-shadow: 3px 3px 10px gray;
`;

const TitleDescriptionContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 1em;
  justify-content: center;
`;

const SkillTitle = styled.h2`
  font-weight: bold;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillDescription = styled.p`
  text-align: justify;
`;

const SkillListTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillEnumerationContainer = styled.div`
  text-align: center;
`;

interface SkillsList {
  subtitle: string;
  skills: string[];
}

function SkillEnumeration({ subtitle, skills }: SkillsList) {
  return (
    <SkillEnumerationContainer>
      <SkillListTitle>{subtitle}</SkillListTitle>
      {skills.map((skill) => {
        return <p>{skill}</p>;
      })}
    </SkillEnumerationContainer>
  );
}

export default function SkillBox({
  title,
  description,
  subtitle,
  skills,
}: SkillBoxInfo) {
  return (
    <SkillContent>
      <TitleDescriptionContainer>
        <SkillTitle>{title}</SkillTitle>
        <SkillDescription>{description}</SkillDescription>
      </TitleDescriptionContainer>
      {subtitle && skills && (
        <SkillEnumeration subtitle={subtitle} skills={skills} />
      )}
    </SkillContent>
  );
}
