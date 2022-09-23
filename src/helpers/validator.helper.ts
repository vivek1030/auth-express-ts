import Schema, { SchemaDefinition } from "validate";

interface ValidateError {
  path: string;
  status: number;
  expose: boolean;
  message?: string;
}

export default function validateHelper(
  input: Object,
  validateObject: SchemaDefinition
) {
  const validateSchema = new Schema(validateObject);
  const error: ValidateError[] = validateSchema.validate(input);

  if (error.length > 0) {
    let errorArr = [];
    for (let arr of error) {
      errorArr.push({
        key: arr?.path || "Unkown",
        message: arr?.message || "Unknown",
      });
    }

    return errorArr;
  }

  return false;
}
