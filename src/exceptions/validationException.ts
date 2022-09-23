import BaseException from "./baseException";

class ValidationException extends BaseException {
  constructor(data: any, status: number = 400) {
    super(status, "Validation Error", data);
  }
}

export default ValidationException;
