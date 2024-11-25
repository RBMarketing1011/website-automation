import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { ActionState } from '@/types'

import { SpeechIcon } from "lucide-react"

// Define the type for the context
type SidebarType = {
  actionState: [ ActionState, Dispatch<SetStateAction<ActionState>> ]
}

// Create the context
export const SidebarContext = createContext<SidebarType | undefined>(undefined)

// Define the provider component
const SidebarContextProvider = ({ children }: { children: ReactNode }) =>
{
  // Initialize the state with an object
  const [ action, setAction ] = useState<ActionState>({
    name: 'Consultation',
    logo: SpeechIcon, // Ensure SpeechIcon is imported and valid
  })

  return (
    <SidebarContext.Provider value={ { actionState: [ action, setAction ] } }>
      { children }
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
