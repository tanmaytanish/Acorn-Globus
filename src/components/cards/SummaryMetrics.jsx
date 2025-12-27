import { TrendingUp, TrendingDown, Star, ChevronDown, ChevronRight } from 'lucide-react';

const SummaryMetrics = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8 mt-4">
            {/* Left Main Revenue Section */}
            <div className="flex-shrink-0">
                <div className="text-sm font-medium text-gray-800 mb-1">Revenue</div>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[42px] font-bold text-gray-900 leading-none">$528,976</span>
                    <span className="text-[28px] text-gray-400 font-light">.82</span>
                    <div className="flex items-center gap-1.5 ml-2">
                        <span className="bg-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" strokeWidth={3} />
                            7.9%
                        </span>
                        <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            $27,335.09
                        </span>
                    </div>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                    vs prev. $501,641.73 Jun 1 - Aug 31, 2023 <ChevronDown className="w-3 h-3" />
                </div>
            </div>

            {/* Stats Cards - Middle/Right */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 sm:pb-0 lg:ml-auto">
                {/* Top Sales */}
                <div className="flex-shrink-0 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm min-w-[130px] sm:min-w-[140px] hover:shadow-md hover:scale-[1.02] transition-all duration-250 group cursor-pointer">
                    <div className="text-[10px] text-gray-400 font-medium mb-2">Top sales</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">72</div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                            <img src="https://i.pravatar.cc/150?u=mikasa" alt="Mikasa" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-medium text-gray-700">Mikasa</span>
                        <button className="ml-auto w-5 h-5 bg-gray-50 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <ChevronRight className="w-3 h-3 text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Best Deal - Dark Card */}
                <div className="flex-shrink-0 bg-gray-900 rounded-2xl p-3 shadow-md min-w-[130px] sm:min-w-[140px] hover:shadow-lg hover:scale-[1.02] hover:bg-gray-800 transition-all duration-250 group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-gray-400 font-medium">Best deal</span>
                        <Star className="w-3 h-3 text-gray-500 transition-colors group-hover:text-amber-400 group-hover:fill-amber-400" fill="gray" />
                    </div>
                    <div className="text-xl font-bold text-white mb-2">$42,300</div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-300 font-medium">Rolf Inc.</span>
                        <button className="ml-auto w-5 h-5 bg-white rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <ChevronRight className="w-3 h-3 text-gray-900" />
                        </button>
                    </div>
                </div>

                {/* Deals */}
                <div className="flex-shrink-0 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm min-w-[70px] sm:min-w-[80px] hover:shadow-md hover:scale-[1.02] transition-all duration-250 cursor-pointer group">
                    <div className="text-[10px] text-gray-400 font-medium mb-2 text-center group-hover:text-gray-600 transition-colors">Deals</div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-gray-300 transition-colors">256</span>
                        <span className="text-[10px] text-gray-500 flex items-center gap-0.5">
                            <TrendingDown className="w-2.5 h-2.5" /> 5
                        </span>
                    </div>
                </div>

                {/* Value */}
                <div className="flex-shrink-0 bg-white rounded-2xl p-3 border border-pink-500/50 shadow-sm min-w-[70px] sm:min-w-[80px] hover:shadow-md hover:scale-[1.02] hover:border-pink-500 transition-all duration-250 cursor-pointer group">
                    <div className="text-[10px] text-gray-400 font-medium mb-2 text-center group-hover:text-gray-600 transition-colors">Value</div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-pink-600 transition-colors">528k</span>
                        <span className="text-[10px] text-gray-500 flex items-center gap-0.5">
                            <TrendingUp className="w-2.5 h-2.5" /> 7.9%
                        </span>
                    </div>
                </div>

                {/* Win rate */}
                <div className="flex-shrink-0 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm min-w-[70px] sm:min-w-[80px] hover:shadow-md hover:scale-[1.02] transition-all duration-250 cursor-pointer group">
                    <div className="text-[10px] text-gray-400 font-medium mb-2 text-center group-hover:text-gray-600 transition-colors">Win rate</div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-gray-300 transition-colors">44%</span>
                        <span className="text-[10px] text-gray-500 flex items-center gap-0.5">
                            <TrendingUp className="w-2.5 h-2.5" /> 1.2%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryMetrics;
