import type { GridColDef } from "@mui/x-data-grid";
import { formatCurrencyIN } from "../common/lib/utils";

export const columnsOrders: GridColDef[] = [
  { field: "id", headerName: "Order ID", width: 100 },
  { field: "customer", headerName: "Customer", flex: 1, minWidth: 150 },
  {
    field: "amount",
    headerName: "Amount",
    width: 120,
    type: "number",
    valueFormatter: (params: number) => {
      return formatCurrencyIN(params);
    },
  },
  { field: "date", headerName: "Date", width: 130 },
  { field: "status", headerName: "Status", width: 120 },
];
