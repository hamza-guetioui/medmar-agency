export function handleError(message: string, error: any) {
    return {
      message,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }