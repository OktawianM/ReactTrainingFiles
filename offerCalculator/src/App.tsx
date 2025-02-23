import { useState } from "react";
import "./index.css";
import { calculationDataType } from "./models/calculationTypes";
import { initialCalculationData } from "./helpers/initialDatas";
import InputFieldsArea from "./components/InputFieldsArea";
import CheckboxesArea from "./components/CheckboxesArea";
import FunctionalButton from "./components/FunctionalButton";

function App() {
  const [calculationData, setCalculatorData] = useState<calculationDataType>(
    initialCalculationData
  );
  const [result, setResult] = useState<number>(0);

  return (
    <div className="mx-auto px-20 py-5 max-w-xl lg:max-w-none ">
      <div className="grid gap-x-10  w-full h-1/2 place-items-center items-end">
        <CheckboxesArea />
        <InputFieldsArea
          calculationData={calculationData}
          setCalculatorData={setCalculatorData}
        />
        <FunctionalButton
          calculationData={calculationData}
          setResult={setResult}
        />
        {!!result && (
          <input
            className="w-1/4 rounded-md border-1 bg-black/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
            value={result}
            disabled={true}
          />
        )}
      </div>
    </div>
  );
}

export default App;
