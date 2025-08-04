import z from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
  price: z.number().min(0, "El precio debe ser mayor o igual a 0"),
  imageUrl: z.url("Cargue una imagen del producto"),
  category: z.enum(
    ["make-up", "personal-care", "beauty-accessories"],
    "Selecciona una categoría"
  ),
  available: z.boolean(),
});

export type productFormSchema = z.infer<typeof productFormSchema>;
