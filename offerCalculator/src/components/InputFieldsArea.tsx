import { calculationDataType } from "../models/calculationTypes";
import CalculationInputField from "./CalculationInputField";

export default function InputFieldsArea({
  calculationData,
  setCalculatorData,
}: {
  calculationData: calculationDataType;
  setCalculatorData: React.Dispatch<React.SetStateAction<calculationDataType>>;
}): JSX.Element {
  return (
    <>
      <CalculationInputField
        calculationValue={calculationData.hoursInOffice}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCalculatorData((prev: calculationDataType) => ({
            ...prev,
            hoursInOffice: event.target.value,
          }));
        }}
        description="Hours in the office"
      />

      <CalculationInputField
        calculationValue={calculationData.hoursForFilesPreparing}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCalculatorData((prev: calculationDataType) => ({
            ...prev,
            hoursForFilesPreparing: event.target.value,
          }));
        }}
        description="Preparing files (hours)"
      />

      <CalculationInputField
        calculationValue={calculationData.numberOfCommutes}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCalculatorData((prev: calculationDataType) => ({
            ...prev,
            numberOfCommutes: event.target.value,
          }));
        }}
        description="Number of commutes to the company"
      />

      <CalculationInputField
        calculationValue={calculationData.numberOfForms}
        setValue={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCalculatorData((prev: calculationDataType) => ({
            ...prev,
            numberOfForms: event.target.value,
          }));
        }}
        description="Total number of forms"
      />
    </>
  );
}
