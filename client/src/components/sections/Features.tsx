import { Zap, Clock, UserCheck, Smartphone, MessageCircle } from "lucide-react";
import winnerImg from "@assets/stock_images/happy_person_holding_c88431b2.jpg";

export function Features() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: "Instant ID Creation",
      desc: "Message us on WhatsApp and get your ID created within 2 minutes. No lengthy forms."
    },
    {
      icon: <Clock className="w-10 h-10 text-yellow-400" />,
      title: "24/7 Withdrawal",
      desc: "Your money is yours. Withdraw your winnings anytime, day or night, instantly."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-yellow-400" />,
      title: "Trusted Service",
      desc: "Operating since 2010 with over 50 Lakh satisfied customers across India."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-400" />,
      title: "User Friendly",
      desc: "Easy to use interface designed for both beginners and pro players."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={winnerImg} 
                alt="Winner" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <div className="text-3xl font-heading text-white">JOIN THE WINNERS CLUB</div>
                <p className="text-yellow-400 font-medium">Over ₹10 Crore Distributed Daily</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading text-white">
                WHY CHOOSE <span className="text-gradient-gold">REDDY ANNA?</span>
              </h2>
              <p className="text-zinc-400 text-lg">
                We provide the fastest and most secure platform for sports enthusiasts in India. Experience unmatched service quality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="group bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-1 hover:scale-105">
                  <div className="mb-4 bg-black w-16 h-16 rounded-full flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 group-hover:bg-gradient-to-br group-hover:from-yellow-500/20 group-hover:to-yellow-600/20 transition-all duration-300 group-hover:scale-110">
                    <div className="group-hover:animate-pulse group-hover:rotate-12 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* WhatsApp CTA Section */}
        <div className="mt-16 px-4">
          <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading text-black mb-4 animate-pulse">
                READY TO START WINNING?
              </h2>
              <p className="text-black/80 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto">
                Join thousands of winners who trust Reddy Anna. Get your ID instantly and start your winning journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => window.open('https://wa.me/639103872243', '_blank')}
                  className="group relative bg-black text-white hover:bg-zinc-900 transition-all px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide flex items-center gap-3 shadow-2xl hover:scale-105 transform duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <MessageCircle className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
                  <span className="relative">Get Your ID Now</span>
                  <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100 scale-110 animate-ping"></span>
                </button>
                <div className="flex items-center gap-4 text-black/70">
                  <div className="flex text-yellow-600">
                    ★★★★★
                  </div>
                  <span className="font-medium">50K+ Happy Players</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
