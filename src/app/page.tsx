import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main id="homepage">
      <AboutMe />
      <Skills />
      <Experience />
      <Hobbies />
      <Thanks />
      <Footer />
    </main>
  );
};

export default Home;
