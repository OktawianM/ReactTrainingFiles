import CalculationCheckbox from "./CalculationCheckbox";

export default function InputFieldsArea(): JSX.Element {
  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-5 w-1/4 h-1/2 place-items-center items-end mb-5">
      <CalculationCheckbox descriptionOfCheckbox={"2D"} />
      <CalculationCheckbox descriptionOfCheckbox={"3D"} />
      <CalculationCheckbox descriptionOfCheckbox={"Texture"} />
    </div>
  );
}
