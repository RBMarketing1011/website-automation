import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) =>
{
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      { children }
    </div>
  )
}

export default Container