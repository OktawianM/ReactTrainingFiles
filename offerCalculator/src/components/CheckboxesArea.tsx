import { Dispatch, SetStateAction } from "react";
import {
  calculationDataType,
  checkboxDataType,
} from "../models/calculationTypes";
import CalculationCheckbox from "./CalculationCheckbox";

export default function InputFieldsArea({
  setCalculatorData,
}: {
  setCalculatorData: Dispatch<SetStateAction<calculationDataType>>;
}): JSX.Element {
  const checkboxDescription: checkboxDataType[] = [
    { description: "2D", id: "isTwoDimension" },
    { description: "3D", id: "isThreeDimension" },
    { description: "Texture", id: "isTexture" },
  ];
  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-5 w-1/4 h-1/2 place-items-center items-end mb-5">
      {checkboxDescription.map((item: checkboxDataType, index) => (
        <CalculationCheckbox
          key={index}
          setCalculatorData={setCalculatorData}
          checkboxData={item}
        />
      ))}
    </div>
  );
}
