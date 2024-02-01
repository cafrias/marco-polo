import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type A11yNotifications = "status" | "polite" | "assertive";

type A11yNotificationContext = Record<A11yNotifications, string> & {
  notify: (type: A11yNotifications, text: string) => void;
};

const context = createContext<A11yNotificationContext>({
  assertive: "",
  polite: "",
  status: "",
  notify: () => {},
});

export function A11yNotificationProvider({
  children,
}: React.PropsWithChildren) {
  const [state, setState] = useState<Record<A11yNotifications, string>>({
    assertive: "",
    polite: "",
    status: "",
  });

  const notify: A11yNotificationContext["notify"] = useCallback(
    (type, text) => {
      setState((prev) => {
        return {
          ...prev,
          [type]: text,
        };
      });
    },
    []
  );

  const cached = useMemo(() => {
    return {
      ...state,
      notify,
    };
  }, [notify, state]);

  return <context.Provider value={cached}>{children}</context.Provider>;
}

export function useA11yNotification() {
  return useContext(context);
}
