import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { SlidersHorizontal, ArrowUpDown, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const categoryMeta = {
  earbuds: {
    title: 'Wireless Earbuds',
    subtitle: 'Small size. Massive sound.',
    bannerImg: '/images/earbuds.jpg',
    features: ['Hybrid Active Noise Cancellation (42dB)', 'Low Latency Gaming Mode (40ms)', 'Fast Charge: 10 mins = 2 hours', 'IPX5 & IPX7 Waterproof Protection']
  },
  headphones: {
    title: 'Headphones',
    subtitle: 'Immerse yourself in every detail.',
    bannerImg: '/images/headphones.jpg',
    features: ['Over-Ear Memory Foam Cushions', 'Up to 70 Hours Battery Life', 'Built-in USB-C DAC Audio Output', 'Smart Adaptive Acoustic Noise Cancellation']
  },
  speakers: {
    title: 'Bluetooth Speakers',
    subtitle: 'Powerful sound. Anywhere you go.',
    bannerImg: '/images/speaker.jpg',
    features: ['IPX7 Floating Waterproof Design', 'True Wireless Stereo (TWS) Pairing', 'Integrated Powerbank Reverse Charging', '100W RMS Room-Shaking Bass']
  },
  soundbars: {
    title: 'Soundbars',
    subtitle: 'Bring cinema-quality sound home.',
    bannerImg: '/images/soundbar.jpg',
    features: ['5.1.2 & 9.1.4 Dolby Atmos Certified', 'Wireless Down-Firing Subwoofers', 'HDMI 2.1 eARC & 4K Pass-Through', 'AI Room Calibration Auto-Tuning']
  }
};

export default function CategoryPage({ categoryId, onAddToCart, onBuyNow, onQuickView }) {
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'low-high', 'high-low', 'rating'
  const [filterBadge, setFilterBadge] = useState('all');

  const meta = categoryMeta[categoryId] || categoryMeta.earbuds;
  const categoryProducts = products.filter((p) => p.category === categoryId);

  // Apply filtering
  let filtered = [...categoryProducts];
  if (filterBadge !== 'all') {
    filtered = filtered.filter((p) => p.badge === filterBadge);
  }

  // Apply sorting
  if (sortBy === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="space-y-12 pb-20">
      
      {/* Category Hero Header */}
      <section className="relative rounded-3xl overflow-hidden bg-[#151B23] border border-[#28313D] p-8 sm:p-14 shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden md:block">
          <img src={meta.bannerImg} alt={meta.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#151B23]/90 to-transparent pointer-events-none" />

        <div className="max-w-xl space-y-4 relative z-10">
          <span className="text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest bg-[#00A8FF]/10 px-3.5 py-1 rounded-full border border-[#00A8FF]/30 inline-block">
            SONIQ Collection
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            {meta.title}<span className="text-[#00A8FF]">.</span>
          </h1>

          <p className="text-lg text-[#AAB4C0] font-normal">
            {meta.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {meta.features.map((feat, idx) => (
              <span key={idx} className="bg-[#0B0F14]/70 border border-[#28313D] text-xs text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00A8FF]" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sorting & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#171D26] border border-[#28313D] rounded-2xl p-4">
        
        {/* Count */}
        <div className="text-xs font-semibold text-[#AAB4C0]">
          Showing <span className="text-white font-bold">{filtered.length}</span> models in <span className="text-[#00A8FF]">{meta.title}</span>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          
          {/* Badge Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#AAB4C0]">
            <SlidersHorizontal className="w-4 h-4 text-[#00A8FF]" />
            <select
              value={filterBadge}
              onChange={(e) => setFilterBadge(e.target.value)}
              className="bg-[#0B0F14] border border-[#28313D] text-white px-3 py-2 rounded-xl outline-none focus:border-[#00A8FF]"
            >
              <option value="all">All Badges</option>
              <option value="BESTSELLER">Bestsellers</option>
              <option value="POPULAR">Popular</option>
              <option value="FLAGSHIP">Flagship</option>
            </select>
          </div>

          {/* Price & Rating Sort */}
          <div className="flex items-center gap-1.5 text-xs text-[#AAB4C0]">
            <ArrowUpDown className="w-4 h-4 text-[#00A8FF]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0B0F14] border border-[#28313D] text-white px-3 py-2 rounded-xl outline-none focus:border-[#00A8FF]"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            onQuickView={onQuickView}
          />
        ))}
      </div>

    </div>
  );
}
