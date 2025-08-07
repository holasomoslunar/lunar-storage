import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import Instagram from "@/components/icons/instagram";
import TikTok from "@/components/icons/tiktok";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between border-t border-border px-4 py-12 shadow-sm">
      <div className="max-w-7xl flex flex-col md:flex-row items-start justify-between w-full mx-auto gap-4">
        <div className="flex flex-col space-y-4">
          <Link href="/" aria-label="Lunar">
            <Image
              src="/brand/logo-dark.png"
              alt="Lunar Store Logo"
              width={88}
              height={29.33}
              className="hidden dark:block"
            />
            <Image
              src="/brand/logo-light.png"
              alt="Lunar Store Logo"
              width={88}
              height={29.33}
              className="block dark:hidden"
            />
          </Link>

          <p className="text-sm text-foreground/70 max-w-[250px]">
            Tu tienda de belleza y moda de confianza. Productos seleccionados de
            cuidado personal, maquillaje y accesorios para tu día a día.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="text-foreground/70">
                Holasomoslunar@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-500" />
              <span className="text-foreground/70">+58 412-1898-687</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Instagram />
              <span className="text-foreground/70">@Lunar_oficial13</span>
            </div>
            <div className="flex items-center space-x-3">
              <TikTok />
              <span className="text-foreground/70">@somos_lunar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
