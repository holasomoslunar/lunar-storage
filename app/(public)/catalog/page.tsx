import WhatsApp from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import React, { Suspense } from "react";
import Catalog from "./catalog";
import Filter from "./filter";
import CatalogSkeleton from "./skeleton";

export const metadata: Metadata = {
  title: "Lunar Storage | Catálogo",
};

interface Props {
  searchParams?: Promise<{
    query?: string;
    category?: string;
  }>;
}

const Page: React.FC<Props> = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";

  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-foreground">Catálogo</h1>
        <p className="text-sm text-muted-foreground">
          Productos en el catálogo
        </p>

        <Filter />
        
        <Suspense key={query + category} fallback={<CatalogSkeleton />}>
          <Catalog query={query} category={category} />
        </Suspense>

        <div className="text-center mt-12">
          <p className="text-foreground mb-4">
            Ya decidiste qué producto quieres comprar, realiza tu pedido
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-green-600 text-white"
          >
            <a
              href="https://wa.me/+584121898687"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <WhatsApp />
              Ordenar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
