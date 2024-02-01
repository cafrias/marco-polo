import { createContext, useContext, useMemo, useState } from "react";

export interface StoreModalContext {
  selected: string | null;
  setSelected: (id: string | null) => void;
}

const Context = createContext<StoreModalContext>({
  selected: null,
  setSelected: () => {},
});

export function StoreModalProvider({ children }: React.PropsWithChildren) {
  const [selected, setSelected] = useState<string | null>(null);

  const state: StoreModalContext = useMemo(() => {
    return {
      selected: selected,
      setSelected,
    };
  }, [selected]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useStoreModal(): StoreModalContext {
  return useContext(Context);
}
