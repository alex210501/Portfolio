import styled from "@emotion/styled";

const LinkContainer = styled.div`
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

export default function Credits({ className }: { className?: string }) {
  return (
    <LinkContainer className={className}>
      <a href="https://github.com/alex210501/Portfolio">
        <p>Design & Built by Alejandro</p>
      </a>
    </LinkContainer>
  );
}
