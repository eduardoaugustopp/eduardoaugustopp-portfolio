import Header from "components/Header";
import Footer from "components/Footer";
import MainContent from "components/MainContent";
// import Projects from "components/Projects";
import Experience from "components/Experience";
import Skills from "components/Skills";

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
