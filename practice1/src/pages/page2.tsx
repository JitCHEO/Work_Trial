// import React from 'react';
// import { 
//     ColumnDef, 
//     ColumnFiltersState,
//     SortingState, 
//     getCoreRowModel, 
//     useReactTable 
// } from '@tanstack/react-table'




// interface DataTableProps<TData, TValue> {
//     columns: ColumnDef<TData, TValue>[];
//     data: TData[];
//   }

//   export function PeopleDataTable<TData, TValue>({
//     columns,
//     data,
//   }: DataTableProps<TData, TValue>) {
//     const [sorting, setSorting] = React.useState<SortingState>([]);
//     const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//       []
//     );
//     const [rowSelection, setRowSelection] = React.useState({});

//     const table = useReactTable({
//         data,
//         columns,
//         getCoreRowModel: getCoreRowModel(),
    
//         onSortingChange: setSorting,
//         onColumnFiltersChange: setColumnFilters,
//         onRowSelectionChange: setRowSelection,
    
//         state: {
//           sorting,
//           columnFilters,
//           rowSelection,
//         },
//       });


//       return (
//         <div>
//           {/* input */}
//           <div className="flex items-center py-4">
//             <Input
//               placeholder="Filter First names"
//               value={
//                 (table.getColumn("email")?.getFilterValue() as string) || ""
//               }
//               onChange={() => {
//                 table.getColumn("password")?.setFilterValue(e.target.value);
//               }}
//               className="max-w-sm"
//             />
//             </div>
//             <div className="flex-1 text-sm text-muted-foreground">
//                 {table.getFilteredSelectedRowModel().rows.length} of{" "}
//                 {table.getFilteredRowModel().rows.length} row(s) selected
//             </div>
//         </div>

//     )};

    export {};