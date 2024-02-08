import styled from "styled-components";

const SkillContent = styled.div`
    max-width: 300px;
    padding: 1em;
    border: 1px solid #E3DBDB;
    border-radius: 0.5em;
    box-shadow: 5px 10px 18px #E3DBDB;
`;

const SkillTitle = styled.h2`
    font-weight: bold;
`;

const SkillDescription = styled.p`
    text-align: justify;
`;

const SkillListTitle = styled.h3`

`;

const SkillEnumerationContainer = styled.div`
    text-align: center;
`

interface SkillsList {
    subtitle: string;
    skills: string[];
}

interface SkillsEnumeration {
    title: string;
    description: string;
    subtitle: string;
    skills: string[];
}

// TODO - Create interface
function SkillEnumeration({ subtitle, skills }: SkillsList) {
    return (
        <SkillEnumerationContainer>
            <SkillListTitle>{subtitle}</SkillListTitle>
            {skills.map((skill) => {return <p>{skill}</p>})}
        </SkillEnumerationContainer>
    );
}

export default function SkillBox({ title, description, subtitle, skills }: SkillsEnumeration) {
    return (
        <SkillContent>
            <div style={{ marginBottom: '2em' }}>
                <SkillTitle>{title}</SkillTitle>
                <SkillDescription>{description}</SkillDescription>
            </div>
            <SkillEnumeration subtitle={subtitle} skills={skills} />
        </SkillContent>
    );
}