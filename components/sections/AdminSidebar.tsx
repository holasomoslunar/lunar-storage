import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, LogOut, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Admin",
    url: "",
    icon: LayoutDashboard,
  },
  {
    title: "Productos",
    url: "products",
    icon: ShoppingBag,
  },
];

const AdminSidebar: React.FC = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/" aria-label="Lunar">
                <Image
                  src="/brand/logo-dark.png"
                  alt="Lunar Store Logo"
                  width={88}
                  height={29.33}
                  className="hidden dark:block"
                />
                <Image
                  src="/brand/logo-light.png"
                  alt="Lunar Store Logo"
                  width={88}
                  height={29.33}
                  className="block dark:hidden"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={`/admin/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenuButton asChild>
            <Link href={``}>
              <LogOut />
              <span>Cerrar Seccion</span>
            </Link>
          </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;