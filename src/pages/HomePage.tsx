import { ReactElement } from "react";
import "../styles/HomePage.css";
import SalusLogo from "../images/Salus-Logo-White.png";

const HomePage = (): ReactElement => {
  return (
    <div className="homePageContainer">
      <div className="logoContainer">
        <img src={SalusLogo} alt="logo-salus" />
      </div>
      <div className="calculatorContainer"></div>
    </div>
  );
};

export default HomePage;
