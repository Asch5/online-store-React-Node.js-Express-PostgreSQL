class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(massage) {
    return new ApiError(404, massage);
  }

  static internal(massage) {
    return new ApiError(500, massage);
  }

  static forbidden(massage) {
    return new ApiError(403, massage);
  }
}

module.exports = ApiError;
