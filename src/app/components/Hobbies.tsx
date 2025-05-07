import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import BilliardsPool from "../assets/images/co-billiard-pool.jpg";
import FootballClub from "../assets/images/football-team.png";
import BallInHand from "../assets/images/co-with-ball.jpg";
import BadmintonClub from "../assets/images/badminton-team.png";
import VolleyballClub from "../assets/images/co-volleyball.jpeg";
import VolleyballClub2 from "../assets/images/co-volleyball-2.jpg";

type Hobby = {
  image: StaticImageData;
  alt: string;
};

const hobbyList: Hobby[] = [
  { image: FootballClub, alt: "Football team photo" },
  {
    image: BilliardsPool,
    alt: "Playing billiards pool",
  },
  { image: BallInHand, alt: "Holding a football" },
  {
    image: BadmintonClub,
    alt: "Badminton club activity",
  },
  {
    image: VolleyballClub,
    alt: "Volleyball game in progress",
  },
  {
    image: VolleyballClub2,
    alt: "Volleyball team photo",
  },
];

const Hobbies: React.FC = () => {
  return (
    <section className="section hobbies-section">
      <div className="section-head">
        <p className="section-title">Hobbies</p>
        <p className="section-sub-title">
          Multi-sport enthusiast with a passion for competition and teamwork
        </p>
      </div>
      <div className="grid-container">
        {hobbyList.map((hobby, index) => (
          <figure key={index} className={`grid-item grid-item${index + 1}`}>
            <Image
              className="hobby-img"
              src={hobby.image}
              alt={hobby.alt}
              width={1440}
              height={900}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
