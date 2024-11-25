import { ForwardRefExoticComponent } from 'react'
import { LucideProps } from 'lucide-react'

export type ActionState = {
  name: 'Consultation' | 'Design' | 'Development' | 'SEO'
  logo: ForwardRefExoticComponent<LucideProps>
}

export type NavType = {
  title: string
  nav: {
    title: string
    url: string
    icon: ForwardRefExoticComponent<LucideProps>
    isActive?: boolean
  }[]
}