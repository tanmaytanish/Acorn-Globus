import { Flame } from 'lucide-react';

const ActionTabs = () => {
    return (
        <div className="flex items-center gap-3">
            {/* Top Sales */}
            <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:border-gray-300 hover:shadow-sm hover:bg-white transition-all active:scale-95 group">
                Top sales <span className="group-hover:scale-125 transition-transform origin-bottom">👑</span>
            </button>

            {/* Sales Streak */}
            <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:border-gray-300 hover:shadow-sm hover:bg-white transition-all active:scale-95 group">
                Sales streak <span className="group-hover:scale-125 transition-transform origin-bottom">🔥</span>
            </button>

            {/* Top Review */}
            <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:border-gray-300 hover:shadow-sm hover:bg-white transition-all active:scale-95 group">
                Top review <span className="group-hover:scale-125 transition-transform origin-bottom">⭐</span>
            </button>
        </div>
    );
};

export default ActionTabs;
