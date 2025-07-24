import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "catálogo" }
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border px-4 shadow-sm backdrop-blur-md bg-background/80">
      <div className="max-w-7xl flex items-center justify-between w-full mx-auto">
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
        <div className="flex items-center space-x-4 justify-center">
          <nav>
            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;