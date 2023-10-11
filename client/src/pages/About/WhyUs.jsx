import { useState } from "react";
import { why } from "../../api";
import banner from "../../assets/whyBanner.jpg";

const WhyUs = () => {
  const [whyUsInfo, setWhyUsInfo] = useState(why);
  return (
    <div className="why" id="why">
      <div className="why-container">
        <div className="why-container-title">
          <p>Pourquoi Nous</p>
          <h2>Pourquoi Nous ?</h2>
        </div>
        <div className="why-box">
          <div className="left">
            <img src={banner} alt="banner" />
            <div className="overlay"></div>
          </div>
          <div className="right">
            <div className="right_info">
              {whyUsInfo?.map(({ icon, title, description }, index) => (
                <div key={index}>
                  <img src={icon} alt={title} />
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
