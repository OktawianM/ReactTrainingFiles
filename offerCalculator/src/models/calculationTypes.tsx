import { Dispatch, SetStateAction } from "react";

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

export type calculationDataType = {
  companyName: string;
  material?: string;
  surfaceArea?: number;
  estimatedTime?: number;
  isTwoDimension?: boolean;
  isThreeDimension?: boolean;
  isTexture?: boolean;
  descriptiom?: string;
  hoursInOffice: string;
  hoursForFilesPreparing: string;
  numberOfCommutes: string;
  numberOfForms: string;
  total: number;
};
