import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TopHeader = () => {
    const [isTimeframeOn, setIsTimeframeOn] = useState(true);

    return (
        <>
            {/* Top User Pills Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
                <div className="w-full sm:w-auto flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1 truncate">
                    {/* Add User Button */}
                    <button className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors">
                        <span className="text-lg leading-none">+</span>
                    </button>

                    {/* User Pills */}
                    <div className="flex items-center gap-2">
                        <div className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-250 cursor-pointer group">
                            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                                <span className="text-amber-700 text-xs font-medium">A</span>
                            </div>
                            <span className="text-sm text-gray-700 font-medium">Armin A.</span>
                        </div>

                        <div className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-250 cursor-pointer group">
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                                <span className="text-gray-600 text-xs font-medium">E</span>
                            </div>
                            <span className="text-sm text-gray-700 font-medium">Eren Y.</span>
                        </div>

                        <div className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-250 cursor-pointer group">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                <span className="text-green-700 text-xs font-medium">M</span>
                            </div>
                            <span className="text-sm text-gray-700 font-medium">Mikasa A.</span>
                        </div>

                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-md">
                            <span className="text-white text-xs font-bold">C</span>
                        </div>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 self-end sm:self-auto">
                    <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-white hover:border-gray-300 hover:shadow-md transition-all active:scale-95 group">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="4" y1="8" x2="20" y2="8" strokeLinecap="round" />
                            <line x1="4" y1="16" x2="20" y2="16" strokeLinecap="round" />
                            <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
                            <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
                        </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-white hover:border-gray-300 hover:shadow-md transition-all active:scale-95 group">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 4v12m0 0l-4-4m4 4l4-4" />
                            <path d="M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
                        </svg>
                    </button>

                    <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-white hover:border-gray-300 hover:shadow-md transition-all active:scale-95 group">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 16V4m0 0l-4 4m4-4l4 4" />
                            <path d="M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Page Title & Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-400">New Report</h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div
                            onClick={() => setIsTimeframeOn(!isTimeframeOn)}
                            className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-200 ${isTimeframeOn ? 'bg-gray-900' : 'bg-gray-300'}`}
                        >
                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 ${isTimeframeOn ? 'left-[22px]' : 'left-0.5'}`}></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-800 font-medium">Timeframe</span>
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-all active:scale-95">
                        <span className="font-medium">Sep 1 - Nov 30, 2023</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default TopHeader;
