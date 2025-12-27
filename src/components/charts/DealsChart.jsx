import { ChevronDown } from 'lucide-react';

const DealsChart = () => {
    const bars = [
        { height: 'h-14', icon: 'behance' },
        { height: 'h-24', icon: 'dribbble' },
        { height: 'h-16', icon: 'google' },
        { height: 'h-20', icon: 'instagram' },
        { height: 'h-10', icon: 'check' },
    ];

    const renderIcon = (type) => {
        switch (type) {
            case 'dribbble':
                return (
                    <svg className="w-4 h-4 text-pink-500 z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0z" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-4 h-4 z-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                );
            case 'behance':
                return <span className="text-blue-600 text-[10px] font-bold z-10">Bē</span>;
            case 'google':
                return <span className="text-lg z-10">G</span>;
            case 'check':
                return (
                    <svg className="w-4 h-4 text-gray-800 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

            {/* Bar Chart with Icons */}
            <div className="flex items-end justify-center gap-2 h-28 mb-3">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className={`w-10 ${bar.height} bg-white rounded-lg flex ${bar.icon === 'dribbble' ? 'items-start pt-2' : bar.icon === 'instagram' ? 'items-end pb-2' : 'items-center'} justify-center relative overflow-hidden cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200 group`}
                    >
                        <div
                            className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                            style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }}
                        />
                        <div className="group-hover:scale-110 transition-transform">
                            {renderIcon(bar.icon)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Label */}
            <div className="text-center">
                <p className="text-xs text-gray-600 font-medium">Deals amount</p>
                <p className="text-xs text-gray-400 flex items-center justify-center gap-0.5">
                    by referrer category <ChevronDown className="w-3 h-3" />
                </p>
            </div>
        </div>
    );
};

export default DealsChart;
