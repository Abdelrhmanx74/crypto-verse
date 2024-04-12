import "./globals.css";
import type { Metadata } from "next";
import StoreProvider from "../providers/StoreProvider";
import LayoutProvider from "@/providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Crypto Verse",
  description: "Your Crypto Universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>
          <StoreProvider>
            {children}
          </StoreProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
