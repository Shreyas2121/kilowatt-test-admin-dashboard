// MUI
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

// Hooks
import { useEffect, useState } from "react";
import { useProducts } from "../context/product-contetx";

// Libraries
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Types
import type { Product } from "../../../lib/types";

// Utils
import { getProductsZodSchema } from "../lib/zodSchema";

interface Props {}

export const ProductFormModal: React.FC<Props> = () => {
  const { open, editProduct, handleClose, addProduct, updateProduct } =
    useProducts();
  const [preview, setPreview] = useState<string | null>(null);

  const schema = getProductsZodSchema(!!editProduct);

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      stock: 0,
      description: "",
      image: undefined as any,
    },
  });

  const imageWatch = watch("image");

  useEffect(() => {
    if (!open) return;

    if (editProduct) {
      reset({
        title: editProduct.title,
        price: editProduct.price,
        stock: editProduct.stock,
        description: editProduct.description,
        image: { preview: editProduct.imageUrl } as any,
      });
      setPreview(editProduct.imageUrl);
    } else {
      reset({
        title: "",
        price: 0,
        stock: 0,
        description: "",
        image: undefined as any,
      });
      setPreview(null);
    }
  }, [editProduct, reset, open]);

  useEffect(() => {
    if (imageWatch?.[0]) {
      const url = URL.createObjectURL(imageWatch[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageWatch]);

  const handleOnClose = () => {
    reset();
    setPreview(null);
    handleClose();
  };

  const onSubmit = (data: FormData) => {
    const imageUrl = data.image?.[0]
      ? URL.createObjectURL(data.image[0])
      : preview || "";

    const finalData: Product = {
      id: editProduct?.id || crypto.randomUUID(),
      title: data.title,
      price: data.price,
      stock: data.stock,
      description: data.description,
      imageUrl,
    };

    if (editProduct) {
      updateProduct(finalData);
    } else {
      addProduct(finalData);
    }

    handleOnClose();
  };

  return (
    <Dialog open={open} onClose={handleOnClose} fullWidth maxWidth="sm">
      <DialogTitle>{editProduct ? "Edit Product" : "Add Product"}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <TextField
            label="Title"
            fullWidth
            className="mb-3"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            type="number"
            label="Price"
            fullWidth
            className="mb-3"
            {...register("price", { valueAsNumber: true })}
            error={!!errors.price}
            helperText={errors.price?.message}
          />
          <TextField
            type="number"
            label="Stock"
            fullWidth
            className="mb-3"
            {...register("stock", { valueAsNumber: true })}
            error={!!errors.stock}
            helperText={errors.stock?.message}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            className="mb-3"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <div className="mb-3">
            <input type="file" accept="image/*" {...register("image")} />
            {errors.image && (
              <Typography color="error" variant="caption">
                {errors.image.message?.toString()}
              </Typography>
            )}
          </div>
          {preview && (
            <Box mb={2}>
              <Typography variant="caption" className="d-block mb-1">
                Preview:
              </Typography>
              <img
                src={preview}
                alt="Preview"
                style={{ height: 80, borderRadius: 4 }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
