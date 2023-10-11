import { useState } from "react";
import { services } from "../../api";
import dessin1 from "../../assets/dessin.svg";
import dessin2 from "../../assets/dessin5.svg";
import dessin3 from "../../assets/dessin2.svg";
const Services = () => {
  const [service, setService] = useState(services);
  return (
    <div className="services" id="services">
      <img src={dessin1} alt="dessin" className="img1" />
      <img src={dessin2} alt="dessin" className="img2" />
      <img src={dessin3} alt="dessin" className="img3" />
      <div className="service_container">
        <div className="service_title">
          <h2>On offre quoi ?</h2>
          <p>Services</p>
        </div>
        <div className="services_box">
          <div className="box">
            {service?.map(({ icon, title, description }, index) => (
              <div key={index}>
                <img src={icon} alt="banner" />
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
