import Sidebar from '@/components/organism/sidebar'
import AppProvider from '@/providers/AppProvider'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) =>
{
  return (
    <AppProvider>
      <Sidebar>
        { children }
      </Sidebar>
    </AppProvider>
  )
}

export default Layout