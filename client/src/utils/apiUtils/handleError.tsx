//  Handles errors by returning a standardized error object.
//   message - A custom error message describing the context of the error.
//    error - The original error object or any value.
//   returns => An object containing the custom message and the error message.

export function handleError(message: string, error: any) {
  return {
    message,
    error:
      error instanceof Error ? error.message : "An unexpected error occurred",
  };
}
