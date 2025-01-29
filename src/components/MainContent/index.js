import styled from "styled-components";
import perfil from "./perfil.png";

const MainContainer = styled.div`
  padding: 20px;
`;

const HomeSection = styled.section`
  text-align: center;
  margin-bottom: 300px;
`;

const Heading = styled.h1`
  margin: 20px 0;
  padding-top: 300px;
  color: var(--branco);
  font-weight: 300;
  font-size: 3.5rem;

  span {
    color: #3498db;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    padding-top: 450px;
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-top: 350px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding-top: 300px;
  }
`;

const ImgTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  text-align: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Paragraph = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 50px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: left;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;

  li {
    a {
      font-size: 1.5rem;
      color: #2c3e50;
      text-decoration: none;

      &:hover {
        color: #3498db;
      }
    }
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    margin-top: 40px;
    
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  background: linear-gradient(111.1deg, #2f2f2f 0%, #a9a9a9 100%);
  background-size: 180% 180%;
  animation: gradient-animation 5s ease infinite;

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

function MainContent() {
  return (
    <MainContainer>
      <HomeSection>
        <Heading>
          Desenvolvimento <span>FrontEnd</span> e <span>BackEnd</span>.
          <br />
          Olá! Me chamo <span>Eduardo Augusto</span>.
          <span role="img" aria-labelledby="wave" style={{ fontSize: "2rem" }}>
            👋🏻
          </span>
        </Heading>
      </HomeSection>

      <ImgTextWrapper>
        <Paragraph>
          <h2>Aqui você encontrará meus estudos</h2>
          <p>
            Como profissional estou sempre aprimorando minhas habilidades em
            tecnologia, busco aprofundar minha capacidade de construir soluções
            que agreguem valor ao negócio. Atualmente meu foco é em Java.
          </p>
          <p>
            Também gosto de correr, é uma das minhas atividades favoritas! 🏃‍♂️🚀
          </p>
          <SocialLinks>
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
          </SocialLinks>
        </Paragraph>

        <ProfileImageContainer>
          <ProfileImage src={perfil} alt="Perfil" />
        </ProfileImageContainer>
      </ImgTextWrapper>
    </MainContainer>
  );
}

export default MainContent;
