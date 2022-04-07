import React, { useState } from "react";
import "./index.css";

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  let [operator, setOperator] = useState('+');
  let [totalCalculations, setTotalCalculations] = useState(0);

  function addNumbers() {
    const sum = (+num1) + (+num2);
    totalCalculations += 1;

    setTotalCalculations(totalCalculations);
    setOperator('+');
    setResult(sum);
  }

  function subtractNumbers() {
    const subtract = (+num1) - (+num2);
    totalCalculations += 1;

    setTotalCalculations(totalCalculations);
    setOperator('-');
    setResult(subtract);
  }

  function multiplyNumbers() {
    const multiply = (+num1) * (+num2);
    totalCalculations += 1;

    setTotalCalculations(totalCalculations);
    setOperator('*');
    setResult(multiply);
  }

  function divideNumbers() {
    const divide = (+num1) / (+num2);
    totalCalculations += 1;

    setTotalCalculations(totalCalculations);
    setOperator('/');
    setResult(divide);
  }

  function resetValues() {
    setNum1('');
    setNum2('');
    setOperator('+');
    setResult('');
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">
        Total operations performed: {totalCalculations}
      </div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              type="number"
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
              value={num1}
              onChange={e => setNum1(e.target.value)}
            />
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">
              {operator}
            </label>
            <input
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
              value={num2}
              onChange={e => setNum2(e.target.value)}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              data-testid="addButton"
              onClick={addNumbers}
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
              onClick={subtractNumbers}
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
              onClick={multiplyNumbers}
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
              onClick={divideNumbers}
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
              onClick={resetValues}
            >
              Reset
            </button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {result !== '' &&
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>
              }
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}