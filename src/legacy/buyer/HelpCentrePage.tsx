import React, { useState } from 'react';
import { Icon } from '../../components/shared/Icon';

export interface HelpCentrePageProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: 'orders' | 'payment' | 'returns' | 'seller';
}

const FAQS: FaqItem[] = [
  {
    category: 'payment',
    question: 'How do payments work on SwiftCart?',
    answer:
      'All payments are processed securely through Pesapal. You can pay using MTN Mobile Money, Airtel Money, Visa, or Mastercard. SwiftCart holds your payment safely until you inspect your parcel at delivery and provide your 6-digit delivery code to the courier. Once the 48-hour return window closes, funds are disbursed to the seller.',
  },
  {
    category: 'payment',
    question: 'What if the mobile money payment prompt does not appear?',
    answer:
      'You will receive a prompt on your phone to approve the payment. If network delay occurs, check your mobile money app under pending approvals or contact our customer support team. SwiftCart never asks for your secret PIN.',
  },
  {
    category: 'orders',
    question: 'What is the 6-digit delivery code?',
    answer:
      'The 6-digit code is generated exclusively for your order and displayed on your Order Details screen and sent via SMS. Share it with your courier ONLY after you have physically received and inspected your package. Disclosing this code confirms delivery.',
  },
  {
    category: 'orders',
    question: 'How fast is courier delivery in Kampala?',
    answer:
      'Orders placed from verified Kampala merchants are typically delivered to your doorstep within 1 to 3 hours across Kampala and Wakiso districts.',
  },
  {
    category: 'returns',
    question: 'What is the return and refund policy?',
    answer:
      'If an item is damaged, defective, or incorrect, you can request a return within 48 hours of delivery by uploading photo evidence. Our Kampala team will arrange a reverse pickup, and a full refund will be processed back to your original payment method via Pesapal.',
  },
  {
    category: 'seller',
    question: 'How do I become a verified seller on SwiftCart?',
    answer:
      'Register your store online by submitting your business details, National ID (NIN) or URSB registration, and physical shop address in Kampala. Once verified, you can list products immediately. Commission is 8% to 12% on completed sales, with daily disbursements to your mobile money or bank account.',
  },
];

export const HelpCentrePage: React.FC<HelpCentrePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'orders' | 'payment' | 'returns' | 'seller'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('/account')}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back"
        >
          <Icon name="arrow_back" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Help & Customer Support
          </h1>
          <p className="text-sm text-slate-500">
            Frequently asked questions and direct support for Ugandan shoppers and sellers
          </p>
        </div>
      </div>

      {/* Direct Contact Cards (Call & WhatsApp) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Call Support Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Icon name="call" className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#0E1B4D]">Customer Helpline</h3>
              <p className="text-xs text-slate-500">Mon-Sat: 8:00 AM - 8:00 PM</p>
              <div className="font-mono text-xs font-bold text-slate-700 mt-1">
                +256 700 000 000
              </div>
            </div>
          </div>
          <a
            href="tel:+256700000000"
            className="px-4 py-2.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-xs hover:bg-slate-800 transition-colors shrink-0 min-h-[44px] flex items-center justify-center"
          >
            Call Now
          </a>
        </div>

        {/* WhatsApp Support Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Icon name="chat" className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#0E1B4D]">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500">support@swiftcart.ug</p>
              <div className="font-mono text-xs font-bold text-emerald-700 mt-1">
                +256 700 000 000
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/256700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shrink-0 min-h-[44px] flex items-center justify-center"
          >
            Chat Now
          </a>
        </div>
      </div>

      {/* Physical Office Card */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <Icon name="location_on" className="text-xl" />
        </div>
        <div className="text-xs text-slate-600">
          <strong className="text-slate-800 font-bold block text-sm">Kampala Operations Office:</strong>
          Plot 14 Lumumba Avenue, Nakasero Commercial District, Kampala, Uganda • Open Monday to Saturday
        </div>
      </div>

      {/* Search FAQs */}
      <div className="relative">
        <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2  text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions about payment, boda delivery, returns..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#FF8A1F] shadow-xs"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
        {(['all', 'payment', 'orders', 'returns', 'seller'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#0E1B4D] text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat === 'all' ? 'All Questions' : cat}
          </button>
        ))}
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0E1B4D] hover:text-[#FF8A1F] transition-colors"
              >
                <span>{faq.question}</span>
                <Icon
                  name={isOpen ? 'expand_less' : 'expand_more'}
                  className="text-slate-400 shrink-0"
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HelpCentrePage;
