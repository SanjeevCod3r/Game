import { Zap, Clock, UserCheck, Smartphone } from "lucide-react";
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
                <div key={i} className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-colors">
                  <div className="mb-4 bg-black w-16 h-16 rounded-full flex items-center justify-center border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
