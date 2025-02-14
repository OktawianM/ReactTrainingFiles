import { SetStateAction, useState } from "react";
import "./index.css";

function App() {
  const initialCalculationData = {
    isTwoDimension: true,
    isThreeDimension: false,
    isTexture: false,
    hoursInOffice: 0,
    hoursForFilesPreparing: 0,
    numberOfCommutes: 0,
    numberOfForms: 0,
  };

  type calculationDataType = {
    isTwoDimension: boolean;
    isThreeDimension: boolean;
    isTexture: boolean;
    hoursInOffice: number;
    hoursForFilesPreparing: number;
    numberOfCommutes: number;
    numberOfForms: number;
  };

  const [calculationData, setCalculatorData] = useState<calculationDataType>(
    initialCalculationData
  );
  const [result, setResult] = useState<number>(0);

  const calculateOffer = (data: calculationDataType): void => {
    const calculatedValue =
      (data.hoursInOffice +
        data.hoursForFilesPreparing +
        data.numberOfCommutes) *
      10;
    setResult(calculatedValue * (data.numberOfForms > 5 ? 1.1 : 0.9));
  };

  return (
    <div className="mx-auto px-20 py-5 max-w-xl lg:max-w-none ">
      <div className="grid gap-x-10 gap-y-10 w-full h-1/2 place-items-center items-end">
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 w-1/4 h-1/2 place-items-center items-end">
          <div className="grid text-white place-items-center">
            <input
              type="checkbox"
              className="checkbox bg-blue-500 rounded p-4 "
              placeholder="aaa"
            />
            <h4>2D</h4>
          </div>
          <div className="grid text-white place-items-center">
            <input
              type="checkbox"
              className="checkbox bg-blue-500 rounded p-4"
              placeholder="aaa"
            />
            <h4>3D</h4>
          </div>
          <div className="grid text-white place-items-center">
            <input
              type="checkbox"
              className="checkbox bg-blue-500 rounded p-4"
              placeholder="aaa"
            />
            <h4>Texture</h4>
          </div>
        </div>

        <div className="w-1/4 text-white mt-5 ">
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
            id="hoursInOffice"
            value={calculationData.hoursInOffice}
            onChange={(event: any) => {
              setCalculatorData((prev) => ({
                ...prev,
                hoursInOffice: parseInt(event.target.value),
              }));
            }}
          />
          <h4>Hours in the office</h4>
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
            id="preparingFiles"
            value={calculationData.hoursForFilesPreparing}
            onChange={(event: any) => {
              setCalculatorData((prev) => ({
                ...prev,
                hoursForFilesPreparing: parseInt(event.target.value),
              }));
            }}
          />
          <h4>Preparing files (hours)</h4>
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
            id="commutes"
            value={calculationData.numberOfCommutes}
            onChange={(event: any) => {
              setCalculatorData((prev) => ({
                ...prev,
                numberOfCommutes: parseInt(event.target.value),
              }));
            }}
          />
          <h4>Number of commutes to the company</h4>
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
            id="numberOfForms"
            value={calculationData.numberOfForms}
            onChange={(event: any) => {
              setCalculatorData((prev) => ({
                ...prev,
                numberOfForms: parseInt(event.target.value),
              }));
            }}
          />
          <h4>Total number of forms</h4>
        </div>
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => calculateOffer(calculationData)}
        >
          Calculate
        </button>
        <input
          className="w-1/4 rounded-md border-1 bg-black/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
          type="number"
          value={result}
        />
      </div>
    </div>
  );
}

export default App;
