import { ChevronDown } from 'lucide-react';

const UserTable = () => {
    const users = [
        {
            name: 'Armin A.',
            initial: 'A',
            bgColor: 'bg-amber-100',
            textColor: 'text-amber-700',
            revenue: '$209,633',
            leads: { count: 41, total: 118, countBg: 'bg-gray-800' },
            kpi: '0.84',
            wl: { percent: '31%', count: 12, total: 29, countBg: 'bg-pink-500' },
            hasButton: false,
        },
        {
            name: 'Mikasa A.',
            initial: 'M',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700',
            revenue: '$156,841',
            leads: { count: 54, total: 103, countBg: 'bg-primary-500' },
            kpi: '0.89',
            wl: { percent: '39%', count: 21, total: 33, countBg: 'bg-primary-500' },
            hasButton: true,
        },
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-100">
            {/* Table Header */}
            <div className="flex items-center px-5 py-3 border-b border-gray-100 text-[10px] text-gray-400 font-medium">
                <span className="w-32">Sales</span>
                <span className="w-24">Revenue</span>
                <span className="w-16">Leads</span>
                <span className="w-16">KPI</span>
                <span className="w-20">W/L</span>
            </div>

            {/* User Rows */}
            {users.map((user, index) => (
                <div
                    key={index}
                    className={`flex items-center px-5 py-3 ${index < users.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50/50 hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 cursor-pointer group`}
                >
                    <div className="flex items-center gap-2 w-32">
                        <div className={`w-8 h-8 rounded-full ${user.bgColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                            <span className={`${user.textColor} text-sm font-medium`}>{user.initial}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800 transition-colors group-hover:text-primary-600">{user.name}</span>
                    </div>
                    <span className="w-24 text-sm font-medium text-gray-800">{user.revenue}</span>
                    <div className="w-16 flex items-center gap-1 group-hover:scale-105 transition-transform origin-left">
                        <span className={`w-5 h-5 rounded-full ${user.leads.countBg} text-white text-[9px] flex items-center justify-center font-medium shadow-sm`}>
                            {user.leads.count}
                        </span>
                        <span className="text-sm text-gray-600">{user.leads.total}</span>
                    </div>
                    <span className="w-16 text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{user.kpi}</span>
                    <div className="w-20 flex items-center gap-1 group-hover:scale-105 transition-transform origin-left">
                        <span className="text-sm text-gray-600">{user.wl.percent}</span>
                        <span className={`w-5 h-5 rounded-full ${user.wl.countBg} text-white text-[9px] flex items-center justify-center font-medium shadow-sm`}>
                            {user.wl.count}
                        </span>
                        <span className="text-sm text-gray-600">{user.wl.total}</span>
                    </div>
                    {user.hasButton && (
                        <button className="ml-auto w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 hover:scale-110 active:scale-90 transition-all shadow-sm">
                            <ChevronDown className="w-3 h-3 text-white rotate-[-90deg]" />
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserTable;
