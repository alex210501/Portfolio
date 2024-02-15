import { Avatar } from "@mui/material";
import appleMemoji from "../images/memoji-apple-face.png";
import styled from "styled-components";

interface appAvatarProps {
    onClick: () => void;
}

const StyledAvatar = styled(Avatar)`
    &:hover {
        cursor: pointer;
    }
`;

function AppBarAvatar({ onClick }: appAvatarProps) {
    return (
        <StyledAvatar onClick={onClick} src={appleMemoji} alt='AB' />
    );
}

export default AppBarAvatar;