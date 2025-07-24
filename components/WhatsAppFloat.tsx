"use client";

import WhatsApp from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm border animate-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                <WhatsApp />
              </div>
              <div>
                <p className="font-semibold text-sm">Lunar</p>
                <p className="text-xs text-green-500">En línea</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsMinimized(true)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            ¡Hola! 👋 ¿Tienes alguna pregunta sobre nuestros productos de
            belleza? Estamos aquí para ayudarte.
          </p>
          <Button
            asChild
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            size="sm"
          >
            <a
              href="https://wa.me/+584121898687?text=Hola! Me interesa conocer más sobre sus productos."
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Chat
            </a>
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-[#25D366] hover:bg-green-600 text-white rounded-full size-10 shadow-lg cursor-pointer"
          size="icon"
        >
          <WhatsApp />
        </Button>
      )}
    </div>
  );
}

export default WhatsAppFloat;