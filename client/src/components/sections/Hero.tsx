import { Button } from "@/components/ui/button";
import { MessageCircle, Trophy, ShieldCheck, Banknote } from "lucide-react";
import heroBg from "@assets/stock_images/cricket_stadium_nigh_d1f48d0c.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Stadium Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-yellow-400 font-medium text-sm tracking-widest uppercase">India's No.1 Trusted Exchange</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-[0.9]">
            PLAY BIG <br />
            <span className="text-gradient-gold">WIN BIGGER</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 font-sans max-w-xl mx-auto md:mx-0 leading-relaxed">
            Get your official ID instantly. Experience the thrill of sports exchange with 24/7 withdrawal and deposit support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-black font-bold text-lg px-8 py-6 h-auto uppercase tracking-wider rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg] flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Get ID on WhatsApp
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 font-bold text-lg px-8 py-6 h-auto uppercase tracking-wider rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg]">
                View Demo
              </span>
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 pt-8 opacity-80">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex text-yellow-400">★★★★★</div>
              <span className="text-sm text-zinc-400">50K+ Active Users</span>
            </div>
            <div className="h-10 w-px bg-zinc-800" />
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-yellow-400 font-bold text-xl">24/7</span>
              <span className="text-sm text-zinc-400">Live Support</span>
            </div>
          </div>
        </div>

        {/* Floating Cards / Visuals */}
        <div className="relative hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid gap-6">
            <FeatureCard 
              icon={<Trophy className="w-8 h-8 text-yellow-400" />}
              title="Instant Withdrawal"
              desc="Get your winnings in 10 minutes"
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-yellow-400" />}
              title="100% Safe & Secure"
              desc="Trusted by lakhs of Indians"
              className="ml-12"
            />
            <FeatureCard 
              icon={<Banknote className="w-8 h-8 text-yellow-400" />}
              title="Unlimited Winnings"
              desc="No cap on your withdrawals"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, className = "" }: { icon: React.ReactNode, title: string, desc: string, className?: string }) {
  return (
    <div className={`bg-zinc-900/80 backdrop-blur border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 w-80 shadow-xl ${className}`}>
      <div className="p-3 rounded-lg bg-black border border-white/5">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-white text-lg">{title}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
