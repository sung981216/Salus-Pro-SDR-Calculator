import { ReactElement, useState } from "react";
import "../styles/Calculator.css";

const Calculator = (): ReactElement => {
  const [workers, setWorkers] = useState("");
  const [contractors, setContractors] = useState("");
  const [forms, setForms] = useState("");
  const [salusARR, setSalusARR] = useState("");

  const calculateSalusARR = (workers: string) => (e: any) => {
    e.preventDefault();
    const numWorkers: number = Number(workers);
    const fee: number = 500;
    let rate: number;
    let salusArr: number;

    if (numWorkers >= 1 && numWorkers <= 10) {
      rate = 10;
      salusArr = fee + rate * numWorkers;
    } else if (numWorkers >= 11 && numWorkers <= 20) {
      rate = 9;
      salusArr = fee + rate * numWorkers;
    } else if (numWorkers >= 21 && numWorkers <= 30) {
      rate = 8;
      salusArr = fee + rate * numWorkers;
    } else if (numWorkers >= 31 && numWorkers <= 40) {
      rate = 7;
      salusArr = fee + rate * numWorkers;
    } else if (numWorkers >= 41 && numWorkers <= 50) {
      rate = 6;
      salusArr = fee + rate * numWorkers;
    } else if (numWorkers >= 51 && numWorkers <= 60) {
      rate = 5;
      salusArr = fee + rate * numWorkers;
    } else if (numWorkers >= 61 && numWorkers <= 70) {
      rate = 4;
      salusArr = fee + rate * numWorkers;
    } else {
      rate = 3;
      salusArr = fee + rate * numWorkers;
    }

    setSalusARR(salusArr.toString());
  };

  const onChangeWorkers = (event: any): void => {
    setWorkers(event.target.value);
  };

  const onChangeContractors = (event: any) => {
    setContractors(event.target.value);
  };

  const onChangeForms = (event: any) => {
    setForms(event.target.value);
  };

  const resetInputs = (e: any): void => {
    e.preventDefault();
    setWorkers("");
    setContractors("");
    setForms("");
    setSalusARR("");
  };

  return (
    <div className="calculatorComponentContainer">
      <form>
        <div className="workerContractorContainer">
          <div className="inputContainer">
            <label htmlFor="workers">Number of Workers</label>
            <input
              name="workers"
              id="workers"
              value={workers}
              onChange={onChangeWorkers}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="contractors">Number of Sub Contractors</label>
            <input
              name="contractors"
              id="contractors"
              value={contractors}
              onChange={onChangeContractors}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="forms">Amount of Forms</label>
            <input
              name="forms"
              id="forms"
              value={forms}
              onChange={onChangeForms}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button type="reset" onClick={resetInputs}>
            Reset
          </button>
          <button type="submit" onClick={calculateSalusARR(workers)}>
            Calculate
          </button>
        </div>
      </form>

      <div className="resultContainer">
        <p>Salus ProARR: {salusARR}</p>
      </div>
    </div>
  );
};

export default Calculator;
