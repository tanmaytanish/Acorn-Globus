const UserMetricsPills = () => {
    const users = [
        {
            name: 'Armin',
            amount: '$209,633',
            percent: '39.63%',
            initial: 'A',
            bgColor: 'bg-gray-800',
            avatar: 'https://i.pravatar.cc/150?u=armin'
        },
        {
            name: 'Mikasa',
            amount: '$156,841',
            percent: '29.65%',
            initial: 'M',
            bgColor: 'bg-blue-500',
            avatar: 'https://i.pravatar.cc/150?u=mikasa'
        },
        {
            name: 'Eren',
            amount: '$117,115',
            percent: '22.14%',
            initial: 'E',
            bgColor: 'bg-orange-500',
            avatar: 'https://i.pravatar.cc/150?u=eren'
        }
    ];

    return (
        <div className="bg-gray-100 rounded-full p-1 flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-full pl-1.5 pr-6 py-1.5 border border-transparent hover:border-gray-200 hover:shadow-md hover:scale-[1.03] transition-all duration-250 cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all">
                    <span className="text-white text-[10px] font-semibold">A</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$209,633</span>
                <span className="text-sm text-gray-400 ml-24 group-hover:text-gray-600 transition-colors">39.63%</span>
            </div>

            {/* User 2 - M (green, border background) */}
            <div className="flex items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1.5 ml-3 border border-transparent hover:border-gray-200 hover:shadow-md hover:scale-[1.03] transition-all duration-250 cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all">
                    <span className="text-white text-[10px] font-semibold">M</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$156,841</span>
                <span className="text-sm text-gray-400 ml-2 group-hover:text-gray-600 transition-colors">29.65%</span>
            </div>

            {/* User 3 - E (yellow, no border) */}
            <div className="flex items-center gap-2 ml-6 hover:scale-[1.03] transition-transform cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-[10px] font-semibold">E</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$117,115</span>
                <span className="text-sm text-gray-400 ml-2 group-hover:text-gray-600 transition-colors">22.14%</span>
            </div>

            {/* User 4 - C (dark, no border) */}
            <div className="flex items-center gap-2 ml-6 hover:scale-[1.03] transition-transform cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-[10px] font-semibold">C</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">$45,386</span>
                <span className="text-sm text-gray-400 ml-2 group-hover:text-gray-600 transition-colors">8.58%</span>
            </div>

            {/* Details Button */}
            <button className="ml-auto px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
                Details
            </button>
        </div>
    );
};

export default UserMetricsPills;
