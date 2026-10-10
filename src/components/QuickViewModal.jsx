import React, { useState } from 'react';
import { X, Star, ShoppingCart, Zap, Check, ShieldCheck, Battery, Radio, Shield, Award } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart, onBuyNow }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative bg-[#0B0F14] border border-[#28313D] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-[#151B23] border border-[#28313D] text-[#AAB4C0] hover:text-white hover:border-[#00A8FF]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image & Badges */}
          <div className="bg-[#171D26] p-6 sm:p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#28313D]">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#00A8FF] text-black text-xs font-extrabold px-3 py-1 rounded-md tracking-wider">
                {product.badge}
              </span>
            )}
            
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-72 object-contain rounded-xl drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />

            <div className="mt-6 grid grid-cols-2 gap-3 w-full text-center text-xs text-[#AAB4C0]">
              <div className="bg-[#0B0F14] p-2.5 rounded-xl border border-[#28313D] flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00A8FF]" />
                <span>1-Yr Warranty</span>
              </div>
              <div className="bg-[#0B0F14] p-2.5 rounded-xl border border-[#28313D] flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>In Stock (Fast Ship)</span>
              </div>
            </div>
          </div>

          {/* Right: Specs & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs text-[#00A8FF] font-bold uppercase tracking-wider block mb-1">
                {product.categoryName}
              </span>

              <h2 className="text-2xl font-extrabold text-white font-['Outfit'] mb-2">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">{product.rating}</span>
                <span className="text-xs text-[#AAB4C0]">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-extrabold text-white font-['Outfit']">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-[#AAB4C0] line-through">
                  {formatPrice(Math.round(product.price * 1.25))}
                </span>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded">
                  SAVE 20%
                </span>
              </div>

              <p className="text-xs text-[#AAB4C0] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Detailed Specs Grid */}
              <div className="bg-[#151B23] border border-[#28313D] rounded-xl p-4 space-y-2.5 mb-6 text-xs">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#00A8FF]">Technical Specifications</h4>
                {product.specs && Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-[#28313D] pb-1.5 last:border-none last:pb-0">
                    <span className="text-[#AAB4C0] font-medium">{key}</span>
                    <span className="text-white font-bold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) onAddToCart(product);
                    onClose();
                  }}
                  className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#00A8FF]/20 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                    onBuyNow(product);
                  }}
                  className="bg-[#151B23] hover:bg-[#28313D] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-[#28313D] hover:border-[#00A8FF] transition-all"
                >
                  <Zap className="w-4 h-4 text-[#00A8FF]" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
