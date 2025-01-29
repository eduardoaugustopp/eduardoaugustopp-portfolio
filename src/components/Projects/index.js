import { useState } from "react";
import styled from "styled-components";
import loading from "./loading.png";

const Section = styled.section`
  padding: 70px 0;

  @media (max-width: 1200px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 50px;
  text-align: center;
  padding: 60px 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 30px 0;
  }
`;

const ContainerProjetos = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Projeto = styled.div`
  width: 100%;
  max-width: 250px;
  max-height: 500px;
  position: relative;
  display: ${(props) => (props.ativo ? "block" : "none")};
  overflow: hidden;
  cursor: pointer;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    background-color: var(--pretoT);
    width: 100%;
    padding: 10px 0 10px 20px;
    position: absolute;
    bottom: 0;
    color: var(--branco);
  }

  &:hover .informacoesProjeto {
    opacity: 0.9;
    background-color: var(--pretoT);
  }

  @media (max-width: 1200px) {
    max-width: 220px;
  }

  @media (max-width: 768px) {
    max-width: 180px;
  }
`;

const InformacoesProjeto = styled.div`
  background-color: var(--cinza);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.5s ease;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: 14px;
  }

  p {
    color: var(--branco);
  }

  &:hover p {
    color: var(--branco);
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const BtnMostrarProjetos = styled.button`
  background: none;
  border: 1px solid var(--cinza);
  border-radius: 15px;
  color: var(--pretoT);
  width: 180px;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--cinzafosco);
  }

  @media (max-width: 768px) {
    width: 150px;
    padding: 12px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 130px;
    padding: 10px;
    font-size: 14px;
  }
`;

function Projects() {
  const [mostrandoTodos, setMostrandoTodos] = useState(false);

  const projetos = [
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
    {
      img: loading,
      title: "",
      link: "",
      description: "",
    },
  ];

  const mostrarMaisProjetos = () => {
    setMostrandoTodos(true);
  };

  return (
    <Section id="projetos">
      <Title>Projetos</Title>

      <ContainerProjetos>
        {projetos.map((projeto, index) => {
          const deveExibir = mostrandoTodos || index < 4;
          return (
            <Projeto key={index} ativo={deveExibir}>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <img src={projeto.img} alt={projeto.title} />
                <h3>{projeto.title}</h3>
                <InformacoesProjeto className="informacoesProjeto">
                  <p>{projeto.description}</p>
                  <p>🔗 Ver no GitHub Pages</p>
                </InformacoesProjeto>
              </a>
            </Projeto>
          );
        })}
      </ContainerProjetos>

      {!mostrandoTodos && (
        <BtnMostrarProjetos onClick={mostrarMaisProjetos}>
          Mostrar mais
        </BtnMostrarProjetos>
      )}
    </Section>
  );
}

export default Projects;
