import type { GridColDef } from "@mui/x-data-grid";
import { formatCurrencyIN } from "../common/lib/utils";
import ProductActions from "./components/product-actions";

export const columns: GridColDef[] = [
  {
    field: "imageUrl",
    headerName: "Image",
    width: 80,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Product"
        width={40}
        height={40}
        style={{ objectFit: "cover", borderRadius: 4 }}
      />
    ),
  },
  { field: "title", headerName: "Title", flex: 1 },
  {
    field: "price",
    headerName: "Price",
    width: 120,
    valueFormatter: (params) => formatCurrencyIN(params),
  },
  { field: "stock", headerName: "Stock", width: 100 },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => <ProductActions product={params.row} />,
  },
];
