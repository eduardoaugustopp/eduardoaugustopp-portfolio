import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: inherit;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  padding: 60px 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 30px 0;
  }
`;

const Item = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: clamp(60px, 15vw, 100px);
  height: clamp(60px, 15vw, 100px);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 0;
`;

const Dates = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Link = styled.a`
  align-self: start;
  margin-top: 10px;
  background-color: var(--cinzafosco);
  color: white;
  padding: 0.5em 1em;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--cinzabrilhante);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 0.4em 0.8em;
  }
`;

const cards = [
  {
    imagemLink:
      "https://attachments.gupy.io/production/companies/49966/career/107491/images/2022-10-25_17-02_logo.jpg",
    empresa: "Instituto Nacional de Telecomunicações",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Abril",
    inicioAno: "2021",
    terminoMes: "Janeiro",
    terminoAno: "2022",
    cargo: "Técnico de sistemas",
    atuacao:
      "Comissionamento e integração remota de sites da Claro | Oi (2g | 3g | 4g | 5g), utilizando ferramentas de gerenciamento nos equipamentos Nokia.",
    link: "https://inatel.br/home/",
  },
  {
    imagemLink:
      "https://ativasolucoes.com.br/wp-content/uploads/2022/10/Logo-ATIVA-Solucoes.png",
    empresa: "ATIVA Soluções Tecnológicas",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Janeiro",
    inicioAno: "2018",
    terminoMes: "Dezembro",
    terminoAno: "2018",
    cargo: "Técnico em Eletrônica",
    atuacao:
      "Manutenção das estações pluviométricas do Cemaden em cidades do semiárido.",
    link: "https://ativasolucoes.com.br/",
  },
  {
    imagemLink:
      "https://www.ericsson.com/cdn-cgi/image/format=auto,fit=scale-down,width=1440/4981bb/assets/global/qbank/2021/04/21/e-con-vertical-1500x1500px-88604d41d8cd98f00b204e9800998ecf8427e.png",
    empresa: "Ericsson Gestão e Servicos de Telecomunicações Ltda",
    localizacao: "São Paulo, SP",
    inicioMes: "Maio",
    inicioAno: "2017",
    terminoMes: "Dezembro",
    terminoAno: "2017",
    cargo: "Técnico de implantação",
    atuacao:
      "Comissionamento, integração e atividades em altura de sites da Claro (2g | 3g | 4g).",
    link: "https://www.ericsson.com/pt/about-us/company-facts/ericsson-worldwide/brazil",
  },
  {
    imagemLink: "https://www.qualitronix.com.br/images/qualitronix-logo.png",
    empresa: "Qualitronix Tecnologia Ltda",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Março",
    inicioAno: "2015",
    terminoMes: "Outubro",
    terminoAno: "2016",
    cargo: "Auxiliar Técnico",
    atuacao:
      "Manutenção de placas de sensores de presença com equipamentos de bancada.",
    link: "https://www.qualitronix.com.br/",
  },
];

const Experience = () => {
  const criarCard = (card) => {
    const termino = card.terminoAno
      ? `${card.terminoMes} de ${card.terminoAno}`
      : "Atualmente";

    return (
      <Item key={card.empresa}>
        <Card>
          <Header>
            <Image src={card.imagemLink} alt={card.empresa} />
            <div>
              <h3>
                {card.empresa} - {card.cargo}
              </h3>
              <p>{card.localizacao}</p>
            </div>
          </Header>
          <Body>
            <p>{card.atuacao}</p>
            <Dates>
              <span>
                {card.inicioMes} de {card.inicioAno}
              </span>
              <span>{termino}</span>
            </Dates>
            {card.link && (
              <Link href={card.link} target="_blank" rel="noopener noreferrer">
                Conheça
              </Link>
            )}
          </Body>
        </Card>
      </Item>
    );
  };

  return (
    <div>
      <Title>Experiência</Title>
      <Container>{cards.map(criarCard)}</Container>
    </div>
  );
};

export default Experience;
