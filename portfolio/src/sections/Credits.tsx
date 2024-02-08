import styled from "@emotion/styled";
import { Link } from "@mui/material";

const LinkContainer = styled.div`
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

export default function Credits({ className }: { className?: string }) {
  return (
    <LinkContainer className={className}>
      <Link href="https://github.com/alex210501/Portfolio">
      Design & Built by Alejandro
      </Link>
    </LinkContainer>
  );
}
