"use client";

import { deleteProduct, updateProduct } from "@/actions/products";
import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { productFormSchema } from "@/definitions/product";
import { Product } from "@/types/product";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "price",
    header: "Precio",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "available",
    header: "Disponivilidad",
    cell: ({ row }) => {
      const available = row.getValue("available");
      return <div>{available ? "si" : "no"}</div>;
    },
  },
  {
    accessorKey: "disabled",
    header: "Desactivado",
    cell: ({ row }) => {
      const disabled = row.getValue("disabled");
      return <div>{disabled ? "si" : "no"}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <ProductActionsCell
          product={product}
          deleteProduct={deleteProduct}
        />
      );
    },
  },
];

interface ProductActionsCellProps {
  product: Product;
  deleteProduct: (id: string) => void;
}

const ProductActionsCell: React.FC<ProductActionsCellProps> = ({
  product,
  deleteProduct,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const onSubmit = async (id: string, data: productFormSchema) => {
    const {error} = await updateProduct(id, data)
    if (error) {
      toast.error("Error al actualizar el producto")
      return false
    }
    
    return true
  } 

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setOpenDialog(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => deleteProduct(product.id)}
            variant="destructive"
          >
            <Trash className="mr-2 h-4 w-4" />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar producto</DialogTitle>
            <DialogDescription>
              Aquí puedes editar el producto <strong>{product.name}</strong>.
            </DialogDescription>
          </DialogHeader>
          <ProductForm
            onSubmit={async (data) => onSubmit(product.id, data)}
            initialData={product as productFormSchema}
            mode="update"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};