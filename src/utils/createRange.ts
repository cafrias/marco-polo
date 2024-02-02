export function createRange(from: number, to: number): number[] {
  if (from > to) {
    throw new Error("Invalid range: From must be less than To");
  }

  return Array.from({ length: to - from + 1 }, (_, i) => i + from);
}
