import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, Truck, RefreshCw, Headphones } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151B23] border-t border-[#28313D] pt-16 pb-12 text-[#AAB4C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Banner */}
        <div className="bg-gradient-to-r from-[#0B0F14] via-[#171D26] to-[#0B0F14] border border-[#28313D] rounded-2xl p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A8FF]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 space-y-2">
              <span className="text-[#00A8FF] text-xs font-bold uppercase tracking-widest bg-[#00A8FF]/10 px-3 py-1 rounded-full border border-[#00A8FF]/20 inline-block mb-2">
                Digital Marketing Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Stay in the Sound<span className="text-[#00A8FF]">.</span>
              </h3>
              <p className="text-[#AAB4C0] text-sm sm:text-base">
                Get product updates, exclusive offers and the latest audio innovations from SONIQ directly to your inbox.
              </p>
            </div>

            <div className="md:col-span-5">
              {subscribed ? (
                <div className="bg-[#00A8FF]/15 border border-[#00A8FF]/40 rounded-xl p-4 text-[#00A8FF] text-sm font-semibold flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Welcome to the SONIQ Sound Club! Check your inbox for your 10% discount code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AAB4C0]" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0B0F14] border border-[#28313D] focus:border-[#00A8FF] text-white pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-colors placeholder:text-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#00A8FF]/20 flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Trust Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-[#28313D]">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0B0F14]/50 border border-[#28313D]">
            <Truck className="w-7 h-7 text-[#00A8FF]" />
            <div>
              <h4 className="text-white text-sm font-bold">Free Express Delivery</h4>
              <p className="text-xs text-[#AAB4C0]">All orders across India</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0B0F14]/50 border border-[#28313D]">
            <ShieldCheck className="w-7 h-7 text-[#00A8FF]" />
            <div>
              <h4 className="text-white text-sm font-bold">1-Year Brand Warranty</h4>
              <p className="text-xs text-[#AAB4C0]">Hassle-free replacement</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0B0F14]/50 border border-[#28313D]">
            <RefreshCw className="w-7 h-7 text-[#00A8FF]" />
            <div>
              <h4 className="text-white text-sm font-bold">7-Day Easy Returns</h4>
              <p className="text-xs text-[#AAB4C0]">No questions asked</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0B0F14]/50 border border-[#28313D]">
            <Headphones className="w-7 h-7 text-[#00A8FF]" />
            <div>
              <h4 className="text-white text-sm font-bold">24/7 Expert Support</h4>
              <p className="text-xs text-[#AAB4C0]">Dedicated helpline</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00A8FF] to-[#0077FF] flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 10v4"/><path d="M6 6v12"/><path d="M10 3v18"/><path d="M14 8v8"/><path d="M18 5v14"/><path d="M22 10v4"/>
                </svg>
              </div>
              <span className="font-extrabold text-2xl text-white font-['Outfit'] tracking-wide">
                SONIQ<span className="text-[#00A8FF]">.</span>
              </span>
            </div>
            <p className="text-sm italic text-[#00A8FF] font-semibold">"Hear Beyond."</p>
            <p className="text-xs text-[#AAB4C0] leading-relaxed">
              SONIQ is a modern consumer electronics brand engineering premium audio products designed to deliver immersive sound, ergonomic comfort, and reliable everyday performance.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-['Outfit'] border-b border-[#28313D] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['home', 'earbuds', 'headphones', 'speakers', 'soundbars', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="hover:text-[#00A8FF] transition-colors capitalize text-left"
                  >
                    {page === 'speakers' ? 'Bluetooth Speakers' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Support */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-['Outfit'] border-b border-[#28313D] pb-2 inline-block">
              Customer Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} className="hover:text-[#00A8FF] transition-colors">Shipping Information</a></li>
              <li><a href="#returns" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} className="hover:text-[#00A8FF] transition-colors">Returns & Refunds</a></li>
              <li><a href="#faqs" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} className="hover:text-[#00A8FF] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#warranty" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} className="hover:text-[#00A8FF] transition-colors">Warranty Registration</a></li>
              <li><a href="#track" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} className="hover:text-[#00A8FF] transition-colors">Track Order Status</a></li>
            </ul>
          </div>

          {/* Col 4: Connect With Us */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-['Outfit'] border-b border-[#28313D] pb-2 inline-block">
              Connect With Us
            </h4>
            <p className="text-xs text-[#AAB4C0]">Follow our social handles for product drops and sound tech news.</p>
            
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-[#0B0F14] border border-[#28313D] flex items-center justify-center text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF] transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-[#0B0F14] border border-[#28313D] flex items-center justify-center text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF] transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.417V8z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-[#0B0F14] border border-[#28313D] flex items-center justify-center text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF] transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-[#0B0F14] border border-[#28313D] flex items-center justify-center text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF] transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-[#0B0F14] border border-[#28313D] flex items-center justify-center text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF] transition-all">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            <div className="text-xs text-[#AAB4C0] space-y-1 pt-2">
              <p>📍 Keshav Mahavidyalaya, Sainik Vihar, Pitampura, Delhi – 110034</p>
              <p>✉️ support@soniqaudio.example</p>
              <p>📞 +91 99963 32978</p>
            </div>
          </div>

        </div>

        {/* Copyright & Academic Disclaimer */}
        <div className="pt-8 border-t border-[#28313D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB4C0]">
          <p>© 2026 SONIQ. All Rights Reserved.</p>
          <div className="bg-[#0B0F14] border border-[#28313D] px-3 py-1.5 rounded-lg text-center">
            <span className="text-amber-400 font-semibold">Disclaimer: </span>
            <span>SONIQ is a fictional brand created for academic purposes (Digital Marketing SEC 5 Project).</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
