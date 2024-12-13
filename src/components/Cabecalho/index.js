import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";

function Cabecalho() {
  const [isFire, setIsFire] = useState(true);

  const handleLogoClick = (event) => {
    event.preventDefault();
    setIsFire(!isFire);
  };

  return (
    <header className={styles.cabecalho}>
      <div className={styles.header}>
        <Link to="/" id="logo-link" onClick={handleLogoClick}>
          <h1
            className={`${styles.header_logo} ${isFire ? styles.fire : ""}`}
            id="header-logo"
          >
            EA
          </h1>
        </Link>
        <div className={styles.header_nav}>
          <nav>
            <ul>
              <li>
                <button id="about">
                  <a
                    href="https://www.linkedin.com/in/eduardoaugustopp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-solid fa-user-large"></span>
                    <span>Sobre</span>
                  </a>
                </button>
              </li>
              <li>
                <button id="Curriculum">
                  <a
                    href="https://drive.google.com/file/d/1CacLi_7e4JgQM-Orcoa0nl_wtVanDwD8/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-regular fa-file"></span>
                    <span>Currículo</span>
                  </a>
                </button>
              </li>
              <li>
                <button id="Projects">
                  <a
                    href="https://github.com/eduardoaugustopp?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-regular fa-laptop-code"></span>
                    <span>Projetos</span>
                  </a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header_button_repository}>
          <button>
            <a
              href="https://github.com/eduardoaugustopp/eduardoaugustopp.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-brands fa-github"></span>
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;
