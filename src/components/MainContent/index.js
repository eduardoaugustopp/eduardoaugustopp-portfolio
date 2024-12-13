import { useEffect } from "react";
import style from "./MainContent.module.css";
import perfil from "./perfil.png";

function MainContent() {
  useEffect(() => {
    const matrixContainer = document.getElementById("matrix");
    const characters =
      "01";

    const createMatrix = () => {
      matrixContainer.innerHTML = "";

      const numberOfColumns = Math.floor(window.innerWidth / 25);

      for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement("div");
        column.style.position = "absolute";
        column.style.left = `${i * 25}px`;
        column.style.top = "0";

        const charCount = Math.floor(Math.random() * 10) + 5;
        for (let j = 0; j < charCount; j++) {
          const char = document.createElement("span");
          char.className = style.char;
          char.innerText = characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
          char.style.animationDuration = `${Math.random() * 3 + 2}s`;

          column.appendChild(char);

          setTimeout(() => {
            char.style.opacity = "1";
          }, j * 200);
        }

        matrixContainer.appendChild(column);
      }
    };

    createMatrix();

    window.addEventListener("resize", createMatrix);

    return () => {
      window.removeEventListener("resize", createMatrix);
    };
  }, []);

  return (
    <main>
      <div id="matrix"></div>
      <div className={style.mainContent}>
        <div className={style.home}>
          <h1>
            Desenvolvimento <span style={{ color: "#006400" }}>FrontEnd</span> e{" "}
            <span style={{ color: "#006400" }}>BackEnd</span> para criar sites e
            sistemas simples.
            <br />
            Olá! Me chamo{" "}
            <span style={{ color: "#006400" }}>Eduardo Augusto</span>.
            <span className={style.wave} role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
        </div>
        <div className={style.content}>
          <div className={style.imgText}>
            <div className={style.paragraph}>
              <h2>Aqui está um resumo dos meus estudos e projetos!</h2>
              <p>
                Desenvolvedor de Software em constante busca por novos desafios
                que me impulsionam a aprender e a desenvolver continuamente, com
                experiência em projetos pessoais usando HTML, CSS, JavaScript,
                Node.js, Express.js e React, além de conhecimentos em bancos de
                dados como MongoDB, PostgreSQL e PHP.
              </p>
              <br />
              <p>
                Também gosto de correr, é uma das minhas atividades favoritas!
                🏃‍♂️🚀
              </p>
              <ul className={style.redesSociais}>
                <li>
                  <a
                    href="https://www.linkedin.com/in/eduardoaugustopp"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ir para o Linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5535998068977"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enviar mensagem no WhatsApp"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/eduardoaugustopp"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ir para o Github"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/Eduardo Augusto Paiva Pinto - Currículo.pdf"
                    download="Eduardo Augusto Paiva Pinto - Currículo.pdf"
                    title="Download do currículo"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-file-earmark-arrow-down"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.containerFoto}>
              <div className={style.foto + " " + style.sombraInterna}>
                <img
                  src={perfil}
                  alt="Carrinho"
                  className={style.sombraInterna}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
