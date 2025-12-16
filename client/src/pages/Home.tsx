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
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-heading text-black mb-6">READY TO WIN BIG?</h2>
                <p className="text-black/80 text-xl font-medium mb-8">
                  Don't wait! Get your ID now and start your winning journey with the most trusted book in India.
                </p>
                <button className="bg-black text-white hover:bg-zinc-900 transition-colors px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide flex items-center gap-2 mx-auto shadow-2xl hover:scale-105 transform duration-200">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  WhatsApp Us Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-float hover:scale-110 duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
