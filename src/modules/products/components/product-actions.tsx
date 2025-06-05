// MUI
import { IconButton } from "@mui/material";

// Types
import type { Product } from "../../../lib/types";

// Icons
import EditIcon from "@mui/icons-material/Edit";

//Hooks
import { useProducts } from "../context/product-contetx";

const ProductActions = ({ product }: { product: Product }) => {
  const { handleEditClick } = useProducts();
  return (
    <IconButton color="primary" onClick={() => handleEditClick(product)}>
      <EditIcon />
    </IconButton>
  );
};

export default ProductActions;
