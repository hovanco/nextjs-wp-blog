"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
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
