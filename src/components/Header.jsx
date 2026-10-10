import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Volume2, ShieldCheck, Zap } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, cartCount, onOpenCart, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'earbuds', label: 'Earbuds' },
    { id: 'headphones', label: 'Headphones' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'soundbars', label: 'Soundbars' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Marketing Announcement Bar */}
      <div className="bg-[#151B23] border-b border-[#28313D] py-1.5 px-4 text-xs font-medium text-[#AAB4C0] text-center flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5 text-[#00A8FF]">
          <Zap className="w-3.5 h-3.5" />
          <span>FESTIVE SALE: Use code <strong className="text-white bg-[#00A8FF]/20 px-1.5 py-0.5 rounded border border-[#00A8FF]/40">SONIQ10</strong> for 10% Extra Off</span>
        </span>
        <span className="hidden md:inline text-[#28313D]">|</span>
        <span className="hidden md:inline-flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Free Shipping Across India & 1-Year Brand Warranty
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 glass-header border-b border-[#28313D] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Tagline */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A8FF] to-[#0077FF] flex items-center justify-center shadow-lg shadow-[#00A8FF]/25 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 10v4"/>
                <path d="M6 6v12"/>
                <path d="M10 3v18"/>
                <path d="M14 8v8"/>
                <path d="M18 5v14"/>
                <path d="M22 10v4"/>
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-wider text-white font-['Outfit'] block leading-none">
                SONIQ<span className="text-[#00A8FF]">.</span>
              </span>
              <span className="text-[10px] text-[#AAB4C0] uppercase tracking-widest font-semibold block mt-0.5 group-hover:text-[#00A8FF] transition-colors">
                Hear Beyond
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#00A8FF] bg-[#151B23]'
                      : 'text-[#AAB4C0] hover:text-white hover:bg-[#151B23]/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00A8FF] rounded-full shadow-[0_0_8px_#00A8FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Products"
              className="p-2.5 rounded-xl bg-[#151B23] border border-[#28313D] text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF]/50 transition-all duration-200 focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="p-2.5 rounded-xl bg-[#151B23] border border-[#28313D] text-[#AAB4C0] hover:text-[#00A8FF] hover:border-[#00A8FF]/50 transition-all duration-200 relative focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#00A8FF] text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0B0F14] shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#151B23] border border-[#28313D] text-[#AAB4C0] hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F14] border-b border-[#28313D] px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#00A8FF]/10 text-[#00A8FF] border border-[#00A8FF]/30 font-semibold'
                      : 'text-[#AAB4C0] hover:bg-[#151B23] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#00A8FF]" />}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
