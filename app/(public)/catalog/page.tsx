import WhatsApp from "@/components/icons/whatsapp";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product";
import { Metadata } from "next";

const categories = [
  { value: "all", label: "Todos" },
  { value: "make-up", label: "Maquillaje" },
  { value: "personal-care", label: "Cuidado Personal" },
  { value: "beauty-accessories", label: "Accesorios de belleza" },
];

const placeholderProducts: Product[] = [
  { name: "Producto 1", price: 10.00, category: "Maquillaje", available: true, image: "/products/product1.jpg" },
  { name: "Producto 2", price: 15.00, category: "Cuidado Personal", available: true, image: "/products/product2.jpg" },
  { name: "Producto 3", price: 15.00, category: "Accesorios de belleza", available: true, image: "/products/product2.jpg" },
  { name: "Producto 4", price: 15.00, category: "Maquillaje", available: false, image: "/products/product2.jpg" },
]

export const metadata: Metadata = {
  title: "Lunar Storage | Catálogo",
};


const page = () => {
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-foreground">Catálogo</h1>
        <p className="text-sm text-muted-foreground">
          Productos en el catálogo
        </p>

        <div className="my-6 flex items-center justify-start gap-2">
          <Label>Ver por</Label>
          <Select defaultValue="all">
            <SelectTrigger className="w-[230px]">
              <SelectValue placeholder="Selecione una categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categorias</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {placeholderProducts.length > 0 &&
            placeholderProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>

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

export default page;
