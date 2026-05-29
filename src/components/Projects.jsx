import React from 'react';
import { motion } from 'framer-motion';
// 1. Remove Github from here
import { Terminal, ArrowUpRight, FolderGit2, Layers, CheckCircle2 } from 'lucide-react';
// 2. Import a rock-solid brand icon from Font Awesome 6 instead
import { FaGithub } from 'react-icons/fa6';

const fadeInVariant = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const projectData = [
    {
        title: "AI Coding Platform Core",
        type: "Intelligent Assistant Infrastructure",
        description: "Architected a contextual AI coding assistant engine optimized for fast code generation. Replaced restricted platform bots with a unified local terminal token workflow to handle multiple workspaces smoothly.",
        metrics: ["Token Latency Reduced by 40%", "Context Window Optimization"],
        tags: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "LLM APIs"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        title: "Enterprise Career Development Hub",
        type: "Full-Stack Resource Platform",
        description: "Designed a secure career management portal featuring multi-tier user workflows. Built a responsive frontend connected to a robust data engine, utilizing strict token access systems to protect user records.",
        metrics: ["Secure State Management", "JWT Session Management"],
        tags: ["React Core", "Django REST Framework", "JWT Auth Engine", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* Section Header */}
                <motion.div
                    className="space-y-3 mb-20 text-center md:text-left"
                    {...fadeInVariant}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/30 border border-slate-900 backdrop-blur-sm rounded-full">
                        <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Selected Work</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        Production Showcase
                    </h2>
                </motion.div>

                {/* Large Asymmetrical Layout Stack */}
                <div className="space-y-24">
                    {projectData.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={project.title}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                                {...fadeInVariant}
                            >

                                {/* Text Context Block */}
                                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="space-y-2">
                                        <p className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
                                            {project.type}
                                        </p>
                                        <h3 className="text-2xl font-bold tracking-tight text-white">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    {/* System Architecture Metrics */}
                                    <div className="space-y-2.5 pt-2">
                                        {project.metrics.map((metric) => (
                                            <div key={metric} className="flex items-center gap-2 text-xs text-slate-300">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />
                                                <span className="font-light">{metric}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Micro Tech Pill Badges */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-[10px] font-mono text-slate-400 bg-slate-950/30 border border-slate-900 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Link Row */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group inline-flex items-center justify-center gap-1.5 h-10 px-4 bg-white text-gray-950 text-xs font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-300 shadow-sm"
                                        >
                                            Launch Application
                                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 h-10 px-4 border border-slate-800 text-slate-400 text-xs font-medium rounded-lg hover:border-slate-600 hover:text-white transition-colors duration-200"
                                        >
                                            {/* 3. Swap the component here to FaGithub */}
                                            <FaGithub className="w-3.5 h-3.5" />
                                            View Source
                                        </a>
                                    </div>
                                </div>

                                {/* Minimalist Visual Preview Block */}
                                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="relative group overflow-hidden rounded-2xl border border-slate-900/60 bg-gradient-to-b from-slate-950/20 to-slate-950/5 backdrop-blur-sm p-4 sm:p-6 transition-all duration-500 hover:border-slate-800/60">
                                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-900 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
                                            <div className="text-center space-y-2 p-6 z-10">
                                                <div className="w-10 h-10 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center mx-auto shadow-inner">
                                                    <Layers className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                                </div>
                                                <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Deployment Canvas</p>
                                                <p className="text-xs text-slate-400 font-light max-w-[200px] mx-auto">
                                                    [ Load web application snapshot context here ]
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}