import React from 'react';
import { Terminal, Shield, ArrowUp, Orbit } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full border-t border-slate-900/60 bg-gradient-to-b from-transparent to-slate-950/30 backdrop-blur-sm px-6 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10">

                {/* Top Operational Map Grid Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-900/40 pb-8">

                    {/* Identity & Core Status Block */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-tight text-white">Shiba Murmu</span>
                            <span className="text-[10px] font-mono text-slate-600">/ v1.0.0-stable</span>
                        </div>
                        <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
                            Software engineer specializing in building high-fidelity web architectures and secure full-stack systems.
                        </p>
                    </div>

                    {/* Technical Diagnostics / Parameters Panel */}
                    <div className="grid grid-cols-2 sm:flex items-center gap-x-8 gap-y-4 font-mono text-[10px] text-slate-500">
                        <div>
                            <p className="text-slate-600 uppercase tracking-wider mb-0.5">Location Index</p>
                            <p className="text-slate-400 font-light">Jamshedpur, IN</p>
                        </div>
                        <div>
                            <p className="text-slate-600 uppercase tracking-wider mb-0.5">Environment</p>
                            <p className="text-slate-400 font-light">Production VM</p>
                        </div>
                        <div>
                            <p className="text-slate-600 uppercase tracking-wider mb-0.5">Status Check</p>
                            <p className="text-emerald-500/80 font-medium">Fully Operational</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Utility Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-slate-500 font-mono">

                    {/* Legal / Compilation Metadata Block */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 order-2 sm:order-1 text-center sm:text-left">
                        <span>© {currentYear} System Node. All rights reserved.</span>
                        <span className="hidden sm:inline text-slate-800">|</span>
                        <div className="flex items-center gap-1.5 text-slate-600">
                            <Shield className="w-3 h-3" />
                            <span>Compiled via React & Tailwind v4</span>
                        </div>
                    </div>

                    {/* Social Routing Indices + Return To Top Core Trigger */}
                    <div className="flex items-center gap-6 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-end">

                        {/* Minimal Icon Core Cluster */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-500 hover:text-white transition-colors duration-200"
                            >
                                <FaGithub className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-500 hover:text-white transition-colors duration-200"
                            >
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Premium Return Anchor Element */}
                        <button
                            onClick={scrollToTop}
                            className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-slate-400 hover:text-white bg-slate-950/60 border border-slate-900 rounded-md hover:border-slate-800 transition-all duration-200 shadow-sm"
                        >
                            <span>Return to Top</span>
                            <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </button>

                    </div>

                </div>

            </div>

            {/* Decorative Blueprint Accent Ring */}
            <div className="absolute -bottom-12 -left-12 opacity-[0.02] pointer-events-none">
                <Orbit className="w-48 h-48 text-slate-400 animate-[spin_40s_linear_infinite]" />
            </div>
        </footer>
    );
}