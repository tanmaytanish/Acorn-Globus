import { Star, TrendingUp, TrendingDown } from 'lucide-react';

const TopCardsRow = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {/* Top Sales */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-card-hover transition-shadow">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Top sales
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">72</div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-medium">
                        M
                    </div>
                    <span className="text-sm text-gray-600">Mikasa</span>
                </div>
            </div>

            {/* Best Deal */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-card-hover transition-shadow">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Best deal
                    </span>
                    <Star className="w-4 h-4 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">$42,300</div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">R</span>
                    </div>
                    <span className="text-sm text-gray-600">Rolf Inc.</span>
                </div>
            </div>

            {/* Deals */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-card-hover transition-shadow">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Deals
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white text-xs font-bold">
                        26%
                    </div>
                    <span className="text-lg font-semibold text-gray-900">5</span>
                </div>
            </div>

            {/* Value */}
            <div className="bg-primary-50 rounded-xl p-4 border border-primary-200 hover:shadow-card-hover transition-shadow">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Value
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        $29k
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-green-600 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>7.9%</span>
                </div>
            </div>

            {/* Win Rate */}
            <div className="col-span-4 lg:col-span-1 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-card-hover transition-shadow hidden lg:block">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Win rate
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded-md">
                        41%
                    </span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-red-500 font-medium">
                    <TrendingDown className="w-3 h-3" />
                    <span>1.2%</span>
                </div>
            </div>
        </div>
    );
};

export default TopCardsRow;
