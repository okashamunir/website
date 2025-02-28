import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
              Dhoond
            </span>
          </a>
        </Link>
        <div className="flex gap-6">
          <Link href="/">
            <a className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location === "/" && "text-primary"
            )}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location === "/about" && "text-primary"
            )}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location === "/contact" && "text-primary"
            )}>
              Contact
            </a>
          </Link>
        </div>
        <div className="ml-auto">
          <Button size="sm">Download App</Button>
        </div>
      </div>
    </nav>
  );
}
