"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { productFormSchema } from "@/definitions/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import CloudinaryUploader from "./CloudinaryUploader";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const categories = [
  { value: "make-up", label: "Maquillaje" },
  { value: "personal-care", label: "Cuidado Personal" },
  { value: "beauty-accessories", label: "Accesorios de belleza" },
];

interface ProductFormProps {
  initialData?: Partial<productFormSchema>;
  mode?: "create" | "update";
  onSubmit: (data: productFormSchema) => Promise<boolean>;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  mode = "create",
  onSubmit: onSubmitHandler
}) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<productFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: initialData?.name,
      description: initialData?.description,
      price: initialData?.price,
      category: initialData?.category,
      imageUrl: initialData?.imageUrl,
      available: initialData?.available ?? true,
      disabled : initialData?.disabled  ?? false
    },
  });
  const [pending, setPending] = useState(false);

  const onSubmit: SubmitHandler<productFormSchema> = async (data) => {    
    try {
      setPending(true);
      const successed = await onSubmitHandler(data)
      if (mode === "create" && successed) {
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Error inesperado");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input type="text" {...register("name")} required />
          {errors.name && (
            <span className="text-destructive text-sm" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Descripción</Label>
          <Textarea {...register("description")} />
        </div>

        <div className="flex items-start gap-2">
          <div className="grid gap-2 w-full">
            <Label htmlFor="price">Precio</Label>
            <Input
              type="number"
              {...register("price", { valueAsNumber: true })}
              required
              step=".01"
            />
            {errors.price && (
              <span className="text-destructive text-sm" role="alert">
                {errors.price.message}
              </span>
            )}
          </div>

          <div className="grid gap-2 w-full">
            <Label>Categoria</Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <span className="text-destructive text-sm" role="alert">
                {errors.category.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="imageUrl">Foto</Label>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="cursor-pointer">
                Cargar foto del producto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Foto del producto</DialogTitle>
                <DialogDescription>
                  Cargue la foto de su producto
                </DialogDescription>
              </DialogHeader>

              <Controller
                name="imageUrl"
                control={control}
                render={({ field }) => (
                  <CloudinaryUploader onUploadSuccess={field.onChange} />
                )}
              />
            </DialogContent>
          </Dialog>
          {errors.imageUrl && (
            <span className="text-destructive text-sm" role="alert">
              {errors.imageUrl.message}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Controller
            name="available"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  defaultChecked
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="available"
                />
                <Label htmlFor="available">Desponible</Label>
              </div>
            )}
          />

          {errors.available && (
            <span className="text-destructive text-sm" role="alert">
              {errors.available.message}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Controller
            name="disabled"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  defaultChecked
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="disabled"
                />
                <Label htmlFor="disabled ">Desactivar</Label>
              </div>
            )}
          />

          {errors.available && (
            <span className="text-destructive text-sm" role="alert">
              {errors.available.message}
            </span>
          )}
        </div>

        <div>
          {mode === "create" && (
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={pending}
            >
              {pending ? <Loader className="animate-spin" /> : "Guardar"}
            </Button>
          )}

          {mode === "update" && (
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={pending}
            >
              {pending ? <Loader className="animate-spin" /> : "Actualizar"}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
