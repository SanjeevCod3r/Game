import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const NavLinks = () => null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
            REDDY ANNA
          </div>
        </div>

        {/* Desktop Nav - Empty since nav links removed */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button 
            size="lg"
            onClick={() => window.open('https://wa.me/639103872243', '_blank')}
            className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold uppercase tracking-wider gap-2 px-6 py-3 rounded-full shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              <span className="hidden sm:inline">WhatsApp Now</span>
              <span className="sm:hidden">Chat</span>
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100 scale-110 animate-ping"></span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
