import { useEffect, useState } from "react";
import { checkBoxProps } from "../models/calculationTypes";

export default function CalculationInputField({
  descriptionOfCheckbox,
  setSelectedValue,
  isUncheck,
}: {
  descriptionOfCheckbox: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<checkBoxProps>>;
  isUncheck?: boolean | undefined;
}): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setSelectedValue({
      description: descriptionOfCheckbox,
      isChecked: isChecked,
    });
  }, [isChecked]);
  return (
    <div className="grid text-white place-items-center">
      <input
        type="checkbox"
        className="checkbox bg-blue-500 rounded p-4"
        placeholder="texture"
        // checked={isUncheck}
        onChange={(event) => {
          setIsChecked(event.target.checked);
        }}
      />
      <h4>{descriptionOfCheckbox}</h4>
    </div>
  );
}
