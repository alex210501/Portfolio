import { useContext } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Credits from "./Credits";
import Section, { labeledSectionProps } from "./Sections";
import { AppContext } from "../utils/Context";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 70%;
  height: 100vh;
  margin: auto;
`;

const ContactTextButton = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.7em;
  font-size: 1.2em;
  transition: background 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fonts.contactText};
`;

export default function Contact({ innerRef }: labeledSectionProps) {
  const infos = useContext(AppContext);

  return (
    <Section innerRef={innerRef}>
      <Container>
        <h1>Stay in touch</h1>
        <ContactTextButton>
          <ContactText>{infos.contact.text}</ContactText>
          <StyledButton href={`mailto:${infos.email}`}>
            Contact me 👋
          </StyledButton>
        </ContactTextButton>
        <Credits />
      </Container>
    </Section>
  );
}
