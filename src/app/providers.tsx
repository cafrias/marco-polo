"use client";

import { getQueryClient } from "@/data/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

interface ProvidersProps {
  children?: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
