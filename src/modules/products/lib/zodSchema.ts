import { z } from "zod";

export const getProductsZodSchema = (isEdit: boolean) => {
  return z.object({
    title: z.string().min(1, "Title is required"),
    price: z.number().min(0, "Price must be ≥ 0"),
    stock: z.number().min(0, "Stock must be ≥ 0"),
    description: z.string().min(1, "Description is required"),
    image: z
      .any()
      .refine(
        (files) => isEdit || (files instanceof FileList && files.length > 0),
        "Image is required"
      ),
  });
};
