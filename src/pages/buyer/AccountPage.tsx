import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import SafeImage from '../../components/shared/SafeImage';

export interface AccountPageProps {
  onNavigate: (path: string) => void;
}

export const AccountPage: React.FC<AccountPageProps> = ({ onNavigate }) => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    onNavigate('/');
  };

  const navItems = [
    {
      title: 'My Orders',
      subtitle: 'Track active orders and delivery codes',
      icon: 'local_shipping',
      path: '/my-orders',
      color: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'Delivery Addresses',
      subtitle: 'Saved home, office and station drop-offs',
      icon: 'location_on',
      path: '/delivery-addresses',
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Payment Methods',
      subtitle: 'MTN MoMo, Airtel Money & saved cards',
      icon: 'account_balance_wallet',
      path: '/payment-methods-1',
      color: 'text-amber-600 bg-amber-50',
    },
    {
      title: 'Vouchers & Coupons',
      subtitle: 'Discounts and promotional codes',
      icon: 'confirmation_number',
      path: '/vouchers-discounts',
      color: 'text-purple-600 bg-purple-50',
    },
    {
      title: 'Notifications',
      subtitle: 'Order updates and promotional offers',
      icon: 'notifications',
      path: '/notifications-buyer',
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Help Centre & Support',
      subtitle: 'Call or WhatsApp our Kampala support team',
      icon: 'support_agent',
      path: '/help-centre-support',
      color: 'text-teal-600 bg-teal-50',
    },
    {
      title: 'Become a Seller',
      subtitle: 'Start selling to verified buyers in Uganda',
      icon: 'storefront',
      path: '/become-a-seller-4-steps',
      color: 'text-orange-600 bg-orange-50',
    },
    {
      title: 'Merchant Application Status',
      subtitle: 'Check progress of your store application',
      icon: 'hourglass_top',
      path: '/seller-application-status',
      color: 'text-sky-600 bg-sky-50',
    },
    {
      title: 'Terms & Privacy',
      subtitle: 'Platform policies and buyer protection',
      icon: 'gavel',
      path: '/terms-of-service-privacy',
      color: 'text-slate-600 bg-slate-50',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <SafeImage
            src={user?.avatarUrl || '/placeholders/avatar.svg'}
            alt="Profile Avatar"
            className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FF8A1F] shadow-sm shrink-0"
          />
          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E1B4D]">
                {user?.fullName || 'Mukisa Emmanuel'}
              </h1>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-rounded text-xs">verified</span>
                <span>Verified Buyer</span>
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              {user?.phoneNumber || '+256 772 123456'}
            </p>
            {user?.email && (
              <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span className="material-symbols-rounded text-base">logout</span>
          <span>Sign Out</span>
        </button>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.path)}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-[#FF8A1F] hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} group-hover:scale-105 transition-transform`}
              >
                <span className="material-symbols-rounded text-2xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#0E1B4D] group-hover:text-[#FF8A1F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <span className="material-symbols-rounded text-slate-300 group-hover:text-[#FF8A1F] group-hover:translate-x-1 transition-all">
              chevron_right
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountPage;

