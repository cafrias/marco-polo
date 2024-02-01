"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="container px-4">
      <h1 className="font-bold text-3xl">Something went wrong</h1>
      <p>Please reload</p>
    </main>
  );
}
