import styled from "styled-components";

import addOpacity from "../utils/AddOpacity";

interface chipProps {
  className?: string;
  label: string;
}

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1em;
  background: ${({ theme }) => addOpacity(theme.colors.primary, 0.7)};
  padding: 0.4em;

  & p {
    opacity: 1;
    margin: 0;
    font-size: 0.8em;
  }
`;

export default function Chip({ className, label }: chipProps) {
  return (
    <Container>
      <p>{label}</p>
    </Container>
  );
}
