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
  calculationValue: string;
  setValue: (value: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
};
