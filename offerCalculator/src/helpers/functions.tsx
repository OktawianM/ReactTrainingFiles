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
  const newId = (await getCalculations()).length + 1;

  await db.calculations.insert({
    id: `${newId}`,
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
};

export const getCalculations = async () => {
  const query = db.calculations.find();
  const tasks = await query.exec();
  return tasks.map((task) => task.toJSON());
};
