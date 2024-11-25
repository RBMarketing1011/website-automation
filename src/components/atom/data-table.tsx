import
{
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import
{
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from '@/lib/utils'
interface DataTableProps<TData, TValue>
{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  className?: string
}

export function DataTable<TData, TValue> ({
  columns,
  data,
  className
}: DataTableProps<TData, TValue>)
{
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div
      className={ cn(
        'rounded-md border',
        className
      )
      }>
      <Table>
        <TableHeader>
          { table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={ headerGroup.id }>
              { headerGroup.headers.map((header) =>
              {
                return (
                  <TableHead key={ header.id }>
                    { header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      ) }
                  </TableHead>
                )
              }) }
            </TableRow>
          )) }
        </TableHeader>
        <TableBody>
          { table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={ row.id }
                data-state={ row.getIsSelected() && "selected" }
              >
                {
                  row.getVisibleCells().map((cell, idx) => (

                    // idx === 1 ?
                    //   <TableCell key={ cell.id }>
                    //     {
                    //       new Date(cell.getValue() as string).toLocaleDateString('en-US', {
                    //       year: 'numeric',
                    //       month: 'short',
                    //       day: 'numeric'
                    //       })
                    //     }
                    //   </TableCell>

                    //   :
                    <TableCell key={ cell.id }>
                      { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                    </TableCell>

                  ))
                }
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={ columns.length } className="h-12 text-center w-[50px] truncate">
                No results.
              </TableCell>
            </TableRow>
          ) }
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable