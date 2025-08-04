import { getProducts, getProductSummary } from "@/actions/products";

import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/product";
import { AlertCircle, CheckCircle, Package } from "lucide-react";
import AddProduct from "./add-product";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const { total, activeProducts, outOfStockProducts } =
    await getProductSummary();
  const { data: products } = await getProducts();

  return (
    <div>
      <div className="p-4 border border-border rounded-lg shadow-sm mb-4 flex justify-between gap-4 items-center">
        <div>
          <h2 className="font-bold text-xl text-foreground">
            Gestion de productos
          </h2>
          <p className="text-sm text-foreground/80">
            Administra tu catálogo de productos
          </p>
        </div>
        <AddProduct />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="px-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Total Productos</p>
                <p className="text-2xl font-bold">{total}</p>
              </div>
              <Package className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="px-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Productos Activos</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-300">
                  {activeProducts}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="px-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Sin Stock</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-300">
                  {outOfStockProducts}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="my-8">
        <DataTable columns={columns} data={products as Product[]} />
      </div>
    </div>
  );
};

export default page;
