import { createRange } from "@/utils/createRange";
import Image from "next/image";
import { useMemo } from "react";

import chevLeft from "@/assets/icons/double-chevron-left.svg";
import chevRight from "@/assets/icons/double-chevron-right.svg";
import classNames from "classnames";

interface PaginationProps {
  total: number;
  current: number;
  onPage: (page: number) => void;
}

export function Pagination({ total, current, onPage }: PaginationProps) {
  const hasPrevious = current > 1;
  const hasNext = current < total;

  const toRender: Array<number | "ellipsis"> = useMemo(() => {
    const closestToCurrent = createRange(current - 2, current + 2).filter(
      (pageNumber) => {
        return pageNumber > 1 && pageNumber < total;
      }
    );

    const rawResult = [1, ...closestToCurrent, total];

    const result = rawResult.reduce<Array<number | "ellipsis">>(
      (acc, current, idx) => {
        const prev = rawResult[idx - 1];
        if (!prev) {
          acc.push(current);
          return acc;
        }

        const diff = Math.abs(current - prev);
        if (diff > 1) {
          acc.push("ellipsis");
        }

        acc.push(current);
        return acc;
      },
      []
    );

    return result;
  }, [current, total]);

  if (total === 1) {
    return null;
  }

  return (
    <nav aria-label="pagination" className="w-full flex justify-center">
      <ul className="join">
        {hasPrevious && (
          <li className="join-item btn btn-square">
            <button
              className="p-4"
              title="Previous Page"
              onClick={() => onPage(current - 1)}
            >
              <Image width={25} height={25} src={chevLeft} alt="" />
            </button>
          </li>
        )}
        {toRender.map((pageNumber, idx) => {
          if (pageNumber === "ellipsis") {
            return (
              <li
                className="hidden md:flex join-item btn btn-square btn-disabled"
                key={`${pageNumber}_${idx}`}
              >
                <span className="text-center">&#8230;</span>
              </li>
            );
          }

          const isCurrent = pageNumber === current;

          return (
            <li
              className={classNames("md:flex join-item btn btn-square", {
                hidden: !isCurrent,
                "btn-primary": isCurrent,
              })}
              key={pageNumber}
            >
              <button
                className="text-center"
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Go to Page "${pageNumber}"`}
                onClick={() => onPage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        {hasNext && (
          <li className="join-item btn btn-square">
            <button
              className="p-4"
              title="Next Page"
              onClick={() => onPage(current + 1)}
            >
              <Image width={25} height={25} src={chevRight} alt="" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
