export const getErrorMessageFromApi = (error) => {
  if (!error) {
    return null;
  }

  return JSON.parse(error.message);
}
