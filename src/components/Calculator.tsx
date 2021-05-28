import { ReactElement, useState } from "react";
import "../styles/Calculator.css";

const Calculator = (): ReactElement => {
  const [workers, setWorkers] = useState("");
  const [contractors, setContractors] = useState("");
  const [forms, setForms] = useState("");

  const onChangeWorkers = (event: any): void => {
    setWorkers(event.target.value);
  };

  const onChangeContractors = (event: any) => {
    setContractors(event.target.value);
  };

  const onChangeForms = (event: any) => {
    setForms(event.target.value);
  };

  const resetInputs = (): void => {
    setWorkers("");
    setContractors("");
    setForms("");
  };

  return (
    <div className="calculatorContainer">
      <form>
        <div>
          <label htmlFor="workers">Number of Workers</label>
          <input
            name="workers"
            id="workers"
            value={workers}
            onChange={onChangeWorkers}
          />
        </div>
        <div>
          <label htmlFor="contractors">Number of Sub Contractors</label>
          <input
            name="contractors"
            id="contractors"
            value={contractors}
            onChange={onChangeContractors}
          />
        </div>
        <div>
          <label htmlFor="forms">Amount of Forms</label>
          <input
            name="forms"
            id="forms"
            value={forms}
            onChange={onChangeForms}
          />
        </div>
        <button type="reset" onClick={resetInputs}>
          Reset
        </button>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Calculator;
