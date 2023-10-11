import Banner from "../../assets/phone.svg";
const AppIntro = () => {
  return (
    <div className="AppInfo" id="AppInfo">
      <div className="container">
        <div className="left">
          <span>Communication en temps réel</span>
          <span>Plans de traitement personnalisés</span>
          <span>Dossiers patients sans effort</span>
        </div>
        <div className="middle">
          <img src={Banner} alt="banner" />
          <div className="cercle"></div>
          <p>Application mobile à venir</p>
        </div>
        <div className="right">
          <span> Améliorez les soins aux patients</span>
          <span>Améliorez l&apos;efficacité</span>
          <span>Communication sécurisée</span>
        </div>
      </div>
    </div>
  );
};

export default AppIntro;