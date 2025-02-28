import { Dispatch, SetStateAction } from "react";

export type calculationDataType = {
  isTwoDimension?: boolean;
  isThreeDimension?: boolean;
  isTexture?: boolean;
  hoursInOffice: string;
  hoursForFilesPreparing: string;
  numberOfCommutes: string;
  numberOfForms: string;
};

export type inputFieldProps = {
  setCalculatorData: Dispatch<SetStateAction<calculationDataType>>;
  fieldData: fieldDataType;
};

export type checkBoxProps = {
  description: string;
  isChecked: boolean;
};

export type fieldDataType = {
  description: string;
  id: string;
  value: string;
};

export type checkboxDataType = {
  id: string;
  description: string;
};
