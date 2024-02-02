import { test, expect, describe } from "vitest";
import { createRange } from "./createRange";

describe(createRange.name, () => {
  test("works correctly", () => {
    const range = createRange(3, 8);
    expect(range).toEqual([3, 4, 5, 6, 7, 8]);
  });

  test("from greater than to", () => {
    expect(() => {
      createRange(8, 3);
    }).toThrow();
  });

  test("same value", () => {
    const range = createRange(1, 1);
    expect(range).toEqual([1]);
  });

  test("0 value", () => {
    const range = createRange(0, 0);
    expect(range).toEqual([0]);
  });

  test("negatives to positives", () => {
    const range = createRange(-2, 2);
    expect(range).toEqual([-2, -1, 0, 1, 2]);
  });

  test("negatives", () => {
    const range = createRange(-4, -2);
    expect(range).toEqual([-4, -3, -2]);
  });
});
