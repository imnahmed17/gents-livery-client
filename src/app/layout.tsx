import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gent Livery",
  description: "Ecommerce website for Men's clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
