import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  background-color: var(--preto);
  font-weight: 700;
  z-index: 1000;

  @media (max-width: 540px) {
    padding: 0px 10px;
  }
`;

const Logo = styled.h1`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--cinzafosco);
  text-decoration: underline;
  text-align: center;
  line-height: 74px;
  font-size: 40px;
  font-family: "Raleway", sans-serif;
  transition: 0.2s;
  color: var(--branco);

  @media (max-width: 540px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
    line-height: 55px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 15px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 540px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 10px;
  position: relative;
  font-size: 1.2em;

  &:not(:last-child)::after {
    content: "|";
    margin-left: 25px;
    margin-right: 10px;
    color: var(--branco);
  }

  button {
    padding: 0;
    display: flex;
    background-color: transparent;
    border: none;
    color: var(--branco);
    cursor: pointer;
    font-size: 1em;
  }

  a {
    text-decoration: none;
    color: var(--branco);
  }

  button span {
    padding: 10px 5px;
  }

  &:hover a,
  &:hover button {
    color: var(--cinzafosco);
  }

  @media (max-width: 540px) {
    font-size: 1em;
  }
`;

const RepositoryButton = styled.div`
  margin-left: 20px;

  button {
    border-radius: 10px;
    height: 50px;
    width: 120px;
    font-size: 35px;
    background-color: var(--cinza);
    color: var(--cinzafosco);
    border: none;
    cursor: pointer;

    a {
      padding: 0 20px;
      align-items: center;
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 540px) {
    margin-left: 10px;
    button {
      width: 100px;
      font-size: 30px;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link to="/" id="logo-link">
          <Logo className="header_logo" id="header-logo">
            EA
          </Logo>
        </Link>
      </div>
      <NavContainer>
        <nav>
          <NavList>
            <NavItem>
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
            </NavItem>
            <NavItem>
              <button id="Curriculum">
                <a
                  href="https://drive.google.com/file/d/1fu-wFev9fxRqUDkh58NCKNbMoXPimNkW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-regular fa-file"></span>
                  <span>Currículo</span>
                </a>
              </button>
            </NavItem>
            <NavItem>
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
            </NavItem>
          </NavList>
        </nav>
      </NavContainer>

      <RepositoryButton>
        <button>
          <a
            href="https://github.com/eduardoaugustopp/eduardoaugustopp.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-github"></span>
          </a>
        </button>
      </RepositoryButton>
    </HeaderContainer>
  );
}

export default Header;
