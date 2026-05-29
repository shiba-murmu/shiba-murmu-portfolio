import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
    { name: 'Showcase', href: '#projects' },
    { name: 'Architecture', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Create a DOM anchor reference to detect clicks outside the entire component
    const navRef = useRef(null);

    // Monitor document clicks to auto-close the mobile drawer
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the mobile drawer is open AND the user clicks outside the navRef boundaries
            if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Attach global click event handler
        document.addEventListener('mousedown', handleClickOutside);

        // Unbind the event when component destroys to prevent performance leaks
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        const targetElement = document.querySelector(href);
        if (targetElement) {
            if (window.lenis) {
                window.lenis.scrollTo(targetElement, {
                    offset: 0,
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            } else {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        // 1. Attached the navRef here to wrap both desktop navigation bar and the mobile drawer together
        <header ref={navRef} className="fixed top-0 left-0 w-full z-50 border-b border-slate-900/40 bg-gray-950/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto w-full px-6 h-16 flex items-center justify-between">

                {/* Brand / Logo */}
                <a href="#" onClick={(e) => handleScroll(e, '#root')} className="flex items-center gap-2 font-semibold text-xs tracking-widest text-white uppercase group font-mono">
                    <Terminal className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span>Murmu<span className="text-cyan-400">.</span>IO</span>
                </a>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-full border border-slate-900/60">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative px-4 py-1.5 text-[11px] font-mono tracking-wide text-slate-400 hover:text-white transition-colors duration-300"
                        >
                            {hoveredIndex === idx && (
                                <motion.span
                                    layoutId="navHoverBg"
                                    className="absolute inset-0 bg-slate-900/60 rounded-full -z-10 border border-slate-800/40"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="group inline-flex items-center justify-center h-9 px-4 text-[11px] font-mono font-medium text-gray-950 bg-white hover:bg-cyan-400 rounded-lg shadow-sm transition-colors duration-300 select-none"
                    >
                        Initiate Project
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
            </div>

            {/* Mobile Menu Drawer Layout */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-16 left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-slate-900/80 px-6 py-8 flex flex-col gap-5 md:hidden z-40"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="px-3 py-2 text-xs font-mono tracking-wide text-slate-400 hover:text-white hover:bg-slate-900/40 rounded-lg transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="w-full h-[1px] bg-slate-900/60" />

                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, '#contact')}
                            className="w-full text-center py-2.5 text-xs font-mono font-medium text-gray-950 bg-white rounded-lg hover:bg-cyan-400 transition-colors"
                        >
                            Initiate Project
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}