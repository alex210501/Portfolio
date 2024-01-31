import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";
import styled from "styled-components";

import AppBarAvatar from "./AppBarAvatar";

const StyledLink = styled.h2`
    margin: 10px;
`;

function HomeAppBar() {
    return (
        <Box>
            <AppBar component='nav'>
                <Toolbar>
                    <AppBarAvatar />
                    <Box style={{ flexGrow: 1 }} />
                    <StyledLink>About</StyledLink>
                    <StyledLink>Experiences</StyledLink>
                    <StyledLink>Contact</StyledLink>
                    <StyledLink>Resume</StyledLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HomeAppBar;
