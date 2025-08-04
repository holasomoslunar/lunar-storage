import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden group hover:shadow-lg dark:hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.imageUrl}
            alt=""
            width={600}
            height={400}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {!product.available && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Agotado
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-sm font-medium mb-1 line-clamp-2">
          {product.name}
        </h2>

        <p className="text-sm font-bold text-muted-foreground mb-2">
          {product.category}
        </p>

        <span className="text-lg font-bold">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;