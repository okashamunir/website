import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between max-w-full px-4 md:px-8">
        <Link href="/">
          <a className="flex items-center">
            <img 
              src="/assets/dhoondlogo.png" 
              alt="Dhoond"
              className="h-24 w-auto p-2" 
            />
          </a>
        </Link>
        <div className="flex gap-10 mx-4">
          <Link href="/">
            <a className={cn(
              "text-xl font-bold transition-all duration-300 hover:text-primary transform hover:scale-125 origin-center",
              location === "/" && "text-primary"
            )}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={cn(
              "text-xl font-bold transition-all duration-300 hover:text-primary transform hover:scale-125 origin-center",
              location === "/about" && "text-primary"
            )}>
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className={cn(
              "text-xl font-bold transition-all duration-300 hover:text-primary transform hover:scale-125 origin-center",
              location === "/contact" && "text-primary"
            )}>
              Contact Us
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <Button size="sm" className="whitespace-nowrap" asChild>
            <a href="https://linktr.ee/Dhoond" target="_blank" rel="noopener noreferrer">Download App</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}