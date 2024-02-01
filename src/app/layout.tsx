import type { Metadata } from "next";
import { TopNav } from "@/components/UI/TopNav";
import "./globals.css";
import { Providers } from "./providers";

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
        <Providers>
          <TopNav />
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
