import { Button } from "@mui/material";
import styled from "styled-components";

import StyledSection from "../styles/StyledSection";

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 70%;
    height: 100%;
    margin: auto;
`;

const ContactTitle = styled.h1`
    font-size: 3em;
    margin: 1em;
`;

const email = "testemail@gmail.com";
const contactText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ";

export default function Contact() {
    return (
        <StyledSection>
            <Container>
                <ContactTitle>Stay in touch</ContactTitle>
                <h2>{contactText}</h2>
                <Button variant="outlined" size="large" href={`mailto:${email}`}>Contact me 👋</Button>
            </Container>
        </StyledSection>
    );
}