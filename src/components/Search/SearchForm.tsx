import React from "react";
import { SearchBar } from "./SearchBar";

interface SearchFormProps {}

export function SearchForm({}: SearchFormProps) {
  return (
    <form>
      <SearchBar />
    </form>
  );
}
