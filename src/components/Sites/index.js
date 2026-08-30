import { useState } from "react";
import styled from "styled-components";
import loading from "./loading.png";
import site1 from "./site1.png";
import site2 from "./site2.png";
import site3 from "./site3.png";

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

const ContainerSites = styled.div`
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
const Site = styled.div`
  width: 100%;
  max-width: 250px;
  height: 350px; 
  position: relative;
  display: ${(props) => (props.ativo ? "block" : "none")};
  overflow: hidden;
  cursor: pointer;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    height: 100%; 
    width: 100%;
    object-fit: cover;
    object-position: top; 
  }

  h3 {
    background-color: var(--pretoT);
    width: 100%;
    padding: 10px 0 10px 20px;
    position: absolute;
    bottom: 0;
    color: var(--branco);
    margin: 0;
  }

  &:hover .informacoesSite {
    opacity: 0.9;
    background-color: var(--pretoT);
  }

  @media (max-width: 1200px) {
    max-width: 220px;
    height: 310px; 
  }

  @media (max-width: 768px) {
    max-width: 180px;
    height: 250px; 
  }
`;


const InformacoesSite = styled.div`
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

const BtnMostrarSites = styled.button`
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

function Sites() {
  const [mostrandoTodos, setMostrandoTodos] = useState(false);

  const sites = [
    {
      img: site1,
      title: "Site 1",
      link: "https://github.com/eduardoaugustopp/html-css-javascript-frontend",
      description: "",
    },
    {
      img: site2,
      title: "Site 2",
      link: "https://github.com/eduardoaugustopp/nextjs-typescript-tailwind-frontend",
      description: "",
    },
    {
      img: site3,
      title: "Site 3",
      link: "https://github.com/eduardoaugustopp/ermpesca",
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

  const mostrarMaisSites = () => {
    setMostrandoTodos(true);
  };

  return (
    <Section id="sites">
      <Title>Sites</Title>

      <ContainerSites>
        {sites.map((site, index) => {
          const deveExibir = mostrandoTodos || index < 4;
          return (
            <Site key={index} ativo={deveExibir}>
              <a href={site.link} target="_blank" rel="noopener noreferrer">
                <img src={site.img} alt={site.title} />
                <h3>{site.title}</h3>
                <InformacoesSite className="informacoesSite">
                  <p>{site.description}</p>
                  <p>🔗 Ver no GitHub Pages</p>
                </InformacoesSite>
              </a>
            </Site>
          );
        })}
      </ContainerSites>

      {!mostrandoTodos && (
        <BtnMostrarSites onClick={mostrarMaisSites}>
          Mostrar mais
        </BtnMostrarSites>
      )}
    </Section>
  );
}

export default Sites;
