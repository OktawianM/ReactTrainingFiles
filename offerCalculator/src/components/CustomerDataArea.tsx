import { calculationDataType, fieldDataType } from "../models/calculationTypes";
import CalculationInputField from "./CalculationInputField";

export default function CustomerDataArea({
  calculationData,
  setCalculatorData,
}: {
  calculationData: calculationDataType;
  setCalculatorData: React.Dispatch<React.SetStateAction<calculationDataType>>;
}): JSX.Element {
  const textFieldDescription: fieldDataType[] = [
    {
      description: "Company name",
      id: "companyName",
      value: calculationData.companyName,
    },
    {
      description: "Material",
      id: "material",
      value: calculationData.material ?? "",
    },
    {
      description: "Surface area (cm2)",
      id: "surfaceArea",
      value: calculationData.surfaceArea ?? "",
    },
    {
      description: "Estimated time (hours)",
      id: "estimatedTime",
      value: calculationData.estimatedTime ?? "",
    },
    {
      description: "Description",
      id: "description",
      value: calculationData.description ?? "",
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
