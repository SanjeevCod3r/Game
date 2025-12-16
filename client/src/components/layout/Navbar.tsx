import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#home" className="text-white hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">Home</a>
      <a href="#about" className="text-white hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">About Us</a>
      <a href="#features" className="text-white hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">Why Choose Us</a>
      <a href="#contact" className="text-white hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">Contact</a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
            REDDY ANNA
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button 
            size="lg"
            className="hidden md:flex bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wider gap-2 animate-pulse"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white w-[300px]">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks />
                <Button className="bg-green-600 hover:bg-green-700 w-full uppercase font-bold">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
