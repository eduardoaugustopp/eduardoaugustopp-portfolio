import Header from "components/Header";
import Footer from "components/Footer";
import MainContent from "components/MainContent";
import Sites from "components/Sites";
import Experience from "components/Experience";
import Skills from "components/Skills";

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Skills />
      <Sites />
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
