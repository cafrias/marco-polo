import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useSearch } from "@/providers/Search/SearchProvider";
import { useDebounce } from "@/hooks/useDebounce";
import { SEARCH_DEBOUNCE_TIME } from "@/config";

interface SearchFormProps {}

export function SearchForm({}: SearchFormProps) {
  const { cancel, search, loading, term } = useSearch();
  const [searchBoxValue, setSearchBoxValue] = useState("");

  const onSearchBoxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchBoxValue(e.currentTarget.value);
  }, []);

  const debouncedSearch = useDebounce(search, SEARCH_DEBOUNCE_TIME);

  useEffect(() => {
    const trimmed = searchBoxValue.trim();
    if (trimmed) {
      debouncedSearch(trimmed);
    }
  }, [searchBoxValue, debouncedSearch]);

  const onReset = useCallback(() => {
    setSearchBoxValue("");
    cancel();
  }, [cancel]);

  return (
    <form
      onReset={onReset}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <SearchBar
        loading={loading}
        value={searchBoxValue}
        onChange={onSearchBoxChange}
        showCancel={!!term}
      />
    </form>
  );
}
