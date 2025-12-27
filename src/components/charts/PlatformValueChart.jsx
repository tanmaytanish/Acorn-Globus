import { ChevronDown } from 'lucide-react';

const PlatformValueChart = () => {
    const bars = [
        { month: '', value: 35, label: '' },
        { month: '', value: 45, label: '' },
        { month: 'Sep', value: 55, label: '$6,901' },
        { month: 'Oct', value: 85, label: '$11,035' },
        { month: 'Nov', value: 70, label: '$9,288' },
    ];

    return (
        <div className="bg-gray-100 rounded-2xl p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-pink-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400">Platform value</p>
                        <p className="text-xs font-medium text-gray-800 flex items-center gap-1">
                            Dribbble <ChevronDown className="w-3 h-3" />
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-0.5 bg-white rounded-lg p-0.5 shadow-sm border border-gray-100">
                    <button className="px-3 py-1 text-[10px] font-medium bg-gray-900 text-white rounded-md hover:bg-black hover:scale-105 transition-all active:scale-95 shadow-sm">Revenue</button>
                    <button className="px-3 py-1 text-[10px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all active:scale-95">Leads</button>
                    <button className="px-3 py-1 text-[10px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all active:scale-95">W/L</button>
                </div>
            </div>

            <div className="flex gap-4">
                {/* Left Stats Panel */}
                <div className="w-28 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl p-3 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-250 cursor-default group">
                    <p className="text-[9px] font-medium opacity-80 mb-2 group-hover:opacity-100 transition-opacity">Average monthly</p>
                    <div className="space-y-2">
                        <div>
                            <p className="text-[9px] opacity-70 group-hover:opacity-90 transition-opacity">Revenue</p>
                            <p className="text-lg font-bold group-hover:scale-105 origin-left transition-transform">$18,552</p>
                        </div>
                        <div>
                            <p className="text-[9px] opacity-70 group-hover:opacity-90 transition-opacity">Leads</p>
                            <p className="text-sm font-semibold group-hover:scale-105 origin-left transition-transform">373 <span className="text-[9px] opacity-70">97/276</span></p>
                        </div>
                        <div>
                            <p className="text-[9px] opacity-70 group-hover:opacity-90 transition-opacity">Win/loss</p>
                            <p className="text-sm font-semibold group-hover:scale-105 origin-left transition-transform">16% <span className="text-[9px] opacity-70">51/318</span></p>
                        </div>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="flex-1">
                    <div className="flex items-end justify-between h-32 gap-2 relative">
                        {/* Y-axis labels */}
                        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-gray-400">
                            <span>$14,500</span>
                            <span>$11,000</span>
                            <span>$7,500</span>
                            <span>$4,000</span>
                        </div>

                        {/* Bars */}
                        <div className="flex items-end gap-2 pr-12 flex-1">
                            {bars.map((bar, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer">
                                    {bar.label && (
                                        <span className="text-[9px] font-bold mb-1 text-primary-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{bar.label}</span>
                                    )}
                                    <div
                                        className={`w-full max-w-8 rounded-t-md transition-all duration-250 group-hover:scale-y-110 origin-bottom group-hover:shadow-md ${bar.label ? 'bg-gradient-to-t from-primary-400 to-primary-300 group-hover:from-primary-500 group-hover:to-primary-400' : 'bg-gray-200 group-hover:bg-gray-300'}`}
                                        style={{ height: `${bar.value}px` }}
                                    />
                                    {bar.month && (
                                        <span className="text-[9px] text-gray-500 mt-1 font-medium group-hover:text-gray-900 transition-colors">{bar.month}</span>
                                    )}
                                    <div className={`w-2 h-2 rounded-full mt-1 transition-all group-hover:scale-125 ${bar.label ? 'bg-primary-500' : 'bg-gray-300'}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformValueChart;
