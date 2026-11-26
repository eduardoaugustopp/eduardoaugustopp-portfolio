import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContent from '../../components/MainContent';
import Sites from '../../components/Sites';
import Skills from '../../components/Skills';
import Courses from '../../components/Courses';

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Courses />
      <Skills />
      <Sites />
      <Footer />
    </div>
  );
}

export default Home;
