import { useMemo } from "react";
import debounce from "lodash/debounce";
import { DebouncedFunc } from "lodash";

/**
 * Wraps the given function into debounce and memoizes it.
 */
export function useDebounce<C extends (...args: any[]) => any>(
  callback: C,
  time: number
): DebouncedFunc<C> {
  return useMemo(() => {
    return debounce(callback, time);
  }, [callback, time]);
}
