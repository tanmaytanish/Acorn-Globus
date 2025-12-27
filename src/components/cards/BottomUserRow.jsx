import { TrendingUp } from 'lucide-react';

const BottomUserRow = () => {
    const user = {
        name: 'Eren Y.',
        avatar: 'E',
        color: 'bg-gray-200 text-gray-700',
        revenue: '$117,115',
        sales: 22,
        leads: 84,
        kpi: 0.79,
        wlPercent: '32%',
        wlValue: 7,
        wlTotal: 15,
    };

    return (
        <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-4">
                {/* Avatar & Name */}
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-sm font-medium`}>
                        {user.avatar}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{user.name}</span>
                </div>

                {/* Revenue */}
                <div className="text-sm font-semibold text-gray-800">
                    {user.revenue}
                </div>

                {/* Sales */}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-sm font-semibold bg-primary-100 text-primary-700">
                    {user.sales}
                </span>

                {/* Leads */}
                <span className="text-sm text-gray-600">{user.leads}</span>

                {/* KPI */}
                <span className="text-sm text-gray-600">{user.kpi}</span>

                {/* W/L */}
                <span className="text-sm text-gray-800">{user.wlPercent}</span>

                <span className="inline-flex items-center justify-center w-6 h-6 rounded text-xs font-medium bg-amber-100 text-amber-700">
                    {user.wlValue}
                </span>

                <span className="text-sm text-gray-400">{user.wlTotal}</span>
            </div>
        </div>
    );
};

export default BottomUserRow;
