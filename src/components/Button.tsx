import styled from "styled-components";

interface buttonProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Container = styled.a`
  border: solid black;
  border-radius: 0.5em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Button({
  className,
  children,
  href,
  onClick,
}: buttonProps) {
  return (
    <Container className={className} onClick={onClick} href={href}>
      {children}
    </Container>
  );
}
