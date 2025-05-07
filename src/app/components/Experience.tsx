import Image from "next/image";

import LandingPage1 from "../assets/images/landing-page-1.jpeg";
import LandingPage2 from "../assets/images/landing-page-2.jpeg";
import BookingEvent from "../assets/images/booking-event.webp";

type experienceListType = {
  title: string;
  dateRange: string;
  description: string;
  image: string;
  alt: string;
};

const experienceList: experienceListType[] = [
  {
    title: "Cartier",
    dateRange: "Jun 01, 2024 - Nov 30, 2024",
    description:
      "Created a custom event booking system using Next.js and Tailwind CSS, allowing users to browse, register for, and manage events.",
    image: BookingEvent.src,
    alt: "Cartier event booking platform screenshot",
  },
  {
    title: "Corporate WEB",
    dateRange: "Oct 01, 2021 - Jun 30, 2024",
    description:
      "Developed a fully responsive company website using HTML5, CSS3, JavaScript, and WordPress, optimized for all screen sizes and devices.",
    image: LandingPage1.src,
    alt: "Corporate website landing page screenshot",
  },
  {
    title: "Corporate WEB",
    dateRange: "Oct 01, 2021 - Jun 30, 2024",
    description:
      "Developed a fully responsive company website using HTML5, CSS3, JavaScript, and WordPress, optimized for all screen sizes and devices.",
    image: LandingPage2.src,
    alt: "Another corporate website design screenshot",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="skills-head">
          <p className="skills-title">Experience</p>
          <p className="skills-sub-title">
            A selection of featured works, tools, and technologies that reflect
            my professional experience
          </p>
        </div>
        <div className="experience-list">
          {experienceList.map((item, index) => (
            <div key={index} className="experience-item">
              <figure className="experience-img">
                <Image
                  src={item?.image}
                  alt="experience image"
                  width={250}
                  height={180}
                />
              </figure>
              <div className="experience-content">
                <p className="experience-title">{item?.title}</p>
                <div className="experience-top">
                  <time className="experience-label-year">
                    {item?.dateRange}
                  </time>
                  <p className="experience-label-text">{item?.title}</p>
                </div>
                <p className="experience-desc">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
