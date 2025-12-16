import { MessageCircle, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-heading text-gradient-gold mb-6">REDDY ANNA</h2>
            <p className="text-zinc-400 max-w-sm mb-8">
              India's most trusted online sports exchange platform. We provide a secure, fast, and fair environment for all your gaming needs.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-yellow-400 transition-colors">Game Rules</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-400">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>+1 (368) 300-2999</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>support@reddyanna.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © 2024 Reddy Anna Book. All rights reserved.
          </p>
          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-6 grayscale opacity-50" />
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
