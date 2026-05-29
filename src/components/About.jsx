import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';

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
                            <h3 className="text-lg font-semibold text-white tracking-tight">The Stack and the Execution</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                                As a Computer Science Engineering graduate and Full Stack Developer, I don't just write scripts; I build robust digital infrastructure. My technical approach bridges scalable API architectures with highly interactive user interfaces.
                            </p>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                                Whether deploying backend features with Django and optimizing database indexing or engineering smooth, responsive frontends in React 19, I focus entirely on system efficiency, clean component architecture, and optimal user experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900/40">
                            {['Full-Stack Systems', 'API Optimization', 'UI/UX Performance', 'Database Engineering'].map((tag) => (
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
                                B.Tech
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">Computer Science</span>
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
                                100%
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">Component Driven</span>
                        </motion.div>
                    </div>

                    {/* Boxes 3, 4, 5: Horizontal Architecture Breakdowns */}
                    {[
                        {
                            icon: <Layout className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />,
                            title: "Frontend Layer",
                            desc: "Engineering highly performant dynamic rendering systems using React 19, custom hooks, and smooth layout systems like Framer Motion."
                        },
                        {
                            icon: <Cpu className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />,
                            title: "Backend Logic",
                            desc: "Building highly modular enterprise logic systems, secure custom JWT auth flows, and clean multi-tenant backend engines."
                        },
                        {
                            icon: <Database className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />,
                            title: "Data Optimization",
                            desc: "Designing structural data layouts, handling migrations smoothly, and executing precise cross-platform API queries."
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