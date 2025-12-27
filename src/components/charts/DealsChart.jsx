import { ChevronDown } from 'lucide-react';

const DealsChart = () => {
    const bars = [
        { height: 'h-16', icon: 'behance', striped: true, iconClass: 'text-blue-600' },
        { height: 'h-28', icon: 'dribbble', striped: false, iconClass: 'text-pink-500' },
        { height: 'h-20', icon: 'google', striped: false, iconClass: '' },
        { height: 'h-14', icon: 'instagram', striped: false, iconClass: 'text-pink-400' },
        { height: 'h-24', icon: 'shop', striped: true, iconClass: 'text-gray-900' },
    ];

    const renderIcon = (type) => {
        switch (type) {
            case 'dribbble':
                return (
                    <svg className="w-5 h-5 text-pink-500 z-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8.5 2.5c3 1.5 5.5 4.5 6.5 7.5S16 16.5 14 20.5" />
                        <path d="M2 13c5.5-.5 10.5-2.5 15-7" />
                        <path d="M4.5 6.5C8 9 13.5 10 19.5 8" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-5 h-5 z-10 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="18" cy="6" r="1" />
                    </svg>
                );
            case 'behance':
                return <span className="text-blue-600 text-xs font-bold z-10 px-0.5 bg-white">Bē</span>;
            case 'google':
                return (
                    <svg className="w-5 h-5 z-10" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09l-.17-.18C5.22 13.06 4.6 12.09 4.6 11s.62-2.06 1.07-2.91l.17-.18V5.07H2.18C1.43 6.55 1 8.22 1 10s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                );
            case 'shop':
                return (
                    <svg className="w-5 h-5 text-black z-10 px-0.5 bg-white rounded-sm" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 118 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-100/80 rounded-[32px] p-6 flex-1 min-w-[280px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-1.5 text-black cursor-pointer group">
                    <div className="flex items-end gap-[2px] h-4">
                        <div className="w-[2px] h-2 bg-black group-hover:h-3 transition-all"></div>
                        <div className="w-[2px] h-4 bg-black group-hover:h-2 transition-all"></div>
                        <div className="w-[2px] h-3 bg-black group-hover:h-4 transition-all"></div>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-2xl text-[13px] text-black font-semibold shadow-sm hover:shadow-md transition-all active:scale-95">
                    Filters
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6h16M6 12h12M10 18h4" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            {/* Bar Chart with Icons */}
            <div className="flex items-end justify-center gap-2.5 h-32 mb-6">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className={`flex-1 max-w-12 ${bar.height} bg-white rounded-[20px] flex items-start justify-center pt-4 relative overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.03] transition-all duration-300 group`}
                    >
                        {bar.striped && (
                            <div
                                className="absolute inset-0 opacity-[0.08]"
                                style={{
                                    background: 'repeating-linear-gradient(45deg, transparent, transparent 3px, #000 3px, #000 6px)'
                                }}
                            />
                        )}
                        <div className="group-hover:scale-110 transition-transform">
                            {renderIcon(bar.icon)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Label */}
            <div className="mt-4">
                <p className="text-[13px] text-gray-500 font-medium mb-1">Deals amount</p>
                <button className="inline-flex items-center gap-1 text-[15px] text-black font-bold group">
                    by referrer category
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </button>
            </div>
        </div>
    );
};

export default DealsChart;
