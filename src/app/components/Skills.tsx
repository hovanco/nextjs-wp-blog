import Image from "next/image";

import HTML from "../assets/icons/html5-logo.svg";
import CSS from "../assets/icons/css3-logo.svg";
import SCSS from "../assets/icons/sass-logo.svg";
import Tailwindcss from "../assets/icons/tailwindcss-logo.svg";
import JavaScript from "../assets/icons/javascript-logo.svg";
import Redux from "../assets/icons/redux-logo.svg";
import ReactLogo from "../assets/icons/react-logo.svg";
import NextJS from "../assets/icons/nextjs-logo.svg";
import Angular from "../assets/icons/angular-logo.svg";
import Vue from "../assets/icons/vue-logo.svg";
import TypeScriptLogo from "../assets/icons/typescript-logo.svg";
import GIT from "../assets/icons/git-logo.svg";
import Bootstrap from "../assets/icons/bootstrap-logo.svg";
import Material from "../assets/icons/material-logo.svg";
import Wordpress from "../assets/icons/wordpress-logo.svg";
import API from "../assets/icons/rest-api-logo.svg";
import Responsive from "../assets/icons/responsive-logo.svg";
import Figma from "../assets/icons/figma-logo.svg";
import Office365 from "../assets/icons/office-365-logo.svg";

type Skill = {
  name: string;
  title: string;
};

const skillList: Skill[] = [
  { name: HTML, title: "HTML5" },
  { name: CSS, title: "CSS3" },
  { name: SCSS, title: "SCSS" },
  { name: Tailwindcss, title: "Tailwind CSS" },
  { name: JavaScript, title: "JavaScript" },
  { name: Redux, title: "Redux" },
  { name: ReactLogo, title: "React" },
  { name: NextJS, title: "NextJS" },
  { name: Angular, title: "Angular" },
  { name: Vue, title: "Vue" },
  { name: TypeScriptLogo, title: "TypeScript" },
  { name: GIT, title: "GIT" },
  { name: Bootstrap, title: "Bootstrap" },
  { name: Material, title: "Material" },
  { name: Wordpress, title: "Wordpress" },
  { name: API, title: "RESTful API" },
  { name: Responsive, title: "Responsive" },
  { name: Figma, title: "Figma" },
  { name: Office365, title: "Microsoft Office" },
];

const SkillsComponent: React.FC = () => {
  return (
    <section className="section skills-section">
      <div className="container">
        <div className="section-head">
          <p className="section-title">IT Skills</p>
          <p className="section-sub-title">
            The skills, tools and technologies I am proficient in
          </p>
        </div>
        <ul className="skills-list">
          {skillList.map((item, index) => (
            <li key={index} className="skill-item">
              <Image
                className="skill-logo"
                src={item.name}
                alt={`${item.title} logo`}
                width={50}
                height={50}
              />
              <span className="skills-name">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsComponent;
