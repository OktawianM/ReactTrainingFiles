import { calculationDataType } from "../models/calculationTypes";

export const calculateOffer = (data: calculationDataType): number => {
  const calculatedValue =
    (parseInt(data.hoursInOffice) +
      parseInt(data.hoursForFilesPreparing) +
      parseInt(data.numberOfCommutes)) *
    10;
  return calculatedValue * (parseInt(data.numberOfForms) > 5 ? 1.1 : 0.9);
};
