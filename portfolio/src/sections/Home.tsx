import { Grid } from "@mui/material";
import styled from "styled-components";

import appleMemoji from "../images/memoji-apple-laptop.png";
import StyledSection from "../styles/StyledSection";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
`;

const StyledPresentation = styled.div`
    text-align: left;
`;

const StyledPresentationText = styled.h1`
    margin: 0;
    font-size: 2em;
`;

const StyledPresentationSpecialization = styled.h2`
    margin: 0;
    font-size: 1em;
`;

function Presentation() {
    return (
        <StyledPresentation>
            <StyledPresentationText>Hi,</StyledPresentationText>
            <StyledPresentationText>My name is <strong>Alejandro</strong></StyledPresentationText>
            <StyledPresentationText>Software Engineer @ Datadog</StyledPresentationText>
            <StyledPresentationSpecialization>Embedded Systems | Distributed Systems | Backend</StyledPresentationSpecialization>
        </StyledPresentation>
    );
}

function AvatarImage() {
    return (
        <img src={appleMemoji} alt="AB" />
    );
}

export default function Home() {
    return (
        <StyledSection>
            <StyledContainer>
                <Presentation />
                <AvatarImage />
            </StyledContainer>
        </StyledSection>
    );
}