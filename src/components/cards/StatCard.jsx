import { TrendingUp, TrendingDown, Star } from 'lucide-react';

const StatCard = ({
    title,
    value,
    subtitle,
    change,
    changeType = 'positive',
    highlight = false,
    icon,
    user,
    compact = false
}) => {
    const isPositive = changeType === 'positive';

    return (
        <div className={`
      stat-card relative overflow-hidden
      ${highlight ? 'bg-primary-50 border-primary-200' : 'bg-white border-gray-100'}
      ${compact ? 'p-3' : 'p-4'}
    `}>
            {/* Header */}
            {title && (
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {title}
                    </span>
                    {icon && (
                        <span className="text-gray-400">{icon}</span>
                    )}
                </div>
            )}

            {/* Main Value */}
            <div className="flex items-baseline gap-2">
                <span className={`
          font-semibold text-gray-900
          ${compact ? 'text-xl' : 'text-2xl'}
        `}>
                    {value}
                </span>

                {change && (
                    <div className={`
            flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded
            ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}
          `}>
                        {isPositive ? (
                            <TrendingUp className="w-3 h-3" />
                        ) : (
                            <TrendingDown className="w-3 h-3" />
                        )}
                        <span>{change}</span>
                    </div>
                )}
            </div>

            {/* User Info */}
            {user && (
                <div className="flex items-center gap-2 mt-2">
                    <div className={`w-6 h-6 rounded-full ${user.color} flex items-center justify-center text-xs font-medium`}>
                        {user.initials}
                    </div>
                    <span className="text-sm text-gray-600">{user.name}</span>
                    {user.starred && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                </div>
            )}

            {/* Subtitle */}
            {subtitle && (
                <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
        </div>
    );
};

export default StatCard;
