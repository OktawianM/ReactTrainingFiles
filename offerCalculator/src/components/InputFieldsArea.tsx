import { calculationDataType, fieldDataType } from "../models/calculationTypes";
import CalculationInputField from "./CalculationInputField";

export default function InputFieldsArea({
  calculationData,
  setCalculatorData,
}: {
  calculationData: calculationDataType;
  setCalculatorData: React.Dispatch<React.SetStateAction<calculationDataType>>;
}): JSX.Element {
  const textFieldDescription: fieldDataType[] = [
    {
      description: "In office (hours)",
      id: "hoursInOffice",
      value: calculationData.hoursInOffice,
    },
    {
      description: "Preparing files (hours)",
      id: "hoursForFilesPreparing",
      value: calculationData.hoursForFilesPreparing,
    },
    {
      description: "Commutes (number)",
      id: "numberOfCommutes",
      value: calculationData.numberOfCommutes,
      defaultValue: "1",
    },
    {
      description: "Forms (number)",
      id: "numberOfForms",
      value: calculationData.numberOfForms,
      defaultValue: "1",
    },
  ];
  return (
    <>
      {textFieldDescription.map((item: fieldDataType, index) => (
        <CalculationInputField
          key={index}
          setCalculatorData={setCalculatorData}
          fieldData={item}
        />
      ))}
    </>
  );
}
