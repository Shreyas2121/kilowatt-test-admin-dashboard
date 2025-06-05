import React, { createContext, useContext, useState } from "react";
import type { Product } from "../../../lib/types";

interface ProductContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  handleEditClick: (product: Product) => void;
  editProduct: Product | null;
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  setEditProductNull: () => void;
  resetEditState: () => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const [open, setOpen] = useState(false);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
  };

  const handleEditClick = (product: Product) => {
    setEditProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const setEditProductNull = () => {
    setEditProduct(null);
  };

  const resetEditState = () => {
    setEditProduct(null);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        handleEditClick,
        editProduct,
        handleClose,
        handleOpen,
        open,
        setEditProductNull,
        resetEditState,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextProps => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts must be used within ProductProvider");
  return ctx;
};
