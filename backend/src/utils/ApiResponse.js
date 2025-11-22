class ApiResponse {
  constructor(statusCode, message, data, success) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = true;
  }
}
export default ApiResponse;
