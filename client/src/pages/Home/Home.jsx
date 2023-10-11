import { Navigation, Search } from "../../components";
import banner from "../../assets/home.svg";
import ballon from "../../assets/ballon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" id="home">
      <Navigation />
      <div className="home_container">
        <div className="left">
          <img src={ballon} alt="ballon" className="svg-ballon" />
          <h2>
            <span className="text-stroke">Transformez</span> la Gestion de Votre
            Cabinet Médical avec Notre Solution{" "}
            <span className="text-stroke">Tout-en-Un.</span>
          </h2>
          <p>
            Avec <span>Heal Up</span>
            Optimisez vos rendez-vous, gérez les dossiers médicaux numériques et
            suivez vos patients atteints de maladies chroniques en toute
            simplicité.
          </p>
          <button type="button" className="home_button">
            <Link to="/register">Commencez une nouvelle experience</Link>
          </button>
        </div>
        <div className="right">
          <img src={banner} alt="banner" className="banner" />
        </div>
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default Home;
