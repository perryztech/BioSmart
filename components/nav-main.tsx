"use client";

import { usePathname } from "next/navigation";
import { Plus, PlusCircleIcon, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import clsx from "clsx"; // Optional: for cleaner class logic

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenuItem className="flex items-center gap-2">
          <SidebarMenuButton
            tooltip="Quick Upload"
            asChild
            className={clsx(
              "min-w-8 text-primary-foreground duration-200 ease-linear",
              pathname === "/admin/upload"
                ? "bg-black text-white hover:bg-gray-700 hover:text-white"
                : "bg-primary/90 hover:bg-primary/50 active:bg-primary/90 hover:text-white"
            )}
          >
            <a href="/admin/upload" className="flex items-center gap-2">
              <PlusCircleIcon />
              <span>Upload Certificate</span>
            </a>
          </SidebarMenuButton>

          <Button
            size="icon"
            className="h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
            variant="outline"
          >
            <Plus />
            <span className="sr-only">Add</span>
          </Button>
        </SidebarMenuItem>

        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  className={clsx(
                    "relative group",
                    isActive && "bg-muted font-semibold text-black"
                  )}
                >
                  <a href={item.url} className="flex items-center gap-2">
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>

                    {/* Black vertical triangle on active item */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 bg-black rounded-r-sm" />
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
