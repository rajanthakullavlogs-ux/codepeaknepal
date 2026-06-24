import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-10 md:pt-16 pb-6 md:pb-8 rounded-[2rem] md:rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <img src="/assets/codepeak-logo.png" alt="CodePeak Nepal Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6">
              CodePeak Nepal delivers high-end Management Software, AI integrations, and premium digital solutions tailored to your needs.
            </p>
            <div className="space-y-3 mb-6 md:mb-8">
              <a href="tel:+9779743568595" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" /> +977 9743568595
              </a>
              <a href="mailto:info@codepeaknepal.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" /> info@codepeaknepal.com
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 md:mb-6">Useful Links</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Team</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 md:mb-6">Help & Support</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Support</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white mb-4 md:mb-6">Resources</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Guides and resources</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Team</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Tools</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 CodePeak Nepal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/people/Code-Peak-Nepal/61590500095268/#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/codepeak.np/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/code-peak-nepal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
