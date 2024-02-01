import { createContext, useContext, useMemo, useState } from "react";

export interface StoreModalState {
  selected: string | null;
  setSelected: (id: string | null) => void;
}

export const StoreModalContext = createContext<StoreModalState>({
  selected: null,
  setSelected: () => {},
});

export function StoreModalProvider({ children }: React.PropsWithChildren) {
  const [selected, setSelected] = useState<string | null>(null);

  const state: StoreModalState = useMemo(() => {
    return {
      selected: selected,
      setSelected,
    };
  }, [selected]);

  return (
    <StoreModalContext.Provider value={state}>
      {children}
    </StoreModalContext.Provider>
  );
}

export function useStoreModalState(): StoreModalState {
  return useContext(StoreModalContext);
}
