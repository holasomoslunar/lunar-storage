import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
