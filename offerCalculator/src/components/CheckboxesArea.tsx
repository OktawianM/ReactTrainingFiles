import { useEffect, useState } from "react";
import { calculationDataType, checkBoxProps } from "../models/calculationTypes";
import CalculationCheckbox from "./CalculationCheckbox";

export default function InputFieldsArea({
  calculationData,
  setCalculatorData,
}: {
  calculationData: calculationDataType;
  setCalculatorData: React.Dispatch<React.SetStateAction<calculationDataType>>;
}): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<checkBoxProps>({
    description: "",
    isChecked: false,
  });
  useEffect(() => {
    setCalculatorData((prev: calculationDataType) => ({
      ...prev,
      isTwoDimension:
        selectedValue.description === "2D"
          ? !calculationData.isTwoDimension
          : calculationData.isTwoDimension,
      isThreeDimension:
        selectedValue.description === "3D"
          ? !calculationData.isThreeDimension
          : calculationData.isThreeDimension,
      isTexture:
        selectedValue.description === "Texture"
          ? !calculationData.isTexture
          : calculationData.isTexture,
    }));
  }, [selectedValue]);

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-5 w-1/4 h-1/2 place-items-center items-end mb-5">
      <CalculationCheckbox
        descriptionOfCheckbox={"2D"}
        setSelectedValue={setSelectedValue}
      />
      <CalculationCheckbox
        descriptionOfCheckbox={"3D"}
        setSelectedValue={setSelectedValue}
      />
      <CalculationCheckbox
        descriptionOfCheckbox={"Texture"}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
}
