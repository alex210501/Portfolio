import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

import infoLogo from "../images/info-logo.png";

interface infoBannerProps {
  message: string;
  onClick: () => void;
}

const Container = styled.div`
  margin-top: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.infoBlock};
  border: 0.2em solid ${({ theme }) => theme.colors.infoBorder};
  border-radius: 1em;
  padding: 0.2em 1em 0.2em 1em;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-left: 0.1em;
  padding-right: 0.1em;
`;

const LogoImage = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 1em;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 1em;
  border-radius: 0.2em;
  color: ${({ theme }) => theme.colors.infoCross};

  &:hover {
    background-color: ${({ theme }) => theme.colors.infoBorder};
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default function InfoBanner({ message, onClick }: infoBannerProps) {
  return (
    <Container>
      <MessageContainer>
        <LogoImage src={infoLogo} alt={infoLogo} />
        <p>{message}</p>
      </MessageContainer>
      <StyledCloseIcon onClick={onClick} />
    </Container>
  );
}
