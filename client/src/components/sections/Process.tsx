import { MessageCircle, ArrowRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Message Us",
      desc: "Click on the WhatsApp button and say 'Hi' to our support team."
    },
    {
      number: "02",
      title: "Get ID",
      desc: "Deposit your amount and receive your unique ID and password instantly."
    },
    {
      number: "03",
      title: "Start Playing",
      desc: "Login with your details and start playing on your favorite sports."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 -skew-x-12" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            HOW IT <span className="text-gradient-gold">WORKS</span>
          </h2>
          <p className="text-zinc-400">Getting started is as easy as 1-2-3. Follow these simple steps to begin your journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-black p-8 rounded-2xl border border-white/10 h-full hover:border-yellow-500/50 transition-colors duration-300 relative z-10">
                <div className="text-6xl font-heading text-zinc-800 mb-6 group-hover:text-yellow-500/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {step.desc}
                </p>
                {i === 0 && (
                  <button className="flex items-center text-sm font-bold text-green-500 uppercase tracking-wider gap-2">
                    Message Now <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Connector Line (Desktop) */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-zinc-800 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
