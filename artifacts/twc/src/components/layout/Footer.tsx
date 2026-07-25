import { Link } from "wouter";
import { assetUrl } from "@/lib/utils";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img src={assetUrl('images/logo-footer.png')} alt="TWC Logo" className="h-20 w-auto brightness-0 invert drop-shadow-sm" />
            <p className="text-primary-foreground/90 text-sm max-w-xs leading-relaxed">
              A place of genuine healing, safety, and second chances. Helping people recover from substance abuse since 2000 in the heart of the Western Cape.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/90">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/information" className="hover:text-white transition-colors">Programs & Activities</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/90">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                <span>6 Hoofstraat, Eendekuil<br />Western Cape, South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 opacity-80" />
                <span>022 942 1001 <span className="opacity-50 mx-1">|</span> 084 515 3953</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
                <span className="break-all">togetherwecanrehab@gmail.com<br/>info@togetherwecanrehab.co.za</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Facebook className="h-5 w-5 shrink-0 opacity-80" />
                <a href="https://facebook.com/togetherwecanrehab" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  facebook.com/togetherwecanrehab
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Together We Can Rehabilitation. All rights reserved.</p>
          <p className="text-primary-foreground/60">Faith-based, community-led healing.</p>
        </div>
      </div>
    </footer>
  );
}
