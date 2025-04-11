import { useState } from "react";
import "./index.css";
import { calculationDataType } from "./models/calculationTypes";
import { initialCalculationData } from "./helpers/initialDatas";
import InputFieldsArea from "./components/InputFieldsArea";
import CheckboxesArea from "./components/CheckboxesArea";
import { CalculateButton, SaveButton } from "./components/Buttons";
import CustomerDataArea from "./components/CustomerDataArea";
import CalculationsList from "./components/CalculationsList";

function App() {
  const [calculationData, setCalculatorData] = useState<calculationDataType>(
    initialCalculationData
  );
  const [result, setResult] = useState<number>(0);

  return (
    <>
      <div className="grid lg:grid-cols-3 max-w-none px-20 mt-20">
        <div className=" place-items-center items-end lg:border-r border-blue-700 ">
          <CustomerDataArea
            calculationData={calculationData}
            setCalculatorData={setCalculatorData}
          />
          <CheckboxesArea setCalculatorData={setCalculatorData} />
        </div>

        <div className="grid gap-x-10 w-full h-1/2 place-items-center items-end border-blue-700">
          <InputFieldsArea
            calculationData={calculationData}
            setCalculatorData={setCalculatorData}
          />
          {!!result && (
            <>
              <input
                className="w-1/2 rounded-md  bg-black/5 text-blue-700 sm:text-sm/12 h-10 bottom-0 mt-20"
                type="number"
                value={result}
                disabled={true}
              />
              <h4 className="w-1/2 text-white">Total:</h4>
            </>
          )}
          <div className="grid grid-cols-2 place-items-center">
            <CalculateButton
              calculationData={calculationData}
              setResult={setResult}
            />
            <SaveButton calculationData={calculationData} />
          </div>
        </div>
        <CalculationsList />
      </div>
    </>
  );
}

export default App;
