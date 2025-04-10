export const calculationSchema = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 1000,
    },
    companyName: { type: "string" },
    material: { type: "string" },
    surfaceArea: { type: "integer" },
    estimatedTime: { type: "integer" },
    isTwoDimension: { type: "boolean" },
    isThreeDimension: { type: "boolean" },
    isTexture: { type: "boolean" },
    descriptiom: { type: "string" },
    hoursInOffice: { type: "integer" },
    hoursForFilesPreparing: { type: "integer" },
    numberOfCommutes: { type: "integer" },
    numberOfForms: { type: "integer" },
    total: { type: "integer" },
    timestamp: {
      type: "string",
      format: "date-time",
    },
  },
  required: ["id", "companyName",  "hoursInOffice", "hoursForFilesPreparing", "numberOfCommutes", "numberOfForms", "total", "timestamp"],
};
