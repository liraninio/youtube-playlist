const handleErrorAsync = (error: unknown, msg: string) => {
  if (error instanceof Error) {
    return Promise.reject(new Error(`${msg}: ${error.message}`));
  } else {
    return Promise.reject(new Error(msg));
  }
};

const handleError = (error: unknown, msg: string) => {
  return new Error(error instanceof Error ? `${msg}: ${error.message}` : msg);
};
