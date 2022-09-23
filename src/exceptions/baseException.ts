export default class BaseException extends Error {
  status: number;
  message: string;
  data?: any;
  constructor(status: number, message: string, data: any) {
    super(message);
    this.status = status;
    this.message = message;
    this.data = data || null;
  }
}

export class CommonException extends BaseException {
  constructor(message: string = 'Something went wrong.', data: any = null, status: number = 500) {
    super(status, message, data);
  }
}
