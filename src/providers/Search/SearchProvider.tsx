import React, { useCallback, useContext, useMemo, useState } from "react";

interface SearchContext {
  readonly term: string;
  readonly loading: boolean;
  readonly search: (term: string) => void;
  readonly cancel: () => void;
  readonly setLoading: (loading: boolean) => void;
}

const context = React.createContext<SearchContext>({
  term: "",
  loading: false,
  cancel() {},
  search() {},
  setLoading() {},
});

export function SearchProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = useState<Pick<SearchContext, "term" | "loading">>({
    loading: false,
    term: "",
  });

  const search: SearchContext["search"] = useCallback((term) => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
        term,
      };
    });
  }, []);

  const cancel: SearchContext["cancel"] = useCallback(() => {
    setState((prev) => {
      return {
        ...prev,
        loading: false,
        term: "",
      };
    });
  }, []);

  const setLoading: SearchContext["setLoading"] = useCallback((loading) => {
    setState((prev) => {
      return {
        ...prev,
        loading,
      };
    });
  }, []);

  const cachedContext: SearchContext = useMemo(() => {
    return {
      ...state,
      cancel,
      search,
      setLoading,
    };
  }, [cancel, search, setLoading, state]);

  return <context.Provider value={cachedContext}>{children}</context.Provider>;
}

export function useSearch() {
  return useContext(context);
}
