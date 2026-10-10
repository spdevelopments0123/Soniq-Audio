import React from 'react';
import { Star, ShoppingCart, Zap, Eye, Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onBuyNow, onQuickView }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-[#171D26] border border-[#28313D] rounded-2xl p-5 flex flex-col justify-between hover:border-[#00A8FF]/60 hover:shadow-[0_0_25px_rgba(0,168,255,0.15)] transition-all duration-300 group relative">
      
      {/* Top Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#00A8FF] text-black text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
            {product.badge}
          </span>
        </div>
      )}

      {/* Quick View Button on Hover */}
      <button
        onClick={() => onQuickView(product)}
        aria-label="Quick View Product"
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-[#0B0F14]/80 border border-[#28313D] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#00A8FF] hover:text-black hover:border-[#00A8FF]"
        title="Quick View Specs"
      >
        <Eye className="w-4 h-4" />
      </button>

      <div>
        {/* Product Image Container */}
        <div 
          onClick={() => onQuickView(product)}
          className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0B0F14] mb-4 flex items-center justify-center cursor-pointer relative group-hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171D26] via-transparent to-transparent opacity-60" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-white">{product.rating}</span>
          <span className="text-[11px] text-[#AAB4C0]">({product.reviewsCount})</span>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => onQuickView(product)}
          className="text-lg font-bold text-white font-['Outfit'] mb-1.5 group-hover:text-[#00A8FF] transition-colors cursor-pointer line-clamp-1"
        >
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-[#AAB4C0] leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Key Feature Highlight Pill */}
        <div className="inline-flex items-center gap-1.5 bg-[#151B23] border border-[#28313D] px-2.5 py-1 rounded-lg text-[11px] text-[#00A8FF] font-medium mb-4">
          <Zap className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{product.keyFeature}</span>
        </div>
      </div>

      <div>
        {/* Price Tag */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-extrabold text-white font-['Outfit'] tracking-tight">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-[#AAB4C0] line-through">
            {formatPrice(Math.round(product.price * 1.25))}
          </span>
          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded">
            20% OFF
          </span>
        </div>

        {/* CTA Buttons: Electric Blue Add to Cart & Dark Secondary Buy Now */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md shadow-[#00A8FF]/20 active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>

          <button
            onClick={() => onBuyNow(product)}
            className="w-full bg-[#151B23] hover:bg-[#28313D] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-[#28313D] hover:border-[#00A8FF]/50 transition-all duration-200 active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>

    </div>
  );
}
