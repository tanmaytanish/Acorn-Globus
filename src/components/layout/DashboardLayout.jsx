import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#f5f4f2] overflow-hidden">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block flex-shrink-0">
                <Sidebar />
            </div>

            {/* Sidebar - Mobile Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/30"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="absolute left-0 top-0 h-full animate-slide-in">
                        <Sidebar />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto my-4 mx-4 p-5 bg-white rounded-3xl scrollbar-hide">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
