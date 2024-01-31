import { Avatar } from "@mui/material";
import appleMemoji from "../images/memoji-apple-face.png";

function AppBarAvatar() {
    return (
        <Avatar src={appleMemoji} alt='AB' />
    );
}

export default AppBarAvatar;