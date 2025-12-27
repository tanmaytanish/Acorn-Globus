import {
    ChevronDown, Plus, Settings, Bell
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState({
        dashboard: true,
        sharedWithMe: true,
        reports: true,
        shareWithMe: true,
        myReports: true,
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <aside className="w-[280px] h-screen bg-[#f5f4f2] flex overflow-hidden">
            {/* Left Icon Strip */}
            <div className="w-16 flex flex-col items-center py-5 bg-[#f5f4f2]">
                {/* Logo */}
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mb-8 cursor-pointer transition-transform hover:scale-110 active:scale-95 shadow-lg">
                    <span className="text-white font-bold text-lg">C</span>
                </div>

                {/* Icon Nav */}
                <div className="flex flex-col items-center gap-2">
                    {/* Globe/Network icon */}
                    <button className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary-100 hover:text-primary-500 hover:shadow-md transition-all duration-250 active:scale-95">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="8" cy="9" r="2" />
                            <circle cx="16" cy="9" r="2" />
                            <path d="M8 9 L12 6 L16 9" />
                            <circle cx="12" cy="16" r="2" />
                            <path d="M12 14 L12 11" />
                        </svg>
                    </button>

                    {/* Dashboard - Active (tB icon) */}
                    <button className="w-11 h-11 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-250">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M4 6 L4 18" strokeLinecap="round" />
                            <path d="M4 12 L10 12" strokeLinecap="round" />
                            <rect x="10" y="4" width="10" height="16" rx="2" fill="none" />
                            <path d="M14 9 L14 15" strokeLinecap="round" />
                            <path d="M14 9 L17 12 L14 15" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Document/Clipboard icon */}
                    <button className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary-100 hover:text-primary-500 hover:shadow-md transition-all duration-250 active:scale-95">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="6" y="4" width="12" height="16" rx="2" />
                            <path d="M9 8 L15 8" strokeLinecap="round" />
                            <path d="M9 12 L15 12" strokeLinecap="round" />
                            <path d="M9 16 L12 16" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* Command icon */}
                    <button className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-gray-300 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 8 L6 6 Q6 4 8 4 L9 4 Q11 4 11 6 L11 8 Q11 10 9 10 L8 10 Q6 10 6 8 Z" />
                            <path d="M18 8 L18 6 Q18 4 16 4 L15 4 Q13 4 13 6 L13 8 Q13 10 15 10 L16 10 Q18 10 18 8 Z" />
                            <path d="M6 16 L6 18 Q6 20 8 20 L9 20 Q11 20 11 18 L11 16 Q11 14 9 14 L8 14 Q6 14 6 16 Z" />
                            <path d="M18 16 L18 18 Q18 20 16 20 L15 20 Q13 20 13 18 L13 16 Q13 14 15 14 L16 14 Q18 14 18 16 Z" />
                            <path d="M11 10 L13 10 L13 14 L11 14 Z" fill="currentColor" />
                            <path d="M8 10 L8 14" />
                            <path d="M16 10 L16 14" />
                        </svg>
                    </button>

                    {/* Link/Chain icon */}
                    <button className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary-100 hover:text-primary-500 hover:shadow-md transition-all duration-250 active:scale-95">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 14 L8 14 Q4 14 4 10 Q4 6 8 6 L10 6" strokeLinecap="round" />
                            <path d="M14 10 L16 10 Q20 10 20 14 Q20 18 16 18 L14 18" strokeLinecap="round" />
                            <path d="M8 12 L16 12" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Bottom Icons */}
                <div className="mt-auto flex flex-col items-center gap-3">
                    <div className="relative group cursor-pointer transition-transform hover:scale-105 active:scale-95">
                        <div className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 group-hover:border-primary-100 group-hover:text-primary-500 transition-all duration-250 shadow-sm group-hover:shadow-md">
                            <Bell className="w-5 h-5" />
                        </div>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-primary-500 rounded-full border-2 border-white"></div>
                    </div>
                    <button className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary-100 hover:text-primary-500 hover:shadow-md transition-all duration-250 active:scale-95">
                        <Settings className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Main Nav Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="px-4 py-4 flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">Codename.com</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-1">
                    {/* Main Nav Items */}
                    <div className="space-y-0.5">
                        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-primary-600 hover:shadow-sm cursor-pointer transition-all duration-250 group">
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12,2 15,8.5 22,9.3 17,14 18.2,21 12,17.8 5.8,21 7,14 2,9.3 9,8.5" />
                            </svg>
                            <span className="text-[13px] font-medium">Starred</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-primary-600 hover:shadow-sm cursor-pointer transition-all duration-250 group">
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6 L12 12 L16 14" strokeLinecap="round" />
                            </svg>
                            <span className="text-[13px] font-medium">Recent</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-primary-600 hover:shadow-sm cursor-pointer transition-all duration-250 group">
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <path d="M8 10 L16 10" strokeLinecap="round" />
                                <path d="M8 14 L14 14" strokeLinecap="round" />
                            </svg>
                            <span className="text-[13px] font-medium">Sales list</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-primary-600 hover:shadow-sm cursor-pointer transition-all duration-250 group">
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="text-[13px] font-medium">Goals</span>
                        </div>
                    </div>

                    {/* Dashboard Section */}
                    <div className="mt-1">
                        <div
                            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer"
                            onClick={() => toggleSection('dashboard')}
                        >
                            <span className="text-[13px] font-medium text-gray-800">Dashboard</span>
                            <Plus className="w-3.5 h-3.5 ml-auto text-gray-400" />
                        </div>

                        {expandedSections.dashboard && (
                            <div className="ml-3 mt-1 space-y-0.5 border-l border-gray-200 pl-3">
                                <div className="flex items-center gap-2 px-2 py-1 text-gray-600 text-[13px] cursor-pointer hover:text-gray-800">
                                    <span>Codename</span>
                                </div>

                                {/* Shared with me */}
                                <div>
                                    <div
                                        className="flex items-center gap-2 px-2 py-1 text-gray-600 text-[13px] cursor-pointer hover:text-gray-800"
                                        onClick={() => toggleSection('sharedWithMe')}
                                    >
                                        <ChevronDown className={`w-3 h-3 transition-transform ${expandedSections.sharedWithMe ? '' : '-rotate-90'}`} />
                                        <span>Shared with me</span>
                                    </div>

                                    {expandedSections.sharedWithMe && (
                                        <div className="ml-5 space-y-0.5 mt-0.5">
                                            <div className="px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">Cargo2go</div>
                                            <div className="px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700 flex items-center justify-between">
                                                <span>Cloud3r</span>
                                                <span className="bg-primary-100 text-primary-600 text-[10px] px-1.5 py-0.5 rounded-full font-medium">2</span>
                                            </div>
                                            <div className="px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">Idioma</div>
                                            <div className="px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">Syllables</div>
                                            <div className="px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">x-0b</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Reports Section */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between px-2 py-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                            <span>Reports</span>
                            <Plus className="w-3 h-3 cursor-pointer hover:text-gray-600" />
                        </div>

                        <div className="space-y-0.5 mt-1">
                            {/* Share with me */}
                            <div>
                                <div
                                    className="flex items-center gap-2 px-2 py-1 text-gray-600 text-[13px] cursor-pointer hover:text-gray-800"
                                    onClick={() => toggleSection('shareWithMe')}
                                >
                                    <ChevronDown className={`w-3 h-3 transition-transform ${expandedSections.shareWithMe ? '' : '-rotate-90'}`} />
                                    <span>Share with me</span>
                                </div>

                                {expandedSections.shareWithMe && (
                                    <div className="ml-5 space-y-0.5 mt-0.5">
                                        <div className="flex items-center gap-2 px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">
                                            <span>Deals by user</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">
                                            <span>Deal duration</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* My reports */}
                            <div>
                                <div
                                    className="flex items-center gap-2 px-2 py-1 text-gray-600 text-[13px] cursor-pointer hover:text-gray-800"
                                    onClick={() => toggleSection('myReports')}
                                >
                                    <ChevronDown className={`w-3 h-3 transition-transform ${expandedSections.myReports ? '' : '-rotate-90'}`} />
                                    <span className="font-medium">My reports</span>
                                </div>

                                {expandedSections.myReports && (
                                    <div className="ml-5 space-y-0.5 mt-0.5">
                                        <div className="flex items-center gap-2 px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">
                                            <span>Emails received</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700">
                                            <span>Deal duration</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1 text-primary-500 text-[12px] cursor-pointer font-medium">
                                            <span>New report</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1 text-gray-500 text-[12px] cursor-pointer hover:text-gray-700 justify-between">
                                            <span>Analytics</span>
                                            <span className="bg-amber-100 text-amber-600 text-[10px] px-1.5 py-0.5 rounded-full font-medium">7</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Manage Folders */}
                    <div className="mt-4 px-2">
                        <button className="flex items-center gap-2 text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
                            <Settings className="w-3.5 h-3.5" />
                            <span>Manage folders</span>
                        </button>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
