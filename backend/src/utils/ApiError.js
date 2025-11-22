class ApiError extends Error {
  constructor(statusCode, message, data = null, stack = "", errors = []) {
    super(message);
    this.statusCode = this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
