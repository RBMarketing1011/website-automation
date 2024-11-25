'use client'

import { ReactNode } from 'react'
import SidebarContextProvider from './context/SidebarProvider'

const AppProvider = ({ children }: { children: ReactNode }) =>
{
  return (
    <SidebarContextProvider>
      { children }
    </SidebarContextProvider>
  )
}

export default AppProvider