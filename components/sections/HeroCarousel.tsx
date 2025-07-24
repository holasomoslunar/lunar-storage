"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";

interface CarouselSlide {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  backgroundImage: string;
  backgroundColor: string;
}

const slides: CarouselSlide[] = [
  {
    title: "Todo lo que necesitas para sentirte increíble",
    subtitle:
      "Explora nuestro catálogo de maquillaje, cuidado personal y accesorios.",
    cta: "Ver catálogo completo",
    href: "/catalog",
    backgroundImage: "/slides/photo-1.jpeg",
    backgroundColor: "from-purple-600 via-pink-600 to-purple-800",
  },
  {
    title: "Maquillaje que resalta tu esencia",
    subtitle: "Descubre productos diseñados para todo tipo de piel y estilo.",
    cta: "Explorar maquillaje",
    backgroundImage: "/slides/photo-2.jpg",
    href: "/catalog",
    backgroundColor: "from-pink-500 via-purple-500 to-indigo-600",
  },
  {
    title: "Cuida tu piel, todos los días",
    subtitle: "Sérums, limpiadores y más para una piel sana y radiante.",
    cta: "Ver cuidado de la piel",
    backgroundImage: "/slides/photo-3.jpg",
    href: "/catalog",
    backgroundColor: "from-rose-500 via-pink-500 to-purple-600",
  },
  {
    title: "Detalles que marcan la diferencia",
    subtitle:
      "Accesorios funcionales y kits ideales para regalar o consentirte.",
    cta: "Ver accesorios",
    backgroundImage: "/slides/photo-4.jpg",
    href: "/catalog",
    backgroundColor: "from-purple-600 via-violet-600 to-purple-800",
  },
];

const HeroCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div
              key={index}
              className={`relative h-[60dvh] md:h-[70dvh] bg-gradient-to-r ${slide.backgroundColor} flex items-center`}
            >
              {/* Background Image Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-12 text-white">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>

                  <Button asChild className="text-base">
                    <Link href={slide.href}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 z-[1000] cursor-pointer" />
      <CarouselNext className="right-2 z-[1000] cursor-pointer" />
    </Carousel>
  );
};

export default HeroCarousel;
