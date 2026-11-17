import React, { useState } from 'react';
import { Icon } from '../../components/shared/Icon';

export interface TermsPrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPrivacyPage: React.FC<TermsPrivacyPageProps> = ({ onNavigate }) => {
  const [tab, setTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
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
            Legal & Privacy Policies
          </h1>
          <p className="text-sm text-slate-500">
            Platform terms of service and customer data privacy guidelines
          </p>
        </div>
      </div>

      {/* Prominent Legal Review Notice */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-amber-900">
        <Icon name="gavel" className="text-amber-600 text-2xl shrink-0" />
        <div className="text-xs sm:text-sm">
          <strong className="font-extrabold block mb-0.5">
            Legal Notice: Draft Terms Subject to Ugandan Legal Review
          </strong>
          These terms and privacy principles are designed for the SwiftCart online marketplace in Uganda. A qualified Ugandan commercial lawyer must review and formally approve all terms before commercial operations commence. SwiftCart operates as an online marketplace and does not claim banking, credit, or specialized payment licenses.
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setTab('terms')}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            tab === 'terms'
              ? 'bg-[#0E1B4D] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Terms of Service
        </button>
        <button
          onClick={() => setTab('privacy')}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            tab === 'privacy'
              ? 'bg-[#0E1B4D] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
        {tab === 'terms' ? (
          <>
            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">1. Payment Processing & Delivery Hold</h2>
              <p>
                All digital transactions on SwiftCart (including MTN Mobile Money, Airtel Money, Visa, and Mastercard) are processed through Pesapal. When you make a payment, funds are securely held pending fulfillment. SwiftCart does not disburse payment to the seller until you inspect your delivery, confirm receipt with your 6-digit code, and the 48-hour return window elapses without dispute.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">2. Delivery Codes & Courier Protocols</h2>
              <p>
                Every order generates a unique, confidential 6-digit delivery code displayed in your account and sent via SMS. You must only share this code with the courier at your doorstep after physically inspecting the outer package and verifying the merchandise. Couriers are strictly prohibited from requesting the code over phone calls or WhatsApp prior to physical handover.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">3. Returns, Refunds & Dispute Policy</h2>
              <p>
                Buyers may lodge a dispute within 48 hours of delivery for defective, counterfeit, damaged, or misdescribed goods by submitting photographic or video evidence. Once a dispute is initiated, disbursement to the merchant is held until our Kampala customer support team reviews the case. Verified claims receive a free reverse courier pickup and a full refund processed to the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">4. Seller Obligations & Prohibited Goods</h2>
              <p>
                Sellers must be registered with valid business documentation (URSB certificate or National ID) and a verifiable shop location in Uganda. Sellers must supply genuine merchandise matching catalog descriptions. Prohibited goods include counterfeit items, uncertified pharmaceuticals, firearms, hazardous materials, and expired foods. Vendors violating these rules are permanently banned and reported to relevant authorities.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">5. Limitation of Liability</h2>
              <p>
                SwiftCart provides an online marketplace platform connecting independent buyers, sellers, and dispatch couriers. To the maximum extent permitted under Ugandan law, SwiftCart liability for any claim arising from an order is capped at the total amount paid by the buyer for that order. SwiftCart is not liable for indirect or consequential damages.
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">1. Information We Collect</h2>
              <p>
                To provide marketplace services and deliver your orders safely across Kampala and Greater Uganda, SwiftCart collects:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Contact details:</strong> Full name, telephone number (+256 format), and email address.</li>
                <li><strong>Delivery coordinates:</strong> Physical street, division, district, building, and landmark instructions.</li>
                <li><strong>Order records:</strong> Products purchased, item quantities, invoices, and delivery completion receipts.</li>
                <li><strong>Device telemetry:</strong> Device model, IP address, and browser characteristics for security and fraud prevention.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">2. Why We Collect Your Information</h2>
              <p>
                We use your data solely to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Process and confirm your marketplace orders.</li>
                <li>Route dispatch couriers to your doorstep and communicate delivery status.</li>
                <li>Facilitate customer service support, return pickups, and dispute investigations.</li>
                <li>Prevent unauthorized account access and commercial fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">3. Third-Party Sharing</h2>
              <p>
                SwiftCart does not sell, rent, or trade your personal information. We share data only with essential service providers necessary to complete your order:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Pesapal Payment Gateway:</strong> To process card and mobile money debit authorizations. SwiftCart never receives or stores your mobile money PIN or card security code.</li>
                <li><strong>SMS Aggregators:</strong> To send order confirmation and 6-digit delivery codes to your registered phone.</li>
                <li><strong>Assigned Delivery Couriers:</strong> Providing only the destination address, recipient name, and contact number for arrival coordination.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">4. Data Retention & User Rights</h2>
              <p>
                We retain personal records as long as your account remains active and as required for accounting, taxation, and dispute resolution. You have the right to access your stored data, request corrections, or request account closure and data deletion by contacting <span className="font-semibold text-primary">privacy@swiftcart.ug</span>.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TermsPrivacyPage;
