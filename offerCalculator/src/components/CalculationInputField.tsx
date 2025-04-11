import {
  calculationDataType,
  inputFieldProps,
} from "../models/calculationTypes";

export default function CalculationInputField(
  props: inputFieldProps
): JSX.Element {
  return (
    <div className="lg:w-1/2 text-white mt-5 ">
      <input
        className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
        type="text"
        value={
          props.fieldData.value
            ? props.fieldData.value
            : props.fieldData.defaultValue
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.setCalculatorData((prev: calculationDataType) => ({
            ...prev,
            [`${props.fieldData.id}`]: event.target.value,
          }));
        }}
      />
      <h4>{props.fieldData.description}</h4>
    </div>
  );
}
