import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Mail, Terminal, FileDown } from 'lucide-react';
import PortraitImg from '../assets/images/profile/profile.webp';
import portfolioData from '../constants/Data';
const fader = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Hero() {
    // 1. Hook into scroll position for real-time scroll mechanics
    const { scrollY } = useScroll();

    // 2. Parallax Only: Map scroll distances to positions (Removed complete fade-out to fix UI layout gaps)
    const textY = useTransform(scrollY, [0, 800], [0, 100]);
    const imageY = useTransform(scrollY, [0, 800], [0, 160]);
    const imageScale = useTransform(scrollY, [0, 800], [1, 0.95]);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement && window.lenis) {
            window.lenis.scrollTo(targetElement, {
                offset: 0,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Content Column (With dynamic scroll parallax) */}
                <motion.div
                    className="md:col-span-7 space-y-6 text-center md:text-left"
                    style={{ y: textY }}
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: { transition: { staggerChildren: 0.12 } }
                    }}
                >
                    {/* Identity System Tag */}
                    <motion.div
                        variants={fader}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full mx-auto md:mx-0"
                    >
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Engineer: {portfolioData.heroData.name}</span>
                    </motion.div>

                    <motion.h1
                        variants={fader}
                        className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-[1.1]"
                    >
                        {/* Here headlines of the user , will be displayed */}
                        Crafting seamless <span className="text-cyan-400">digital products</span> & robust backends.
                        {/* half of the text will be in color form */}
                    </motion.h1>

                    <motion.p
                        variants={fader}
                        className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0 font-light"
                    >
                        {portfolioData.heroData.description}
                    </motion.p>

                    {/* Action Row */}
                    <motion.div
                        variants={fader}
                        className="flex flex-col sm:flex-row flex-wrap items-center gap-3 pt-2 justify-center md:justify-start"
                    >
                        {/* Primary Action */}
                        <a
                            href="#projects"
                            onClick={(e) => handleScroll(e, '#projects')}
                            className="group h-11 px-5 flex items-center justify-center gap-2 bg-white text-gray-950 rounded-lg text-xs font-semibold hover:bg-cyan-400 transition-colors duration-300 w-full sm:w-auto shadow-sm"
                        >
                            <Briefcase className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                            View My Work
                        </a>

                        {/* Resume Download Button */}
                        <a
                            href={portfolioData.heroData.resumeLink}
                            download="Shiba_Murmu_Resume.pdf"
                            className="group h-11 px-5 flex items-center justify-center gap-2 bg-slate-950/40 border border-slate-900 text-slate-300 rounded-lg text-xs font-medium hover:border-slate-700 hover:text-white backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                        >
                            <FileDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
                            Download Resume
                        </a>

                        {/* Secondary Link */}
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, '#contact')}
                            className="h-11 px-5 flex items-center justify-center gap-2 border border-slate-900/60 text-slate-400 rounded-lg text-xs font-medium hover:border-slate-700 hover:text-white transition-colors duration-300 w-full sm:w-auto"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content Column (Photo Card with independent parallax weight) */}
                <motion.div
                    className="md:col-span-5 flex justify-center md:justify-end"
                    style={{ y: imageY, scale: imageScale }}
                    initial={{ opacity: 0, scale: 0.92, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative">
                        <div className="relative p-2.5 bg-slate-900/40 backdrop-blur-md border border-slate-900 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={portfolioData.heroData.image}
                                alt="Developer Portrait"
                                className="rounded-2xl object-cover w-full max-w-[300px] aspect-[4/5] filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}