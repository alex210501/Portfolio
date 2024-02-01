import styled from "styled-components";

import SkillBox from "../components/SkillBox";

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Container = styled.div`
    width: 80%;
    margin: auto;
`;

const SkillBoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: center;
    gap: 2em;
`;

export default function About() {
    return (
        <Container>
            <div style={{ marginBottom: '5em' }}>
                <h1>About me</h1>
                <p>{dummyText}</p>
            </div>
            <SkillBoxContainer>
                <SkillBox title="Software Engineering" description={dummyText} subtitle="Dev tools" skills={['A', 'A', 'A']} />
                <SkillBox title="Software Engineering 2" description={dummyText} subtitle="Dev tools" skills={['A', 'A', 'A', 'B']} />
                <SkillBox title="Software Engineering 2" description={dummyText} subtitle="Dev tools" skills={['A', 'A', 'A', 'B']} />
            </SkillBoxContainer>
        </Container>
    );
}