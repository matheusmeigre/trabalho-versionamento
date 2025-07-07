import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Páginas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="space-y-1 p-4">
              {[
                { href: "/", label: "Inicio" },
                { href: "/contato", label: "Contato" },
                { href: "/produtos", label: "Produtos" },
                { href: "/eventos", label: "Eventos" },
                { href: "/clientes", label: "Clientes" },
                { href: "/sobre-nos", label: "Sobre nós" }
              ].map((page) => (
                <li key={page.href}>
                  <Link href={page.href} passHref>
                    <NavigationMenuLink className="block px-2 py-1 rounded hover:bg-gray-100">
                      {page.label}
                    </NavigationMenuLink>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}