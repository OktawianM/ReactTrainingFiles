import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  calculationDataType,
  checkboxDataType,
} from "../models/calculationTypes";

export default function CalculationInputField({
  checkboxData,
  setCalculatorData,
}: {
  checkboxData: checkboxDataType;
  setCalculatorData: Dispatch<SetStateAction<calculationDataType>>;
}): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setCalculatorData((prev: calculationDataType) => ({
      ...prev,
      [`${checkboxData.id}`]: isChecked,
    }));
  }, [isChecked]);
  return (
    <div className="grid text-white place-items-center">
      <input
        type="checkbox"
        className="checkbox bg-blue-500 rounded p-4"
        placeholder="texture"
        //checked={isUncheck}
        onChange={(event) => {
          setIsChecked(event.target.checked);
        }}
      />
      <h4>{checkboxData.description}</h4>
    </div>
  );
}
