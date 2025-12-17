import { MessageCircle, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-heading text-gradient-gold mb-6">REDDY ANNA</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-8 leading-relaxed">
              India's most trusted online sports exchange platform. We provide a secure, fast, and fair environment for all your gaming needs with 24/7 support and instant withdrawals.
            </p>
            <div className="flex gap-4 mb-8">
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

          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3 text-zinc-400">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <span className="text-lg">+1 (368) 300-2999</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-6 h-6 text-yellow-500" />
                <span className="text-lg">support@reddyanna.com</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-white/10">
              <h4 className="text-yellow-400 font-bold mb-2">24/7 Support</h4>
              <p className="text-zinc-400 text-sm">Our team is always here to help you with any questions or concerns.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600 text-sm">
              © 2025 Reddy Anna Book. All rights reserved. | Trusted by 50K+ Players
            </p>
            <div className="flex items-center gap-6">
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
