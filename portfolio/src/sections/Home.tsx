import { Grid } from "@mui/material";
import styled from "styled-components";

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


export default function Home() {
    return (
        <StyledSection>
            <StyledContainer>
                <div>Left</div>
                <div>Right</div>
            </StyledContainer>
        </StyledSection>
    );
}