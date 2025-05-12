export default function customErrorResponse(message, error) {
  if (!error.message) {
    return {
      success: false,
      message: "Internal server error",
      error: error,
    };
  }
  return {
    success: false,
    message: message,
    error: error.message,
  };
}
