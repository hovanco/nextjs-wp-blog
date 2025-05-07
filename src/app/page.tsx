import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main id="homepage">
      <AboutMe />
      <Skills />
      <Experience />
      <Hobbies />
      <Footer />
    </main>
  );
};

export default Home;
