import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Enquiry',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 pt-8">
        <span className="text-[#00A8FF] text-xs font-extrabold uppercase tracking-widest bg-[#00A8FF]/10 px-3.5 py-1 rounded-full border border-[#00A8FF]/30 inline-block">
          Customer Support & Enquiries
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Outfit']">
          Get in Touch<span className="text-[#00A8FF]">.</span>
        </h1>
        <p className="text-base text-[#AAB4C0] max-w-xl mx-auto">
          Have a question about SONIQ audio products, warranty claims, or enterprise bulk orders? Our expert support team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Business Details & Social Media Links */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-[#171D26] border border-[#28313D] rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold text-white font-['Outfit'] border-b border-[#28313D] pb-4">
              SONIQ Audio Technologies
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4 text-sm text-[#AAB4C0]">
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-0.5">Corporate Headquarters</h4>
                <p>Keshav Mahavidyalaya,</p>
                <p>Sainik Vihar, Pitampura, Delhi – 110034</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-sm text-[#AAB4C0]">
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-0.5">Email Us</h4>
                <a href="mailto:support@soniqaudio.example" className="text-[#00A8FF] hover:underline font-semibold">
                  support@soniqaudio.example
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 text-sm text-[#AAB4C0]">
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-0.5">Toll-Free Helpline</h4>
                <p className="text-white font-bold">+91 99963 32978</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 text-sm text-[#AAB4C0]">
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/15 border border-[#00A8FF]/30 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-0.5">Opening Hours</h4>
                <p className="text-emerald-400 font-semibold">Monday – Saturday</p>
                <p>10:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Social Media Channels */}
          <div className="bg-[#171D26] border border-[#28313D] rounded-3xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Connect Across Channels
            </h4>
            <div className="grid grid-cols-5 gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B0F14] border border-[#28313D] hover:border-[#00A8FF] hover:text-[#00A8FF] transition-all group">
                <svg className="w-5 h-5 mb-1 fill-currentColor text-[#AAB4C0] group-hover:text-[#00A8FF]" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span className="text-[10px] text-[#AAB4C0]">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B0F14] border border-[#28313D] hover:border-[#00A8FF] hover:text-[#00A8FF] transition-all group">
                <svg className="w-5 h-5 mb-1 fill-currentColor text-[#AAB4C0] group-hover:text-[#00A8FF]" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.417V8z"/></svg>
                <span className="text-[10px] text-[#AAB4C0]">Facebook</span>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B0F14] border border-[#28313D] hover:border-[#00A8FF] hover:text-[#00A8FF] transition-all group">
                <svg className="w-5 h-5 mb-1 fill-currentColor text-[#AAB4C0] group-hover:text-[#00A8FF]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span className="text-[10px] text-[#AAB4C0]">X</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B0F14] border border-[#28313D] hover:border-[#00A8FF] hover:text-[#00A8FF] transition-all group">
                <svg className="w-5 h-5 mb-1 fill-currentColor text-[#AAB4C0] group-hover:text-[#00A8FF]" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span className="text-[10px] text-[#AAB4C0]">YouTube</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B0F14] border border-[#28313D] hover:border-[#00A8FF] hover:text-[#00A8FF] transition-all group">
                <svg className="w-5 h-5 mb-1 fill-currentColor text-[#AAB4C0] group-hover:text-[#00A8FF]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="text-[10px] text-[#AAB4C0]">LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7 bg-[#171D26] border border-[#28313D] rounded-3xl p-8 shadow-xl">
          <div className="mb-6 space-y-1">
            <h3 className="text-2xl font-bold text-white font-['Outfit']">Send Us a Message</h3>
            <p className="text-xs text-[#AAB4C0]">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-[#00A8FF]/15 border border-[#00A8FF]/40 rounded-2xl p-8 text-center space-y-4 my-8">
              <CheckCircle2 className="w-12 h-12 text-[#00A8FF] mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-white font-['Outfit']">Thank You! Your Enquiry Has Been Sent.</h4>
              <p className="text-xs text-[#AAB4C0] max-w-sm mx-auto">
                Our support desk has logged your ticket and an audio technical advisor will respond to <strong className="text-white">{formState.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#AAB4C0] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full bg-[#0B0F14] border border-[#28313D] text-white text-sm p-3.5 rounded-xl focus:border-[#00A8FF] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AAB4C0] mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#0B0F14] border border-[#28313D] text-white text-sm p-3.5 rounded-xl focus:border-[#00A8FF] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#AAB4C0] mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99963 32978"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-[#0B0F14] border border-[#28313D] text-white text-sm p-3.5 rounded-xl focus:border-[#00A8FF] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AAB4C0] mb-1.5">Subject *</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-[#0B0F14] border border-[#28313D] text-white text-sm p-3.5 rounded-xl focus:border-[#00A8FF] outline-none transition-colors"
                  >
                    <option value="General Enquiry">General Product Enquiry</option>
                    <option value="Warranty Claim">Warranty Registration & Claim</option>
                    <option value="Order Tracking">Order & Shipping Status</option>
                    <option value="Bulk Order">Corporate & Bulk Purchasing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#AAB4C0] mb-1.5">Message *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="How can we help you today?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#0B0F14] border border-[#28313D] text-white text-sm p-3.5 rounded-xl focus:border-[#00A8FF] outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00A8FF] hover:bg-[#0077FF] text-black font-extrabold py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00A8FF]/20 transition-all duration-200"
              >
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Embedded Location Map Visual */}
      <div className="bg-[#171D26] border border-[#28313D] rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#00A8FF]" />
          <h3 className="text-lg font-bold text-white font-['Outfit']">Our Location</h3>
        </div>

        <div className="w-full h-64 rounded-2xl bg-[#0B0F14] border border-[#28313D] relative overflow-hidden flex items-center justify-center text-center p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00A8FF_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#00A8FF]/20 border border-[#00A8FF] flex items-center justify-center text-[#00A8FF] mx-auto animate-pulse">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white font-['Outfit']">SONIQ Experience Center & Tech Lab</h4>
            <p className="text-xs text-[#AAB4C0]">Keshav Mahavidyalaya, Sainik Vihar, Pitampura, Delhi – 110034</p>
          </div>
        </div>
      </div>

    </div>
  );
}
