import { Button } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";

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

export default function Contact({ innerRef }: labeledSectionProps) {
    const infos = useContext(AppContext);

    return (
        <Section innerRef={innerRef}>
            <Container>
                <ContactTitle>Stay in touch</ContactTitle>
                <ContactTextButton>
                    <h2>{infos.contact.text}</h2>
                    <Button variant="outlined" size="large" href={`mailto:${infos.email}`}>Contact me 👋</Button>
                </ContactTextButton>
                <Credits />
            </Container>
        </Section>
    );
}