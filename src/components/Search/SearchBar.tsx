import Image from "next/image";
import magGlassIcon from "@/assets/icons/magnifying-glass.svg";
import { CloseButton } from "../UI/buttons/CloseButton";

const SEARCH_SPINNER_ID = "search-spinner";

interface SearchBarProps {}

export function SearchBar({}: SearchBarProps) {
  return (
    <div className="form-control mx-auto max-w-md relative flex justify-center">
      <div
        id={SEARCH_SPINNER_ID}
        className="absolute ml-4 pointer-events-none loading loading-spinner"
        aria-label="Loading"
      ></div>
      <Image
        className="absolute ml-4 pointer-events-none hidden"
        src={magGlassIcon}
        width={24}
        height={24}
        alt=""
      />
      <input
        aria-label="Search for products"
        aria-describedby={SEARCH_SPINNER_ID}
        type="text"
        className="pl-14 input input-bordered w-full"
        disabled
      />

      <CloseButton
        className="absolute self-end"
        type="reset"
        title="Exit search"
      />
    </div>
  );
}
