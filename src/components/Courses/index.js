import React from "react";
import styled from "styled-components";

const CoursesContainer = styled.div`
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

const AccordionWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Details = styled.details`
  border: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 8px;
  padding: 15px 20px;
  transition: all 0.3s ease-in-out;

  &[open] {
    padding-bottom: 20px;
    background-color: #ffffff;
    color: #000000;
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`;

const Summary = styled.summary`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "+";
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  ${Details}[open] &::after {
    content: "-";
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CourseList = styled.ul`
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CourseItem = styled.li`
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CourseLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

const coursesData = [
  {
    category: "Java",
    items: [
      {
        title: "Java: aplicando a Orientação a Objetos (Alura)",
        url: "https://cursos.alura.com.br/certificate/fb99ea4c-0324-46a9-8adf-0b4b05ccf80c?lang",
      },
      {
        title: "Java: consumindo API, gravando arquivos e lidando com erros (Alura)",
        url: "https://cursos.alura.com.br/certificate/77ece938-a1c7-4f3d-ba21-c1204d45bb1c?lang",
      },
      {
        title: "Java: trabalhando com listas e coleções de dados (Alura)",
        url: "https://cursos.alura.com.br/certificate/15150578-2bfe-43d0-b6e1-466eef70a37d?lang",
      },
    ],
  },
  {
    category: "Cloud, Containers e Linux",
    items: [
      {
        title: "Certificação AWS Certified Cloud Practitioner (Alura)",
        url: "https://cursos.alura.com.br/user/eduardo-augustopp/degree-aws-certified-cloud-practitioner-54998/certificate",
      },
      {
        title: "Docker: criando e gerenciando containers (Alura)",
        url: "https://cursos.alura.com.br/certificate/837cae7f-1e69-4366-b21d-ee7ffeaa3baf?lang",
      },
      {
        title: "Terminal: aprenda comandos para executar tarefas (Alura)",
        url: "https://cursos.alura.com.br/certificate/4f664cce-1381-485d-a9b1-ae273c6de7b7?lang",
      },
      {
        title: "Linux Onboarding: usando a CLI de uma forma rápida e prática (Alura)",
        url: "https://cursos.alura.com.br/certificate/83810e53-3160-4420-a1be-42cc121a7795?lang",
      },
      {
        title: "Linux Onboarding: localizando arquivos e conteúdos (Alura)",
        url: "https://cursos.alura.com.br/certificate/eec2e8c6-18ae-4b92-b6db-f9b71e3bb259?lang",
      },
    ],
  },
  {
    category: "Metodologias Ágeis, IA e Segurança",
    items: [
      {
        title: "Inteligência Artificial e Computacional (FIAP)",
        url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=dff80825c55fac44b5f64bdfa4086053&action=view",
      },
      {
        title: "Cybersecurity (FIAP)",
        url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=0104cc796959c720ddf90da78cda27d2&action=view",
      },
      {
        title: "Scrum: agilidade em seu projeto (Alura)",
        url: "https://cursos.alura.com.br/certificate/6117b5c7-e444-400a-9a36-f9412aa70186?lang",
      },
      {
        title: "Equipes ágeis: organizando os papéis em uma equipe (Alura)",
        url: "https://cursos.alura.com.br/certificate/da003cb1-cd35-4fd8-b53c-db75fd06730e?lang",
      },
    ],
  },
];

function CourseSection({ category, items }) {
  return (
    <Details>
      <Summary>{category}</Summary>
      <CourseList>
        {items.map((course) => (
          <CourseItem key={course.url}>
            <CourseLink
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {course.title}
            </CourseLink>
          </CourseItem>
        ))}
      </CourseList>
    </Details>
  );
}

function Courses() {
  return (
    <CoursesContainer>
      <Title>Cursos e Certificações</Title>
      <AccordionWrapper>
        {coursesData.map((section) => (
          <CourseSection
            key={section.category}
            category={section.category}
            items={section.items}
          />
        ))}
      </AccordionWrapper>
    </CoursesContainer>
  );
}

export default Courses;
