import styled from "@emotion/styled";
import { Link } from "@mui/material";

const CreditLink = styled(Link)`
  display: block;
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default function Credits() {
  return (
    <CreditLink href="https://github.com/alex210501/Portfolio">
      Design & Built by Alejandro
    </CreditLink>
  );
}
