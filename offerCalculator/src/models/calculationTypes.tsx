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
  defaultValue?: string;
};

export type checkboxDataType = {
  id: string;
  description: string;
  defaultValue?: boolean;
};

export type calculationDataType = {
  companyName: string;
  material?: string;
  surfaceArea?: string;
  estimatedTime?: string;
  isTwoDimension?: boolean;
  isThreeDimension?: boolean;
  isTexture?: boolean;
  description?: string;
  hoursInOffice: string;
  hoursForFilesPreparing: string;
  numberOfCommutes: string;
  numberOfForms: string;
  total: string;
};
