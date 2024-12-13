import React from "react";
import style from "./Experiencia.module.css";

const cards = [
  {
    imagemLink:
      "https://media.licdn.com/dms/image/v2/C4E0BAQHxARxbs6yBkA/company-logo_200_200/company-logo_200_200/0/1630573593860/liveware_tecnologia_a_servico_ltda_logo?e=2147483647&v=beta&t=D5wJpieb6NXk7iL8aCui_qsSd52Pk94rKKHToiYjJug",
    empresa: "Liveware",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Novembro",
    inicioAno: "2024",
    terminoMes: "Atualmente",
    terminoAno: "",
    cargo: "Estagiário de desenvolvimento de software",
    atuacao:
      "Na Liveware, estou construindo uma base sólida em programação Java, avançando no conhecimento de MySQL e adquirindo experiência tanto em desenvolvimento frontend quanto backend.",
    link: "https://www.liveware.com.br/",
  },
  {
    imagemLink:
      "https://attachments.gupy.io/production/companies/49966/career/107491/images/2022-10-25_17-02_logo.jpg",
    empresa: "Fundação Instituto Nacional de Telecomunicações",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Abril",
    inicioAno: "2021",
    terminoMes: "Janeiro",
    terminoAno: "2022",
    cargo: "Técnico em Redes Móveis I",
    atuacao:
      "Comissionamento e integração remota de sites da Claro/Oi, utilizando ferramentas de gerenciamento nos equipamentos Nokia, com tecnologias GSM, WCDMA e LTE. As responsabilidades incluem ampliação e reconfiguração de sites, calibração de RETs e carregamento remoto de scripts e licenças.",
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
    cargo: "Técnico de Manutenção e Instalação",
    atuacao:
      "Responsável pela manutenção das estações pluviométricas e agro-meteorológicas do Cemaden em vários estados do Brasil.",
    link: "https://ativasolucoes.com.br/",
  },
  {
    imagemLink: "https://www.qualitronix.com.br/images/qualitronix-logo.png",
    empresa: "Qualitronix",
    localizacao: "Santa Rita do Sapucaí, MG",
    inicioMes: "Março",
    inicioAno: "2015",
    terminoMes: "Outubro",
    terminoAno: "2016",
    cargo: "Auxiliar Técnico de Reparos",
    atuacao:
      "Reparos em placas de sensores de presença com equipamentos de bancada.",
    link: "https://www.qualitronix.com.br/",
  },
];

const Experiencia = () => {
  const criarCard = (card) => {
    const termino = card.terminoAno
      ? `${card.terminoMes} de ${card.terminoAno}`
      : "Atualmente";

    return (
      <div className={style.item} key={card.empresa}>
        <div className={style.card}>
          <div className={style.header}>
            <img
              src={card.imagemLink}
              alt={card.empresa}
              className={style.image}
            />
            <div className={style.info}>
              <h3>
                {card.empresa} - {card.cargo}
              </h3>
              <p>{card.localizacao}</p>
            </div>
          </div>
          <div className={style.body}>
            <p>{card.atuacao}</p>
            <div className={style.dates}>
              <span>
                {card.inicioMes} de {card.inicioAno}
              </span>
              <span>{termino}</span>
            </div>
            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                Conheça
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
   <div>
    <h2 className={style.title}>Experiência Profissional</h2>
    <div className={style.container}>
      {cards.map(criarCard)}
    </div>
    </div>
  );
};

export default Experiencia;
