"use client"

import createProduct from "@/actions/products";
import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { productFormSchema } from "@/definitions/product";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const AddProduct = () => {
  const onSubmit = async (data: productFormSchema) => {
    const { data: product } = await createProduct(data);
    if (!product) {
      toast.error("Error al crear el producto");
      return false
    }

    return true
  }; 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus /> Nuevo producto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuevo Producto</DialogTitle>
          <DialogDescription>
            Completa la información para crear un nuevo producto
          </DialogDescription>
        </DialogHeader>

        <ProductForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}

export default AddProduct;