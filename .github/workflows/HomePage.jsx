import React from 'react';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data/products';
import { Sparkles, ShieldCheck, Battery, Volume2, Feather, ArrowRight, Star, Zap, Layers } from 'lucide-react';

export default function HomePage({ setCurrentPage, onAddToCart, onBuyNow, onQuickView }) {
  // Select featured products across categories
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <div className="space-y-24 pb-20">
      
      {/* --------------------------------------------------
          1. HERO SECTION
         -------------------------------------------------- */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        {/* Glowing Background Radial Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A8FF]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0077FF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151B23] border border-[#28313D] text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Acoustic Engineering</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.05]">
                Hear Beyond<span className="text-[#00A8FF]">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#AAB4C0] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Premium audio engineered for your everyday. Immerse yourself in crystal clear high-resolution acoustic sound built for modern life.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => setCurrentPage('earbuds')}
                  className="w-full sm:w-auto bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold px-8 py-4 rounded-xl text-base flex items-center justify-center gap-3 shadow-xl shadow-[#00A8FF]/25 hover:shadow-[0_0_35px_rgba(0,168,255,0.4)] transition-all duration-300 active:scale-95"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setCurrentPage('headphones')}
                  className="w-full sm:w-auto bg-[#151B23] hover:bg-[#28313D] text-white font-bold px-8 py-4 rounded-xl text-base flex items-center justify-center gap-2 border border-[#28313D] hover:border-[#00A8FF]/60 transition-all duration-300 active:scale-95"
                >
                  <span>Explore Products</span>
                </button>
              </div>

              {/* Quick Tech Badges */}
              <div className="pt-8 border-t border-[#28313D]/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <h4 className="text-xl font-extrabold text-white font-['Outfit']">42dB</h4>
                  <p className="text-xs text-[#AAB4C0]">Active Noise Cancellation</p>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-[#00A8FF] font-['Outfit']">70 Hours</h4>
                  <p className="text-xs text-[#AAB4C0]">Max Playtime</p>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-white font-['Outfit']">Hi-Res</h4>
                  <p className="text-xs text-[#AAB4C0]">Lossless Audio</p>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Image */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-xl group">
                {/* Glowing halo frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A8FF]/30 to-[#0077FF]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                
                <div className="relative bg-[#151B23]/80 border border-[#28313D] rounded-3xl p-4 overflow-hidden shadow-2xl backdrop-blur-md">
                  <img
                    src="/images/hero.jpg"
                    alt="SONIQ Premium Wireless Headphones and Earbuds"
                    className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/20 border border-[#00A8FF]/40 flex items-center justify-center text-[#00A8FF]">
                        <Zap className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-['Outfit']">Flagship Series 2026</h4>
                        <p className="text-xs text-[#AAB4C0]">Smart Adaptive ANC Technology</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      In Stock
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          2. ABOUT SONIQ
         -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151B23] border border-[#28313D] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#00A8FF]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <span className="text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest bg-[#00A8FF]/10 px-3.5 py-1 rounded-full border border-[#00A8FF]/30 inline-block">
              About SONIQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Engineered For Pure Acoustic Excellence
            </h2>
            <p className="text-base sm:text-lg text-[#AAB4C0] leading-relaxed">
              SONIQ creates modern audio products designed to deliver immersive sound, ergonomic comfort, and reliable everyday performance. From featherlight true wireless earbuds to studio-grade noise-cancelling headphones and cinema soundbars, our technology is crafted to elevate every note you hear.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          3. WHY CHOOSE SONIQ? (4 Features)
         -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest bg-[#00A8FF]/10 px-3.5 py-1 rounded-full border border-[#00A8FF]/30 inline-block">
            Brand Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Why Choose SONIQ?
          </h2>
          <p className="text-sm text-[#AAB4C0] max-w-xl mx-auto">
            Discover why millions of audio lovers trust SONIQ for their daily listening experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-[#171D26] border border-[#28313D] rounded-2xl p-6 hover:border-[#00A8FF]/60 hover:shadow-[0_0_30px_rgba(0,168,255,0.15)] transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] group-hover:scale-110 transition-transform">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Immersive Sound</h3>
            <p className="text-xs text-[#AAB4C0] leading-relaxed">
              Custom-tuned drivers and spatial audio processing deliver deep punchy bass, crisp mids, and ultra-clear highs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#171D26] border border-[#28313D] rounded-2xl p-6 hover:border-[#00A8FF]/60 hover:shadow-[0_0_30px_rgba(0,168,255,0.15)] transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] group-hover:scale-110 transition-transform">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">All-Day Comfort</h3>
            <p className="text-xs text-[#AAB4C0] leading-relaxed">
              Ergonomic memory-foam cushions and ultralight earbud shells built for fatigue-free listening all day long.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#171D26] border border-[#28313D] rounded-2xl p-6 hover:border-[#00A8FF]/60 hover:shadow-[0_0_30px_rgba(0,168,255,0.15)] transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] group-hover:scale-110 transition-transform">
              <Battery className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Long Battery Life</h3>
            <p className="text-xs text-[#AAB4C0] leading-relaxed">
              Up to 70 hours of non-stop playback with Type-C Fast Charging — 10 minutes charge gives 2 full hours of playtime.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#171D26] border border-[#28313D] rounded-2xl p-6 hover:border-[#00A8FF]/60 hover:shadow-[0_0_30px_rgba(0,168,255,0.15)] transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Modern Design</h3>
            <p className="text-xs text-[#AAB4C0] leading-relaxed">
              Minimalist matte finishes, metallic accents, and sleek futuristic aesthetics that complement your personal style.
            </p>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          4. FEATURED PRODUCTS SECTION (4-6 Products)
         -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#28313D] pb-6">
          <div>
            <span className="text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest block mb-1">
              Handpicked Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Featured Products
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('earbuds')}
            className="text-xs font-bold text-[#00A8FF] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------
          5. PROMOTIONAL BANNER
         -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#151B23] via-[#171D26] to-[#0B0F14] border border-[#28313D] p-8 sm:p-14 shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
            <img src="/images/hero.jpg" alt="Promo background" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-xl space-y-6 relative z-10">
            <span className="bg-[#00A8FF] text-black font-extrabold text-xs uppercase px-3 py-1 rounded-md tracking-wider">
              Limited Time Offer
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] leading-tight">
              Upgrade Your Sound<span className="text-[#00A8FF]">.</span>
            </h2>

            <p className="text-base text-[#AAB4C0]">
              Discover your next audio experience. Get up to 25% discount across our entire lineup of premium noise-cancelling earbuds and spatial Atmos soundbars.
            </p>

            <button
              onClick={() => setCurrentPage('earbuds')}
              className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 shadow-lg shadow-[#00A8FF]/25 transition-all duration-300"
            >
              <span>Shop All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          6. DIGITAL MARKETING REVIEWS / TESTIMONIALS
         -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest bg-[#00A8FF]/10 px-3.5 py-1 rounded-full border border-[#00A8FF]/30 inline-block">
            Customer Feedback
          </span>
          <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
            Loved By Audiophiles Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#171D26] border border-[#28313D] rounded-2xl p-6 space-y-4">
              <div className="flex items-center text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#AAB4C0] italic leading-relaxed">"{t.comment}"</p>
              <div className="pt-2 border-t border-[#28313D]">
                <h4 className="text-sm font-bold text-white font-['Outfit']">{t.name}</h4>
                <p className="text-[11px] text-[#00A8FF]">{t.role} • Verified Buyer of {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
