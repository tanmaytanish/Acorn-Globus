import React from 'react';
import { Layout, ArrowRight, BarChart3, Shield, Zap, Globe } from 'lucide-react';

const LandingPage = ({ onOpenDashboard }) => {
    return (
        <div className="min-h-screen mesh-gradient overflow-hidden flex flex-col items-center justify-center p-6 relative">
            {/* Background Blobs */}
            <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-[120px]"></div>

            {/* Navigation */}
            <nav className="absolute top-0 w-full max-w-7xl flex items-center justify-between p-8 animate-fade-in z-20">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900 border-b-2 border-transparent group-hover:border-black transition-all">Acorn Globus</span>
                </div>

            </nav>

            {/* Hero Content */}
            <main className="max-w-4xl text-center z-10 animate-slide-up px-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 border border-white/50 rounded-full text-xs font-semibold text-primary-600 mb-8 backdrop-blur-md shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
                    Experience the Future of Data Analytics
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    Assignment Submitted By <br />
                    <span className="text-gradient">Tanish Tanmay Sahoo</span>
                </h1>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onOpenDashboard}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
                    >
                        <span className="relative z-10">Launch Dashboard</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>


                </div>


            </main>

            {/* Footer Signature */}
            <footer className="absolute bottom-8 flex flex-col items-center gap-1 text-sm text-gray-400 font-medium tracking-wide animate-fade-in">
                <p className="text-gray-500 font-bold">Created by Tanish Tanmay Sahoo</p>
            </footer>
        </div>
    );
};

export default LandingPage;
