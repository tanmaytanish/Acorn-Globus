import { ChevronDown } from 'lucide-react';

const RevenueBarChart = () => {
    // Monthly data
    const months = [
        { name: 'Jul', value: 45, highlight: false },
        { name: 'Aug', value: 65, highlight: false },
        { name: 'Sep', value: 85, highlight: true, amount: '$6,901' },
        { name: 'Oct', value: 95, highlight: true, amount: '$11,035' },
        { name: 'Nov', value: 80, highlight: true, amount: '$9,288' },
    ];

    // Stats displayed on the left
    const stats = {
        revenue: '$18,552',
        leads: '373',
        leadsRange: '97/276',
        winLoss: '16%',
        winLossRange: '51/318'
    };

    return (
        <div className="bg-white rounded-xl p-5 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white text-sm">
                        🏀
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Platform value</p>
                        <p className="text-sm font-medium text-gray-700">Dribbble ↓</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                    <button className="px-3 py-1 text-xs font-medium bg-white rounded-md shadow-sm text-gray-800">
                        Revenue
                    </button>
                    <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors">
                        Leads
                    </button>
                    <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors">
                        W/L
                    </button>
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex gap-4">
                {/* Left Stats Panel */}
                <div className="relative">
                    <div className="absolute left-0 top-0 w-28 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl p-3 text-white shadow-lg z-10">
                        <p className="text-[10px] font-medium opacity-80">Average monthly</p>
                        <div className="mt-2">
                            <p className="text-[10px] opacity-70">Revenue</p>
                            <p className="text-lg font-bold">{stats.revenue}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-[10px] opacity-70">Leads</p>
                            <p className="text-sm font-semibold">{stats.leads} <span className="text-[10px] opacity-70">{stats.leadsRange}</span></p>
                        </div>
                        <div className="mt-2">
                            <p className="text-[10px] opacity-70">Win/loss</p>
                            <p className="text-sm font-semibold">{stats.winLoss} <span className="text-[10px] opacity-70">{stats.winLossRange}</span></p>
                        </div>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="flex-1 pl-32">
                    <div className="flex items-end gap-6 h-40">
                        {months.map((month, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                {/* Value Label */}
                                {month.amount && (
                                    <div className={`text-xs font-medium ${month.highlight ? 'text-primary-600' : 'text-gray-400'}`}>
                                        {month.amount}
                                    </div>
                                )}

                                {/* Bar */}
                                <div className="w-full relative flex justify-center">
                                    <div
                                        className={`w-8 rounded-t-lg transition-all duration-300 ${month.highlight
                                                ? 'bg-gradient-to-t from-primary-400 to-primary-300'
                                                : 'bg-gray-200'
                                            }`}
                                        style={{ height: `${month.value * 1.2}px` }}
                                    />
                                </div>

                                {/* Month Label */}
                                <span className="text-xs text-gray-400 mt-1">{month.name}</span>

                                {/* Dot Indicator */}
                                <div className={`w-2 h-2 rounded-full ${month.highlight ? 'bg-primary-500' : 'bg-gray-300'}`} />
                            </div>
                        ))}
                    </div>

                    {/* Y-Axis Labels */}
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 py-4">
                        <span>$16,000</span>
                        <span>$11,000</span>
                        <span>$7,500</span>
                        <span>$4,000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueBarChart;
