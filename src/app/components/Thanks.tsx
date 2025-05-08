import Image from "next/image";
import DaNangCity from "../assets/images/da-nang-city.jpg";

const Thanks = () => {
  return (
    <section data-aos="fade-up" className="section thanks-section">
      <div className="container">
        <div className="thanks-content">
          <div className="thanks-desc">
            <p data-aos="fade-up" className="thanks-message">
              THANK YOU!
            </p>
          </div>
          <figure className="thanks-bg">
            <Image
              className="thanks-bg"
              src={DaNangCity.src}
              alt="Da Nang City"
              width={1440}
              height={900}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
