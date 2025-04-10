import { useState } from "react";
import "./index.css";
import { calculationDataType } from "./models/calculationTypes";
import { initialCalculationData } from "./helpers/initialDatas";
import InputFieldsArea from "./components/InputFieldsArea";
import CheckboxesArea from "./components/CheckboxesArea";
import { CalculateButton, SaveButton } from "./components/Buttons";

function App() {
  const [calculationData, setCalculatorData] = useState<calculationDataType>(
    initialCalculationData
  );
  const [result, setResult] = useState<number>(0);

  return (
    <div className="mx-auto px-20 py-5 max-w-xl lg:max-w-none ">
      <div className="grid gap-x-10 w-full h-1/2 place-items-center items-end">
        <CheckboxesArea setCalculatorData={setCalculatorData} />
        <InputFieldsArea
          calculationData={calculationData}
          setCalculatorData={setCalculatorData}
        />{" "}
        {!!result && (
          <>
            <input
              className="w-1/4 rounded-md  bg-black/5 text-blue-700 sm:text-sm/12 h-10 bottom-0 mt-20"
              type="number"
              value={result}
              disabled={true}
            />
            <h4 className="w-1/4 text-white">Total:</h4>
          </>
        )}
        <div className="grid grid-cols-2 place-items-center">
          <CalculateButton
            calculationData={calculationData}
            setResult={setResult}
          />
          <SaveButton />
        </div>
      </div>
    </div>
  );
}

export default App;
