import AdminHeader from "@/components/sections/AdminHeader";
import AdminSidebar from "@/components/sections/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunar Storage | Dashboard",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex flex-1 flex-col m-4">
        <AdminHeader />

        <div className="py-4">{children}</div>

        <Toaster richColors />
      </main>
    </SidebarProvider>
  );
}
