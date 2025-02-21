import { calculationDataType } from "../models/calculationTypes";

export const calculateOffer = (data: calculationDataType): number => {
  console.log(data);
  const calculatedValue =
    (data.hoursInOffice + data.hoursForFilesPreparing + data.numberOfCommutes) *
    10;
  return calculatedValue * (data.numberOfForms > 5 ? 1.1 : 0.9);
};
