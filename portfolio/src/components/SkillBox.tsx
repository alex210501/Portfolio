import styled from "styled-components";

import { SkillBoxInfo } from "../utils/ConfigLoader";

const SkillContent = styled.div`
  max-width: 300px;
  padding: 1em;
  border: 1px solid #e3dbdb;
  border-radius: 0.5em;
  box-shadow: 5px 10px 18px #e3dbdb;
`;

const SkillTitle = styled.h2`
  font-weight: bold;
`;

const SkillDescription = styled.p`
  text-align: justify;
`;

const SkillListTitle = styled.h3``;

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
      <div style={{ marginBottom: "2em" }}>
        <SkillTitle>{title}</SkillTitle>
        <SkillDescription>{description}</SkillDescription>
      </div>
      {subtitle && skills && (
        <SkillEnumeration subtitle={subtitle} skills={skills} />
      )}
    </SkillContent>
  );
}
