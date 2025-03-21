export const withMinLoading = async <T>(
  promise: Promise<T>,
  minTime: number
): Promise<T> => {
  const startTime = Date.now();

  const result = await promise;

  const elapsedTime = Date.now() - startTime;
  const remainingTime = minTime - elapsedTime;

  if (remainingTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, remainingTime));
  }

  return result;
};
