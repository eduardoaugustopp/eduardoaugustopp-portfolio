import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  margin: 20px;
  margin-top: 200px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 150px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
  margin-top: 200px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 150px;
  }
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  margin: 0 auto;
  border-collapse: collapse;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Td = styled.td`
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SkillImage = styled.img`
  margin: 5px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const skillsData = {
  frontend: [
    { src: "https://skillicons.dev/icons?i=html", alt: "HTML" },
    { src: "https://skillicons.dev/icons?i=css", alt: "CSS" },
    { src: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
    { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  ],
  backend: [
    { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
    { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
    { src: "https://skillicons.dev/icons?i=spring", alt: "Spring" },
    { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
    { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
    { src: "https://skillicons.dev/icons?i=aws", alt: "AWS" },
    { src: "https://skillicons.dev/icons?i=docker", alt: "Docker" },
  ],
  tools: [
    { src: "https://skillicons.dev/icons?i=vscode", alt: "VSCode" },
    { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
    { src: "https://skillicons.dev/icons?i=postman", alt: "Postman" },
    { src: "https://skillicons.dev/icons?i=eclipse", alt: "Eclipse" },
  ],
};

function SkillSection({ title, skills }) {
  return (
    <Td valign="top">
      <SectionTitle>{title}</SectionTitle>
      <SkillIcons>
        {skills.map((skill) => (
          <SkillImage
            key={skill.alt}
            src={skill.src}
            alt={skill.alt}
            width="50"
            height="50"
          />
        ))}
      </SkillIcons>
    </Td>
  );
}

function Skills() {
  return (
    <SkillsContainer>
      <Title>Habilidades</Title>
      <Table>
        <thead>
          <tr>
            <SkillSection title="Frontend" skills={skillsData.frontend} />
            <SkillSection title="Backend" skills={skillsData.backend} />
            <SkillSection title="Ferramentas" skills={skillsData.tools} />
          </tr>
        </thead>
      </Table>
    </SkillsContainer>
  );
}

export default Skills;
