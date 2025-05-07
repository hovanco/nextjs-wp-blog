import Image from "next/image";
import Link from "next/link";

import Linkedin from "../assets/icons/linkedin-logo.svg";
import Gmail from "../assets/icons/gmail-logo.svg";
import Skype from "../assets/icons/skype-logo.svg";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
