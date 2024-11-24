import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google"
import "./globals.css";
import "./reset.css";

const notoSansThai = Noto_Sans_Thai({ subsets: ["latin", "thai"], display: "swap" });

export const metadata: Metadata = {
  title: "YAY Website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
