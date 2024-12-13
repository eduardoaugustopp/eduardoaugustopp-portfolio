import Cabecalho from "components/Cabecalho";
import Footer from "components/Footer";
import MainContent from "components/MainContent";
import Projects from "components/Projects";
import Experiencia from "components/Experiencia";

function Inicio() {
  return (
    <div>
      <Cabecalho />
      <MainContent />
      <Projects />
      <Experiencia />
      <Footer />
    </div>
  );
}

export default Inicio;
