const UserRow = ({ name, initial, bgColor, textColor, revenue, leads, kpi, wl }) => {
    return (
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
            <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center`}>
                <span className={`${textColor} text-sm font-medium`}>{initial}</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{name}</span>
            <span className="text-sm font-medium text-gray-800">{revenue}</span>
            <span className={`w-5 h-5 rounded-full ${leads.countBg} text-white text-[9px] flex items-center justify-center font-medium`}>
                {leads.count}
            </span>
            <span className="text-sm text-gray-600">{leads.total}</span>
            <span className="text-sm text-gray-600 ml-2">{kpi}</span>
            <span className="text-sm text-gray-600 ml-2">{wl.percent}</span>
            <span className={`w-5 h-5 rounded-full ${wl.countBg} text-white text-[9px] flex items-center justify-center font-medium`}>
                {wl.count}
            </span>
            <span className="text-sm text-gray-600">{wl.total}</span>
        </div>
    );
};

// Default export with Eren's data
const ErenRow = () => {
    return (
        <UserRow
            name="Eren Y."
            initial="E"
            bgColor="bg-gray-200"
            textColor="text-gray-600"
            revenue="$117,115"
            leads={{ count: 22, total: 84, countBg: 'bg-gray-800' }}
            kpi="0.79"
            wl={{ percent: '32%', count: 7, total: 15, countBg: 'bg-primary-500' }}
        />
    );
};

export default ErenRow;
export { UserRow };
