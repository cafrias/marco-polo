import { QueryClient } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    /* ...opts */
  });
}

let clientQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    if (!clientQueryClient) clientQueryClient = makeQueryClient();
    return clientQueryClient;
  }
}
