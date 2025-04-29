import Image from "next/image";
import Link from "next/link";
import CoAvatar from "./assets/images/co-avatar.jpeg";
import Malayalam from "./assets/images/malayalam-type.jpeg";
import VibrantPortraits from "./assets/images/vibrant-portraits.jpeg";
import DesignDashboard from "./assets/images/design-dashboard.png";

import Linkedin from "./assets/icons/linkedin-logo.svg";
import Gmail from "./assets/icons/gmail-logo.svg";
import Skype from "./assets/icons/skype-logo.svg";

import HTML from "./assets/icons/html5-logo.svg";
import CSS from "./assets/icons/css3-logo.svg";
import SCSS from "./assets/icons/sass-logo.svg";
import Tailwindcss from "./assets/icons/tailwindcss-logo.svg";
import JavaScript from "./assets/icons/javascript-logo.svg";
import Redux from "./assets/icons/redux-logo.svg";
import ReactJS from "./assets/icons/react-logo.svg";
import NextJS from "./assets/icons/nextjs-logo.svg";
import AngularJS from "./assets/icons/angular-logo.svg";
import VueJS from "./assets/icons/vue-logo.svg";
import TypeScript from "./assets/icons/typescript-logo.svg";
import GIT from "./assets/icons/git-logo.svg";
import Bootstrap from "./assets/icons/bootstrap-logo.svg";
import Material from "./assets/icons/material-logo.svg";
import Wordpress from "./assets/icons/wordpress-logo.svg";
import Responsive from "./assets/icons/responsive-logo.svg";
import Figma from "./assets/icons/figma-logo.svg";
import Office365 from "./assets/icons/office-365-logo.svg";

const Home = () => {
  return (
    <main id="homepage">
      <section className="section section-banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <h1>
                Hi, I am Co <br /> Web Developer
              </h1>
              <h2>
                {
                  "I'm a passionate Front-End Developer with over 3 years of experience crafting responsive, accessible, and high-performance web applications. I specialize in turning complex UI/UX designs into clean, maintainable code that delivers real value to users and businesses alike."
                }
              </h2>
              <div className="wrapper-img">
                <button>Download Resume</button>
              </div>
            </div>
            <div className="banner-image">
              <div className="banner-img">
                <Image
                  className="banner-avatar"
                  src={CoAvatar.src}
                  alt="Avatar"
                  width={100}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section recent-posts">
        <div className="container">
          <div className="recent-top">
            <p className="recent-top-text">IT Skills</p>
            <div className="wrapper-top-link">
              <Link className="recent-top-link" href="/blog">
                View all
              </Link>
            </div>
          </div>
          <div className="recent-list">
            <div className="recent-item">
              <p className="recent-title">
                Making a design system from scratch
              </p>
              <p className="recent-date">12 Feb 2020 | Design, Pattern</p>
              <p className="recent-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="recent-item">
              <p className="recent-title">
                Making a design system from scratch
              </p>
              <p className="recent-date">12 Feb 2020 | Design, Pattern</p>
              <p className="recent-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section skill-section">
        <div className="container">
          <div className="skill-top">
            <p className="skill-title">IT Skills</p>
            <p className="skill-sub-title">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
          <ul className="skill-list">
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={HTML.src}
                alt="HTML logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={CSS.src}
                alt="CSS logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={SCSS.src}
                alt="SCSS logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Tailwindcss.src}
                alt="Tailwindcss logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={JavaScript.src}
                alt="JavaScript logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Redux.src}
                alt="Redux logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={ReactJS.src}
                alt="ReactJS logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={NextJS.src}
                alt="NextJS logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={VueJS.src}
                alt="VueJS logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={AngularJS.src}
                alt="AngularJS logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={TypeScript.src}
                alt="TypeScript logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Wordpress.src}
                alt="Wordpress logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={GIT.src}
                alt="GIT logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Bootstrap.src}
                alt="Bootstrap logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Material.src}
                alt="Material logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Responsive.src}
                alt="Responsive logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Figma.src}
                alt="Figma logo"
                width={50}
                height={50}
              />
            </li>
            <li className="skill-item">
              <Image
                className="skill-logo"
                src={Office365.src}
                alt="Office365 logo"
                width={50}
                height={50}
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="section featured-works">
        <div className="container">
          <p className="featured-works-text">Featured works</p>
          <div className="featured-list">
            <div className="featured-item">
              <div className="featured-img">
                <Image
                  src={DesignDashboard.src}
                  alt="Featured image"
                  width={250}
                  height={180}
                />
              </div>

              <div className="featured-content">
                <p className="featured-title">Designing Dashboards</p>
                <div className="featured-top">
                  <span className="featured-label-year">2020</span>
                  <p className="featured-label-text">Dashboard</p>
                </div>
                <p className="featured-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="featured-item">
              <div className="featured-img">
                <Image
                  src={VibrantPortraits.src}
                  alt="Featured image"
                  width={250}
                  height={180}
                />
              </div>

              <div className="featured-content">
                <p className="featured-title">Vibrant Portraits of 2020</p>
                <div className="featured-top">
                  <span className="featured-label-year">2018</span>
                  <p className="featured-label-text">Illustration</p>
                </div>
                <p className="featured-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="featured-item">
              <div className="featured-img">
                <Image
                  src={Malayalam.src}
                  alt="Featured image"
                  width={250}
                  height={180}
                />
              </div>
              <div className="featured-content">
                <p className="featured-title">36 Days of Malayalam type</p>
                <div className="featured-top">
                  <span className="featured-label-year">2018</span>
                  <p className="featured-label-text">Typography</p>
                </div>
                <p className="featured-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section footer-section">
        <div className="container">
          <div className="social-list">
            <Link
              href="https://www.linkedin.com/in/hovanco/"
              className="social-item"
            >
              <Image
                className="social-icon"
                src={Linkedin.src}
                alt="Linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href="mailto:hovanco.vn@gmail.com" className="social-item">
              <Image
                className="social-icon"
                src={Gmail.src}
                alt="Gmail"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://join.skype.com/invite/xn8XLBob1QX8"
              className="social-item"
            >
              <Image
                className="social-icon"
                src={Skype.src}
                alt="Skype"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <p className="copyright-text">Copyright ©2025 All rights reserved </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
