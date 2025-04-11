import { Dispatch, SetStateAction } from "react";
import {
  calculationDataType,
  checkboxDataType,
} from "../models/calculationTypes";
import CalculationCheckbox from "./CalculationCheckbox";

export default function checkboxesArea({
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
    <div className="grid grid-cols-3 gap-x-10 lg:w-1/3 rounded-md border-1 bg-white/5 text-white p-5 place-items-center items-end mt-10 ">
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
