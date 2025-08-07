import { getFilteredProducts } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import { Package, Search } from "lucide-react";

interface Props {
  query: string;
  category: string;
}

const Catalog: React.FC<Props> = async ({ query, category }) => {
  const { data: products } = await getFilteredProducts({ query, category });
  
  return (
    <>
      {products && products?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <Package className="w-12 h-12 text-slate-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <Search className="w-4 h-4 text-slate-300" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            No se encontraron productos
          </h3>
        </div>
      )}
    </>
  );
};

export default Catalog;
