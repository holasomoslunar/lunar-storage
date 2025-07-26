import AdminHeader from "@/components/sections/AdminHeader";
import AdminSidebar from "@/components/sections/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex flex-1 flex-col m-4">
        <AdminHeader />

        <div className="py-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
