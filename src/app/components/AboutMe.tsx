import Image from "next/image";
import CoAvatar from "../assets/images/co-avatar.jpeg";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <h1 className="about-title">Hi, I am Co</h1>
            <h2 className="about-role">Web Developer</h2>
            <p className="about-desc">
              I am a passionate Front-End Developer with over 3 years of
              experience crafting responsive, accessible, and high-performance
              web applications. I specialize in turning complex UI/UX designs
              into clean, maintainable code that delivers real value to users
              and businesses alike.
            </p>
            <div className="about-cta">
              <a
                href="/Co_Resume.pdf"
                className="resume-btn"
                download
                aria-label="Download Co's Resume"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="about-avatar">
            <figure className="avatar-figure">
              <Image
                className="avatar-img"
                src={CoAvatar.src}
                alt="Portrait of Co, Front-End Developer"
                width={200}
                height={200}
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
