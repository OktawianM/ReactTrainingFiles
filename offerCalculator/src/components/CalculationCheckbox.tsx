export default function CalculationInputField({
  descriptionOfCheckbox,
}: {
  descriptionOfCheckbox: string;
}): JSX.Element {
  return (
    <div className="grid text-white place-items-center">
      <input
        type="checkbox"
        className="checkbox bg-blue-500 rounded p-4"
        placeholder="texture"
      />
      <h4>{descriptionOfCheckbox}</h4>
    </div>
  );
}
