"use client";

import { usePathname } from "next/navigation";
import { type LucideIcon } from "lucide-react";
import clsx from "clsx";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavDocuments({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Certificate Management</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;

          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                className={clsx(
                  "relative group",
                  isActive && "bg-muted font-semibold text-black"
                )}
              >
                <a href={item.url} className="flex items-center gap-2">
                  <item.icon />
                  <span>{item.name}</span>

                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 bg-black rounded-r-sm" />
                  )}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
