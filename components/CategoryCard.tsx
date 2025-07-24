import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
}) => {
  return (
    <Link href={`/categories`} className="w-full max-w-xs">
      <div className="relative bg-background rounded-lg shadow-md overflow-hidden cursor-pointer group hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="relative h-48">
          <Image
            src={category.image}
            alt={`${category.name} category image`}
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-800/50 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
