import { AppSidebar } from "@/components/molecule/sidebar/app-sidebar"
import { NavActions } from '@/components/molecule/sidebar/nav-actions'
import { Separator } from "@/components/ui/separator"
import
{
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Breadcrumbs from '../atom/breadcrumbs'
import { ReactNode } from 'react'

const Sidebar = ({ children }: { children: ReactNode }) =>
{
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        { children }
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Sidebar