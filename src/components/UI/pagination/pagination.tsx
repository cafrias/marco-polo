import { createRange } from "@/utils/createRange";
import Image from "next/image";
import { useMemo } from "react";

import chevLeft from "@/assets/icons/double-chevron-left.svg";
import chevRight from "@/assets/icons/double-chevron-right.svg";
import Link from "next/link";
import classNames from "classnames";

interface PaginationProps {
  total: number;
  current: number;
}

export function Pagination({ total, current }: PaginationProps) {
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

  return (
    <nav aria-label="pagination" className="w-full flex justify-center">
      <ul className="join">
        {hasPrevious && (
          <li className="join-item btn btn-square">
            <Link
              className="p-4"
              title="Previous Page"
              href={`?p=${current - 1}`}
            >
              <Image src={chevLeft} alt="" />
            </Link>
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
              <Link
                className="text-center"
                href={`?p=${pageNumber}`}
                aria-current={isCurrent ? "page" : undefined}
              >
                <span className="inline-block w-0 h-0 invisible">page</span>{" "}
                {pageNumber}
              </Link>
            </li>
          );
        })}
        {hasNext && (
          <li className="join-item btn btn-square">
            <Link className="p-4" title="Next Page" href={`?p=${current + 1}`}>
              <Image src={chevRight} alt="" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
