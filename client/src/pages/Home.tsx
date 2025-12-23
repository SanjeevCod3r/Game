import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Scrolling Ticker */}
        <div className="bg-yellow-500 py-2 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-black font-bold uppercase mx-8 tracking-wider">
                ⚡ India's No.1 Trusted Exchange ⚡ Instant Withdrawal ⚡ 24/7 Support ⚡
              </span>
            ))}
          </div>
        </div>

        <Features />
        <Process />
        
        {/* Banner CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-heading text-black mb-4 sm:mb-6 animate-pulse transform transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:text-yellow-600 relative">
                  <span className="inline-block animate-bounce">READY</span>
                  <span className="inline-block animate-pulse mx-1 sm:mx-2">TO</span>
                  <span className="inline-block animate-bounce">WIN</span>
                  <span className="inline-block animate-pulse mx-1 sm:mx-2">BIG</span>
                  <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">?</span>
                </h2>
                <p className="text-black/80 text-sm sm:text-lg md:text-xl font-medium mb-6 sm:mb-8 px-2">
                  Don't wait! Get your ID now and start your winning journey with the most trusted book in India.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/639103872243', '_blank')}
                  className="bg-black text-white hover:bg-zinc-900 transition-colors px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg uppercase tracking-wide flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500" />
                  <span className="hidden xs:inline sm:hidden">Chat Now</span>
                  <span className="xs:hidden sm:inline">WhatsApp Us Now</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/639103872243" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-float hover:scale-110 duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
