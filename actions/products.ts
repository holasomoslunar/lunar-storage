"use server";

import { productFormSchema } from "@/definitions/product";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getProductSummary() {
  const total = await prisma.product.count();
  const outOfStockProducts = await prisma.product.count({
    where: { available: false },
  });
  const activeProducts = total - outOfStockProducts;

  return { total, outOfStockProducts, activeProducts };
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return { data: products, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export default async function createProduct({
  name,
  description,
  price,
  imageUrl,
  available,
  category,
  disabled ,
}: productFormSchema) {
  try {
    const data = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imageUrl,
        available,
        category,
        disabled ,
      },
    });

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  } finally {
    revalidatePath("/admin");
  }
}

export async function updateProduct(
  id: string,
  updates: Partial<productFormSchema>
) {
  try {
    const data = await prisma.product.update({
      where: { id },
      data: updates,
    });
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  } finally {
    revalidatePath("/admin");
  }
}

export async function deleteProduct(id: string) {
  try {
    const data = await prisma.product.delete({
      where: { id },
    });
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  } finally {
    revalidatePath("/admin");
  }
}

export async function getFilteredProducts({
  category,
  query,
}: {
  category?: string;
  query?: string;
}) {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
        AND: [
          { category: { contains: category } },
          {
            disabled : { not: true },
          },
        ],
      },
    });
    return { data: products, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
