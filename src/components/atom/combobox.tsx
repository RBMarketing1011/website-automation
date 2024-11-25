"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import
{
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import
{
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const projects = [
  { label: 'Speedy Auto Repair', value: 'speedy auto repair' },
  { label: 'Elite Car Services', value: 'elite car services' },
  { label: 'Quick Fix Mechanics', value: 'quick fix mechanics' },
  { label: 'Reliable Auto Experts', value: 'reliable auto experts' },
  { label: 'Master Mechanic Garage', value: 'master mechanic garage' },
  { label: 'City Auto Repair', value: 'city auto repair' },
  { label: 'Precision Auto Works', value: 'precision auto works' },
  { label: 'Honest Car Care', value: 'honest car care' },
  { label: 'Prime Auto Solutions', value: 'prime auto solutions' },
  { label: 'Top Gear Auto Service', value: 'top gear auto service' },
  { label: 'Apex Auto Repairs', value: 'apex auto repairs' },
  { label: 'Ultimate Car Service', value: 'ultimate car service' },
  { label: 'Pro Auto Repair', value: 'pro auto repair' },
  { label: 'All Star Mechanics', value: 'all star mechanics' },
  { label: 'Trusted Auto Shop', value: 'trusted auto shop' },
  { label: 'Expert Auto Clinic', value: 'expert auto clinic' },
  { label: 'Superior Auto Works', value: 'superior auto works' },
  { label: 'Classic Car Repairs', value: 'classic car repairs' },
  { label: 'Urban Auto Garage', value: 'urban auto garage' },
  { label: 'Performance Auto Shop', value: 'performance auto shop' },
  { label: 'Next Level Auto Repair', value: 'next level auto repair' },
  { label: 'Highline Car Service', value: 'highline car service' },
  { label: 'Champion Auto Center', value: 'champion auto center' },
  { label: 'Drive Safe Auto Repair', value: 'drive safe auto repair' },
  { label: 'Affordable Auto Experts', value: 'affordable auto experts' },
  { label: 'Metro Auto Care', value: 'metro auto care' },
  { label: 'Green Light Garage', value: 'green light garage' },
  { label: 'Fix It Right Auto', value: 'fix it right auto' },
  { label: 'Pinnacle Car Repairs', value: 'pinnacle car repairs' },
  { label: 'Road Ready Garage', value: 'road ready garage' },
  { label: 'Gold Star Auto Repair', value: 'gold star auto repair' },
  { label: 'Turbo Auto Works', value: 'turbo auto works' },
  { label: 'Precision Car Care', value: 'precision car care' },
  { label: 'On Point Auto Repair', value: 'on point auto repair' },
  { label: 'Coastal Auto Solutions', value: 'coastal auto solutions' },
  { label: 'Downtown Auto Clinic', value: 'downtown auto clinic' },
  { label: 'The Car Doctor', value: 'the car doctor' },
  { label: 'Express Auto Care', value: 'express auto care' },
  { label: 'Expert Auto Repair', value: 'expert auto repair' },
  { label: 'Victory Auto Service', value: 'victory auto service' },
  { label: 'ProDrive Garage', value: 'prodrive garage' },
  { label: 'SureFix Auto Repairs', value: 'surefix auto repairs' },
  { label: 'Cornerstone Auto Care', value: 'cornerstone auto care' },
  { label: 'Ace Auto Garage', value: 'ace auto garage' },
  { label: 'High Performance Auto', value: 'high performance auto' },
  { label: 'Quick Start Garage', value: 'quick start garage' },
  { label: 'Drive Line Auto Repair', value: 'drive line auto repair' },
  { label: 'Fast Lane Garage', value: 'fast lane garage' },
  { label: 'AllPro Auto Care', value: 'allpro auto care' },
  { label: 'Neighborhood Auto Shop', value: 'neighborhood auto shop' },
  { label: 'Perfect Auto Solutions', value: 'perfect auto solutions' }
]


export function Combobox ()
{
  const [ open, setOpen ] = React.useState(false)
  const [ value, setValue ] = React.useState("")

  return (
    <Popover open={ open } onOpenChange={ setOpen }>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={ open }
          className="w-[250px] justify-between"
        >
          {
            value
              ? projects.find((project) => project.value === value)?.label
              : "Select project..."
          }
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search projects..." />
          <CommandList>
            <CommandEmpty>No project found.</CommandEmpty>
            <CommandGroup>
              { projects.map((project) => (
                <CommandItem
                  key={ project.value }
                  value={ project.value }
                  onSelect={ (currentValue) =>
                  {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  } }
                >
                  { project.label }
                  <Check
                    className={ cn(
                      "ml-auto",
                      value === project.value ? "opacity-100" : "opacity-0"
                    ) }
                  />
                </CommandItem>
              )) }
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
