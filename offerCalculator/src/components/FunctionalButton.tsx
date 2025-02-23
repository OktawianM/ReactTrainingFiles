import { calculateOffer } from "../helpers/functions";
import { calculationDataType } from "../models/calculationTypes";

export default function InputFieldsArea({
  calculationData,
  setResult,
}: {
  calculationData: calculationDataType;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  return (
    <button
      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded"
      onClick={() => {
        const calculatedResult = calculateOffer(calculationData);
        setResult(calculatedResult);
      }}
    >
      Calculate
    </button>
  );
}
