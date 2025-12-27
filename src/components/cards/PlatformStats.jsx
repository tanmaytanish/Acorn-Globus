import { ChevronDown } from 'lucide-react';

const PlatformStats = () => {
    const platforms = [
        { name: 'Dribbble', amount: '$227,459', percent: '43%', icon: 'dribbble', bgColor: 'bg-pink-100' },
        { name: 'Instagram', amount: '$142,823', percent: '27%', icon: 'instagram', bgColor: 'bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100' },
        { name: 'Behance', amount: '$89,935', percent: '11%', icon: 'behance', bgColor: 'bg-blue-100' },
        { name: 'Google', amount: '$37,028', percent: '7%', icon: 'google', bgColor: 'bg-gray-50' },
    ];

    const renderIcon = (type) => {
        switch (type) {
            case 'dribbble':
                return (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0z" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#feda75" />
                                <stop offset="50%" stopColor="#d62976" />
                                <stop offset="100%" stopColor="#4f5bd5" />
                            </linearGradient>
                        </defs>
                        <rect x="3" y="3" width="18" height="18" rx="4" stroke="url(#ig-grad)" strokeWidth="1.5" fill="none" />
                        <circle cx="12" cy="12" r="3" stroke="url(#ig-grad)" strokeWidth="1.5" fill="none" />
                    </svg>
                );
            case 'behance':
                return <span className="text-blue-600 text-xs font-bold">Bē</span>;
            case 'google':
                return (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-100 rounded-2xl p-4 flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button className="flex items-center gap-1 text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h10M4 18h10" />
                    </svg>
                    <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-xs text-gray-600 font-medium">
                    Filters
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </button>
            </div>

            {/* Platform List */}
            <div className="space-y-2">
                {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center bg-white rounded-xl px-3 py-2 cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-sm hover:scale-[1.02] transition-all duration-200 group">
                        <div className={`w-6 h-6 rounded-lg ${platform.bgColor} flex items-center justify-center mr-2 group-hover:scale-110 transition-transform`}>
                            {renderIcon(platform.icon)}
                        </div>
                        <span className="text-xs font-medium text-gray-800 w-16">{platform.name}</span>
                        <span className="text-xs font-bold text-gray-900">{platform.amount}</span>
                        <span className="text-xs text-gray-400 ml-auto group-hover:text-gray-600 transition-colors">{platform.percent}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatformStats;
