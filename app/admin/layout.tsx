import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Lunar Storage | Dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      Dashboard
      {children}
    </>
  );
}
