
import
{
  BadgeDollarSign,
  BrushIcon,
  CaptionsIcon,
  ContactRoundIcon,
  FileImageIcon,
  FileJson2,
  FullscreenIcon,
  GlobeIcon,
  LayoutPanelTopIcon,
  LinkIcon,
  ListChecksIcon,
  MonitorSmartphoneIcon,
  NotebookPenIcon,
  PaintbrushIcon,
  RadioTowerIcon,
  ScaleIcon,
  ScrollTextIcon,
  ServerIcon,
  TextSearchIcon,
} from "lucide-react"

import { NavType } from '@/types'

export const consultNav: NavType = {
  title: 'Business Details',
  nav: [
    {
      title: "Customer Info",
      url: "#",
      icon: ContactRoundIcon,
      isActive: true,
    },
    {
      title: "Design Preferences",
      url: "#",
      icon: PaintbrushIcon,
    },
    {
      title: "Services & Offerings",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Features & Functionality",
      url: "#",
      icon: ListChecksIcon,
    },
    {
      title: "Hosting & Domain Info",
      url: "#",
      icon: GlobeIcon,
    },
    {
      title: "Legal & Compliance",
      url: "#",
      icon: ScaleIcon,
    },
  ]
}

export const designNav: NavType = {
  title: 'Design Site',
  nav: [
    {
      title: "Branding & Indentity",
      url: "#",
      icon: BrushIcon,
      isActive: true,
    },
    {
      title: "Homepage Layout",
      url: "#",
      icon: LayoutPanelTopIcon,
    },
    {
      title: "Full Preview",
      url: "#",
      icon: FullscreenIcon,
    },
  ]
}

export const developmentNav: NavType = {
  title: 'Website Creation',
  nav: [
    {
      title: "Business Details",
      url: "#",
      icon: ScrollTextIcon,
    },
    {
      title: "Server Configuration",
      url: "#",
      icon: ServerIcon,
      isActive: true,
    },
    {
      title: "Install Wordpress",
      url: "#",
      icon: MonitorSmartphoneIcon,
    },
    {
      title: "Take Site Live",
      url: "#",
      icon: RadioTowerIcon,
    },
  ]
}

export const seoNav: NavType = {
  title: 'Search Engine Optimization',
  nav: [
    {
      title: "Titles & Meta Descriptions",
      url: "#",
      icon: CaptionsIcon,
    },
    {
      title: "Schema Markup",
      url: "#",
      icon: FileJson2,
      isActive: true,
    },
    {
      title: "Content Generation",
      url: "/dashboard/seo/content-generation",
      icon: NotebookPenIcon,
    },
    {
      title: "Content Optimization",
      url: "#",
      icon: TextSearchIcon,
    },
    {
      title: "Image Alt Tags",
      url: "#",
      icon: FileImageIcon,
    },
    {
      title: "Internal Linking",
      url: "#",
      icon: LinkIcon,
    },
  ]
}