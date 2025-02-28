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
      description: "Hours in the office",
      id: "hoursInOffice",
      value: calculationData.hoursInOffice,
    },
    {
      description: "Preparing files (hours)",
      id: "hoursForFilesPreparing",
      value: calculationData.hoursForFilesPreparing,
    },
    {
      description: "Number of commutes to the company",
      id: "numberOfCommutes",
      value: calculationData.numberOfCommutes,
    },
    {
      description: "Total number of forms",
      id: "numberOfForms",
      value: calculationData.numberOfForms,
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
