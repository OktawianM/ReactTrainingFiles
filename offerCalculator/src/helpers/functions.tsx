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

export const saveCalculation = async () => {
  await db.tasks.insert({
    id: `${Math.random()}`,
    companyName: "Example task #3",
    total: 1000,
    timestamp: Date.now(),
  });
  const query = db.tasks.find();
  const tasks = await query.exec();
  console.log(tasks.map((task) => task.toJSON()));
};
