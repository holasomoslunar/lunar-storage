import CategoryCard from "@/components/CategoryCard";
import Carousel from "@/components/sections/HeroCarousel";
import { Category } from "@/types/category";
import { MessageCircleMore, ShoppingBag, Sparkles, Truck } from "lucide-react";

const featured = [
  {
    title: "Entrega rápida y confiable",
    description:
      "Recibe tu pedido sin costo adicional por la compra de cualquier producto.",
    icon: Truck,
  },
  {
    title: "Atención personalizada por WhatsApp",
    description: "Resolvemos tus dudas y pedidos directo desde tu celular.",
    icon: MessageCircleMore,
  },
  {
    title: "Productos de alta calidad",
    description:
      "Seleccionamos lo mejor en cuidado personal, maquillaje y belleza.",
    icon: Sparkles,
  },
  {
    title: " Sistema de apartado sin intereses",
    description: "Separa tus productos favoritos y págalo en cuotas flexibles.",
    icon: ShoppingBag,
  },
];

const categories: Category[] = [
  {
    name: "Maquillaje",
    image: "/categories/make-up.jpg",
    tag: "make-up",
  },
  {
    name: "Cuidado personal",
    image: "/categories/facial.jpg",
    tag: "personal-care",
  },
  {
    name: "Accesorios de belleza",
    image: "/categories/accessories.jpg",
    tag: "beauty-accessories",
  },
];

export default function page() {
  return (
    <div>
      <Carousel />

      <section className="px-4 py-16">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Te ofrecemos más que solo productos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="text-center" key={index}>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explora por Categorías
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas navegando por nuestras
              categorías especializadas
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
