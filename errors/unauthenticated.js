import CustomErrorApi from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class UnAuthenticatedError extends CustomErrorApi {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
