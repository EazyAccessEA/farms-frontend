import type { Metadata } from "next";
import "./globals.css";
import PuredgePrivacyControls from "@/components/PuredgePrivacyControls";

export const metadata: Metadata = {
  title: "Farm Companion - Find Local Farm Shops",
  description: "Discover verified farm shops near you. Fresh, local produce directly from farmers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">
        {children}
        <PuredgePrivacyControls />
      </body>
    </html>
  );
}
