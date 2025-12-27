const PlatformDistribution = () => {
    const platforms = [
        { name: 'Dribbble', percent: '28.1%', value: '$44,072', color: 'bg-pink-500' },
        { name: 'Instagram', percent: '14.1%', value: '$22,114', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        { name: 'Google', percent: '5.4%', value: '$8,469', color: 'bg-blue-500', icon: 'G' },
        { name: 'Other', percent: '7.1%', value: '$11,135', color: 'bg-gray-400' },
    ];

    return (
        <div className="bg-white rounded-xl p-5 border border-gray-100">
            {/* Header */}
            <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Work with platforms</p>
            </div>

            {/* Platform Icons Row */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white text-sm">
                    🏀
                </div>
                <span className="text-sm text-gray-600">Dribbble</span>
            </div>

            {/* Main Stats */}
            <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">45.3%</span>
                <span className="text-2xl font-semibold text-gray-400">$71,048</span>
            </div>

            {/* Mini Chart */}
            <div className="relative h-20 mb-4">
                <div className="absolute right-0 top-0 flex items-start gap-2">
                    <div className="text-right">
                        <span className="text-xs bg-primary-100 text-primary-600 px-1.5 py-0.5 rounded font-medium">3</span>
                        <span className="text-xs text-primary-600 ml-1">$156,841</span>
                    </div>
                </div>

                {/* Platform breakdown */}
                <div className="space-y-2 mt-6">
                    {platforms.map((platform, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                            <span className="flex items-center gap-1">
                                <span className={`w-2 h-2 rounded-full ${platform.color}`}></span>
                                <span className="text-gray-500">{platform.percent}</span>
                            </span>
                            <span className="text-gray-400">{platform.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlatformDistribution;
