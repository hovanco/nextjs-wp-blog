import Image from "next/image";
import Link from "next/link";
import IconSearch from "./assets/images/my-avatar.jpg";
import Malayalam from "./assets/images/malayalam-type.jpeg";
import VibrantPortraits from "./assets/images/vibrant-portraits.jpeg";
import DesignDashboard from "./assets/images/desig-dashboard.png";
import FB from "./assets/icons/fb.svg";
import Instagram from "./assets/icons/insta.svg";
import Twitter from "./assets/icons/twitter.svg";
import Linkedin from "./assets/icons/linkedin.svg";

const Home = () => {
  return (
    <main id="homepage">
      <section className="section section-banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <h1>
                Hi, I am John <br /> Web Developer
              </h1>
              <h2>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </h2>
              <div className="wrapper-img">
                <button>Download Resume</button>
              </div>
            </div>
            <div className="banner-image">
              <div className="banner-img">
                <Image
                  className="banner-avatar"
                  src={IconSearch.src}
                  alt="Avatar"
                  width={100}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section recent-posts">
        <div className="container">
          <div className="recent-top">
            <p className="recent-top-text">Recent posts</p>
            <Link className="recent-top-link" href="/blog">
              View all
            </Link>
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
            <div className="social-item">
              <Image
                className="social-icon"
                src={FB.src}
                alt="Facebook"
                width={24}
                height={24}
              />
            </div>
            <div className="social-item">
              <Image
                className="social-icon"
                src={Instagram.src}
                alt="Instagram"
                width={24}
                height={24}
              />
            </div>
            <div className="social-item">
              <Image
                className="social-icon"
                src={Twitter.src}
                alt="Twitter"
                width={24}
                height={24}
              />
            </div>
            <div className="social-item">
              <Image
                className="social-icon"
                src={Linkedin.src}
                alt="Linkedin"
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className="copyright-text">Copyright ©2025 All rights reserved </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
