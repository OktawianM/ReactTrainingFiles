export type calculationDataType = {
  isTwoDimension: boolean;
  isThreeDimension: boolean;
  isTexture: boolean;
  hoursInOffice: number;
  hoursForFilesPreparing: number;
  numberOfCommutes: number;
  numberOfForms: number;
};

export type inputFieldProps = {
  calculationValue: number;
  setValue: (value: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
};
