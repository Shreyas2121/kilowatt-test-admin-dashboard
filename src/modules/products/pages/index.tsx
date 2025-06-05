// MUI
import { Button, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import { ProductFormModal } from "../components/product-form-modal";

// Hooks
import { useProducts } from "../context/product-contetx";

// Columns
import { columns } from "../columns";

const Products: React.FC = () => {
  const { handleOpen, products, setEditProductNull } = useProducts();

  return (
    <Box className="p-3">
      <Box className="d-flex justify-content-between align-items-center mb-3">
        <Typography variant="h6">Products</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditProductNull();
            handleOpen();
          }}
        >
          Add Product
        </Button>
      </Box>

      <DataGrid
        rows={products}
        columns={columns}
        autoHeight
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
      />

      <ProductFormModal />
    </Box>
  );
};

export default Products;
