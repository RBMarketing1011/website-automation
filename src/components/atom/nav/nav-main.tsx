"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import
{
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import
{
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain ({
  title,
  items,
}: {
  title?: string,
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
})
{
  return (
    <SidebarGroup>
      {
        title &&
        <SidebarGroupLabel>{ title }</SidebarGroupLabel>
      }
      <SidebarMenu>
        { items.map((item) => (
          <a key={ item.title } href={ item.url }>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={ item.title }>
                { item.icon && <item.icon /> }
                <span>{ item.title }</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </a>
        )) }
      </SidebarMenu>
    </SidebarGroup>
  )
}
