import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, Smartphone, Building2, PackageCheck } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart }) {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Pinnacle Heights, Green Park',
    city: 'New Delhi',
    pincode: '110016'
  });
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleNextToPayment = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCompleteOrder = () => {
    const generatedId = `SONIQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep(3);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative bg-[#0B0F14] border border-[#28313D] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#28313D]">
          <div>
            <span className="text-[#00A8FF] text-xs font-bold uppercase tracking-wider">
              {step === 1 && 'Step 1 of 2: Shipping Info'}
              {step === 2 && 'Step 2 of 2: Payment Method'}
              {step === 3 && 'Order Confirmed'}
            </span>
            <h2 className="text-2xl font-extrabold text-white font-['Outfit']">
              {step === 3 ? 'Thank You For Your Order!' : 'Checkout'}
            </h2>
          </div>
          {step !== 3 && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#151B23] border border-[#28313D] text-[#AAB4C0] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* STEP 1: Shipping Details */}
        {step === 1 && (
          <form onSubmit={handleNextToPayment} className="pt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#AAB4C0] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#151B23] border border-[#28313D] text-white text-sm p-3 rounded-xl focus:border-[#00A8FF] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#AAB4C0] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#151B23] border border-[#28313D] text-white text-sm p-3 rounded-xl focus:border-[#00A8FF] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#AAB4C0] mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#151B23] border border-[#28313D] text-white text-sm p-3 rounded-xl focus:border-[#00A8FF] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#AAB4C0] mb-1">Pincode</label>
                <input
                  type="text"
                  required
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full bg-[#151B23] border border-[#28313D] text-white text-sm p-3 rounded-xl focus:border-[#00A8FF] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#AAB4C0] mb-1">Delivery Address</label>
              <textarea
                rows="2"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#151B23] border border-[#28313D] text-white text-sm p-3 rounded-xl focus:border-[#00A8FF] outline-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#28313D]">
              <div>
                <span className="text-xs text-[#AAB4C0] block">Total Payable:</span>
                <span className="text-xl font-bold text-white">{formatPrice(totalAmount)}</span>
              </div>
              <button
                type="submit"
                className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment Selection */}
        {step === 2 && (
          <div className="pt-6 space-y-6">
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#AAB4C0] uppercase">Select Payment Option</label>
              
              <div 
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'bg-[#00A8FF]/10 border-[#00A8FF] text-white' : 'bg-[#151B23] border-[#28313D] text-[#AAB4C0]'
                }`}
              >
                <Smartphone className="w-6 h-6 text-[#00A8FF]" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">UPI / GPay / PhonePe / Paytm</h4>
                  <p className="text-xs text-[#AAB4C0]">Instant 0% fee payment via any UPI app</p>
                </div>
                <input type="radio" checked={paymentMethod === 'upi'} readOnly />
              </div>

              <div 
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'bg-[#00A8FF]/10 border-[#00A8FF] text-white' : 'bg-[#151B23] border-[#28313D] text-[#AAB4C0]'
                }`}
              >
                <CreditCard className="w-6 h-6 text-[#00A8FF]" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">Credit / Debit Card</h4>
                  <p className="text-xs text-[#AAB4C0]">Visa, MasterCard, RuPay & American Express</p>
                </div>
                <input type="radio" checked={paymentMethod === 'card'} readOnly />
              </div>

              <div 
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'netbanking' ? 'bg-[#00A8FF]/10 border-[#00A8FF] text-white' : 'bg-[#151B23] border-[#28313D] text-[#AAB4C0]'
                }`}
              >
                <Building2 className="w-6 h-6 text-[#00A8FF]" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">Net Banking</h4>
                  <p className="text-xs text-[#AAB4C0]">All major Indian banks supported</p>
                </div>
                <input type="radio" checked={paymentMethod === 'netbanking'} readOnly />
              </div>

              <div 
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'bg-[#00A8FF]/10 border-[#00A8FF] text-white' : 'bg-[#151B23] border-[#28313D] text-[#AAB4C0]'
                }`}
              >
                <Truck className="w-6 h-6 text-[#00A8FF]" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">Cash on Delivery (COD)</h4>
                  <p className="text-xs text-[#AAB4C0]">Pay at your doorstep upon delivery</p>
                </div>
                <input type="radio" checked={paymentMethod === 'cod'} readOnly />
              </div>
            </div>

            <div className="bg-[#151B23] border border-[#28313D] rounded-xl p-3.5 text-xs text-[#AAB4C0] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Demonstration Mode: No real payment credentials required. Clicking Place Order will generate a mock order confirmation.</span>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#28313D]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#AAB4C0] hover:text-white underline"
              >
                Back to Shipping
              </button>
              <button
                type="button"
                onClick={handleCompleteOrder}
                className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold px-8 py-3 rounded-xl text-sm transition-all shadow-lg shadow-[#00A8FF]/20"
              >
                Place Order ({formatPrice(totalAmount)})
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Confirmation */}
        {step === 3 && (
          <div className="pt-6 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-['Outfit']">Order Placed Successfully!</h3>
              <p className="text-xs text-[#AAB4C0]">
                Order ID: <strong className="text-[#00A8FF] font-mono font-bold text-sm">{orderId}</strong>
              </p>
              <p className="text-xs text-[#AAB4C0]">
                We have sent order details and tracking instructions to <span className="text-white">{formData.email}</span>.
              </p>
            </div>

            <div className="bg-[#151B23] border border-[#28313D] rounded-2xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-[#AAB4C0]">
                <span>Shipping To:</span>
                <span className="text-white font-semibold">{formData.name}</span>
              </div>
              <div className="flex justify-between text-[#AAB4C0]">
                <span>Estimated Delivery:</span>
                <span className="text-emerald-400 font-semibold">3-4 Business Days</span>
              </div>
              <div className="flex justify-between text-[#AAB4C0]">
                <span>Payment Mode:</span>
                <span className="text-white uppercase font-bold">{paymentMethod}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold px-8 py-3.5 rounded-xl text-sm inline-flex items-center gap-2 shadow-lg shadow-[#00A8FF]/20 transition-all"
            >
              <span>Continue Shopping</span>
              <PackageCheck className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
