import { Search, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="h-14 bg-[#f5f4f2] px-6 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <Menu className="w-5 h-5 text-gray-600" />
                </button>

                {/* Search Bar - Hidden on mobile to prevent overlap */}
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder='Try searching "insights"'
                        className="w-[280px] pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600
                     placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300
                     hover:border-gray-300 hover:shadow-sm
                     transition-all duration-200"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
                {/* Custom White Capsule with Menu and Avatar */}
                <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-full pl-5 pr-1.5 py-1.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-250 group">
                    {/* Menu Icon - Hidden on mobile as we have a dedicated sidebar toggle */}
                    <button className="hidden md:block text-gray-900 hover:text-primary-500 transition-colors">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="2" rx="1" fill="currentColor" />
                            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
                            <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
                        </svg>
                    </button>

                    {/* Avatar with landscape image */}
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-100 shadow-sm transition-transform hover:scale-105">
                        <img
                            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=100&auto=format&fit=crop"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Add Button - Reddish Pink Circle */}
                <button className="w-11 h-11 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-all shadow-md hover:shadow-lg active:scale-95 group">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
