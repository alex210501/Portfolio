import styled from "styled-components";

import SkillBox from "../components/SkillBox";
import Section, { labeledSectionProps } from "./Sections";
import { useContext } from "react";
import { AppContext } from "../utils/Context";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const AboutDescriptionContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;
  text-align: center;

  & p {
    font-size: ${({ theme }) => theme.fonts.aboutDescription};
  }
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
  const about = useContext(AppContext).about;

  return (
    <Section innerRef={innerRef}>
      <Container>
        <AboutDescriptionContainer>
          <h1>About me</h1>
          <p>{about.description}</p>
        </AboutDescriptionContainer>
        <SkillBoxContainer>
          {about.skillbox &&
            about.skillbox.map((sk) => {
              return (
                <SkillBox
                  title={sk.title}
                  description={sk.description}
                  subtitle={sk.subtitle}
                  skills={sk.skills}
                />
              );
            })}
        </SkillBoxContainer>
      </Container>
    </Section>
  );
}
