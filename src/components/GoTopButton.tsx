import { useRef } from "react";
import { ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";


const StyledIconButton = styled(IconButton)`
    position: fixed;
    z-index: 10;
`;

export default function GoTopButton() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <StyledIconButton onClick={scrollToTop}>
            <ArrowUpward />
        </StyledIconButton>
    );
}