import React, { useState } from 'react';
import { X, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function SearchModal({ isOpen, onClose, onQuickView, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.keyFeature.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative bg-[#0B0F14] border border-[#28313D] rounded-2xl max-w-2xl w-full p-6 shadow-2xl z-10">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#28313D] pb-4">
          <Search className="w-6 h-6 text-[#00A8FF]" />
          <input
            type="text"
            autoFocus
            placeholder="Search earbuds, headphones, speakers, ANC..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-white text-lg font-['Outfit'] outline-none placeholder:text-gray-500"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#151B23] border border-[#28313D] text-[#AAB4C0] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-3">
          {searchTerm.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#AAB4C0]">
              Type product name, model (e.g. AirBuds, Studio H1), or tech feature (e.g. ANC, Atmos)
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#AAB4C0]">
              No products found matching "<span className="text-white font-semibold">{searchTerm}</span>"
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#171D26] border border-[#28313D] rounded-xl p-3 flex items-center justify-between gap-4 hover:border-[#00A8FF]/50 transition-colors"
              >
                <div 
                  onClick={() => {
                    onClose();
                    onQuickView(p);
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 object-cover rounded-lg bg-[#0B0F14]"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white font-['Outfit'] truncate">{p.name}</h4>
                    <p className="text-xs text-[#AAB4C0] truncate">{p.keyFeature}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#00A8FF] font-['Outfit']">
                    {formatPrice(p.price)}
                  </span>
                  <button
                    onClick={() => {
                      onAddToCart(p);
                      onClose();
                    }}
                    className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-bold p-2 rounded-lg text-xs transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
