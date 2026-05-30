import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';
import portfolioData from '../constants/Data';

// 1. Hardware-accelerated bezier curves optimized for performance and smooth scroll layers
const headerVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    whileInView: (delay) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: delay
        }
    })
};

export default function About() {
    return (
        <section id="about" className="relative py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Animated Section Header Unit */}
                <motion.div
                    className="space-y-3 mb-14 text-center md:text-left"
                    variants={headerVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full">
                        <Terminal className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">System Profile</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Engineering Philosophy
                    </h2>
                </motion.div>

                {/* High-Fidelity Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Box 1: Core Narrative Block */}
                    <motion.div
                        className="md:col-span-8 p-8 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 flex flex-col justify-between space-y-6 shadow-sm"
                        variants={cardVariants}
                        custom={0} // Enters first with no layout blocking delay
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-80px" }}
                        whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.12)" }}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white tracking-tight">{portfolioData.aboutSectionData.cardOne.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                                {portfolioData.aboutSectionData.cardOne.d1}
                            </p>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                                {portfolioData.aboutSectionData.cardOne.d2}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900/40">
                            {/* Tag Chips */}
                            {portfolioData.aboutSectionData.aboutHiglight_stack.map((tag) => (
                                <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900/40 text-slate-400 border border-slate-900/50 hover:text-white hover:border-slate-800 transition-colors duration-200 cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Box 2: Metrics / Quick Stats Layout */}
                    <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
                        {/* Stat Card 1 */}
                        <motion.div
                            className="p-6 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 flex flex-col justify-center items-center text-center group"
                            variants={cardVariants}
                            custom={0.1} // Sequenced slight stagger cascade injection
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: "-80px" }}
                            whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.12)" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                        >
                            <span className="text-3xl font-extrabold text-slate-200 transition-colors group-hover:text-cyan-400 duration-300">
                                {portfolioData.aboutSectionData.cardTwo.course}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">{portfolioData.aboutSectionData.cardTwo.title}</span>
                        </motion.div>

                        {/* Stat Card 2 */}
                        <motion.div
                            className="p-6 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 flex flex-col justify-center items-center text-center group"
                            variants={cardVariants}
                            custom={0.15} // Cascades directly behind the first stats module
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: "-80px" }}
                            whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.12)" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                        >
                            <span className="text-3xl font-extrabold text-slate-200 transition-colors group-hover:text-cyan-400 duration-300">
                                {portfolioData.aboutSectionData.cardThree.text}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">{portfolioData.aboutSectionData.cardThree.title}</span>
                        </motion.div>
                    </div>

                    {/* Boxes 3, 4, 5: Horizontal Architecture Breakdowns */}
                    {[
                        {
                            icon: <Layout className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />,
                            title: portfolioData.aboutSectionData.cardFour.title,
                            desc: portfolioData.aboutSectionData.cardFour.des
                        },
                        {
                            icon: <Cpu className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />,
                            title: portfolioData.aboutSectionData.cardFive.title,
                            desc: portfolioData.aboutSectionData.cardFive.des
                        },
                        {
                            icon: <Database className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />,
                            title: portfolioData.aboutSectionData.cardSix.title,
                            desc: portfolioData.aboutSectionData.cardSix.des
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className="md:col-span-4 p-6 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 group flex flex-col justify-between space-y-4 shadow-sm"
                            variants={cardVariants}
                            custom={0.1 * idx + 0.2} // Calculated horizontal wave sequence matching the base layer grid
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: "-80px" }}
                            whileHover={{ y: -5, borderColor: "rgba(34, 211, 238, 0.25)" }} // Cybernetic cyan highlight on card hover
                            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
                        >
                            <div className="space-y-3">
                                <div className="w-9 h-9 rounded-xl bg-slate-900/30 border border-slate-900/60 flex items-center justify-center transition-all group-hover:border-slate-800 shadow-inner">
                                    {item.icon}
                                </div>
                                <h4 className="text-sm font-semibold text-slate-200 tracking-tight transition-colors group-hover:text-white duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}