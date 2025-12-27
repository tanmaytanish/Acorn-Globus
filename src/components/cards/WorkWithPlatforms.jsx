import { TrendingUp, ChevronRight, ChevronDown } from 'lucide-react';

const WorkWithPlatforms = () => {
    const platforms = [
        { name: 'Dribbble', icon: 'dribbble' },
        { name: 'Instagram', icon: 'instagram' },
        { name: 'Google', icon: 'google' },
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
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" fill="#E1306C" />
                    </svg>
                );
            case 'google':
                return (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-800">Work with platforms</h3>
                <div className="flex items-center gap-1 px-3 py-1 bg-pink-50 rounded-full cursor-help hover:scale-105 hover:bg-pink-100 transition-all">
                    <TrendingUp className="w-3 h-3 text-pink-500" />
                    <span className="text-xs font-bold text-pink-600">3</span>
                    <span className="text-xs font-bold text-gray-800">$156,841</span>
                </div>
            </div>

            {/* Platform circles */}
            <div className="flex items-center gap-3 mb-4">
                {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full cursor-pointer hover:bg-white hover:border-gray-200 border border-transparent hover:shadow-sm hover:scale-105 transition-all duration-200 group">
                        <div className="group-hover:scale-110 transition-transform">
                            {renderIcon(platform.icon)}
                        </div>
                        <span className="text-xs font-medium text-gray-700">{platform.name}</span>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-4 mb-4">
                <div>
                    <p className="text-xs text-gray-400">14.1% <span className="text-gray-500">$22,114</span></p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">28.1% <span className="text-gray-500">$44,072</span></p>
                    <p className="text-xs text-gray-400 mt-1">●● 5.4% <span className="text-gray-500">$8,469</span></p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">⬤ Other <span className="ml-2">7.1% $11,135</span></p>
                </div>
            </div>

            {/* Big Number */}
            <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-800">45.3%</span>
                <span className="text-xl font-semibold text-gray-400">$71,048</span>
            </div>

            {/* Sales Dynamic */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-800">Sales dynamic</h4>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>

                {/* Week labels */}
                <div className="flex justify-between text-[9px] text-gray-400 mb-2">
                    <span>W 1</span><span>W 3</span><span>W 5</span><span>W 7</span><span>W 9</span><span>W 11</span>
                </div>

                {/* Chart */}
                <div className="h-20 bg-gradient-to-r from-pink-50 via-white to-green-50 rounded-lg relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                        <path d="M0,50 Q50,30 80,45 T150,35 T220,50 T280,30 T350,55 T400,40" fill="none" stroke="#ef4444" strokeWidth="2" />
                        <path d="M0,60 Q80,55 150,50 T280,45 T400,35" fill="none" stroke="#22c55e" strokeWidth="2" />
                    </svg>

                    {/* Data points */}
                    <div className="absolute top-4 left-16 w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-[8px] text-pink-600 font-bold">Bē</span>
                    </div>
                    <div className="absolute bottom-4 right-20 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkWithPlatforms;
