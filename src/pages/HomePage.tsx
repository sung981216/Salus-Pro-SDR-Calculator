import { ReactElement, useState } from "react";
import "../styles/HomePage.css";
import SalusLogo from "../images/Salus-Logo-White.png";
import Calculator from "../components/Calculator";

const HomePage = (): ReactElement => {
  const [resultWorker, setResultWorker] = useState("");
  const [resultContractor, setResultContractor] = useState("");
  const [resultForm, setResultForm] = useState("");

  return (
    <div className="homePageContainer">
      <div className="logoContainer">
        <img src={SalusLogo} alt="logo-salus" />
      </div>
      <div className="calculatorContainer">
        <Calculator />
      </div>
    </div>
  );
};

export default HomePage;
