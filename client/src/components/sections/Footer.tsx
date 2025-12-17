import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-gradient-gold mb-6 text-center">REDDY ANNA</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed text-center">
              India's most trusted online sports exchange platform. We provide a secure, fast, and fair environment for all your gaming needs with 24/7 support and instant withdrawals.
            </p>
            <div className="flex gap-4 mb-8 justify-center">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            </div>
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-black mb-2">Ready to Win Big?</h3>
              <p className="text-black/80 mb-4">Get your ID instantly and start playing!</p>
              <button 
                onClick={() => window.open('https://wa.me/13683002999', '_blank')}
                className="bg-black text-white hover:bg-zinc-900 transition-colors px-6 py-3 rounded-full font-bold uppercase tracking-wide flex items-center gap-2 mx-auto shadow-lg hover:scale-105 transform duration-200"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp Now
              </button>
            </div>
          </div>

          </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600 text-sm text-center lg:text-left">
              © 2025 Reddy Anna Book. All rights reserved. | Trusted by 50K+ Players
            </p>
            <div className="flex items-center gap-6 justify-center lg:justify-end">
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all">
      {icon}
    </a>
  );
}
