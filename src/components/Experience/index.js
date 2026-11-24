import React from "react";
import styled from "styled-components";
import chmasterdata from "./chmasterdata.png";
import inatel from "./inatel.png";
import ativa from "./ativa.png";
import bittec from "./bittec.png";
import ericsson from "./ericsson.png";
import qualitronix from "./qualitronix.png";

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
  gap: 6px;
  padding: 15px 0;

  p {
    margin: 0;
    line-height: 1.4;
  }
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
    img: chmasterdata,
    empresa: "CH Master Data",
    localizacao: "Juiz de Fora, MG",
    inicioMes: "Abril",
    inicioAno: "2025",
    terminoMes: "",
    terminoAno: "",
    cargo: "Analista de cadastro",
    atuacao: [
      "Atuação no cadastro de materiais por meio da revisão e padronização de registros existentes na base de dados corporativa.",
      "Validação de solicitações de novos itens, realizando análises técnicas a partir de catálogos e especificações de fabricantes.",
      "Identificação de inconsistências e possíveis duplicidades, além da classificação dos materiais no PDM adequado para garantir a qualidade das informações e o atendimento aos critérios estabelecidos pelos clientes.",
    ],
    link: "https://chmasterdata.com.br",
  },
  {
    img: inatel,
    empresa: "Instituto Nacional de Telecomunicações",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Junho",
    inicioAno: "2023",
    terminoMes: "Abril",
    terminoAno: "2024",
    cargo: "Técnico de sistemas",
    atuacao: [
      "Acompanhamento remoto da qualidade das instalações de equipamentos Huawei em sites das operadoras Claro e Vivo, com tecnologias 2G, 3G, 4G e 5G.",
      "Conferência de materiais recebidos, validando quantidades e especificações técnicas conforme as notas fiscais.",
      "Verificação dos registros de segurança das equipes de campo, incluindo uso de EPIs, condições dos veículos e validade de certificações obrigatórias para liberação das atividades.",
      "Análise técnica de evidências fotográficas e em vídeo para checar a conformidade dos serviços executados com os padrões estabelecidos.",
      "Suporte técnico às equipes de campo na identificação de falhas e orientação quanto às correções necessárias, mantendo comunicação direta com a Huawei para reportar o status das atividades.",
    ],
    link: "https://inatel.br",
  },
  {
    img: inatel,
    empresa: "Instituto Nacional de Telecomunicações",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Abril",
    inicioAno: "2021",
    terminoMes: "Janeiro",
    terminoAno: "2022",
    cargo: "Técnico de sistemas",
    atuacao: [
      "Comissionamento e integração remota de equipamentos Nokia em sites das operadoras Claro e Oi, com tecnologias 2G, 3G, 4G e 5G.",
      "Utilização de ferramentas de gerenciamento para configuração, ativação e realização de testes de funcionamento da rede.",
      "Suporte técnico às equipes de campo durante o processo, auxiliando na verificação de alarmes e solução de falhas, mantendo comunicação direta com a Nokia para reportar o status das atividades.",
    ],
    link: "https://inatel.br",
  },
  {
    img: ativa,
    empresa: "ATIVA Soluções Tecnológicas",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Outubro",
    inicioAno: "2019",
    terminoMes: "Fevereiro",
    terminoAno: "2021",
    cargo: "Técnico em eletrônica",
    atuacao: [
      "Atuação em campo nas bases de apoio e praças de pedágio da Rodovia Fernão Dias, entre Mairiporã/SP e Betim/MG.",
      "Instalação, configuração e manutenção de sistemas de telemetria e automação para monitoramento do nível de reservatórios, medição de vazão e controle de outorga de poços artesianos, utilizando painéis de comando elétrico com contatores e inversores de frequência.",
      "Comunicação direta com a Arteris para alinhamento das atividades, acompanhamento do cronograma e suporte técnico durante a execução dos serviços.",
      "Participação em outros projetos para clientes como Sabesp, Telefônica, ABAVAR e Raízen.",
    ],
    link: "https://ativasolucoes.com.br",
  },
  {
    img: bittec,
    empresa: "BIT-TEC Tecnologia",
    localizacao: "São Paulo, SP",
    inicioMes: "Janeiro",
    inicioAno: "2019",
    terminoMes: "Setembro",
    terminoAno: "2019",
    cargo: "Técnico em eletrônica",
    atuacao: [
      "Atuação técnica no Data Center da Oi, em São Paulo/SP, com servidores da fabricante Huawei.",
      "Instalação de equipamentos, conexão de cabos e organização em racks.",
      "Suporte presencial às equipes remotas da Huawei, disponibilizando acesso para realização de testes e configurações dos sistemas.",
    ],
    link: "https://bit-tec.com.br",
  },
  {
    img: ativa,
    empresa: "ATIVA Soluções Tecnológicas",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Janeiro",
    inicioAno: "2018",
    terminoMes: "Dezembro",
    terminoAno: "2018",
    cargo: "Técnico em eletrônica",
    atuacao: [
      "Atuação em campo na inspeção técnica e manutenção preventiva e corretiva de estações pluviométricas do CEMADEN, em diferentes localidades da região do semiárido brasileiro.",
      "Verificação e substituição de componentes eletrônicos, sensores, sistemas de alimentação e módulos de transmissão de dados.",
      "Comunicação com órgãos públicos para localização das estações, planejamento dos deslocamentos e autorização de acesso aos locais.",
      "Participação em outros projetos para clientes como Copasa e Caesb.",
    ],
    link: "https://ativasolucoes.com.br",
  },
  {
    img: ericsson,
    empresa: "Ericsson",
    localizacao: "São Paulo, SP",
    inicioMes: "Abril",
    inicioAno: "2017",
    terminoMes: "Dezembro",
    terminoAno: "2017",
    cargo: "Técnico de implantação",
    atuacao: [
      "Atuação em campo nas capitais de São Paulo/SP e Rio de Janeiro/RJ.",
      "Comissionamento, integração e testes de equipamentos, incluindo a identificação e correção de alarmes em sites da Claro, com tecnologias 2G, 3G e 4G.",
      "Acompanhamento de viradas de antenas durante janelas de manutenção na madrugada.",
      "Leitura e análise de projetos técnicos, prestando suporte às equipes de campo quanto aos padrões e procedimentos de instalação.",
      "Recebimento e conferência técnica de materiais, vistoria da qualidade das instalações e execução de atividades em altura durante os processos de implantação.",
    ],
    link: "https://ericsson.com",
  },
  {
    img: qualitronix,
    empresa: "Qualitronix Tecnologia Ltda",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Março",
    inicioAno: "2015",
    terminoMes: "Outubro",
    terminoAno: "2016",
    cargo: "Auxiliar técnico",
    atuacao: [
      "Manutenção corretiva de placas eletrônicas de sensores de presença, utilizando multímetro, estação de solda e fonte de bancada.",
      "Identificação de falhas em circuitos, substituição de componentes eletrônicos e realização de testes funcionais após os reparos.",
    ],
    link: "https://qualitronix.com.br",
  },
];


const Experience = () => {
  const criarCard = (card) => {
    const termino = card.terminoAno
      ? `${card.terminoMes} de ${card.terminoAno}`
      : "atual";

    return (
      <Item key={`${card.empresa}-${card.inicioAno}-${card.inicioMes}`}>
        <Card>
          <Header>
            <Image src={card.img} alt={card.empresa} />
            <div>
              <h3>
                {card.empresa} - {card.cargo}
              </h3>
              <p>{card.localizacao}</p>
            </div>
          </Header>
          <Body>
            {card.atuacao.map((item, index) => (
              <p key={index}>
                <strong>•</strong> {item}
              </p>
            ))}
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
