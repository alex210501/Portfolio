import { useEffect, useRef } from "react";
import styled from "styled-components";

import SkillBox from "../components/SkillBox";
import Section, { labeledSectionProps } from "./Sections";

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const SkillBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  justify-content: center;
  gap: 2em;
`;

export default function About({ innerRef }: labeledSectionProps) {
  return (
    <Section innerRef={innerRef}>
      <Container>
        <div style={{ marginBottom: "5em" }}>
          <h1>About me</h1>
          <p>{dummyText}</p>
        </div>
        <SkillBoxContainer>
          <SkillBox
            title="Software Engineering"
            description={dummyText}
            subtitle="Dev tools"
            skills={["A", "A", "A"]}
          />
          <SkillBox
            title="Software Engineering 2"
            description={dummyText}
            subtitle="Dev tools"
            skills={["A", "A", "A", "B"]}
          />
          <SkillBox
            title="Software Engineering 2"
            description={dummyText}
            subtitle="Dev tools"
            skills={["A", "A", "A", "B"]}
          />
        </SkillBoxContainer>
      </Container>
    </Section>
  );
}
