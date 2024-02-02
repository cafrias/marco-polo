import type { Metadata } from "next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TopNav } from "@/components/UI/TopNav";
import "./globals.css";
import { GlobalProviders } from "./providers";
import { AriaLiveRegion } from "@/components/a11y/aria-live-region";

export const metadata: Metadata = {
  title: "Marco Polo",
  description: "A marketplace where you can find the best deals near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalProviders>
          <ReactQueryDevtools initialIsOpen={false} />
          <AriaLiveRegion />
          <TopNav />
          <main className="pt-16">{children}</main>
        </GlobalProviders>
      </body>
    </html>
  );
}
