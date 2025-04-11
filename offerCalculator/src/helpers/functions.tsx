import { db } from "../database/database";
import { calculationDataType } from "../models/calculationTypes";

export const calculateOffer = (data: calculationDataType): number => {
  const calculatedValue =
    (parseInt(data.hoursInOffice) +
      parseInt(data.hoursForFilesPreparing) +
      parseInt(data.numberOfCommutes)) *
    100;
  return calculatedValue * (parseInt(data.numberOfForms) > 5 ? 1.1 : 0.9);
};

export const saveCalculation = async (calculationData: any) => {
  console.log(calculationData);

  await db.tasks.insert({
    id: `${Math.random()}`,
    companyName: calculationData.companyName,
    material: calculationData.material,
    surfaceArea: parseInt(calculationData.surfaceArea),
    estimatedTime: parseInt(calculationData.estimatedTime),
    isTwoDimension: calculationData.isTwoDimension,
    isThreeDimension: calculationData.isThreeDimension,
    isTexture: calculationData.isTexture,
    description: calculationData.description,
    hoursInOffice: parseInt(calculationData.hoursInOffice),
    hoursForFilesPreparing: parseInt(calculationData.hoursForFilesPreparing),
    numberOfCommutes: parseInt(calculationData.numberOfCommutes),
    numberOfForms: parseInt(calculationData.numberOfForms),
    total: parseInt(calculationData.total),
    timestamp: Date.now(),
  });
  const query = db.tasks.find();
  const tasks = await query.exec();
  console.log(tasks.map((task) => task.toJSON()));
};
