const SalesDynamic = () => {
    // Week labels
    const weeks = ['w.1', 'w.5', 'w.7', 'w.9', 'w.9', 'w.11'];

    // Data points for the line chart
    const dataPoints = [
        { x: 0, y: 60 },
        { x: 1, y: 45 },
        { x: 2, y: 50 },
        { x: 3, y: 40 },
        { x: 4, y: 55 },
        { x: 5, y: 35 },
    ];

    return (
        <div className="bg-white rounded-xl p-5 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-800">Sales dynamic</h3>
                <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                    ⋯
                </button>
            </div>

            {/* Chart Area */}
            <div className="relative h-24">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((_, i) => (
                        <div key={i} className="border-t border-gray-100" />
                    ))}
                </div>

                {/* SVG Line Chart */}
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                    {/* Area fill */}
                    <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Area */}
                    <path
                        d="M 0 60 L 33 45 L 66 50 L 100 40 L 133 55 L 166 35 L 200 35 L 200 80 L 0 80 Z"
                        fill="url(#chartGradient)"
                    />

                    {/* Line */}
                    <path
                        d="M 0 60 L 33 45 L 66 50 L 100 40 L 133 55 L 166 35"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {[
                        { x: 0, y: 60 },
                        { x: 33, y: 45 },
                        { x: 66, y: 50 },
                        { x: 100, y: 40 },
                        { x: 133, y: 55 },
                        { x: 166, y: 35 },
                    ].map((point, i) => (
                        <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="3"
                            fill="white"
                            stroke="#ec4899"
                            strokeWidth="2"
                        />
                    ))}
                </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between mt-2 px-2">
                {weeks.map((week, index) => (
                    <span key={index} className="text-[10px] text-gray-400">{week}</span>
                ))}
            </div>
        </div>
    );
};

export default SalesDynamic;
