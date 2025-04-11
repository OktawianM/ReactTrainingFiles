import { useEffect, useState } from "react";
import { getCalculations } from "../helpers/functions";

export default function CalculationsList(): JSX.Element {
  const [calculations, setCalculations] = useState<any[]>([]);

  useEffect(() => {
    getCalculations().then((data) => setCalculations(data));
  }, []);
  console.log(calculations);
  return (
    <div className="flex flex-col gap-4 lg:border-l items-center border-blue-700 p-10">
      {calculations.map((item: any, index: number) => (
        <div
          key={index}
          className="border-1 border-blue-700 p-4 rounded-md bg-gray-800 text-white text-sm"
        >
          <p className="text-gray-400">
            <strong>
              {item.companyName}
              {": "}
            </strong>
            {item.material}, {item.surfaceArea}cm2, {item.estimatedTime}h,
            {item.isTwoDimension ? <strong> 2D</strong> : <></>}
            {item.isThreeDimension ? <strong> 3D</strong> : <></>}
            {item.isTexture ? <strong> Texture</strong> : <></>}
          </p>
          <p>
            Office: {item.hoursInOffice}h, Files: {item.hoursForFilesPreparing}
            h, Commutes: {item.numberOfCommutes}, Total: {item.total}
          </p>
        </div>
      ))}
    </div>
  );
}
