import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState(null);

  if (!isOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SONIQ10') {
      const discAmount = Math.round(subtotal * 0.1);
      setDiscount(discAmount);
      setAppliedPromo('SONIQ10 (10% OFF)');
    } else if (promoCode.trim()) {
      alert('Invalid promo code. Try "SONIQ10" for 10% discount!');
    }
  };

  const finalTotal = Math.max(0, subtotal - discount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0B0F14] border-l border-[#28313D] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-[#151B23] border-b border-[#28313D] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white font-['Outfit']">Your Cart</h2>
                <p className="text-xs text-[#AAB4C0]">{cartItems.length} items selected</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0B0F14] border border-[#28313D] text-[#AAB4C0] hover:text-white hover:border-[#00A8FF]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#151B23] border border-[#28313D] flex items-center justify-center text-[#AAB4C0]">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit']">Your cart is empty</h3>
                <p className="text-xs text-[#AAB4C0] max-w-xs mx-auto">
                  Explore our premium lineup of earbuds, headphones, speakers, and soundbars to get started.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#00A8FF] text-black font-bold px-6 py-2.5 rounded-xl text-xs inline-flex items-center gap-2 hover:bg-[#0077FF] transition-colors"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#171D26] border border-[#28313D] rounded-xl p-3.5 flex gap-3.5 items-center hover:border-[#00A8FF]/40 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg bg-[#0B0F14] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate font-['Outfit']">{item.name}</h4>
                    <p className="text-xs text-[#00A8FF] font-semibold mt-0.5">{formatPrice(item.price)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#28313D] rounded-lg bg-[#0B0F14] overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#AAB4C0] hover:text-white hover:bg-[#151B23]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#AAB4C0] hover:text-white hover:bg-[#151B23]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/10 transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right font-bold text-white text-sm">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#151B23] border-t border-[#28313D] space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#AAB4C0]" />
                  <input
                    type="text"
                    placeholder="Promo code (e.g. SONIQ10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-[#28313D] text-white text-xs pl-9 pr-3 py-2 rounded-lg outline-none focus:border-[#00A8FF]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#28313D] hover:bg-[#00A8FF] hover:text-black text-white font-bold px-3 py-2 rounded-lg text-xs transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5" />
                  <span>Promo {appliedPromo} applied successfully!</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs border-t border-b border-[#28313D] py-3 text-[#AAB4C0]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-400 font-semibold">FREE (Express)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#28313D]">
                  <span>Total Amount</span>
                  <span className="text-[#00A8FF] text-lg font-['Outfit']">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00A8FF]/20 transition-all duration-200"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-[#AAB4C0] text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Secure Checkout & Free 1-Year Warranty</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
