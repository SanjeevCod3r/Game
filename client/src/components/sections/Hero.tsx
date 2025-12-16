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
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/13683002999', '_blank')}
              className="group relative shimmer-border glow-border bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 h-auto uppercase tracking-wider rounded-none skew-x-[-10deg] shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden sm:hover:scale-105 sm:transform sm:hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-black/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              
              {/* Mobile-specific animations */}
              <span className="sm:hidden absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></span>
              <span className="sm:hidden absolute -inset-2 bg-green-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></span>
              
              <span className="relative skew-x-[10deg] flex items-center gap-2 sm:gap-3">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse group-hover:rotate-12 transition-transform duration-300 sm:group-hover:rotate-12 sm:group-hover:animate-pulse sm:transition-transform sm:duration-300" />
                <span className="hidden xs:inline sm:hidden group-hover:animate-bounce">Get ID</span>
                <span className="xs:hidden sm:inline">Get ID on WhatsApp</span>
              </span>
              <span className="absolute inset-0 border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transform scale-105 transition-all duration-300"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></span>
              
              {/* Mobile glow effect */}
              <span className="sm:hidden absolute inset-0 rounded-sm border-2 border-green-400 opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-500"></span>
            </Button>
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/13683002999', '_blank')}
              variant="outline" 
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 hover:text-yellow-300 font-bold text-lg px-8 py-6 h-auto uppercase tracking-wider rounded-none skew-x-[-10deg] transform hover:scale-105 transition-all duration-300"
            >
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
