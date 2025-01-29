import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--branco);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 0.8rem;
  opacity: 0.5;
  width: 100%;

  @media (max-width: 980px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 0.8rem;
    padding: 20px 0;
  }
  @media (max-width: 540px) and (max-height: 720px) {
    font-size: 0.5rem;
    padding: 5px 0;
  }
`;

const FooterBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Copyright = styled.div`
  color: var(--cinzaEscuro);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Active = styled.span`
  font-weight: bold;
  margin-left: 3px;
`;

const Links = styled.div``;

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  padding: 3px 0;
`;

const Link = styled.a`
  color: var(--cinzaEscuro);
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    span {
      margin-left: 2px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBar>
        <Copyright>
          <span>Copyright © 2024 Developed by </span>
          <Active> Eduardo Augusto</Active>
        </Copyright>
        <Links>
          <LinksList>
            <LinkItem>
              <Link
                href="https://www.linkedin.com/in/eduardoaugustopp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-brands fa-linkedin"></span>
                <span>Eduardo Augusto Paiva Pinto</span>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href="https://github.com/eduardoaugustopp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-brands fa-github"></span>
                <span>@eduardoaugustopp</span>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href="mailto:eduardo.augustopp@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-solid fa-envelope"></span>
                <span>eduardo.augustopp@hotmail.com</span>
              </Link>
            </LinkItem>
          </LinksList>
        </Links>
      </FooterBar>
    </FooterWrapper>
  );
};

export default Footer;