"use client"

import * as React from "react"
import { useContext } from 'react'
import { SidebarContext } from '@/providers/context/SidebarProvider'
import { ActionState } from '@/types'
import { CodeXmlIcon, PaletteIcon, SpeechIcon, ChevronsUpDown, Plus, BotIcon } from "lucide-react"
import
{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import
{
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

// This is data to keep
const actions: ActionState[] = [
  {
    name: "Consultation",
    logo: SpeechIcon,
  },
  {
    name: "Design",
    logo: PaletteIcon,
  },
  {
    name: "Development",
    logo: CodeXmlIcon,
  },
  {
    name: "SEO",
    logo: BotIcon,
  },
]

export function TeamSwitcher ()
{
  const { isMobile } = useSidebar()
  const context = useContext(SidebarContext)

  if (!context)
  {
    throw new Error('AppSidebar must be used within a SidebarContextProvider')
  }

  const [ action, setAction ] = context.actionState

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg border border-sidebar-primary bg-sidebar-primary/10 text-sidebar-primary">
                <action.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="font-semibold">Leads Near Me</span>
                <span className="font-medium text-xs">{ action.name }</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={ isMobile ? "bottom" : "right" }
            sideOffset={ 4 }
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Actions
            </DropdownMenuLabel>

            { actions.map((act, index) => (
              <DropdownMenuItem
                key={ act.name }
                onClick={ () => setAction({ name: act.name, logo: act.logo }) }
                className="gap-2 p-2 cursor-pointer"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <act.logo className="size-4 shrink-0" />
                </div>
                { act.name }
                <DropdownMenuShortcut>⌘{ index + 1 }</DropdownMenuShortcut>
              </DropdownMenuItem>
            )) }

            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add Action</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
