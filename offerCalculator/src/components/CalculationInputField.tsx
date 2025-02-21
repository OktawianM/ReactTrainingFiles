import { inputFieldProps } from "../models/calculationTypes";

export default function CalculationInputField(
  props: inputFieldProps
): JSX.Element {
  return (
    <div className="w-1/4 text-white mt-5 ">
      <input
        className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
        type="number"
        value={props.calculationValue}
        onChange={props.setValue}
      />
      <h4>{props.description}</h4>
    </div>
  );
}
