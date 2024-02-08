import { Button } from "@mui/material";
import styled from "styled-components";

import Credits from "./Credits";
import Section, { labeledSectionProps } from "./Sections";

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

const ContactTitle = styled.h1`
    font-size: 3em;
    margin: 1em;
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

const email = "testemail@gmail.com";
const contactText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ";

export default function Contact({ innerRef }: labeledSectionProps) {
    console.log(innerRef);

    return (
        <Section innerRef={innerRef}>
            <Container>
                <ContactTitle>Stay in touch</ContactTitle>
                <ContactTextButton>
                    <h2>{contactText}</h2>
                    <Button variant="outlined" size="large" href={`mailto:${email}`}>Contact me 👋</Button>
                </ContactTextButton>
                <Credits />
            </Container>
        </Section>
    );
}