import Image from "next/image";
import debounce from "lodash/debounce";
import magGlassIcon from "@/assets/icons/magnifying-glass.svg";
import { CloseButton } from "../UI/buttons/CloseButton";
import { ChangeEvent, useCallback, useMemo } from "react";
import classNames from "classnames";

const SEARCH_SPINNER_ID = "search-spinner";

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showCancel?: boolean;
  loading: boolean;
  value: string;
}

export function SearchBar({
  loading,
  onChange,
  value,
  showCancel,
}: SearchBarProps) {
  return (
    <div className="form-control mx-auto max-w-md relative flex justify-center">
      <div
        id={SEARCH_SPINNER_ID}
        className="absolute ml-4 pointer-events-none loading loading-spinner"
        aria-label="Loading"
        style={{
          display: loading ? "block" : "none",
        }}
      ></div>
      <Image
        className={classNames("absolute ml-4 pointer-events-none", {
          hidden: loading,
        })}
        src={magGlassIcon}
        width={24}
        height={24}
        alt=""
      />
      <input
        aria-label="Search for products"
        aria-describedby={loading ? SEARCH_SPINNER_ID : undefined}
        type="text"
        className="pl-14 input input-bordered w-full"
        disabled={loading}
        value={value}
        onChange={onChange}
      />

      {showCancel && (
        <CloseButton
          className="absolute self-end"
          type="reset"
          title="Exit search"
        />
      )}
    </div>
  );
}
