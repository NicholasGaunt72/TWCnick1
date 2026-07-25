import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { assetUrl } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Information", href: "/information" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass-strong border-b border-white/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={assetUrl('images/logo.png')} alt="TWC Logo" className="h-12 w-auto" />
            <span className="font-serif text-xl font-medium tracking-tight text-primary hidden sm:inline-block">Together We Can</span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:gap-x-1">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/40 ${location === link.href ? 'bg-white/60 text-primary' : 'text-foreground/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="glass p-2 text-foreground/80 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-full">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden border-t border-white/40 glass-strong">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-full px-4 py-3 text-base font-medium ${location === link.href ? 'bg-white/60 text-primary' : 'text-foreground/80 hover:bg-white/40'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
