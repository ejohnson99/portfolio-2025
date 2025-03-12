import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function NavMenu() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Jane Smith</a>
        </Link>
        
        <ul className="flex gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a className="relative">
                  {location === href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                  <span className={cn(
                    "text-sm font-medium",
                    location === href && "text-primary"
                  )}>
                    {label}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
