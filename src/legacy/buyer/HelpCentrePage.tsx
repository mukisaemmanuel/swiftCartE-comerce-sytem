import React, { useState } from 'react';
import { Icon } from '../../components/shared/Icon';

export interface HelpCentrePageProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: 'orders' | 'escrow' | 'returns' | 'general';
}

const FAQS: FaqItem[] = [
  {
    category: 'escrow',
    question: 'How does SwiftCart Escrow protect my payment?',
    answer:
      'When you pay via MTN MoMo, Airtel Money, or Card, your funds are safely held in a protected escrow holding account. The merchant is only credited AFTER you inspect the item and share your 6-digit delivery handover code with the rider or pickup station.',
  },
  {
    category: 'orders',
    question: 'What is the 6-digit delivery handover code?',
    answer:
      'The 6-digit code is generated exclusively for your order and displayed on your Order Confirmation and Order Detail screens. Share it with your Boda rider ONLY after you have verified that the package contains the correct and undamaged items.',
  },
  {
    category: 'orders',
    question: 'How fast is Express Boda delivery in Kampala?',
    answer:
      'Orders placed from verified Kampala merchants are picked up and delivered to your doorstep within 1 to 3 hours.',
  },
  {
    category: 'returns',
    question: 'What is the SwiftCart 3-day return policy?',
    answer:
      'If an item is damaged, defective, or not as described, you can initiate a return or open an escrow dispute within 3 calendar days of delivery. Payout to the seller is immediately frozen while our team assists you with a replacement or full refund.',
  },
  {
    category: 'orders',
    question: 'Can I pick up my parcel from a station hub?',
    answer:
      'Yes! We have pickup hubs at Kampala GPO (Posta Uganda), Nakawa, Entebbe Victoria Mall, Jinja Post Office, and Mukono Central. Station pickup typically costs only UGX 3,500.',
  },
];

export const HelpCentrePage: React.FC<HelpCentrePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'orders' | 'escrow' | 'returns'>('all');
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
            Frequently asked questions and direct support for Ugandan shoppers
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
              <h3 className="font-bold text-base text-[#0E1B4D]">Call Support</h3>
              <p className="text-xs text-slate-500">Mon-Sat: 8:00 AM - 8:00 PM</p>
              <div className="font-mono text-xs font-bold text-slate-700 mt-1">
                +256 700 100 200
              </div>
            </div>
          </div>
          <a
            href="tel:+256700100200"
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
              <p className="text-xs text-slate-500">Instant answers from team</p>
              <div className="font-mono text-xs font-bold text-emerald-700 mt-1">
                +256 700 100 200
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/256700100200"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shrink-0 min-h-[44px] flex items-center justify-center"
          >
            Chat Now
          </a>
        </div>
      </div>

      {/* Search FAQs */}
      <div className="relative">
        <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2  text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions about escrow, boda delivery, returns..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#FF8A1F] shadow-xs"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        {(['all', 'escrow', 'orders', 'returns'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all ${
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
