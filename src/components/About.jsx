import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';

const fadeInVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function About() {
    return (
        <section id="about" className="relative py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header */}
                <motion.div
                    className="space-y-3 mb-14 text-center md:text-left"
                    {...fadeInVariant}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full">
                        <Terminal className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">System Profile</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Engineering Philosophy
                    </h2>
                </motion.div>

                {/* Bento-Style Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Box 1: Core Narrative */}
                    <motion.div
                        className="md:col-span-8 p-8 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 hover:border-slate-800/40 transition-colors duration-300 flex flex-col justify-between space-y-6"
                        {...fadeInVariant}
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
                                <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900/40 text-slate-400 border border-slate-900/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Box 2: Metrics / Quick Stats */}
                    <motion.div
                        className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4"
                        {...fadeInVariant}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="p-6 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 flex flex-col justify-center items-center text-center group hover:border-slate-800/40 transition-all duration-300">
                            <span className="text-3xl font-extrabold text-slate-200">
                                B.Tech
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">Computer Science</span>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 flex flex-col justify-center items-center text-center group hover:border-slate-800/40 transition-all duration-300">
                            <span className="text-3xl font-extrabold text-slate-200">
                                100%
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">Component Driven</span>
                        </div>
                    </motion.div>

                    {/* Box 3, 4, 5: Horizontal Architecture Breakdowns */}
                    {[
                        {
                            icon: <Layout className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />,
                            title: "Frontend Layer",
                            desc: "Engineering highly performant dynamic rendering systems using React 19, custom hooks, and smooth layout systems like Framer Motion."
                        },
                        {
                            icon: <Cpu className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />,
                            title: "Backend Logic",
                            desc: "Building highly modular enterprise logic systems, secure custom JWT auth flows, and clean multi-tenant backend engines."
                        },
                        {
                            icon: <Database className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />,
                            title: "Data Optimization",
                            desc: "Designing structural data layouts, handling migrations smoothly, and executing precise cross-platform API queries."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className="md:col-span-4 p-6 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-900/60 hover:border-slate-800/40 transition-all duration-300 group flex flex-col justify-between space-y-4"
                            {...fadeInVariant}
                            transition={{ delay: 0.1 * idx }}
                        >
                            <div className="space-y-3">
                                <div className="w-9 h-9 rounded-xl bg-slate-900/30 border border-slate-900/60 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-sm font-semibold text-slate-200 tracking-tight">{item.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}