import { ReactElement, useState, useEffect } from "react";
import "../styles/Calculator.css";

const Calculator = (): ReactElement => {
  const [workers, setWorkers] = useState("");
  const [contractors, setContractors] = useState("");
  const [forms, setForms] = useState("");
  const [salusARR, setSalusARR] = useState("");
  const [subARR, setSubARR] = useState("");
  const [totalForms, setTotalForms] = useState("");
  const [totalARR, setTotalARR] = useState(0);
  const [totalFirstYear, setTotalFirstYear] = useState(0);
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discountedARR, setDiscountedARR] = useState(0);

  const calculateSalusARR = (workers: string) => {
    const numWorkers: number = Number(workers);
    const fee: number = 500;
    let rate: number;
    let salusArr: number;

    if (numWorkers === 0) {
      salusArr = 0;
    } else if (numWorkers >= 1 && numWorkers <= 10) {
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

    if (numWorkers > 1000) {
      setSalusARR("Custom");
    } else {
      setSalusARR(salusArr.toString());
    }
  };

  const calculateSubARR = (contractors: string) => {
    const numContractor: number = Number(contractors);
    const fee: number = 200;
    let rate: number;
    let subArr: number;

    if (numContractor === 0) {
      subArr = 0;
    } else if (numContractor >= 1 && numContractor <= 5) {
      subArr = 1000;
    } else if (numContractor >= 6 && numContractor <= 10) {
      rate = 180;
      subArr = fee + rate * numContractor;
    } else if (numContractor >= 11 && numContractor <= 15) {
      rate = 160;
      subArr = fee + rate * numContractor;
    } else if (numContractor >= 16 && numContractor <= 20) {
      rate = 140;
      subArr = fee + rate * numContractor;
    } else if (numContractor >= 21 && numContractor <= 25) {
      rate = 120;
      subArr = fee + rate * numContractor;
    } else {
      rate = 100;
      subArr = fee + rate * numContractor;
    }

    setSubARR(subArr.toString());
  };

  const calculateTotalARR = (salusARR: string, subARR: string) => {
    const total = Number(salusARR) + Number(subARR);
    setTotalARR(total);
  };

  const calculateForms = (forms: string) => {
    let numForms = Number(forms);
    let total: number;
    const rate = 10;

    if (numForms === 0) {
      total = 0;
    } else if (numForms >= 1 && numForms <= 5) {
      total = 0;
    } else {
      total = (numForms - 5) * rate;
    }
    setTotalForms(total.toString());
  };

  const calculateYearTotal = (
    salusARR: string,
    subARR: string,
    totalForms: string,
    discount: string
  ) => {
    const newDiscount = Number(discount) / 100;
    let total;
    if (!discount) {
      total = Number(salusARR) + Number(subARR) + Number(totalForms);
    } else {
      total =
        Number(salusARR) +
        Number(subARR) -
        (Number(salusARR) + Number(subARR)) * newDiscount +
        Number(totalForms);
    }
    setTotalFirstYear(total);
  };

  const calculateDiscountPrice = (
    salusARR: string,
    subARR: string,
    discount: string
  ) => {
    const newDiscount = Number(discount) / 100;
    let price = (Number(salusARR) + Number(subARR)) * newDiscount;

    setDiscountedPrice(price);
  };

  const calculateDiscountedARR = (
    salusARR: string,
    subARR: string,
    discount: string
  ) => {
    const newDiscount = Number(discount) / 100;
    let total;
    if (!newDiscount) {
      total = 0;
    } else {
      total =
        Number(salusARR) +
        Number(subARR) -
        (Number(salusARR) + Number(subARR)) * newDiscount;
    }
    setDiscountedARR(total);
  };

  const calculate =
    (
      workers: string,
      contractors: string,
      salusARR: string,
      subARR: string,
      forms: string,
      totalForms: string
    ) =>
    (e: any) => {
      e.preventDefault();
      calculateTotalARR(salusARR, subARR);
      calculateYearTotal(salusARR, subARR, totalForms, discount);
      calculateDiscountedARR(salusARR, subARR, discount);
      calculateDiscountPrice(salusARR, subARR, discount);
    };

  const resetInputs = (e: any): void => {
    e.preventDefault();
    setWorkers("");
    setContractors("");
    setForms("");
    setSalusARR("");
    setTotalARR(0);
    setTotalFirstYear(0);
    setSubARR("");
    setTotalForms("");
    setDiscount("");
    setDiscountedARR(0);
    setDiscountedPrice(0);
  };

  useEffect(() => {
    calculateSalusARR(workers);
    calculateSubARR(contractors);
    calculateForms(forms);
  });

  const onChangeWorkers = (event: any): void => {
    setWorkers(event.target.value);
  };

  const onChangeContractors = (event: any) => {
    setContractors(event.target.value);
  };

  const onChangeForms = (event: any) => {
    setForms(event.target.value);
  };

  const onChangeDiscount = (event: any) => {
    setDiscount(event.target.value);
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
            <label htmlFor="contractors">Number of Sub-contractors</label>
            <input
              name="contractors"
              id="contractors"
              value={contractors}
              onChange={onChangeContractors}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="forms">Number of Forms</label>
            <input
              name="forms"
              id="forms"
              value={forms}
              onChange={onChangeForms}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="forms">Discount (%)</label>
            <input
              name="discount"
              id="discount"
              value={discount}
              onChange={onChangeDiscount}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button type="reset" onClick={resetInputs}>
            Reset
          </button>
          <button
            type="submit"
            onClick={calculate(
              workers,
              contractors,
              salusARR,
              subARR,
              forms,
              totalForms
            )}
          >
            Calculate
          </button>
        </div>
      </form>

      <div className="resultContainer">
        <p className="outputLine">
          For {workers} workers & {contractors} sub-contractors
        </p>
        <p>Salus Pro ARR: ${salusARR}</p>
        <p>Subcontractor Portal ARR: ${subARR}</p>
        <p>One Time Fee: ${totalForms}</p>
        <p>
          {!discount ? <b>Total ARR: ${totalARR}</b> : `Total ARR: ${totalARR}`}
        </p>
        <p className="discountResult">
          {!discount ? null : (
            <p>
              {!discount ? "0" : discount}% Discount: ${discountedPrice}
            </p>
          )}
        </p>
        <p>
          {!discount ? null : (
            <p>
              <b>Total ARR: ${discountedARR}</b>
            </p>
          )}
        </p>
        <p>
          <b>Year 1 Subscription: ${totalFirstYear}</b>
        </p>
      </div>
    </div>
  );
};

export default Calculator;
