"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo (
  {
    id,
    text,
    checked,
    onChange,
  }: {
    id: string
    text: string
    checked: boolean
    onChange: (value: any) => void
  })
{
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        checked={ checked }
        onChange={ onChange }
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        { text }
      </label>
    </div>
  )
}
