'use client'

import Container from '@/components/atom/container'
import
{
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import DataTable from '../atom/data-table'

import { ClockAlertIcon, Loader2, RadioIcon, XCircleIcon } from 'lucide-react'

import
{
  ColumnDef,
} from "@tanstack/react-table"
import { BarChartVertical } from '../molecule/charts/barchart-vertical'
import { AreaChartGradient } from '../molecule/charts/areachart-gradient'

type Projects = {
  id: string
  name: string
  startDate: Date
  status: 'live' | 'pending' | 'processing' | 'cancelled'
}

const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) =>
    {
      return row.original.startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "view",
    header: () =>
    {
      return <span className='sr-only'>view</span>
    },
    cell: ({ row }) =>
    {
      return <a className='text-orange-500' href={ `/dashboard/project/${ row.original.id }` }>View</a>
    }
  },
]

const projects: Projects[] = [
  {
    id: "1",
    name: "Alpha Auto Repair",
    status: "live",
    startDate: new Date("2023-01-15"),
  },
  {
    id: "2",
    name: "Beta Plumbing Co.",
    status: "pending",
    startDate: new Date("2023-03-10"),
  },
  {
    id: "3",
    name: "Gamma HVAC Solutions",
    status: "processing",
    startDate: new Date("2023-05-20"),
  },
  {
    id: "4",
    name: "Delta Electric",
    status: "cancelled",
    startDate: new Date("2022-11-05"),
  },
  {
    id: "5",
    name: "Epsilon Roofing",
    status: "live",
    startDate: new Date("2023-07-14"),
  },
  {
    id: "6",
    name: "Zeta Landscaping",
    status: "processing",
    startDate: new Date("2023-02-28"),
  },
  {
    id: "7",
    name: "Eta Towing Services",
    status: "pending",
    startDate: new Date("2023-04-15"),
  },
  {
    id: "8",
    name: "Theta Cleaning Pros",
    status: "live",
    startDate: new Date("2023-06-01"),
  },
  {
    id: "9",
    name: "Iota Pest Control",
    status: "cancelled",
    startDate: new Date("2023-03-22"),
  },
  {
    id: "10",
    name: "Kappa Car Wash",
    status: "processing",
    startDate: new Date("2023-07-09"),
  },
  {
    id: "11",
    name: "Lambda Movers",
    status: "pending",
    startDate: new Date("2023-08-17"),
  },
  {
    id: "12",
    name: "Mu Construction",
    status: "live",
    startDate: new Date("2023-09-23"),
  },
  {
    id: "13",
    name: "Nu Auto Detailing",
    status: "pending",
    startDate: new Date("2023-05-30"),
  },
  {
    id: "14",
    name: "Xi Garage Doors",
    status: "cancelled",
    startDate: new Date("2022-10-15"),
  },
  {
    id: "15",
    name: "Omicron Painting",
    status: "live",
    startDate: new Date("2023-11-01"),
  },
  {
    id: "16",
    name: "Pi Handyman Services",
    status: "processing",
    startDate: new Date("2023-12-05"),
  },
  {
    id: "17",
    name: "Rho Locksmiths",
    status: "pending",
    startDate: new Date("2023-01-12"),
  },
  {
    id: "18",
    name: "Sigma Windows",
    status: "cancelled",
    startDate: new Date("2023-02-18"),
  },
  {
    id: "19",
    name: "Tau Carpet Cleaning",
    status: "live",
    startDate: new Date("2023-07-07"),
  },
  {
    id: "20",
    name: "Upsilon Drywall",
    status: "processing",
    startDate: new Date("2023-09-11"),
  },
  {
    id: "21",
    name: "Phi Pool Services",
    status: "pending",
    startDate: new Date("2023-03-28"),
  },
  {
    id: "22",
    name: "Chi Flooring",
    status: "live",
    startDate: new Date("2023-10-06"),
  },
  {
    id: "23",
    name: "Psi Appliance Repair",
    status: "cancelled",
    startDate: new Date("2022-12-29"),
  },
  {
    id: "24",
    name: "Omega Renovations",
    status: "live",
    startDate: new Date("2023-08-20"),
  },
  {
    id: "25",
    name: "Zebra Pressure Washing",
    status: "processing",
    startDate: new Date("2023-10-22"),
  },
]

const DashboardPage = () =>
{
  return (
    <Container>
      <div className="grid grid-cols-2 auto-rows-min gap-4 xl:grid-cols-4">
        <div className="aspect-video sm:aspect-[7/3] rounded-xl bg-muted/20">
          <Card className='w-full h-full bg-transparent border-none flex flex-col justify-between overflow-hidden'>
            <CardHeader className='p-5 pb-0'>
              <CardTitle>
                <div className='flex items-start gap-3'>
                  <Card>
                    <CardHeader className='p-3'>
                      <RadioIcon />
                    </CardHeader>
                  </Card>
                  <div>
                    <span className='text-orange-600'>124</span>
                    <CardDescription>Websites Live</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardFooter className='w-full bg-muted/20 px-5 py-3 rounded-none'>
              <a href="/dashboard/websites-live">
                View all
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="aspect-video sm:aspect-[7/3] rounded-xl bg-muted/20">
          <Card className='w-full h-full bg-transparent border-none flex flex-col justify-between overflow-hidden'>
            <CardHeader className='p-5 pb-0'>
              <CardTitle>
                <div className='flex items-start gap-3'>
                  <Card>
                    <CardHeader className='p-3'>
                      <Loader2 />
                    </CardHeader>
                  </Card>
                  <div>
                    <span className='text-orange-600'>12</span>
                    <CardDescription>In Progress</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardFooter className='w-full bg-muted/20 px-5 py-3 rounded-none'>
              <a href="/dashboard/websites-live">
                View all
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="aspect-video sm:aspect-[7/3] rounded-xl bg-muted/20">
          <Card className='w-full h-full bg-transparent border-none flex flex-col justify-between overflow-hidden'>
            <CardHeader className='p-5 pb-0'>
              <CardTitle>
                <div className='flex items-start gap-3'>
                  <Card>
                    <CardHeader className='p-3'>
                      <ClockAlertIcon />
                    </CardHeader>
                  </Card>
                  <div>
                    <span className='text-orange-600'>7</span>
                    <CardDescription>Need to start</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardFooter className='w-full bg-muted/20 px-5 py-3 rounded-none'>
              <a href="/dashboard/websites-live">
                View all
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="aspect-video sm:aspect-[7/3] rounded-xl bg-muted/20">
          <Card className='w-full h-full bg-transparent border-none flex flex-col justify-between overflow-hidden'>
            <CardHeader className='p-5 pb-0'>
              <CardTitle>
                <div className='flex items-start gap-3'>
                  <Card>
                    <CardHeader className='p-3'>
                      <XCircleIcon />
                    </CardHeader>
                  </Card>
                  <div>
                    <span className='text-orange-600'>4</span>
                    <CardDescription>Websites Cancelled</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardFooter className='w-full bg-muted/20 px-5 py-3 rounded-none'>
              <a href="/dashboard/websites-live">
                View all
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/20 md:min-h-min  grid grid-cols-2 auto-rows-min gap-4 xl:grid-cols-4 p-5">
        <Card className='h-[69vh] bg-transparent col-span-2 flex flex-col items-start justify-between p-6 gap-5'>
          <CardHeader className='p-0'>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <DataTable
            className='bg-card p-3 w-full h-full overflow-y-auto'
            columns={ columns }
            data={ projects }
          />
          <CardFooter className='p-0'>
            <a href="/dashboard/projects">Full Details</a>
          </CardFooter>
        </Card>

        <div className='h-[69vh] col-span-2 w-full grid grid-rows-2 grid-col-1 gap-5'>
          <BarChartVertical
            className='bg-transparent'
            title='New Websites'
            minHeight='min-h-12'
            maxHeight='max-h-44'
          />
          <AreaChartGradient
            className='bg-transparent'
            title='Device Types'
            minHeight='min-h-12'
            maxHeight='max-h-44'
          />
        </div>
      </div>
    </Container>
  )
}

export default DashboardPage