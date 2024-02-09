import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../providers/StoreProvider";
import LayoutProvider from "@/providers/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

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
            <div className={inter.className}>{children}</div>
          </StoreProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
