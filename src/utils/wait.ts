/**
 * Wait for the given amount of time in millis
 */
export function wait(millis: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, millis);
  });
}
