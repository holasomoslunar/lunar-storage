"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import WhatsApp from "./icons/whatsapp";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="bg-[#25D366] hover:bg-green-600 text-white rounded-full size-10 shadow-lg cursor-pointer"
            size="icon"
            aria-label="Iniciar chat por WhatsApp"
          >
            <WhatsApp />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" side="top" align="end" sideOffset={8}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                <WhatsApp />
              </div>
              <div>
                <p className="font-semibold text-sm">Lunar</p>
                <p className="text-xs text-green-500">En línea</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            ¡Hola! 👋 ¿Tienes alguna pregunta sobre nuestros productos de
            belleza? Estamos aquí para ayudarte.
          </p>
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-green-600 text-white"
            size="sm"
            aria-label="Iniciar chat por WhatsApp"
          >
            <a
              href="https://wa.me/+584121898687?text=Hola! Me interesa conocer más sobre sus productos."
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Chat
            </a>
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WhatsAppFloat;
