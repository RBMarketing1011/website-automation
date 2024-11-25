"use client"

import { useContext } from 'react'
import { SidebarContext } from '@/providers/context/SidebarProvider'
import
{
  Frame,
  LayoutDashboardIcon,
  Map,
  PieChart,
} from "lucide-react"

import { NavMain } from "@/components/atom/nav/nav-main"
import { NavProjects } from "@/components/atom/nav/nav-projects"
import { NavUser } from "@/components/atom/nav/nav-user"
import { TeamSwitcher } from "@/components/atom/team-switcher"
import { consultNav, designNav, developmentNav, seoNav } from '@/data/sidebarNavigation'
import
{
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavType } from '@/types'

// This is sample data.
const user = {
  firstname: "Anthony",
  lastname: 'Reynolds',
  email: "anthony@leadsnearme.com",
}

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Travel",
    url: "#",
    icon: Map,
  },
]

export function AppSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>)
{
  const context = useContext(SidebarContext)

  if (!context)
  {
    throw new Error('AppSidebar must be used within a SidebarContextProvider')
  }

  const [ action ] = context.actionState

  let navMain: NavType = consultNav

  if (action.name === 'Consultation')
  {
    navMain = consultNav
  } else if (action.name === 'Design')
  {
    navMain = designNav
  } else if (action.name === 'Development')
  {
    navMain = developmentNav
  } else if (action.name === 'SEO')
  {
    navMain = seoNav
  }

  return (
    <Sidebar collapsible="icon" { ...props }>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={ [ {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboardIcon,
        }, ] } />
        <NavMain title={ navMain?.title } items={ navMain?.nav } />
        <NavProjects projects={ projects } />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={ user } />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
