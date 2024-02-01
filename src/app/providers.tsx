"use client";

import { getQueryClient } from "@/data/query-client";
import { A11yNotificationProvider } from "@/providers/a11y/a11y-notification-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

interface ProvidersProps {
  children?: React.ReactNode;
}

export function GlobalProviders({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <A11yNotificationProvider>{children}</A11yNotificationProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
